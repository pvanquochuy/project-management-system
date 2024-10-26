import * as actionTypes from "./ActionTypes";

const initialState = {
  messages: [],
  loading: false,
  error: null,
  chat: null,
};

const chatReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_MESSAGE_REQUEST:
    case actionTypes.SEND_MESSAGE_REQUEST:
    case actionTypes.FETCH_CHAT_MESSAGE_REQUEST:
      return { ...state, loading: true, error: null };

    case actionTypes.FETCH_MESSAGES_SUCCESS:
    case actionTypes.FETCH_CHAT_MESSAGE_SUCCESS:
      return { ...state, loading: false, messages: action.message };

    case actionTypes.SEND_MESSAGE_SUCCESS:
      return {
        ...state,
        loading: false,
        messages: [...state.messages, action.message],
      };
    case actionTypes.FETCH_CHAT_BY_PROJECT_SUCCESS:
      return {
        ...state,
        loading: false,
        chat: action.chat,
      };
    case actionTypes.FETCH_MESSAGES_FAILURE:
    case actionTypes.SEND_MESSAGE_FAILURE:
    case actionTypes.FETCH_CHAT_MESSAGE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    default:
      return state;
  }
};

export default chatReducer;
