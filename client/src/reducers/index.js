import { combineReducers } from "redux";
import authReducers from "./auth.reducers";
import postReducers from "./post.reducers";
import commentReducers from "./comment.reducers";
import profileReducers from "./profile.reducers";
import reactionReducers from "./reaction.reducers";
import relationshipsReducers from "./relationships.reducers";
import activityReducers from "./activity.reducers";
export default combineReducers({
  authReducers,
  postReducers,
  commentReducers,
  profileReducers,
  reactionReducers,
  relationshipsReducers,
  activityReducers,
});
