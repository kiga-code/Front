import { combineReducers } from "redux";
import authReducers from "./AuthReducers";
import chatReducers from "./ChatReducers";
import heartBeatsReducers from "./HeartBeatsReducer";

export default combineReducers({
  auth: authReducers,
  chat: chatReducers,
  heart: heartBeatsReducers
});
