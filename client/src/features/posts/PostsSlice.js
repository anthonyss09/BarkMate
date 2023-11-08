import { socket } from "../../sockets/socketIo";
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
      invalidatesTags: ["Post"],
    }),

    getUserPosts: builder.query({
      query: (userId) => ({
        url: `/posts/get-user-posts?userId=${userId}`,
      }),
      providesTags: (result = [], error, arg) =>
        result
          ? [
              ...Object.values(result).map(({ _id }) => ({
                type: "Post",
                _id,
              })),
              "Post",
            ]
          : ["Post"],
    }),

    getPosts: builder.query({
      query: ({ friends, coordinates, pageNumber }) => ({
        url: `/posts/get-posts?coordinates=${coordinates}&friends=${friends}&pageNumber=${pageNumber}`,
        method: "GET",
      }),
      providesTags: (result = [], error, arg) =>
        result
          ? [
              ...Object.values(result).map(({ _id }) => ({
                type: "Post",
                _id,
              })),
              "Post",
            ]
          : ["Post"],
      async onCacheEntryAdded(coordinates, { updateCachedData }) {
        socket.on("message", (message) => {
          switch (message.type) {
            case "editPost":
              {
                updateCachedData((draft) => {
                  const targetPost = draft[message.content.postId];
                  targetPost[Object.keys(message.content.update)[0]] =
                    Object.values(message.content.update)[0];
                  draft[message.content.postId] = targetPost;
                });
              }
              break;
            default:
              break;
          }
        });
      },
      transformResponse: (responseData) => {
        const newResponseData = {};
        responseData.posts.map((post) => {
          newResponseData[post._id] = post;
        });
        return newResponseData;
      },
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
        socket.emit("message", {
          type: "editPost",
          content: { postId, update },
        });
        try {
          await queryFulfilled;
        } catch (error) {
          // patchResult.undo();
          console.log(error);
        }
      },
    }),

    createComment: builder.mutation({
      query: (comment) => ({
        url: "/posts/create-comment",
        method: "POST",
        body: comment,
      }),
      async onQueryStarted(comment, { dispatch, queryFulfilled }) {
        socket.emit("message", {
          type: "createComment",
          content: { ...comment },
        });
        try {
          await queryFulfilled;
        } catch (error) {
          // patchResult.undo();
          console.log(error);
        }
      },
    }),

    getComments: builder.query({
      query: (postId) => ({
        url: `/posts/get-comments?postId=${postId}`,
        method: "GET",
      }),
      async onCacheEntryAdded(
        postId,
        { updateCachedData, updateQueryData, dispatch }
      ) {
        socket.on("message", (message) => {
          switch (message.type) {
            case "createComment":
              {
                // updateCachedData((draft) => {
                //   draft.content.push(message.content);
                // });
                if (postId === message.content.postId) {
                  dispatch(
                    extendedApiSlice.util.updateQueryData(
                      "getComments",
                      (postId = message.content.postId),
                      (draft) => {
                        console.log("the draft id is ", postId);
                        draft.content.push(message.content);
                      }
                    )
                  );
                }
              }
              break;
            default:
              break;
          }
        });
      },
    }),

    editAllPostsByUser: builder.mutation({
      query: ({ userId, update }) => ({
        url: "/posts/edit-all-posts-by-user",
        method: "POST",
        body: { userId, update },
      }),
    }),
  }),
});

export const {
  useCreatePostMutation,
  useGetPostsQuery,
  useEditPostMutation,
  useGetUserPostsQuery,
  useEditAllPostsByUserMutation,
  useCreateCommentMutation,
  useGetCommentsQuery,
} = extendedApiSlice;
