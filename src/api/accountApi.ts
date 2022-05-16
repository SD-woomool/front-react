import { backendUrl } from "./util";

interface IResult {
  user: {
    id: number;
    email: string;
    nickname: string;
    ageRange: null | string;
    gender: null | string;
    profileImageUrl: null | string;
  };
}

export function fetchAccountInfo(): Promise<IResult> {
  return fetch(backendUrl + "/account")
    .then((res) => res.json())
    .then((json) => json.data);
}
