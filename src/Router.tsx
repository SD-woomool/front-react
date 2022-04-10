import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import React from "react";
import Home from "./pages/Home";
import Community from "./pages/Community";
import Account from "./pages/Account";
import Test from "./pages/Test";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route element={<Test />} path="style" />
          <Route index element={<Home />} />
          <Route path="community">
            <Route index element={<Community />} />
          </Route>
          <Route path="account">
            <Route index element={<Account />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
