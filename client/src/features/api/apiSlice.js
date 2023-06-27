import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",

  baseQuery: fetchBaseQuery({
    baseUrl: "/api",
    //prepare headers
  }),

  tagTypes: ["CurrentUser"],
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (newUser) => ({
        url: "/auth/register",
        method: "POST",
        body: newUser,
      }),
    }),
    loginUser: builder.mutation({
      query: ({ email, password }) => ({
        url: "/auth/login",
        method: "Post",
        body: { email, password },
      }),
    }),
    refreshUserCredentials: builder.query({
      query: (userId) => ({
        url: `/users/single-profile?userId=${userId}`,
        method: "GET",
      }),
      providesTags: ["CurrentUser"],
    }),
  }),
});

export const {
  useRegisterUserMutation,
  useLoginUserMutation,
  useRefreshUserCredentialsQuery,
} = apiSlice;

// {
//         firstName,
//         lastName,
//         address,
//         email,
//         password,
//         location,
//         pupName,
//         breed,
//         weight,
//         energyLevel,
//         aboutUs,
//         timeNeeded,
//         timeAvailable,
//         profileImage,
//       }
