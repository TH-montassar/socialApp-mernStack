import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import "./assert/style/color.css";
import "./assert/style/main.min.css.css";
import "./assert/style/responsive.css";
import "./assert/style/style.css";

import Register from "./pages/Register";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/register" element={<Register />}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
