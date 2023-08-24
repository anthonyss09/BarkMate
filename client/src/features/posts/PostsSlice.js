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
      invalidatesTags: ["Posts"],
    }),
    getPosts: builder.query({
      query: (coordinates) => ({
        url: `/posts/get-posts?coordinates=${coordinates}`,
        method: "GET",
      }),
      providesTags: (result = [], error, arg) => [
        "Posts",
        "Post",
        ...result.posts.map(({ _id }) => ({ type: "Post", _id })),
      ],
    }),
    editPost: builder.mutation({
      query: ({ postId, update, currentUserCoords }) => ({
        url: "/posts/edit-post",
        method: "POST",
        body: { postId, update, currentUserCoords },
      }),
      invalidatesTags: (result, error, arg) => [{ type: "Post", _id: arg._id }],
      async onQueryStarted(
        { postId, update, currentUserCoords },
        { dispatch, queryFulfilled }
      ) {
        const patchResult = dispatch(
          apiSlice.util.updateQueryData(
            "getPosts",
            currentUserCoords,
            (draft) => {
              const post = draft.posts.find((post) => post._id === postId);
              if (post) {
                post[Object.keys(update)[0]] = Object.values(update)[0];
              }
            }
          )
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

// export const { useCreatePostMutation, useGetPostsQuery, useEditPostMutation } =
//   extendedApiSlice;
