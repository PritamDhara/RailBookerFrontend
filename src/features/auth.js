import { createSlice } from "@reduxjs/toolkit";
 
const initialState = {
  username: "",
  roles: [],
  accessToken: "",
  tokenType: "Bearer",
};
 
export const authSlice = createSlice({
  name: "auth",
  initialState: { value: initialState },
  reducers: {
    login: (state, action) => {
      state.value = action.payload;
    },
    logout: (state) => {
      state.value = initialState;
    },
  },
});
 
export const { login, logout } = authSlice.actions;
export default authSlice.reducer;