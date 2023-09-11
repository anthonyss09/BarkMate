import { apiSlice } from "../api/apiSlice";
import { createSlice } from "@reduxjs/toolkit";

export const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    uploadPic: builder.mutation({
      query: (formData) => ({
        url: "https://api.cloudinary.com/v1_1/dgrtldcsp/image/upload",
        method: "POST",
        body: formData,
      }),
    }),
  }),
});

export const { useUploadPicMutation } = extendedApiSlice;
