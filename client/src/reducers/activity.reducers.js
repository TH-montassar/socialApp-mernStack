import {
  ACTIVITY_ERROR,
  ACTIVITY_LOADING,
  GET_ACTIVITY,
} from "../constants/action";

const initialState = {
  activities: [],
  error: {},
  isLoading: false,
  isAuthenticated: false,
};
const ActivityReducers = (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case ACTIVITY_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case GET_ACTIVITY:
      return {
        ...state,
        activities: payload,
        isLoading: false,
      };

    case ACTIVITY_ERROR:
      return {
        ...state,
        isLoading: false,
        activities: [],
        error: payload,
      };

    default:
      return state;
  }
};
export default ActivityReducers;
