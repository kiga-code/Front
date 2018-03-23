import { CHAT_BOT } from "../actions/actionTypes";

const initialState = {
  data: {},
  error: null
};

export default function chatReducer(state = initialState, action) {
  switch (action.type) {
    case CHAT_BOT:
      return {
        ...state,
        data: action.payload
      };

    default:
      return state;
  }
}
