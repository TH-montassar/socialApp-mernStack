import {
  GET_MY_PROFILE,
  GET_PROFILE,
  PROFILE_ERROR,
  PROFILE_LOADING,
  UPDATE_PROFILE,
} from "../constants/action";

/* This is the initial state of the reducer. */
const initialState = {
  profiles: [],
  profile: null,
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
const ProfileReducers = (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case PROFILE_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    /* Returning the state of the reducer. */
    case GET_PROFILE:
      return {
        ...state,
        //*payload. 3ibara reponce mmta3 postman
        profile: payload,
        isLoading: false,
      };

    case GET_MY_PROFILE:
      return {
        ...state,
        profile: payload,
        isLoading: false,
      };
    case UPDATE_PROFILE:
      return {
        ...state,
        profile: payload,
        isLoading: false,
      };

    case PROFILE_ERROR:
      return {
        ...state,
        isLoading: false,
        profiles: [],
        profile: null,
        error: payload,
      };

    default:
      return state;
  }
};
/* Exporting the reducer function. */
export default ProfileReducers;
