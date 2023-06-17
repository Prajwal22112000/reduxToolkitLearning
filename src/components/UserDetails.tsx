import { createSlice } from "@reduxjs/toolkit";

const UserDetails = createSlice({
  name: "Users",
  initialState: [],
  reducers: {
    addUser(state: Array<string>, action) {
      state.push(action.payload);
    },
    deleteUser(state, action) {
      return state.filter((_value, index) => index !== action.payload);
    },
    deleteAllUsers() {
      return [];
    },
  },
});

export const { addUser, deleteUser, deleteAllUsers } = UserDetails.actions;
export default UserDetails.reducer;
