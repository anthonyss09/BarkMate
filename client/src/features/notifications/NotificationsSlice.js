import { apiSlice } from "../api/apiSlice";

export const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getNotifications: builder.query({
      query: (userId) => ({
        url: `/notifications/get-notifications?userId=${userId}`,
        method: "GET",
      }),
      async onCacheEntryAdded(
        userId,
        { updateCachedData, cacheDataLoaded, cacheEntryRemoved }
      ) {
        const ws = new WebSocket("ws://192.168.1.153:8080");

        try {
          await cacheDataLoaded;
          const listener = (event) => {
            console.log("message event");
            const data = JSON.parse(event.data);
            console.log(data);
            console.log(userId);
            if (data.content.recipient === userId) {
              updateCachedData((draft) => {
                draft.notifications.push(data.content);
              });
            }
          };

          ws.addEventListener("message", listener);
        } catch (error) {}
        await cacheEntryRemoved;
        ws.close();
      },
    }),
    createNotification: builder.mutation({
      query: ({ notification, userId }) => ({
        url: "/notifications/create-notification",
        method: "POST",
        body: notification,
      }),
      // async onQueryStarted(
      //   { userId, notification },
      //   { dispatch, queryFulfilled }
      // ) {
      //   const patchResult = dispatch(
      //     apiSlice.util.updateQueryData("getNotifications", userId, (draft) => {
      //       const notifications = draft.notifications;
      //       notifications.push(notification);
      //     })
      //   );
      //   try {
      //     await queryFulfilled;
      //   } catch (error) {
      //     patchResult.undo();
      //   }
      // },
    }),
  }),
});

export const { useGetNotificationsQuery, useCreateNotificationMutation } =
  extendedApiSlice;
