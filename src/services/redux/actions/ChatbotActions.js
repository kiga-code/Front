import * as Endpoint from "../../api/EndpointAPI";
import axios from "axios";
import { CHAT_BOT } from "../../redux/actions/actionTypes";

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

export const chatBotSend = data => dispatch => {
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
