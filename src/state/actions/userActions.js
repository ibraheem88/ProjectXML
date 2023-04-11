export const SET_USER_INFO = 'user/setUserInfo';
export const SET_First_Time = 'user/setFirstTime';

export function setUserInfo(userData) {
  return {
    type: SET_USER_INFO,
    payload: userData,
  };
}

export function setFirstTime(boolean) {
  return {
    type: SET_First_Time,
    payload: boolean,
  };
}