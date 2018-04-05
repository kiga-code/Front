import {
  FCB_AUTH,
  FCB_AUTH_FAILED,
  LOGOUT,
  USER
} from "../actions/actionTypes";

const initialState = {
  token: localStorage.getItem("accessToken"),
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

    case USER:
      return {
        ...state,
        user: action.payload
      };
    case FCB_AUTH_FAILED:
      return {
        ...state,
        erro: action.payload
      };
    case LOGOUT:
      localStorage.clear();
      console.log("genesis", initialState);
      return {};

    default:
      return state;
  }
}
