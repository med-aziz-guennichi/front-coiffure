import { createSlice } from "@reduxjs/toolkit";

const adminSlice = createSlice({
  name: "admin",
  initialState: {
    adminInfo: null,
    isFetching: false,
    error: false,
  },
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.isFetching = true;
      state.adminInfo = action.payload;
    },
    loginFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    logoutSuccess: (state) => {
      state.isFetching = false;
      state.adminInfo = null;
    },
  },
});

export const { loginStart, loginFailure, loginSuccess, logoutSuccess } =
  adminSlice.actions;
export default adminSlice.reducer;
