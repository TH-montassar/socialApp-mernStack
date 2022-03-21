import { AUTH_ERROR, LOGIN, REGISTER } from "../constants/action";

const initialSate = {
  token: localStorage.getItem("token"),
  user: null,
  error: {},
  loading: false,
  isAuthenticated: false,
};

const AuthReducers = (state = initialSate, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOGIN:
      return {
        ...state,
        user: payload.user,
        token: payload.token,
        isAuthenticated: true,
      };

    case REGISTER:
      return {
        ...state,
        user: payload,
      };
    case AUTH_ERROR:
      localStorage.removeItem("token");
      return {
        user: null,
        token: null,
        isAuthenticated: false,
        error: payload,
      };

    default:
      return state;
  }
};
export default AuthReducers;
