import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./user/userSlice";
export const Store = configureStore({
  reducer: { user: UserReducer },
});
