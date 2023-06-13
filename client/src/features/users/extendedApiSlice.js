import { apiSlice } from "../api/apiSlice";

export const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProfiles: builder.query({
      query: ({ distance, coordinates }) => ({
        url: `/users/profiles?distance=${distance}&coordinates=${coordinates}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetProfilesQuery } = extendedApiSlice;
