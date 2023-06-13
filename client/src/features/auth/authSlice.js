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
  },
});

export const selectNewUser = (state) => state.auth.newUser;
export const selectCurrentUser = (state) => state.auth.currentUser;

export const { updateNewUserProp, logoutUser } = authSlice.actions;

export default authSlice.reducer;
