import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { current, createAction } from "@reduxjs/toolkit";
import { socket } from "../../sockets/socketIo";

// import { io } from "socket.io-client";
// import { response } from "express";
export const user = JSON.parse(localStorage.getItem("user"));
export const userId = user ? user._id : null;

//if user login/register open web socket connection with server and send userId for session reference

// export let ws = user && new WebSocket(`ws://192.168.1.153:8080/${userId}`);
// export let ws = user && new WebSocket(`ws://192.168.1.153:8080/${userId}`);
// export let socket = io("ws://192.168.1.153:4000", {
//   auth: { token: "token" },
//   query: { userId: userId },
//   autoConnect: false,
// });

// socket.onAnyOutgoing((e, m) => {
//   console.log("any out going", e, m);
// });

// socket.on("connect", () => {
//   console.log("socket has connected");
//   socket.emit("message", {
//     type: "test",
//     content: { msg: "test message", userId: userId },
//   });
// });

// socket.on("message", (msg) => {
//   console.log("client recieved the message", msg);
// });

// socket.io.on("reconnect", (attempt) => {
//   console.log("socket reconnection success");
// });

// const reloadWindow = () => {
//   for (let i = 0; i < 5; i++) {
//     setTimeout(() => {
//       window.location.reload();
//     }, 1000);
//   }
// };

// if (ws) {
//   ws.addEventListener("close", reloadWindow);
//   ws.removeEventListener("close", reloadWindow);
// }

export const notificationsRecieved = createAction(
  "/notifications/notificationsRecieved"
);
export const friendRequest = createAction("/friends/friendRequest");

