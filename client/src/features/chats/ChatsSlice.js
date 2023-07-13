import { apiSlice } from "../api/apiSlice";
import { createSlice } from "@reduxjs/toolkit";
import { updateWebSocketReadyState } from "../api/apiSlice";
const userId = JSON.parse(localStorage.getItem("user"))._id;

const initialState = {
  webSocketReadyState: undefined,
};

export const chatsSlice = createSlice({
  name: "chats",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(updateWebSocketReadyState, (state, action) => {
      state.webSocketReadyState = action.payload;
    });
  },
});

export const selectWebSocketReadyState = (state) =>
  state.chats.webSocketReadyState;

export default chatsSlice.reducer;
