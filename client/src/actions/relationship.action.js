import axios from "axios";
import {
  ACCEPT_FRIENDS,
  GET_RELATIONSHIP,
  RELATIONSHIP_ERROR,
  RELATIONSHIP_LOADING,
} from "../constants/action";
export const getRelationship = (query) => async (dispatch) => {
  dispatch({
    type: RELATIONSHIP_LOADING,
  });
  /* This is to create a query string for the url. */
  let queryString = "?";
  for (const key in query) {
    queryString += key + "=" + query[key] + "&";
  }
  //*output
  //* ?status=friends
  console.log("form Relationship action" + queryString);
  try {
    //* parse your queryString in url
    const res = await axios.get(`/api/users/relationships${queryString}`);
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
export const acceptFriendRequest = (idRelationship) => async (dispatch) => {
  dispatch({
    type: RELATIONSHIP_LOADING,
  });

  try {
    //* parse your queryString in url
    const res = await axios.put(
      `/api/users/relationships/${idRelationship}/accept`
    );
    dispatch({
      type: ACCEPT_FRIENDS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: RELATIONSHIP_ERROR,
      payload: err,
    });
  }
};
