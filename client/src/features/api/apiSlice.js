import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { createSlice, createAction } from "@reduxjs/toolkit";
const userId = JSON.parse(localStorage.getItem("user"))._id;
let ws = new WebSocket(`ws://192.168.1.153:8080/${userId}`);

export const updateWebSocketReadyState = createAction(
  "api/updateWebSocketReadyState"
);

export const apiSlice = createApi({
  reducerPath: "api",

  baseQuery: fetchBaseQuery({
    baseUrl: "/api",
    //prepare headers
  }),

  tagTypes: ["CurrentUser", "Posts"],
  endpoints: (builder) => ({
    getNotifications: builder.query({
      query: (userId) => ({
        url: `/notifications/get-notifications?userId=${userId}`,
        method: "GET",
      }),
      async onCacheEntryAdded(
        userId,
        { updateCachedData, cacheDataLoaded, cacheEntryRemoved, dispatch }
      ) {
        ws.addEventListener("open", (e) => {
          console.log(e);
          console.log("web socket opened");
        });
        ws.addEventListener("message", (e) => {
          const message = JSON.parse(e.data);
          console.log(message);
          switch (message.type) {
            case "notification": {
              updateCachedData((draft) => {
                draft.notifications.push(message.content);
              });
              break;
            }
            default:
              break;
          }
        });
        try {
          await cacheDataLoaded;
        } catch (error) {}
        await cacheEntryRemoved;
      },
    }),
    createNotification: builder.mutation({
      query: ({ notification, userId }) => ({
        url: "/notifications/create-notification",
        method: "POST",
        body: notification,
      }),
      async onQueryStarted(
        { userId, notification },
        { dispatch, queryFulfilled }
      ) {
        ws.send(
          JSON.stringify({
            type: "notification",
            content: { ...notification },
          })
        );
        try {
          await queryFulfilled;
        } catch (error) {
          // patchResult.undo();
        }
      },
    }),
    getChats: builder.query({
      query: (userId) => ({
        url: `/chats/get-chats?userId=${userId}`,
        method: "GET",
      }),
      async onCacheEntryAdded(
        userId,
        { dispatch, updateCachedData, cacheDataLoaded, cacheEntryRemoved }
      ) {
        ws.addEventListener("message", (e) => {
          const data = JSON.parse(e.data);
          switch (data.type) {
            case "chat":
              {
                const sender = data.content.message.sender;
                const recipient = data.content.message.recipient;

                updateCachedData((draft) => {
                  const existingChatId = draft.chats.map((chat) => {
                    const draftParicipantIds = [];
                    draftParicipantIds.push(
                      chat.participants.user.participantId
                    );
                    draftParicipantIds.push(
                      chat.participants.friend.participantId
                    );
                    if (
                      draftParicipantIds.includes(sender) &&
                      draftParicipantIds.includes(recipient)
                    ) {
                      return chat._id;
                    }
                  })[0];

                  if (existingChatId) {
                    const chatIds = draft.chats.map((chat) => chat._id);
                    const chatIndex = chatIds.indexOf(existingChatId);
                    draft.chats[chatIndex].messages.push(data.content.message);
                  } else {
                    draft.chats.push(data.content);
                  }
                });
              }
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
      transformResponse: (responseData) => {
        let normParticipants = {};
        let newResponseData = {};
        responseData.chats.map((res) => {
          newResponseData[res._id] = res;
          res.participants.map((p) => {
            if (p.participantId == userId) {
              normParticipants.user = { ...p };
            } else {
              normParticipants.friend = { ...p };
            }
          });
          res.participants = normParticipants;
        });
        newResponseData.participants = normParticipants;

        return responseData;
      },
    }),
    createChat: builder.mutation({
      query: (newChat) => ({
        url: "/chats/create-chat",
        method: "POST",
        body: newChat,
      }),
      async onQueryStarted(newChat, { dispatch, queryFulfilled }) {
        ws.send(JSON.stringify({ type: "chat", content: newChat }));

        try {
          await queryFulfilled;
        } catch (error) {
          // patchResult.undo();
        }
      },
    }),
    updateWebSocketReadyState: builder.mutation({
      query: (undefined) => ({
        url: "",
      }),
      async onQueryStarted(undefined, { dispatch }) {
        dispatch(updateWebSocketReadyState(ws.readyState));

        if (ws.readyState == 0 || ws.readyState == 3) {
          ws = new WebSocket(`ws://192.168.1.153:8080/${userId}`);
        }
      },
    }),
    registerUser: builder.mutation({
      query: (newUser) => ({
        url: "/auth/register",
        method: "POST",
        body: newUser,
      }),
    }),
    loginUser: builder.mutation({
      query: ({ email, password }) => ({
        url: "/auth/login",
        method: "Post",
        body: { email, password },
      }),
    }),
    refreshUserCredentials: builder.query({
      query: (userId) => ({
        url: `/users/single-profile?userId=${userId}`,
        method: "GET",
      }),
      providesTags: ["CurrentUser"],
    }),
  }),
});

export const {
  useRegisterUserMutation,
  useLoginUserMutation,
  useRefreshUserCredentialsQuery,
  useGetNotificationsQuery,
  useCreateNotificationMutation,
  useGetChatsQuery,
  useCreateChatMutation,
  useUpdateWebSocketReadyStateMutation,
} = apiSlice;
