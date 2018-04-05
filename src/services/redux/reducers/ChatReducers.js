import { CHAT_BOT, CHAT_BOT_SEND } from "../actions/actionTypes";

const initialState = {
  data: {},
  value: [],
  error: null,
  chat: [],
  user:[]
};

export default function chatReducer(state = initialState, action) {
  switch (action.type) {
    case CHAT_BOT_SEND:
      return {
        ...state,
        user: state.chat.concat(action.payload)
      }
    case CHAT_BOT:
      return {
        ...state,
        data: action.payload,
        value: action.payload.value,
        chat: state.chat.concat(
          action.payload.value.map(value => value)
        )
      };
    default:
      return state;
  }
}
