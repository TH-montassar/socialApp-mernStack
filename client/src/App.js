/* This is the code that imports the React library and the React-Router library. */
import React from "react";
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

const App = () => {
  /* This is a React Hook that returns the current location of the user. */
  // const location = useLocation();
  // const queries = new URLSearchParams(location.search);
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/register" element={<Register />}></Route>
          <Route path="*" element={<ErrorPage />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </Provider>
  );
};

export default App;
