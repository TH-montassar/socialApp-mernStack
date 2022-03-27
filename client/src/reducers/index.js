import { combineReducers } from "redux";
import authReducers from "./auth.reducers";
import postReducers from "./post.reducers";
import commentReducers from "./comment.reducers";
import profileReducers from "./profile.reducers";

export default combineReducers({
  authReducers,
  postReducers,
  commentReducers,
  profileReducers,
});
