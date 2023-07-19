import { createSlice } from "@reduxjs/toolkit";
import { apiSlice } from "../api/apiSlice";

const currentUser = JSON.parse(localStorage.getItem("user"));
const token = JSON.parse(localStorage.getItem("token"));

const initialState = {
  currentUser: currentUser ? currentUser : "",
  token: token ? token : "",
  client_secret: "",
  newUser: {
    firstName: "",
    lastName: "",
    address: "",
    email: "",
    password: "",
    location: [],
    dogName: "",
    breed: "",
    weight: "0-50 lbs",
    energyLevel: "low energy",
    aboutUs: "",
    timeNeeded: "",
    timeAvailable: "",
    profileImage: "",
    profileImageName: "",
  },
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    updateNewUserProp(state, action) {
      state.newUser[action.payload.id] = action.payload.value;
    },
    logoutUser(state, action) {
      state.currentUser = initialState.currentUser;
      state.token = initialState.token;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      apiSlice.endpoints.registerUser.matchFulfilled,
      (state, { payload }) => {
        state.currentUser = payload.user;
        state.token = payload.token;
        state.newUser = initialState.newUser;
      }
    );
    builder.addMatcher(
      apiSlice.endpoints.loginUser.matchFulfilled,
      (state, { payload }) => {
        state.currentUser = payload.user;
        state.token = payload.token;
      }
    );
    // builder.addMatcher(
    //   apiSlice.endpoints.requestFriend.matchFulfilled,
    //   (state, { payload }) => {
    //     state.currentUser = payload.updatedUser;
    //   }
    // );
    builder.addMatcher(
      apiSlice.endpoints.refreshUserCredentials.matchFulfilled,
      (state, { payload }) => {
        state.currentUser = payload.user;
      }
    );
  },
});

export const extendedApiSlice = apiSlice.injectEndpoints({
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

export const selectNewUser = (state) => state.auth.newUser;
export const selectCurrentUser = (state) => state.auth.currentUser;

export const { updateNewUserProp, logoutUser } = authSlice.actions;

export const {
  useRegisterUserMutation,
  useLoginUserMutation,
  useRefreshUserCredentialsQuery,
} = extendedApiSlice;

export default authSlice.reducer;
