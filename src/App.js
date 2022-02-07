import { Outlet } from "react-router-dom";
import BottomNavigation from "./components/BottomNavigation";
import { useEffect, useState } from "react";
import { initAuth, setAuth } from "./context/auth/local-storage/util";
import { checkAuth } from "./api/auth";
import { ReactComponent as Loader } from "./assets/loader.svg";

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
    <Loader width="40" height="40" />
  ) : (
    <>
      <Outlet />
      <BottomNavigation />
    </>
  );
}

export default App;
