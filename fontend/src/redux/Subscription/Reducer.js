import * as actionTypes from "./ActionTypes";

const initialState = {
  userSubcription: null,
  loading: false,
  error: null,
};

const subscriptionReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_USER_SUBCRIPTION_REQUEST:
    case actionTypes.UPGRADE_SUBCRIPTION_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case actionTypes.GET_USER_SUBCRIPTION_SUCCESS:
      return {
        ...state,
        userSubcription: action.payload,
        loading: false,
        issues: action.issues,
      };
    case actionTypes.UPGRADE_SUBCRIPTION_SUCCESS:
      return {
        ...state,
        userSubcription: action.payload,
        loading: false,
        issueDetails: action.issues,
      };
    case actionTypes.GET_USER_SUBCRIPTION_FAILURE:
    case actionTypes.UPGRADE_SUBCRIPTION_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default subscriptionReducer;
