import {
  ADD_COMMENT,
  COMMENT_ERROR,
  COMMENT_LOADING,
  GET_COMMENT,
} from "../constants/action";

const initialState = {
  comments: [],
  comment: null,
  isLoading: false,
  error: {},
  
};

const CommentReducers = (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case COMMENT_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case GET_COMMENT:
      return {
        ...state,
        comments: payload,
        isLoading: false,
      };
    case ADD_COMMENT:
      return {
        ...state,
        comments: payload,
        isLoading: false,
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
