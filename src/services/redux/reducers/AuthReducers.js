import { FCB_AUTH, FCB_AUTH_FAILED, LOGOUT } from "../actions/actionTypes";

const initialState = {
  token: localStorage.getItem("accessToken")
    ? localStorage.getItem("accessToken")
    : null,
  done: false,
  firstName: localStorage.getItem("firstName"),
  lastName: localStorage.getItem("lastName"),
  facebookId: localStorage.getItem("facebookId"),
  user: JSON.parse(localStorage.getItem("user"))
    ? JSON.parse(localStorage.getItem("user"))
    : null,
  error: null
};

export default function authReducers(state = initialState, action) {
  switch (action.type) {
    case FCB_AUTH:
      return {
        ...state,
        done: true,
        data: action.payload,
        token: action.payload.token,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        facebookId: action.payload.facebookId
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
