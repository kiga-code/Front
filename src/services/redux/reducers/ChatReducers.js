import { CHAT_BOT, CHAT_BOT_SEND } from "../actions/actionTypes";

const initialState = {
  data: {},
  value: [],
  error: null,
  chat: [],
  user: []
};

export default function chatReducer(state = initialState, action) {
  switch (action.type) {
    case CHAT_BOT_SEND:
      return {
        ...state,
        user: state.user.concat(action.payload)
      };
    case CHAT_BOT:
      const chat = {};
      const chatList = state.chat.concat(
        action.payload.value.map(value => value)
      );
      chatList.forEach(item => (chat[item.id] = item));
      return {
        ...state,
        data: action.payload,
        value: action.payload.value,
        chat: state.chat.concat(action.payload.value.map(value => value))
      };
    default:
      return state;
  }
}
