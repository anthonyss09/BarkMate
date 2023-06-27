import { apiSlice } from "../api/apiSlice";
import { createSlice } from "@reduxjs/toolkit";

export const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createPost: builder.mutation({
      query: (post) => ({
        url: "/posts/create-post",
        method: "POST",
        body: post,
      }),
    }),
    getPosts: builder.query({
      query: (coordinates) => ({
        url: `/posts/get-posts?coordinates=${coordinates}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useCreatePostMutation, useGetPostsQuery } = extendedApiSlice;
