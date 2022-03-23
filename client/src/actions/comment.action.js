import axios from "axios";
import { COMMENT_ERROR, GET_COMMENT } from "../constants/action";
export const getComment = () => async (dispatch) => {
  try {
    const res = await axios.get(`/api/posts/comments`);
    dispatch({
      type: GET_COMMENT,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: COMMENT_ERROR,
      payload: err,
    });
  }
};
