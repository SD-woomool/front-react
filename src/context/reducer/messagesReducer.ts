const SET_MESSAGE = "SET_MESSAGE";
const RESET_MESSAGE = "RESET_MESSAGE";

// 얜 뭐야
export function setMessage(message, messageType, timeout = 3000) {
  return (dispatch) => {
    const messageId = Date.now();
    dispatch({
      type: SET_MESSAGE,
      message,
      messageType,
      timeout,
      id: messageId,
    });
    setTimeout(() => dispatch({ type: RESET_MESSAGE, id: messageId }), timeout);
  };
}

const initialState = [];

function messageReducer(state = initialState, action) {
  switch (action.type) {
    case SET_MESSAGE:
      return [
        ...state,
        {
          message: action.message,
          messageType: action.messageType,
          timeout: action.timeout,
          id: action.id,
        },
      ];
    case RESET_MESSAGE:
      return state.filter((m) => m.id !== action.id);
    default:
      return state;
  }
}

export default messageReducer;
