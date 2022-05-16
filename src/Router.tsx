import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Community from "./pages/Community";
import Account from "./pages/Account";
import App from "./App";
import React from "react";
import Places from "./components/places/Places";
import Write from "./components/write/Write";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="community">
            <Route index element={<Community />} />
          </Route>
          <Route path="account">
            <Route index element={<Account />} />
          </Route>
        </Route>
        <Route path="/community/write">
          <Route index element={<Write />} />
        </Route>
        <Route path="/community/places">
          <Route index element={<Places />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
