import axios from "axios";
import {
  ACTIVITY_ERROR,
  ACTIVITY_LOADING,
  GET_ACTIVITY,
} from "../constants/action";
export const geActivity = () => async (dispatch) => {
  dispatch({
    type: ACTIVITY_LOADING,
  });

  try {
    const res = await axios.get(`/api/users//activity/me`);
    dispatch({
      type: GET_ACTIVITY,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: ACTIVITY_ERROR,
      payload: err,
    });
  }
};
