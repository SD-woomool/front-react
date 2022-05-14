export function fakeFetch(
  url: string,
  data: object,
  timeout = 200
): Promise<any> {
  return new Promise(function (resolve) {
    setTimeout(() => resolve(data), timeout);
  });
}

export const backendUrl = process.env.REACT_APP_BACKEND_URL || "/api";
