import * as Endpoint from "../../api/EndpointAPI";
import axios from "axios";
import { CHAT_BOT, CHAT_BOT_SEND } from "../../redux/actions/actionTypes";

const config = {
  headers: {
    "Content-Type": "application/json",
    accept: "application/json"
  }
};

export const chatBot = data => dispatch => {
  axios
    .post(`${Endpoint.api}/Chat/message`, data, config)
    .then(res => {
      dispatch({
        type: CHAT_BOT,
        payload: res.data
      });
    })
    .catch(error => error);
};

export const chatBotSend = (data, isUser) => dispatch => {
  dispatch({
    type: CHAT_BOT_SEND,
    payload: {
      id: data.id,
      message: data.id,
      options: data.id
    }
  });
  axios
    .post(`${Endpoint.api}/Chat/message`, data, config)
    .then(res => {
      dispatch({
        type: CHAT_BOT,
        payload: res.data
      });
    })
    .catch(error => error);
};
