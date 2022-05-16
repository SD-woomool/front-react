import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as api from "../../api/accountApi";

export const fetchAccountInfoThunk = createAsyncThunk(
  "account/fetchAccountInfo",
  () => {
    return api.fetchAccountInfo();
  }
);

export interface AccountInitialState {
  loading: boolean;
  error: null | string;
  id: null | number;
  email: null | string;
  nickname: null | string;
  ageRange: null | string;
  gender: null | string;
  profileImageUrl: null | string;
  isLogin: boolean;
}

const initialState: AccountInitialState = {
  loading: true,
  error: null,
  isLogin: false,
  id: null,
  email: null,
  gender: null,
  ageRange: null,
  profileImageUrl: null,
  nickname: null,
};

export const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAccountInfoThunk.pending, (state, action) => {
        // 1. 요청 최초
        return {
          ...state,
          loading: true,
          error: null,
        };
      })
      .addCase(
        fetchAccountInfoThunk.fulfilled,
        (state, { payload: { user } }) => {
          // 2-1. 요청 성공
          return {
            ...user,
            loading: false,
            error: null,
            isLogin: true,
          };
        }
      )
      .addCase(fetchAccountInfoThunk.rejected, (state, action) => {
        // 2-2. 요청 실패
        console.log("rejected", action);
        return {
          ...state,
          loading: false,
          error: action.error.message || null,
        };
      });
  },
});

export default accountSlice.reducer;
