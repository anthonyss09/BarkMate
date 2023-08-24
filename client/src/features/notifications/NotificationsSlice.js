import { apiSlice, notificationsRecieved } from "../api/apiSlice";
import {
  createSlice,
  createAction,
  isAnyOf,
  createEntityAdapter,
} from "@reduxjs/toolkit";

const user = JSON.parse(localStorage.getItem("user"));
const userId = user ? user._id : null;

const notificationsAdapter = createEntityAdapter({
  selectId: (notification) => notification._id,
});

const matchNotificationsRecieved = isAnyOf(
  apiSlice.endpoints.getNotifications.matchFulfilled,
  notificationsRecieved
);

export const notificationsSlice = createSlice({
  name: "notifications",
  initialState: notificationsAdapter.getInitialState(),
  // reducers: {
  //   markAllStateNotificationsRead(state, action) {
  //     Object.values(state.entities).forEach((notification) => {
  //       notification.is_read = true;
  //     });
  //   },
  //   markStateNotificationViewed(state, action) {
  //     state.entities[action.payload].is_viewed = true;
  //   },
  // },
  // extraReducers(builder) {
  //   builder.addCase(notificationsRecieved, (state, action) => {
  //     state.ids.push(action.payload._id);
  //     state.entities[action.payload._id] = action.payload;
  //   });
  //   builder.addMatcher(
  //     apiSlice.endpoints.getNotifications.matchFulfilled,
  //     (state, action) => {
  //       notificationsAdapter.upsertMany(state, action.payload.notifications);
  //       console.log(action.payload);
  //     }
  //   );
  // },
});

export const {
  selectAll: selectAllNotifications,
  selectById: selectNotificationById,
} = notificationsAdapter.getSelectors((state) => state.notifications);

export const { markAllStateNotificationsRead, markStateNotificationViewed } =
  notificationsSlice.actions;

export default notificationsSlice.reducer;
