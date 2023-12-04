import { apiSlice } from "../api/apiSlice";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filters: { distance: 1 },
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setFilter(state, action) {
      state.filters[action.payload.filterId] = action.payload.filterValue;
    },
  },
});

export const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProfiles: builder.query({
      query: ({ distance, coordinates, currentUserName }) => ({
        url: `/users/profiles?distance=${distance}&coordinates=${coordinates}&currentUserName=${currentUserName}`,
        method: "GET",
      }),
    }),
    getProfileById: builder.query({
      query: (profileId) => ({
        url: `/users/single-profile?userId=${profileId}`,
        method: "Get",
      }),
    }),
    updateUser: builder.mutation({
      query: (update) => ({
        url: "/auth/update-user",
        method: "POST",
        body: update,
      }),
      invalidatesTags: ["CurrentUser"],
    }),
  }),
});

export const {
  useGetProfilesQuery,
  useGetProfileByIdQuery,
  useRequestFriendMutation,
  useUpdateUserMutation,
} = extendedApiSlice;

export const selectUsersData = (state) => state.users;

export const { setFilter } = usersSlice.actions;

export default usersSlice.reducer;
