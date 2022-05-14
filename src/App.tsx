import React from "react";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import BottomNavigation from "./components/BottomNavigation";
import { initAuth, setAuth } from "./context/auth/local-storage/util";
import { checkAuth } from "./api/auth";
// import { ReactComponent as Loader } from "./assets/loader.svg";
import TopBar from "./components/TopWriteBar";
import Loading from "./components/Loading";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // 최초 실행시 실행
    // 로그인 되었는지 여부 체크 및 기타 초기화 작업
    checkAuth().then((result) => {
      if (result.isLogin === true) {
        setAuth({
          isLogin: true,
          ...result.user,
        });
      } else {
        setAuth(initAuth());
      }
      setLoading(false);
    });
  }, []);

  return loading ? (
    <Loading />
  ) : (
    <>
      <TopBar />
      <Outlet /> {/* <App /> 하위 계층에 있는 모든 Route들  */}
      <BottomNavigation />
    </>
  );
}

export default App;
