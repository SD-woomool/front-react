import React from "react";
import { store } from "./context/store";
import { Provider } from "react-redux";
import Router from "./Router";
import { createRoot } from "react-dom/client";

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(
  <Provider store={store}>
    <Router />
  </Provider>
);
