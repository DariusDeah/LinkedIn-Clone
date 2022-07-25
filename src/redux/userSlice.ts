import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { User } from "../components/Login/Login";
import type { RootState } from "./index";

interface UserState {
  user: User | null;
  pending: boolean;
  error: boolean;
}

const initialState: UserState = {
  user: null,
  pending: false,
  error: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state: typeof initialState, action: PayloadAction<User>) => {
      state.user = action.payload;
    },

    logout: (state: typeof initialState, action: PayloadAction) => {
      state.user = null;
    },
  },
});

export const { login, logout } = userSlice.actions;
export const userSelector = (state: RootState) => state.userReducer.user;
export default userSlice.reducer;
