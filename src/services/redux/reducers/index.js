import { combineReducers } from "redux";
import authReducers from "./AuthReducers";
import chatReducers from "./ChatReducers";

export default combineReducers({
  auth: authReducers,
  chat: chatReducers
});
