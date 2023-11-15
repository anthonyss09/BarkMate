import { apiSlice } from "../api/apiSlice";
import {
  createSlice,
  createAction,
  createEntityAdapter,
} from "@reduxjs/toolkit";
import { socket } from "../../sockets/socketIo";

const user = JSON.parse(localStorage.getItem("user"));
const userId = user ? user._id : null;

export const friendRequest = createAction("/friends/friendRequest");

const notificationsAdapter = createEntityAdapter({
  selectId: (notification) => notification._id,
});

export const notificationsSlice = createSlice({
  name: "notifications",
  initialState: notificationsAdapter.getInitialState(),
});

export const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getNotifications: builder.query({
      query: ({ userId, limit }) => ({
        url: `/notifications/get-notifications?userId=${userId}&limit=${limit}`,
        method: "GET",
      }),
      invalidatesTags: (result, error, arg) =>
        result
          ? [
              ...Object.values(result).map(({ _id }) => ({
                type: "Notification",
                _id,
              })),
              "Notification",
            ]
          : ["Notification"],
      async onCacheEntryAdded(
        userId,
        { updateCachedData, cacheDataLoaded, cacheEntryRemoved, dispatch }
      ) {
        socket.connect({ test: "some data" });

        socket.on("message", (message) => {
          // console.log("the message is", message);
          switch (message.type) {
            case "notification": {
              updateCachedData((draft) => {
                if (message.content.notificationType === "friendRequest") {
                  console.log("recieved a friend request from websocket");
                  dispatch(friendRequest);
                }
                //add notification to normalized cached notification data
                draft[message.content._id] = message.content;
              });
              break;
            }
            case "markNotificationsRead":
              updateCachedData((draft) => {
                Object.values(draft).map(
                  (notification) => (notification.is_read = true)
                );
              });

              break;
            case "markNotificationViewed":
              updateCachedData((draft) => {
                draft[message.content.notificationId].is_viewed = true;
              });
              break;
            default:
              break;
          }
        });
        try {
          await cacheDataLoaded;
        } catch (error) {}
        await cacheEntryRemoved;
      },
      //normalize notification data upon retrieval
      transformResponse(responseData) {
        const newResponseData = {};
        responseData.notifications.map(
          (notification) => (newResponseData[notification._id] = notification)
        );
        return newResponseData;
      },
    }),

    createNotification: builder.mutation({
      query: (notification) => ({
        url: "/notifications/create-notification",
        method: "POST",
        body: notification,
      }),
      invalidatesTags: ["Notification"],
      async onQueryStarted(notification, { dispatch, queryFulfilled }) {
        socket.emit("message", {
          type: "notification",
          content: { ...notification },
        });
        try {
          await queryFulfilled;
        } catch (error) {
          // patchResult.undo();
        }
      },
    }),

    markAllNotificationsRead: builder.mutation({
      query: (userId) => ({
        url: "/notifications/mark-notifications-read",
        method: "POST",
      }),
      invalidatesTags: ["Notification"],
      async onQueryStarted({ dispatch, queryFulfilled }) {
        socket.emit("message", {
          type: "markNotificationsRead",
          content: { recipient: userId },
        });
      },
    }),

    markNotificationViewed: builder.mutation({
      query: ({ userId, notificationId }) => ({
        url: "notifications/mark-notification-viewed",
        method: "POST",
        body: { notificationId },
      }),
      invalidatesTags: ["Nofification"],
      async onQueryStarted(
        { userId, notificationId },
        { dispatch, queryFulfilled }
      ) {
        socket.emit("message", {
          type: "markNotificationViewed",
          content: { userId, notificationId },
        });
      },
    }),

    editAllNotificationsByUser: builder.mutation({
      query: ({ userId, update }) => ({
        url: "/notifications/edit-all-notifications-by-user",
        method: "POST",
        body: { userId, update },
      }),
    }),
  }),
});

export const {
  selectAll: selectAllNotifications,
  selectById: selectNotificationById,
} = notificationsAdapter.getSelectors((state) => state.notifications);

// export const {} = notificationsSlice.actions;

export const {
  useMarkAllNotificationsReadMutation,
  useMarkNotificationViewedMutation,
  useGetNotificationsQuery,
  useCreateNotificationMutation,
  useEditAllNotificationsByUserMutation,
} = extendedApiSlice;

export default notificationsSlice.reducer;
