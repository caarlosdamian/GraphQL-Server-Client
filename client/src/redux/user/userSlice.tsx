import { createSlice, createAction } from "@reduxjs/toolkit";

export interface UserInterface {
  users: [];
}

const initialState: UserInterface = {
  users: [],
};

export const userslice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setCollection(state, action) {
      state.users = action.payload;
    },
  },
});

export const loadUsers = createAction("collections/loadUsers");
export const { setCollection } = userslice.actions;

export default userslice.reducer;
