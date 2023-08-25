import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { current, createAction } from "@reduxjs/toolkit";
const user = JSON.parse(localStorage.getItem("user"));
const userId = user ? user._id : null;

//if user login/register open web socket connection with server and send userId for session reference
let ws = user && new WebSocket(`ws://192.168.1.153:8080/${userId}`);

export const notificationsRecieved = createAction(
  "/notifications/notificationsRecieved"
);
export const friendRequest = createAction("/friends/friendRequest");

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
      //notifications retrieved on dashboard home page after login/register, onCacheEntryAdded triggered and event listeners added.
      async onCacheEntryAdded(
        userId,
        { updateCachedData, cacheDataLoaded, cacheEntryRemoved, dispatch }
      ) {
        ws.addEventListener("open", (e) => {
          console.log("web socket opened");
        });
        //listen for message from server
        ws.addEventListener("message", async (e) => {
          const message = JSON.parse(e.data);

          //update cache data dependant on message type
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
              {
                updateCachedData((draft) => {
                  Object.values(draft).map(
                    (notification) => (notification.is_read = true)
                  );
                });
              }
              break;
            case "markNotificationViewed":
              {
                updateCachedData((draft) => {
                  draft[message.content.notificationId].is_viewed = true;
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
      async onQueryStarted(notification, { dispatch, queryFulfilled }) {
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

    markAllNotificationsRead: builder.mutation({
      query: (userId) => ({
        url: "/notifications/mark-notifications-read",
        method: "POST",
      }),
      async onQueryStarted(undefined, { dispatch, queryFulfilled }) {
        ws.send(
          JSON.stringify({
            type: "markNotificationsRead",
            content: { recipient: userId },
          })
        );
      },
    }),

    markNotificationViewed: builder.mutation({
      query: ({ userId, notificationId }) => ({
        url: "notifications/mark-notification-viewed",
        method: "Post",
        body: { notificationId },
      }),
      async onQueryStarted(
        { userId, notificationId },
        { dispatch, queryFulfilled }
      ) {
        ws.send(
          JSON.stringify({
            type: "markNotificationViewed",
            content: { userId, notificationId },
          })
        );
      },
    }),

    getChats: builder.query({
      query: (userId) => ({
        url: `/chats/get-chats?userId=${userId}`,
        method: "GET",
      }),
      //getChats query triggered on dashboard chat page, web socket listening for message from server
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
                // const existingChatId = data.content.chatId;
                updateCachedData((draft) => {
                  //check for existing chat contigient on both senderId and recipientId existing in chatParticipants
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
                    //target existing chat and update data
                    const chatIds = draft.chats.map((chat) => chat._id);
                    const chatIndex = chatIds.indexOf(existingChatId);
                    draft.chats[chatIndex].messages.push(data.content.message);
                    // draft[existingChatId].messages.push(data.content.message)
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
          //normalize response data
          newResponseData[res._id] = res;

          //identify user and friend, normalize result
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

    getFriends: builder.query({
      query: (friendIds) => ({
        url: `/friends/get-friends?friendIds=` + JSON.stringify(friendIds),
      }),

      async onCacheEntryAdded(friendIds, { updateCachedData }) {
        ws.addEventListener("message", async (e) => {
          const message = JSON.parse(e.data);
          console.log(message);
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
      invalidatesTags: ["CurrentUser"],
      onQueryStarted(request, { dispatch }) {
        console.log("query started");
        ws.send(
          JSON.stringify({
            type: "friendRequest",
            content: {
              ...request,
            },
          })
        );
      },
    }),

    createPost: builder.mutation({
      query: (post) => ({
        url: "/posts/create-post",
        method: "POST",
        body: post,
      }),
      invalidatesTags: ["Posts"],
    }),

    getPosts: builder.query({
      query: (coordinates) => ({
        url: `/posts/get-posts?coordinates=${coordinates}`,
        method: "GET",
      }),
      providesTags: (result = [], error, arg) => [
        "Posts",
        "Post",
        // ...result.posts.map(({ _id }) => ({ type: "Post", _id })),
        ...Object.values(result).map(({ _id }) => ({ type: "Post", _id })),
      ],
      async onCacheEntryAdded(coordinates, { updateCachedData }) {
        ws.addEventListener("message", async (e) => {
          const message = JSON.parse(e.data);

          switch (message.type) {
            case "editPost":
              {
                updateCachedData((draft) => {
                  console.log(draft);
                  const targetPost = draft[message.content.postId];
                  targetPost[Object.keys(message.content.update)[0]] =
                    Object.values(message.content.update)[0];

                  draft[message.content.postId] = targetPost;
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
        responseData.posts.map((post) => {
          newResponseData[post._id] = post;
        });
        return newResponseData;
      },
    }),

    editPost: builder.mutation({
      query: ({ postId, update, currentUserCoords }) => ({
        url: "/posts/edit-post",
        method: "POST",
        body: { postId, update, currentUserCoords },
      }),
      invalidatesTags: (result, error, arg) => [{ type: "Post", _id: arg._id }],
      async onQueryStarted(
        { postId, update, currentUserCoords },
        { dispatch, queryFulfilled }
      ) {
        const patchResult = dispatch(
          apiSlice.util.updateQueryData(
            "getPosts",
            currentUserCoords,
            (draft) => {
              const post = Object.values(draft).find(
                (post) => post._id === postId
              );
              if (post) {
                post[Object.keys(update)[0]] = Object.values(update)[0];
              }
            }
          )
        );

        ws.send(
          JSON.stringify({ type: "editPost", content: { postId, update } })
        );
        try {
          await queryFulfilled;
        } catch (error) {
          patchResult.undo();
        }
      },
    }),
  }),
});

export const {
  useGetNotificationsQuery,
  useCreateNotificationMutation,
  useGetChatsQuery,
  useCreateChatMutation,
  useMarkAllNotificationsReadMutation,
  useMarkNotificationViewedMutation,
  useGetFriendsQuery,
  useRequestFriendMutation,
  useCreatePostMutation,
  useGetPostsQuery,
  useEditPostMutation,
} = apiSlice;
