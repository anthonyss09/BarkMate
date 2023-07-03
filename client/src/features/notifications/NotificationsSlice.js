import { apiSlice } from "../api/apiSlice";
import { createSlice } from "@reduxjs/toolkit";

export const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getNotifications: builder.query({
      query: (userId) => ({
        url: `/notifications/get-notifications?userId=${userId}`,
        method: "GET",
      }),
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
        const patchResult = dispatch(
          apiSlice.util.updateQueryData("getNotifications", userId, (draft) => {
            const notifications = draft.notifications;
            notifications.push(notification);
          })
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

export const { useGetNotificationsQuery, useCreateNotificationMutation } =
  extendedApiSlice;
