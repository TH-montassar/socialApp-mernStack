import axios from "axios";
import { ADD_COMMENT, COMMENT_ERROR, GET_COMMENT } from "../constants/action";
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
export const createComment = (id, data) => async (dispatch) => {
  try {
    const res = await axios.poste(`/api/posts/${id}/comments`, data, {
      headers: { "Content-Type": "application/json" },
    });
    dispatch({
      type: ADD_COMMENT,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: COMMENT_ERROR,
      payload: err,
    });
  }
};
