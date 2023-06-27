import { configureStore } from "@reduxjs/toolkit";
import { api, apiSlice } from "../features/api/apiSlice";
import authSliceReducer from "../features/auth/authSlice";
import usersSliceReducer from "../features/users/UsersSlice";

export const store = configureStore({
  reducer: {
    auth: authSliceReducer,
    users: usersSliceReducer,

    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
