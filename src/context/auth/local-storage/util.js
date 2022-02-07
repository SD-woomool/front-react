const AUTH_KEY = "auth";

/**
 * object가 null 이거나 undefined인지 확인하는 함수
 * @param obj
 * @returns {boolean}
 */
function isEmpty(obj) {
  return obj === null || obj === undefined;
}

/**
 * auth 초기값을 설정한다.
 * isLogin: 현재 로그인이 되어있는지 여부
 * id: 로그인 되어있는 유저의 고유 id
 * nickname: 로그인 되어있는 유저의 nickname
 * @returns {{isLogin: boolean, nickname: null, id: null}}
 */
export function initAuth() {
  return {
    id: null,
    nickname: null,
    isLogin: false,
  };
}

/**
 * sessionStorage에서 auth 정보를 가져온다.
 * 만약 없으면 초기화하고 다시 저장해둔다.
 * @returns {{isLogin: boolean, nickname: string|null, id: number|null}|null}
 */
export function loadAuth() {
  const auth = sessionStorage.getItem(AUTH_KEY);
  if (isEmpty(auth)) {
    return null;
  }
  return JSON.parse(auth);
}

/**
 * sessionStorage에 auth를 저장한다.
 * @param auth: {isLogin: boolean, nickname: string|null, id: number|null}
 */
export function setAuth(auth) {
  if (isEmpty(auth)) {
    return;
  }
  sessionStorage.setItem(
    AUTH_KEY,
    JSON.stringify({
      isLogin: auth.isLogin || false,
      nickname: auth.isLogin || null,
      number: auth.isLogin || null,
    })
  );
}
