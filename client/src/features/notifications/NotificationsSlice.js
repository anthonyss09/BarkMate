import { apiSlice } from "../api/apiSlice";
import {
  createSlice,
  createAction,
  isAnyOf,
  createEntityAdapter,
} from "@reduxjs/toolkit";
import { openWebSocket } from "../../modules/webSocket";

const userId = JSON.parse(localStorage.getItem("user"))._id;

// let wsSessionId;

// const ws = openWebSocket();
// const ws = new WebSocket(`ws://192.168.1.153:8080/${userId}`);

const connectWs = createAction("notifications/socketsConnect");
const openWs = createAction("notifications/socketsOpen");
const stateChange = createAction("stateChange");

const initialState = {
  wsSession: "",
};

export const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // getNotifications: builder.query({
    //   query: (userId) => ({
    //     url: `/notifications/get-notifications?userId=${userId}`,
    //     method: "GET",
    //   }),
    //   async onCacheEntryAdded(
    //     userId,
    //     { updateCachedData, cacheDataLoaded, cacheEntryRemoved, dispatch }
    //   ) {
    //     console.log("web socket opened", ws);
    //     ws.addEventListener("open", (e) => {
    //       console.log(e);
    //     });
    //     ws.addEventListener("message", (e) => {
    //       console.log(e);
    //     });
    //     try {
    //       await cacheDataLoaded;
    //     } catch (error) {}
    //     await cacheEntryRemoved;
    //   },
    // }),
    // createNotification: builder.mutation({
    //   query: ({ notification, userId }) => ({
    //     url: "/notifications/create-notification",
    //     method: "POST",
    //     body: notification,
    //   }),
    //   async onQueryStarted(
    //     { userId, notification },
    //     { dispatch, queryFulfilled }
    //   ) {
    //     try {
    //       await queryFulfilled;
    //     } catch (error) {
    //       // patchResult.undo();
    //     }
    //   },
    // }),
  }),
});

export const notificationsSlice = createSlice({
  name: "notifications",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addMatcher(stateChange, (state, action) => {
      state.wsSession = action.payload;
    });
  },
});

export const { useGetNotificationsQuery, useCreateNotificationMutation } =
  extendedApiSlice;

export default notificationsSlice.reducer;
