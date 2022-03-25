import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { register } from "../../actions/auth.action";
import logo from "../../assets/images/wink.png";
import Spinner from "../../shared/Spinner";
const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [Form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    number: "",
    confirmPassword: "",
  });
  //* fonction te5o mel input wo t5abi fi sate
  const onInputChange = (e) => {
    e.preventDefault(); //man5alouch navigateur ya3mel relode

    setForm({ ...Form, [e.target.name]: e.target.value });
  };

  //call  auth action and send data from th form
  const onSubmitForm = (e) => {
    e.preventDefault();
    dispatch(register(Form));
    //ba3ed maykamel yraja formul fer8a
    setForm({
      ...Form,
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      number: "",
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
                <h1>socialM</h1>
                <p>
                  socialM is free to use for as long as you want with two active
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
                <h2 className="log-title">Register</h2>
                <p>
                  Don’t usesocialM Yet?{" "}
                  <a href="#" title="">
                    Take the tour
                  </a>{" "}
                  or{" "}
                  <a href="#" title="">
                    Join now
                  </a>
                </p>
                {/* --- */}

                <form onSubmit={(e) => onSubmitForm(e)}>
                  <div className="form-group">
                    <input
                      autoComplete="text"
                      onChange={(e) => onInputChange(e)}
                      value={Form.firstName}
                      type="text"
                      name="firstName"
                      id="firstName"
                      required
                    />
                    <label className="control-label" htmlFor="input">
                      First Name
                    </label>
                    <i className="mtrl-select"></i>
                  </div>

                  <div className="form-group">
                    <input
                      autoComplete="text"
                      onChange={(e) => onInputChange(e)}
                      value={Form.lastName}
                      type="text"
                      name="lastName"
                      id="lastName"
                      required
                    />
                    <label className="control-label" htmlFor="input">
                      Last Name
                    </label>
                    <i className="mtrl-select"></i>
                  </div>

                  <div className="form-group">
                    <input
                      autoComplete="number"
                      onChange={(e) => onInputChange(e)}
                      value={Form.number}
                      type="number"
                      required
                      name="number"
                      id="number"
                    />
                    <label className="control-label" htmlFor="number">
                      number
                    </label>
                    <i className="mtrl-select"></i>
                  </div>

                  <div className="form-group">
                    <input
                      onChange={(e) => onInputChange(e)}
                      value={Form.password}
                      type="password"
                      required
                      name="password"
                      id="password"
                    />
                    <label className="control-label" htmlFor="password">
                      Password
                    </label>
                    <i className="mtrl-select"></i>
                  </div>

                  <div className="form-group">
                    <input
                      onChange={(e) => onInputChange(e)}
                      value={Form.confirmPassword}
                      type="password"
                      name="confirmPassword"
                      id="confirmPassword"
                      required
                    />
                    <label className="control-label" htmlFor="confirmPassword">
                      confirm Password
                    </label>
                    <i className="mtrl-select"></i>
                  </div>
                  {/* { (Form.confirmPassword !== Form.password)?  (<div>f</div> )   } */}

                  <div className="form-radio">
                    <div className="radio">
                      <label>
                        <input type="radio" name="radio" checked="checked" />
                        <i className="check-box"></i>Male
                      </label>
                    </div>
                    <div className="radio">
                      <label>
                        <input type="radio" name="radio" />
                        <i className="check-box"></i>Female
                      </label>
                    </div>
                  </div>
                  <div className="form-group">
                    <input
                      onChange={(e) => onInputChange(e)}
                      value={Form.email}
                      name="email"
                      id="email"
                      type="email"
                      autoComplete="email"
                      required
                    />
                    <label className="control-label" htmlFor="input">
                      <a
                        href="https://wpkixx.com/cdn-cgi/l/email-protection"
                        className="__cf_email__"
                        data-cfemail="6c29010d05002c"
                      >
                        [email&#160;protected]
                      </a>
                    </label>
                    <i className="mtrl-select"></i>
                  </div>
                  <div className="checkbox">
                    <label>
                      <input type="checkbox" checked="checked" />
                      <i className="check-box"></i>Accept Terms & Conditions ?
                    </label>
                  </div>

                  <Link to="/login" className="already-have">
                    Already have an account
                  </Link>

                  <div className="submit-btns">
                    <button className="mtr-btn signup" type="submit">
                      <span>Register</span>
                    </button>
                  </div>
                </form>

                {/* ---- */}
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

export default Register;
