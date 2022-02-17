export function fakeFetch(url, data, timeout = 200) {
  return new Promise(function (resolve) {
    setTimeout(() => resolve(data), timeout);
  });
}

const backendUrl = process.env.REACT_APP_BACKEND_URL || "http://localhost:8080";

export function addBackendUrl(url) {
  return backendUrl + url;
}
