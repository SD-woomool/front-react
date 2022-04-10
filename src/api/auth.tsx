import { addBackendUrl, fakeFetch } from "./util";

interface IResult {
  isLogin: boolean;
  user: object;
}

export function checkAuth(): Promise<IResult> {
  return fakeFetch(addBackendUrl("/auth"), { data: { isLogin: true } });
}