export const apiSlice = createApi({
  reducerPath: "api",

  baseQuery: fetchBaseQuery({
    baseUrl: "/api",
    prepareHeaders: (headers, { getState }) => {
      const user = getState().auth.currentUser;
      const token = getState().auth.token;
      if (token) {
        headers.set("authorization", `bearer ${token}`);
      } else {
        headers.set("authorization", "bearer invalidToken");
      }
      return headers;
    },
  }),

  tagTypes: ["CurrentUser", "Posts", "Post", "Friend", "Chat", "Notification"],
  endpoints: (builder) => ({
    // getNotifications: builder.query({
    //   query: ({ userId, limit }) => ({
    //     url: `/notifications/get-notifications?userId=${userId}&limit=${limit}`,
    //     method: "GET",
    //   }),
    //   invalidatesTags: (result, error, arg) =>
    //     result
    //       ? [
    //           ...Object.values(result).map(({ _id }) => ({
    //             type: "Notification",
    //             _id,
    //           })),
    //           ,
    //           "Notification",
    //         ]
    //       : ["Notification"],
    //   async onCacheEntryAdded(
    //     userId,
    //     { updateCachedData, cacheDataLoaded, cacheEntryRemoved, dispatch }
    //   ) {
    //     socket.connect();
    //     socket.on("message", (message) => {
    //       console.log("the message is", message);
    //       switch (message.type) {
    //         case "notification": {
    //           updateCachedData((draft) => {
    //             if (message.content.notificationType === "friendRequest") {
    //               console.log("recieved a friend request from websocket");
    //               dispatch(friendRequest);
    //             }
    //             //add notification to normalized cached notification data
    //             draft[message.content._id] = message.content;
    //           });
    //           break;
    //         }
    //         case "markNotificationsRead":
    //           {
    //             updateCachedData((draft) => {
    //               Object.values(draft).map(
    //                 (notification) => (notification.is_read = true)
    //               );
    //             });
    //           }
    //           break;
    //         case "markNotificationViewed":
    //           {
    //             updateCachedData((draft) => {
    //               draft[message.content.notificationId].is_viewed = true;
    //             });
    //           }
    //           break;
    //         default:
    //           break;
    //       }
    //     });
    //     try {
    //       await cacheDataLoaded;
    //     } catch (error) {}
    //     await cacheEntryRemoved;
    //   },
    //   //normalize notification data upon retrieval
    //   transformResponse(responseData) {
    //     const newResponseData = {};
    //     responseData.notifications.map(
    //       (notification) => (newResponseData[notification._id] = notification)
    //     );
    //     return newResponseData;
    //   },
    // }),
    // createNotification: builder.mutation({
    //   query: (notification) => ({
    //     url: "/notifications/create-notification",
    //     method: "POST",
    //     body: notification,
    //   }),
    //   invalidatesTags: ["Notification"],
    //   async onQueryStarted(notification, { dispatch, queryFulfilled }) {
    //     socket.emit("message", {
    //       type: "notification",
    //       content: { ...notification },
    //     });
    //     try {
    //       await queryFulfilled;
    //     } catch (error) {
    //       // patchResult.undo();
    //     }
    //   },
    // }),
    // markAllNotificationsRead: builder.mutation({
    //   query: (userId) => ({
    //     url: "/notifications/mark-notifications-read",
    //     method: "POST",
    //   }),
    //   invalidatesTags: ["Notification"],
    //   async onQueryStarted(undefined, { dispatch, queryFulfilled }) {
    //     socket.emit("message", {
    //       type: "markNotificationsRead",
    //       content: { recipient: userId },
    //     });
    //   },
    // }),
    // markNotificationViewed: builder.mutation({
    //   query: ({ userId, notificationId }) => ({
    //     url: "notifications/mark-notification-viewed",
    //     method: "POST",
    //     body: { notificationId },
    //   }),
    //   invalidatesTags: ["Nofification"],
    //   async onQueryStarted(
    //     { userId, notificationId },
    //     { dispatch, queryFulfilled }
    //   ) {
    //     socket.emit("message", {
    //       type: "markNotificationViewed",
    //       content: { userId, notificationId },
    //     });
    //   },
    // }),
    // getChats: builder.query({
    //   query: (userId) => ({
    //     url: `/chats/get-chats?userId=${userId}`,
    //     method: "GET",
    //   }),
    //   providesTags: (result, error, arg) =>
    //     result
    //       ? [...Object.values(result).map(({ _id }) => ({ type: "Chat", _id }))]
    //       : ["Chat"],
    //   //getChats query triggered on dashboard chat page, web socket listening for message from server
    //   async onCacheEntryAdded(
    //     userId,
    //     { dispatch, updateCachedData, cacheDataLoaded, cacheEntryRemoved }
    //   ) {
    //     socket.on("message", (data) => {
    //       switch (data.type) {
    //         case "chat":
    //           {
    //             console.log("got the chat from server");
    //             const sender = data.content.message.sender;
    //             const recipient = data.content.message.recipient;
    //             // const existingChatId = data.content.chatId;
    //             updateCachedData((draft) => {
    //               //check for existing chat contigient on both senderId and recipientId existing in chatParticipants
    //               let chatIndex;
    //               const existingChatId = Object.values(draft).map(
    //                 (chat, index) => {
    //                   const draftParicipantIds = [];
    //                   draftParicipantIds.push(
    //                     chat.participants.user.participantId
    //                   );
    //                   draftParicipantIds.push(
    //                     chat.participants.friend.participantId
    //                   );
    //                   console.log(draftParicipantIds);
    //                   if (
    //                     draftParicipantIds.includes(sender) &&
    //                     draftParicipantIds.includes(recipient)
    //                   ) {
    //                     console.log("exitsts");
    //                     console.log(chat._id);
    //                     chatIndex = index;
    //                     return chat._id;
    //                   }
    //                 }
    //               )[chatIndex];
    //               console.log("existing id", existingChatId);
    //               if (existingChatId) {
    //                 //target existing chat and update data
    //                 console.log("chat exists");
    //                 const chatIds = Object.values(draft).map(
    //                   (chat) => chat._id
    //                 );
    //                 const chatIndex = chatIds.indexOf(existingChatId);
    //                 Object.values(draft)[chatIndex].messages.push(
    //                   data.content.message
    //                 );
    //               } else {
    //                 console.log("new chat");
    //                 let newMessages = [];
    //                 let newContent = { ...data.content };
    //                 let newParticipants = {};
    //                 newContent.participants.map((p) => {
    //                   if (p.participantId === userId) {
    //                     newParticipants.user = { ...p };
    //                   } else {
    //                     newParticipants.friend = { ...p };
    //                   }
    //                 });
    //                 newMessages.push(data.content.message);
    //                 newContent.participants = newParticipants;
    //                 newContent.messages = newMessages;
    //                 draft["temp id"] = newContent;
    //               }
    //             });
    //           }
    //           break;
    //         default:
    //           break;
    //       }
    //     });
    //     // if (ws && ws.readyState === 1) {
    //     //   ws.addEventListener("message", (e) => {
    //     //     const data = JSON.parse(e.data);
    //     //     switch (data.type) {
    //     //       case "chat":
    //     //         {
    //     //           console.log("got the chat from server");
    //     //           const sender = data.content.message.sender;
    //     //           const recipient = data.content.message.recipient;
    //     //           // const existingChatId = data.content.chatId;
    //     //           updateCachedData((draft) => {
    //     //             //check for existing chat contigient on both senderId and recipientId existing in chatParticipants
    //     //             let chatIndex;
    //     //             const existingChatId = Object.values(draft).map(
    //     //               (chat, index) => {
    //     //                 const draftParicipantIds = [];
    //     //                 draftParicipantIds.push(
    //     //                   chat.participants.user.participantId
    //     //                 );
    //     //                 draftParicipantIds.push(
    //     //                   chat.participants.friend.participantId
    //     //                 );
    //     //                 console.log(draftParicipantIds);
    //     //                 if (
    //     //                   draftParicipantIds.includes(sender) &&
    //     //                   draftParicipantIds.includes(recipient)
    //     //                 ) {
    //     //                   console.log("exitsts");
    //     //                   console.log(chat._id);
    //     //                   chatIndex = index;
    //     //                   return chat._id;
    //     //                 }
    //     //               }
    //     //             )[chatIndex];
    //     //             console.log("existing id", existingChatId);
    //     //             if (existingChatId) {
    //     //               //target existing chat and update data
    //     //               console.log("chat exists");
    //     //               const chatIds = Object.values(draft).map(
    //     //                 (chat) => chat._id
    //     //               );
    //     //               const chatIndex = chatIds.indexOf(existingChatId);
    //     //               Object.values(draft)[chatIndex].messages.push(
    //     //                 data.content.message
    //     //               );
    //     //             } else {
    //     //               console.log("new chat");
    //     //               let newMessages = [];
    //     //               let newContent = { ...data.content };
    //     //               let newParticipants = {};
    //     //               newContent.participants.map((p) => {
    //     //                 if (p.participantId === userId) {
    //     //                   newParticipants.user = { ...p };
    //     //                 } else {
    //     //                   newParticipants.friend = { ...p };
    //     //                 }
    //     //               });
    //     //               newMessages.push(data.content.message);
    //     //               newContent.participants = newParticipants;
    //     //               newContent.messages = newMessages;
    //     //               draft["temp id"] = newContent;
    //     //             }
    //     //           });
    //     //         }
    //     //         break;
    //     //       default:
    //     //         break;
    //     //     }
    //     //   });
    //     // } else {
    //     //   console.log("ws down, failed to add listener to type chat messages");
    //     // }
    //     try {
    //       await cacheDataLoaded;
    //     } catch (error) {}
    //     await cacheEntryRemoved;
    //   },
    //   transformResponse: (responseData) => {
    //     let normParticipants = {};
    //     let newResponseData = {};
    //     console.log("userid", userId);
    //     responseData.chats.map((chat) => {
    //       let chatCopy = { ...chat };
    //       chat.participants.map((p) => {
    //         if (p.participantId == userId) {
    //           normParticipants.user = { ...p };
    //         } else {
    //           normParticipants.friend = { ...p };
    //         }
    //       });
    //       // chat.participants = normParticipants;
    //       chatCopy.participants = normParticipants;
    //       normParticipants = {};
    //       newResponseData[chat._id] = chatCopy;
    //     });
    //     // console.log("newResponse is ", newResponseData);
    //     // newResponseData.participants = normParticipants;
    //     return newResponseData;
    //   },
    // }),
    // createChat: builder.mutation({
    //   query: (newChat) => ({
    //     url: "/chats/create-chat",
    //     method: "POST",
    //     body: newChat,
    //   }),
    //   invalidatesTags: (result, error, arg) => [{ type: "Chat", _id: arg._id }],
    //   async onQueryStarted(newChat, { dispatch, queryFulfilled }) {
    //     socket.emit("message", { type: "chat", content: newChat });
    //     // if (ws && ws.readyState === 1) {
    //     //   ws.send(JSON.stringify({ type: "chat", content: newChat }));
    //     // } else {
    //     //   console.log("ws down, invalidation chats");
    //     // }
    //     try {
    //       await queryFulfilled;
    //     } catch (error) {
    //       // patchResult.undo();
    //     }
    //   },
    // }),
    // getFriends: builder.query({
    //   query: (userId) => ({
    //     url: `/friends/get-friends?userId=` + userId,
    //   }),
    //   providesTags: (result, error, arg) =>
    //     result
    //       ? [
    //           ...Object.values(result).map(({ _id }) => ({
    //             type: "Friend",
    //             _id,
    //           })),
    //           "Friend",
    //         ]
    //       : ["Friend"],
    //   async onCacheEntryAdded(friendIds, { updateCachedData }) {
    //     console.log("friends fetched");
    //     socket.on("message", (message) => {
    //       switch (message.type) {
    //         case "friendRequest":
    //           {
    //             console.log("update friends");
    //             console.log(message);
    //             const friend = message.content.participants.filter(
    //               (participant) => participant.participantId != userId
    //             )[0];
    //             updateCachedData((draft) => {
    //               draft[message.content._id] = { ...message.content, friend };
    //             });
    //           }
    //           break;
    //         default:
    //           break;
    //       }
    //     });
    //   },
    //   transformResponse: (responseData) => {
    //     const newResponseData = {};
    //     responseData.friends.map((res) => {
    //       const friend = res.participants.filter(
    //         (participant) => participant.participantId != userId
    //       )[0];
    //       const user = res.participants.filter(
    //         (participant) => participant.participantId == userId
    //       )[0];
    //       newResponseData[res._id] = { ...res, friend, user };
    //     });
    //     return newResponseData;
    //   },
    // }),
    // requestFriend: builder.mutation({
    //   query: (request) => ({
    //     url: "/friends/request",
    //     method: "POST",
    //     body: request,
    //   }),
    //   invalidatesTags: ["Friend"],
    //   async onQueryStarted(request, { dispatch, queryFulfilled }) {
    //     console.log("query started");
    //     socket.emit("message", {
    //       type: "friendRequest",
    //       content: { ...request },
    //     });
    //     try {
    //       await queryFulfilled;
    //     } catch (error) {
    //       // patchResult.undo();
    //     }
    //   },
    // }),
    // acceptFriend: builder.mutation({
    //   query: (request) => ({
    //     url: "/friends/accept",
    //     method: "POST",
    //     body: request,
    //   }),
    //   invalidatesTags: ["Friend"],
    //   async onQueryStarted(request, { queryFulfilled }) {
    //     socket.emit("message", {
    //       type: "friendRequest",
    //       content: request.friendCopy,
    //     });
    //     try {
    //       await queryFulfilled;
    //     } catch (error) {
    //       // patchResult.undo();
    //       console.log(error);
    //     }
    //   },
    // }),
    // declineFriend: builder.mutation({
    //   query: (request) => ({
    //     url: "/friends/decline",
    //     method: "POST",
    //     body: request,
    //   }),
    //   invalidatesTags: ["Friend"],
    //   async onQueryStarted(request, { queryFulfilled }) {
    //     socket.emit("message", { type: "friendRequest", content: request });
    //     try {
    //       await queryFulfilled;
    //     } catch (error) {
    //       console.log(error);
    //     }
    //   },
    // }),
    // createPost: builder.mutation({
    //   query: (post) => ({
    //     url: "/posts/create-post",
    //     method: "POST",
    //     body: post,
    //   }),
    //   invalidatesTags: ["Post"],
    // }),
    // getUserPosts: builder.query({
    //   query: (userId) => ({
    //     url: `/posts/get-user-posts?userId=${userId}`,
    //   }),
    //   providesTags: (result = [], error, arg) =>
    //     result
    //       ? [
    //           ...Object.values(result).map(({ _id }) => ({
    //             type: "Post",
    //             _id,
    //           })),
    //           "Post",
    //         ]
    //       : ["Post"],
    // }),
    // getPosts: builder.query({
    //   query: ({ friends, coordinates, pageNumber }) => ({
    //     url: `/posts/get-posts?coordinates=${coordinates}&friends=${friends}&pageNumber=${pageNumber}`,
    //     method: "GET",
    //   }),
    //   providesTags: (result = [], error, arg) =>
    //     result
    //       ? [
    //           ...Object.values(result).map(({ _id }) => ({
    //             type: "Post",
    //             _id,
    //           })),
    //           "Post",
    //         ]
    //       : ["Post"],
    //   async onCacheEntryAdded(coordinates, { updateCachedData }) {
    //     socket.on("message", (message) => {
    //       switch (message.type) {
    //         case "editPost":
    //           {
    //             updateCachedData((draft) => {
    //               const targetPost = draft[message.content.postId];
    //               targetPost[Object.keys(message.content.update)[0]] =
    //                 Object.values(message.content.update)[0];
    //               draft[message.content.postId] = targetPost;
    //             });
    //           }
    //           break;
    //         default:
    //           break;
    //       }
    //     });
    //   },
    //   transformResponse: (responseData) => {
    //     const newResponseData = {};
    //     responseData.posts.map((post) => {
    //       newResponseData[post._id] = post;
    //     });
    //     return newResponseData;
    //   },
    // }),
    // editPost: builder.mutation({
    //   query: ({ postId, update, currentUserCoords }) => ({
    //     url: "/posts/edit-post",
    //     method: "POST",
    //     body: { postId, update, currentUserCoords },
    //   }),
    //   invalidatesTags: (result, error, arg) => [{ type: "Post", _id: arg._id }],
    //   async onQueryStarted(
    //     { postId, update, currentUserCoords },
    //     { dispatch, queryFulfilled }
    //   ) {
    //     // const patchResult = dispatch(
    //     //   apiSlice.util.updateQueryData(
    //     //     "getPosts",
    //     //     currentUserCoords,
    //     //     (draft) => {
    //     //       const post = Object.values(draft).find(
    //     //         (post) => post._id === postId
    //     //       );
    //     //       if (post) {
    //     //         post[Object.keys(update)[0]] = Object.values(update)[0];
    //     //       }
    //     //       return draft;
    //     //     }
    //     //   )
    //     // );
    //     socket.emit("message", {
    //       type: "editPost",
    //       content: { postId, update },
    //     });
    //     // if (ws && ws.readyState === 1) {
    //     //   ws.send(
    //     //     JSON.stringify({ type: "editPost", content: { postId, update } })
    //     //   );
    //     // } else {
    //     //   console.log("posts invalidation, ws down");
    //     // }
    //     try {
    //       await queryFulfilled;
    //     } catch (error) {
    //       // patchResult.undo();
    //       console.log(error);
    //     }
    //   },
    // }),
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
  useAcceptFriendMutation,
  useDeclineFriendMutation,
  useGetUserPostsQuery,
} = apiSlice;
