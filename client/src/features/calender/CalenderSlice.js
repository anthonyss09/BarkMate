import { apiSlice } from "../api/apiSlice";

export const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getEvents: builder.query({
      query: (userId) => ({
        url: `/events/get-events?userId=${userId}`,
      }),
      providesTags: ["Events"],
    }),
    createEvent: builder.mutation({
      query: (event) => ({
        url: "/events/create-event",
        method: "POST",
        body: event,
      }),
      invalidatesTags: ["Events"],
    }),
  }),
});

export const { useGetEventsQuery, useCreateEventMutation } = extendedApiSlice;
