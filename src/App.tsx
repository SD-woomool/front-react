import BottomNavigation from "./components/BottomNavigation";
import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import makeServer from "./api/mockServer";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./context/store";
import { fetchAccountInfoThunk } from "./context/reducer/accountReducer";

import TopBar from "./components/TopWriteBar";
import Loading from "./components/Loading";
import { putMessageThunk } from "./context/reducer/messageReducer";

makeServer(process.env.NODE_ENV);

function App() {
  const isLoading = useSelector<RootState>((state) => state.account.loading);
  const dispatch = useDispatch<AppDispatch>();
  const message = useSelector<RootState>((state) => state.message);
  console.log(message);
  useEffect(() => {
    // 최초 실행시 한번만 실행, 유저 정보를 가져온다.
    dispatch(fetchAccountInfoThunk());
    dispatch(putMessageThunk({ message: "temp", timeout: 1000 }));
  }, []);

  return isLoading ? (
    <Loading />
  ) : (
    <>
      <TopBar />
      <Outlet />
      <BottomNavigation />
    </>
  );
}

export default App;
