import {
  AUTH_CHECK,
  AUTH_ERROR,
  AUTH_LOADING,
  LOGIN,
  LOGOUT,
  REGISTER,
} from "../constants/action";

const initialSate = {
  token: localStorage.getItem("token"),
  user: null,
  error: {},
  isLoading: false,
  isAuthenticated: false,
};

const AuthReducers = (state = initialSate, action) => {
  const { type, payload } = action;
  switch (type) {
    case AUTH_LOADING:
      return {
        ...state,
        user: payload,
        isLoading: true,
      };
    case LOGIN:
      return {
        ...state,
        user: payload.user,
        token: payload.token,
        isAuthenticated: true,
        isLoading: false,
      };
    case AUTH_CHECK:
      return {
        ...state,
        user: payload,
        isAuthenticated: true,
        isLoading: false,
      };
    case REGISTER:
      return {
        ...state,
        user: payload,
        isLoading: false,
        isAuthenticated: false,
      };
    case AUTH_ERROR:
      localStorage.removeItem("token");
      return {
        user: null,
        token: null,
        isAuthenticated: false,
        error: payload,
        isLoading: false,
      };
    case LOGOUT:
      localStorage.removeItem("token");
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        token: null,
        isLoading: false,
      };
    default:
      return state;
  }
};
export default AuthReducers;
