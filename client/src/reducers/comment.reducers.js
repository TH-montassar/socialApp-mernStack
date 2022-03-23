import { COMMENT_ERROR, GET_COMMENT } from "../constants/action";

const initialState = {
  comments: [],
  comment: null,
  isLoading: false,
  error: {},
};

const CommentReducers = (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case GET_COMMENT:
      return {
        ...state,
        comments: payload,
      };
    case COMMENT_ERROR:
      return {
        ...state,
        isLoading: false,
        comments: [],
        comment: null,
        error: payload,
      };

    default:
      return state;
  }
};
export default CommentReducers;
