import AuthService from "api/AuthService";
import { setAuth, setUser } from "store/actionCreators/userActionCreator";

export const signIn = ({ email, password }) => {
  return async (dispatch) => {
    try {
      const response = await AuthService.signIn({ email, password });
      dispatch(setUser(response.data.user));
      localStorage.setItem("token", response.data.accessToken);
      dispatch(setAuth(true));
      console.log(response.data);
    } catch (e) {
      alert(e.message);
    }
  };
};

export const signUp = ({ email, password }) => {
  return async (dispatch) => {
    try {
      const response = await AuthService.signUp({ email, password });
      dispatch(setUser(response.data.user));
      localStorage.setItem("token", response.data.accessToken);
      dispatch(setAuth(true));
    } catch {}
  };
};

export const logout = () => {
  return async (dispatch) => {
    try {
      await AuthService.logout();
      dispatch(setUser());
      localStorage.removeItem("token");
      dispatch(setAuth(false));
    } catch {}
  };
};

export const checkAuth = () => {
  return async (dispatch) => {
    try {
      const response = await AuthService.checkAuth();
      dispatch(setUser(response.data.user));
      localStorage.setItem("token", response.data.accessToken);
      dispatch(setAuth(true));
    } catch {}
  };
};
