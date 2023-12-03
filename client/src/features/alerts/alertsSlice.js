import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showAlert: false,
  alertType: "",
  alertMessage: "",
  overflowHidden: false,
};

export const alertsSlice = createSlice({
  name: "alerts",
  initialState,
  reducers: {
    displayAlert(state, action) {
      state.showAlert = true;
      state.alertType = action.payload.alertType;
      state.alertMessage = action.payload.alertMessage;
    },
    clearAlert(state, action) {
      state.showAlert = false;
      state.alertType = "";
      state.alertMessage = "";
    },
    setOverflowHidden(state, action) {
      state.overflowHidden = !state.overflowHidden;
    },
  },
});

export const selectAlertsInfo = (state) => state.alerts;

export const { displayAlert, clearAlert, setOverflowHidden } =
  alertsSlice.actions;
export default alertsSlice.reducer;
