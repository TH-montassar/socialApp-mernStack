import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { login } from "../../actions/auth.action";
import logo from "../../assets/images/wink.png";
import Spinner from "../../shared/Spinner";

const Login = () => {
  const dispatch = useDispatch();

  const [Form, setForm] = useState({
    email: "",
    password: "",
  });
  //* fonction te5o mel input wo t5abi fi sate
  const onInputChange = (e) => {
    e.preventDefault(); //man5alouch navigateur ya3mel relode
    setForm({ ...Form, [e.target.name]: e.target.value });
    console.log(Form);
  };
  const OnSubmitForm = (e) => {
    e.preventDefault(); //man5alouch navigateur ya3mel relode
    dispatch(login(Form));
    setForm({
      email: "",
      password: "",
    });
  };
  const { isLoading, isAuthenticated } = useSelector((state) => {
    return state.authReducers;
  });
  if (isAuthenticated) {
    return <Navigate to={"/"} />;
  }
  return isLoading ? (
    <Spinner />
  ) : (
    <div className="theme-layout">
      <div className="container-fluid pdng0">
        <div className="row merged">
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
            <div className="land-featurearea">
              <div className="land-meta">
                <h1>Winku</h1>
                <p>
                  Winku is free to use for as long as you want with two active
                  projects.
                </p>
                <div className="friend-logo">
                  <span>
                    <img src={logo} alt="" />
                  </span>
                </div>
                <a href="#" title="" className="folow-me">
                  Follow Us on
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
            <div className="login-reg-bg">
              <div className="log-reg-area sign">
                <h2 className="log-title">Login</h2>
                <p>
                  Don’t use Winku Yet?{" "}
                  <a href="#" title="">
                    Take the tour
                  </a>{" "}
                  or{" "}
                  <a href="#" title="">
                    Join now
                  </a>
                </p>
                <form onSubmit={(e) => OnSubmitForm(e)}>
                  <div className="form-group">
                    <input
                      onChange={(e) => onInputChange(e)}
                      value={Form.email}
                      type="email"
                      name="email"
                      id="email"
                      autoComplete="email"
                      required
                    />
                    <label className="control-label" htmlFor="email">
                      email
                    </label>
                    <i className="mtrl-select"></i>
                  </div>

                  <div className="form-group">
                    <input
                      onChange={(e) => onInputChange(e)}
                      value={Form.password}
                      name="password"
                      type="password"
                      id="password"
                      required
                    />
                    <label className="control-label" htmlFor="password">
                      Password
                    </label>
                    <i className="mtrl-select"></i>
                  </div>
                  <div className="checkbox">
                    <label>
                      <input type="checkbox" checked="checked" />
                      <i className="check-box"></i>Always Remember Me.
                    </label>
                  </div>
                  <a href="#" title="" className="forgot-pwd">
                    Forgot Password?
                  </a>
                  <div className="submit-btns">
                    <button className="mtr-btn signin" type="submit">
                      <span>Login</span>
                    </button>

                    <Link to="/register" className="mtr-btn signup">
                      <span>Register</span>
                    </Link>
                  </div>
                </form>
              </div>
              <div className="log-reg-area reg">
                <h2 className="log-title">Register</h2>
                <p>
                  Don’t use Winku Yet?{" "}
                  <a href="#" title="">
                    Take the tour
                  </a>{" "}
                  or{" "}
                  <a href="#" title="">
                    Join now
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
