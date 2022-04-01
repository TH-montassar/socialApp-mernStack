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

const initialState = {
  relationships: [],
  relationship: null,
  users: [],
  isLoading: false,
  error: {},
};
const RelationshipsReducers = (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    /* Returning the state of the reducer. */
    case RELATIONSHIP_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case ALL_USERS:
      return {
        ...state,
        users: payload,
        isLoading: false,
      };

    case GET_RELATIONSHIP:
      return {
        ...state,
        relationships: payload,
        isLoading: false,
      };
    case ACCEPT_FRIENDS:
      return {
        ...state,
        relationship: payload,
        isLoading: false,
      };
      case BLOCK_FRIEND:
        return {
          ...state,
          relationship: payload,
          isLoading: false,
        };
    case REJECT_FRIENDS:
      return {
        ...state,
        relationship: payload,
        isLoading: false,
      };
    case ADD_FRIEND:
      return {
        ...state,
        relationship: payload,
        isLoading: false,
      };

    case RELATIONSHIP_ERROR:
      return {
        ...state,
        isLoading: false,
        relationships: [],
        relationship: null,
        error: payload,
      };
    default:
      return state;
  }
};
/* Exporting the reducer function. */
export default RelationshipsReducers;
