import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { createAction } from "@reduxjs/toolkit";

export const user = JSON.parse(localStorage.getItem("user"));
export const userId = user ? user._id : null;

export const notificationsRecieved = createAction(
  "/notifications/notificationsRecieved"
);
export const friendRequest = createAction("/friends/friendRequest");

export const apiSlice = createApi({
  reducerPath: "api",

  baseQuery: fetchBaseQuery({
    baseUrl: "/api",
    prepareHeaders: (headers, { getState }) => {
      // const user = getState().auth.currentUser;
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
  endpoints: (builder) => ({}),
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
