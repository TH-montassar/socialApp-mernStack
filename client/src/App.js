/* This is the code that imports the React library and the React-Router library. */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Login from "./pages/Login";
import "./assets/style/color.css";
import "./assets/style/main.min.css.css";
import "./assets/style/responsive.css";
import "./assets/style/style.css";

import Register from "./pages/Register";
import Footer from "./shared/Footer";
import Header from "./shared/Header";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Spinner from "./shared/Spinner";
import { setAuthToken } from "./utils/setAuthToken";
import { authcheck, logout } from "./actions/auth.action";
import Users from "./pages/Users";
import Activity from "./pages/Activity";

const App = () => {
  /* This is a React Hook that returns the current location of the user. */
  // const location = useLocation();
  // const queries = new URLSearchParams(location.search);

  /* This is a React Hook that returns the current location of the user. */
  useEffect(() => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }

    store.dispatch(authcheck());

    window.addEventListener("storage", () => {
      if (!localStorage.token) store.dispatch(logout());
    });
  }, []);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/profile/*" element={<Profile />}></Route>
          <Route path="/users" element={<Users />}></Route>
          <Route path="/activity" element={<Activity />}></Route>

          <Route path="*" element={<ErrorPage />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </Provider>
  );
};

export default App;
