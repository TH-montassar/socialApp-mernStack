import axios from "axios";
import {
  GET_MY_PROFILE,
  PROFILE_ERROR,
  PROFILE_LOADING,
} from "../constants/action";

export const getMyProfile = () => async (dispatch) => {
  dispatch({
    type: PROFILE_LOADING,
  });
  try {
    const res = await axios.get("/api/users/Profile/me");
    dispatch({
      type: GET_MY_PROFILE,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: err,
    });
  }
};
