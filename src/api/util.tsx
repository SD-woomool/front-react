export function fakeFetch(
  url: string,
  data: object,
  timeout = 200
): Promise<any> {
  return new Promise(function (resolve) {
    setTimeout(() => resolve(data), timeout);
  });
}

const backendUrl = process.env.REACT_APP_BACKEND_URL || "http://localhost:8080";

export function addBackendUrl(url: string) {
  return backendUrl + url;
}
