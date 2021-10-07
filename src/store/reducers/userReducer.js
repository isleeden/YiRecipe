import { SET_USER, SET_AUTH } from "store/actions";

const defaultState = {
  currentUser: {},
  isAuth: false,
};

export default function userReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_USER:
      return { ...state, currentUser: action.payload };
    case SET_AUTH:
      return { ...state, isAuth: action.payload };
    default:
      return state;
  }
}
