import { FCB_AUTH, FCB_AUTH_FAILED, LOGOUT } from "../actions/actionTypes";

const initialState = {
  token: localStorage.getItem("acess-token")
    ? localStorage.getItem("acess-token")
    : null,
  done: false,
  error: null
};

export default function authReducers(state = initialState, action) {
  switch (action.type) {
    case FCB_AUTH:
      return {
        ...state,
        done: true,
        token: action.payload.token,
        data: action.paylaod
      };
    case FCB_AUTH_FAILED:
      return {
        ...state,
        erro: action.payload
      };
    case LOGOUT:
      localStorage.clear();
      return initialState;

    default:
      return state;
  }
}
