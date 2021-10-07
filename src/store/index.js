import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import userReducer from "./reducers/userReducer";

const rootReducer = combineReducers({
  user: userReducer,
});

export default createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
