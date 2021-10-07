import { SET_USER, SET_AUTH } from "store/actions";

export const setUser = (user) => {
  return { type: SET_USER, payload: user };
};

export const setAuth = (isAuth) => {
  return { type: SET_AUTH, payload: isAuth };
};
