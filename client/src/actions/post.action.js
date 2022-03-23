import axios from "axios";
import {
  ADD_POST,
  GET_POST,
  GET_POST_WITH_COMMENT,
  POST_ERROR,
} from "../constants/action";
export const getPosts = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/posts");
    dispatch({
      type: GET_POST,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: err,
    });
  }
};

export const createPost = (data) => async (dispatch) => {
  try {
    const res = await axios.post("/api/posts", data, {
      headers: { "Content-Type": "application/json" },
    });
    dispatch({
      type: ADD_POST,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: err,
    });
  }
};

export const getPostsWithComment = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/posts/getPostsWithComment");
    dispatch({
      type: GET_POST_WITH_COMMENT,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: err,
    });
  }
};
