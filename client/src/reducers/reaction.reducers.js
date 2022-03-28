/* Importing the constants from the action file. */
import {
  ADD_REACTION,
  GET_REACTION,
  REACTION_ERROR,
} from "../constants/action";

/* This is the initial state of the reducer. */
const initialState = {
  reactions: null,
  reaction: null,
  error: {},
};

const ReactionReducers = (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    /* Returning the state of the reducer. */
    case GET_REACTION:
      return {
        ...state,
        reactions: payload,
      };

    case ADD_REACTION:
      return {
        ...state,
        reaction: payload,
      };

    case REACTION_ERROR:
      return {
        ...state,

        reactions: null,
        error: payload,
      };
    default:
      return state;
  }
};
/* Exporting the reducer function. */
export default ReactionReducers;
