import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import accountSlice from "./accountReducer";
import * as api from "../../api/accountApi";

export const putMessageThunk = createAsyncThunk(
  "message/putMessageThunk",
  () => {
    // return new Promise<number>((resolve) =>
    //   setTimeout(() => {
    //     resolve(500);
    //   }, 500)
    // );
    return api.fetchAccountInfo();
  }
);

export const messageSlice = createSlice({
  name: "message",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(putMessageThunk.pending, (state, action) => {
        console.log("pending", state, action);
        return state;
      })
      .addCase(putMessageThunk.fulfilled, (state, action) => {
        console.log("fulfilled", state, action);
        return state;
      });
  },
});

export default messageSlice.reducer;
