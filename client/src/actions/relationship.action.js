import axios from "axios";
import {
  ACCEPT_FRIENDS,
  ADD_FRIEND,
  ALL_USERS,
  BLOCK_FRIEND,
  GET_RELATIONSHIP,
  REJECT_FRIENDS,
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

export const sendFriendRequest = (userId) => async (dispatch) => {
  dispatch({
    type: RELATIONSHIP_LOADING,
  });
  try {
    const res = await axios.post(
      `/api/users/${userId}/relationships/addFriend`
    );
    dispatch({
      type: ADD_FRIEND,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: RELATIONSHIP_ERROR,
      payload: err,
    });
  }
};

export const rejectFriendRequest = (idRelationship) => async (dispatch) => {
  try {
    const res = await axios.delete(
      `/api/users/relationships/${idRelationship}/reject`
    );
    dispatch({
      type: REJECT_FRIENDS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: RELATIONSHIP_ERROR,
      payload: err,
    });
  }
};
export const blockFriendReq = (idRelationship) => async (dispatch) => {
  dispatch({
    type: RELATIONSHIP_LOADING,
  });
  try {
    const res = await axios.put(
      `/api/users/relationships/${idRelationship}/block`
    );
    dispatch({
      type: BLOCK_FRIEND,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: RELATIONSHIP_ERROR,
      payload: err,
    });
  }
};

export const getUsers = () => async (dispatch) => {
  dispatch({
    type: RELATIONSHIP_LOADING,
  });
  try {
    const res = await axios.get(`/api/users/AllUser`);
    dispatch({
      type: ALL_USERS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: RELATIONSHIP_ERROR,
      payload: err,
    });
  }
};
