export function fakeFetch(url, data, timeout = 200) {
  return new Promise(function (resolve) {
    setTimeout(() => resolve(data), timeout);
  });
}
