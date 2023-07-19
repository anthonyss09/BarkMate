import { apiSlice } from "../api/apiSlice";
import { createSlice } from "@reduxjs/toolkit";

export const friendsSlice = createSlice({
  name: "friends",
  initialState: {},
  reducers: {},
});

export const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    requestFriend: builder.mutation({
      query: ({ requester, recipient }) => ({
        url: "/friends/request",
        method: "POST",
        body: { requester, recipient },
      }),
      invalidatesTags: ["CurrentUser"],
    }),
  }),
});

export const { useRequestFriendMutation } = extendedApiSlice;

export const {} = friendsSlice.actions;

export default friendsSlice.reducer;
