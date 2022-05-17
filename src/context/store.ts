import { configureStore } from "@reduxjs/toolkit";
import accountReducer from "./reducer/accountReducer";
import messageReducer from "./reducer/messageReducer";

export const store = configureStore({
  reducer: {
    account: accountReducer,
    message: messageReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
