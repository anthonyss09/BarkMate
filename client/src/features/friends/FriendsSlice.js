import { apiSlice } from "../api/apiSlice";
import { createSlice } from "@reduxjs/toolkit";
import { socket } from "../../sockets/socketIo";

const user = JSON.parse(localStorage.getItem("user"));
const userId = user ? user._id : null;

export const friendsSlice = createSlice({
  name: "friends",
  initialState: {},
  reducers: {},
});

export const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getFriends: builder.query({
      query: (userId) => ({
        url: `/friends/get-friends?userId=` + userId,
      }),
      providesTags: (result, error, arg) =>
        result
          ? [
              ...Object.values(result).map(({ _id }) => ({
                type: "Friend",
                _id,
              })),
              "Friend",
            ]
          : ["Friend"],

      async onCacheEntryAdded(friendIds, { updateCachedData }) {
        console.log("friends fetched");

        socket.on("message", (message) => {
          switch (message.type) {
            case "friendRequest":
              {
                console.log("update friends");
                console.log(message);
                const friend = message.content.participants.filter(
                  (participant) => participant.participantId != userId
                )[0];
                updateCachedData((draft) => {
                  draft[message.content._id] = { ...message.content, friend };
                });
              }
              break;
            default:
              break;
          }
        });
      },
      transformResponse: (responseData) => {
        const newResponseData = {};
        responseData.friends.map((res) => {
          const friend = res.participants.filter(
            (participant) => participant.participantId != userId
          )[0];
          const user = res.participants.filter(
            (participant) => participant.participantId == userId
          )[0];
          newResponseData[res._id] = { ...res, friend, user };
        });
        return newResponseData;
      },
    }),

    requestFriend: builder.mutation({
      query: (request) => ({
        url: "/friends/request",
        method: "POST",
        body: request,
      }),
      invalidatesTags: ["Friend"],
      async onQueryStarted(request, { dispatch, queryFulfilled }) {
        console.log("query started");
        socket.emit("message", {
          type: "friendRequest",
          content: { ...request },
        });
        try {
          await queryFulfilled;
        } catch (error) {
          // patchResult.undo();
        }
      },
    }),

    acceptFriend: builder.mutation({
      query: (request) => ({
        url: "/friends/accept",
        method: "POST",
        body: request,
      }),
      invalidatesTags: ["Friend"],
      async onQueryStarted(request, { queryFulfilled }) {
        socket.emit("message", {
          type: "friendRequest",
          content: request.friendCopy,
        });

        try {
          await queryFulfilled;
        } catch (error) {
          // patchResult.undo();
          console.log(error);
        }
      },
    }),

    declineFriend: builder.mutation({
      query: (request) => ({
        url: "/friends/decline",
        method: "POST",
        body: request,
      }),
      invalidatesTags: ["Friend"],
      async onQueryStarted(request, { queryFulfilled }) {
        socket.emit("message", { type: "friendRequest", content: request });
        try {
          await queryFulfilled;
        } catch (error) {
          console.log(error);
        }
      },
    }),

    editAllFriendsByUser: builder.mutation({
      query: ({ userId, update }) => ({
        url: "/friends/edit-all-friends-by-user",
        method: "POST",
        body: { userId, update },
      }),
    }),
  }),
});

export const {
  useRequestFriendMutation,
  useGetFriendsQuery,
  useAcceptFriendMutation,
  useDeclineFriendMutation,
  useEditAllFriendsByUserMutation,
} = extendedApiSlice;

export const {} = friendsSlice.actions;

export default friendsSlice.reducer;
