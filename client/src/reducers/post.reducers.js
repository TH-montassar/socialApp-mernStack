/* Importing the constants from the action file. */
import {
  GET_POST,
  GET_POST_WITH_COMMENT,
  POST_ERROR,
} from "../constants/action";

/* This is the initial state of the reducer. */
const initialState = {
  posts: [],
  post: null,
  isLoading: false,
  error: {},
};

/**
 * The reducer function takes the state and an action as arguments. 
 * It returns the new state
 * @param [state] - The state of the reducer.
 * @param action - The action that is being dispatched.
 * @returns The state of the reducer.
 */
const PostReducers = (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    /* Returning the state of the reducer. */
    case GET_POST:
      return {
        ...state,
        //*payload. 3ibara reponce mmta3 postman
        posts: payload,
      };



    case GET_POST_WITH_COMMENT:
      return {
        ...state,
        //*payload. 3ibara reponce mmta3 postman
        posts: payload,
      };


    case POST_ERROR:
      return {
        ...state,
        isLoading: false,
        posts: [],
        post: null,
        error: payload,
      };

    default:
      return state;
  }
};
/* Exporting the reducer function. */
export default PostReducers;
