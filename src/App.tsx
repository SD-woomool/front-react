import BottomNavigation from "./components/BottomNavigation";
import React, { useEffect } from "react";
import { ReactComponent as Loader } from "./assets/loader.svg";
import makeServer from "./api/mockServer";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./context/store";
import { fetchAccountInfoThunk } from "./context/reducer/accountReducer";

makeServer(process.env.NODE_ENV);

function App() {
  const isLoading = useSelector<RootState>((state) => state.account.loading);
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    // 최초 실행시 한번만 실행, 유저 정보를 가져온다.
    dispatch(fetchAccountInfoThunk());
  }, []);

  return isLoading ? <Loader width="40" height="40" /> : <BottomNavigation />;
}

export default App;
