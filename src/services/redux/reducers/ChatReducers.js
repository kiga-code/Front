import { CHAT_BOT } from "../actions/actionTypes";

const initialState = {
  data: {},
  value: [],
  error: null,
  chat: []
};

export default function chatReducer(state = initialState, action) {
  switch (action.type) {
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
