import axios from "axios";
import {
  ADD_REACTION,
  GET_REACTION,
  REACTION_ERROR,
  REACTION_LOADING,
} from "../constants/action";

export const getReactions = (id, reaction) => async (dispatch) => {
  dispatch({
    type: REACTION_LOADING,
  });
  try {
    const res = await axios.get(`/api/posts/${id}/reactions/count/${reaction}`);
    dispatch({
      type: GET_REACTION,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: REACTION_ERROR,
      payload: err,
    });
  }
};

export const AddReaction = (id, reaction) => async (dispatch) => {
  dispatch({
    type: REACTION_LOADING,
  });
  try {
    const res = await axios.post(`/api/posts/${id}/reactions/${reaction}`);
    dispatch({
      type: ADD_REACTION,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: REACTION_ERROR,
      payload: err,
    });
  }
};
