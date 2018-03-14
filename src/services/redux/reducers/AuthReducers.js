import { FCB_AUTH, FCB_AUTH_FAILED, LOGOUT } from "../actions/actionTypes";

const initialState = {
  token: localStorage.getItem("accessToken")
    ? localStorage.getItem("acessToken")
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
        data: action.paylaod,
        token: action.paylaod.token
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
