import { CHAT_BOT, CHAT_BOT_SEND } from "../actions/actionTypes";

const initialState = {
  data: {},
  value: [],
  error: null
};

export default function chatReducer(state = initialState, action) {
  switch (action.type) {
    case CHAT_BOT:
      return {
        ...state,
        data: action.payload,
        value: action.payload.value
      };
    case CHAT_BOT_SEND:
      return {
        ...state,
        value: state.value.concat(action.payload)
      };
    default:
      return state;
  }
}
