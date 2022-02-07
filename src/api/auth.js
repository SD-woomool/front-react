import { fakeFetch } from "./util";

const backendUrl = process.env.REACT_APP_BACKEND_URL || "http://localhost:8080";

function addBackendUrl(url) {
  return backendUrl + url;
}

export function checkAuth() {
  return fakeFetch(addBackendUrl("/auth"), { data: { isLogin: true } });
}
