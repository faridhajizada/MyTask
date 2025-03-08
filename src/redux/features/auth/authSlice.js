import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {},
  reducers: {
    setAuth: (state, action) => {},
    logout: (state) => {},
  },
});

export const { setAuth, logout } = authSlice.actions;

export default authSlice.reducer;
