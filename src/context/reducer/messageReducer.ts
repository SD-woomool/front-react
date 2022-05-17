import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const putMessageThunk = createAsyncThunk(
  "message/putMessageThunk",
  ({ message, timeout }: { message: string; timeout: number }) => {
    return new Promise<number>((resolve) => {
      setTimeout(() => {
        resolve(timeout);
      }, timeout);
    });
  }
);

export const messageSlice = createSlice({
  name: "message",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(putMessageThunk.pending, (state, action) => {
        console.log(state, action);
        return [
          ...state,
          {
            id: action.meta.requestId,
            message: action.meta.arg.message,
            timeout: action.meta.arg.timeout,
          },
        ];
      })
      .addCase(putMessageThunk.fulfilled, (state, action) => {
        return state.filter((el) => el.id !== action.meta.requestId);
      });
  },
});

export default messageSlice.reducer;
