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
  }),
});

export const {
  useGetProfilesQuery,
  useGetProfileByIdQuery,
  useRequestFriendMutation,
} = extendedApiSlice;

export const selectUsersData = (state) => state.users;

export const { setFilter } = usersSlice.actions;

export default usersSlice.reducer;
