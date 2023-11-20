import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../features/api/apiSlice";
import authSliceReducer from "../features/auth/authSlice";
import usersSliceReducer from "../features/users/UsersSlice";
import notificationsReducer from "../features/notifications/NotificationsSlice";
import chatsSliceReducer from "../features/chats/ChatsSlice";
import friendsReducer from "../features/friends/FriendsSlice";
import alertsSliceReducer from "../features/alerts/alertsSlice";

export const store = configureStore({
  reducer: {
    auth: authSliceReducer,
    users: usersSliceReducer,
    chats: chatsSliceReducer,
    notifications: notificationsReducer,
    friends: friendsReducer,
    alerts: alertsSliceReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
