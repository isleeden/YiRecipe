import React, { useEffect } from "react";
import AppRouter from "components/AppRouter";
import "styles/main.scss";
import { checkAuth } from "store/thunks/userThunks";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(checkAuth());
    }
  }, []);

  return <AppRouter></AppRouter>;
}

export default App;
