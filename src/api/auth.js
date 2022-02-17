import { addBackendUrl, fakeFetch } from "./util";

export function checkAuth() {
  return fakeFetch(addBackendUrl("/auth"), { data: { isLogin: true } });
}
