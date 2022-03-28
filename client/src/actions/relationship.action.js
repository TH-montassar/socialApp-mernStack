import axios from "axios";
import {
  GET_RELATIONSHIP,
  RELATIONSHIP_ERROR,
  RELATIONSHIP_LOADING,
} from "../constants/action";
export const getRelationship = () => async (dispatch) => {
  dispatch({
    type: RELATIONSHIP_LOADING,
  });
  try {
    const res = await axios.get(`/api/users/relationships`);
    dispatch({
      type: GET_RELATIONSHIP,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: RELATIONSHIP_ERROR,
      payload: err,
    });
  }
};
