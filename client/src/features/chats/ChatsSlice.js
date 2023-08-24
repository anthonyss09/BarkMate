// import { apiSlice } from "../api/apiSlice";
import { createSlice } from "@reduxjs/toolkit";
// import { updateWebSocketReadyState } from "../api/apiSlice";
const user = JSON.parse(localStorage.getItem("user"));
const userId = user ? user._id : null;

const initialState = {
  webSocketReadyState: undefined,
};

export const chatsSlice = createSlice({
  name: "chats",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // builder.addCase(updateWebSocketReadyState, (state, action) => {
    //   state.webSocketReadyState = action.payload;
    // });
  },
});

export const selectWebSocketReadyState = (state) =>
  state.chats.webSocketReadyState;

export default chatsSlice.reducer;
