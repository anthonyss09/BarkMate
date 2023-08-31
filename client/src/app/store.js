import { configureStore } from "@reduxjs/toolkit";
import { api, apiSlice } from "../features/api/apiSlice";
import authSliceReducer from "../features/auth/authSlice";
import usersSliceReducer from "../features/users/UsersSlice";
import notificationsReducer from "../features/notifications/NotificationsSlice";
import chatsSliceReducer from "../features/chats/ChatsSlice";
import friendsReducer from "../features/friends/FriendsSlice";

export const store = configureStore({
  reducer: {
    auth: authSliceReducer,
    users: usersSliceReducer,
    chats: chatsSliceReducer,
    notifications: notificationsReducer,
    friends: friendsReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
