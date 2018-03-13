import * as Endpoint from "../../api/EndpointAPI";
import { FCB_AUTH, FCB_AUTH_FAILED, LOGOUT } from "../actions/actionTypes";
import axios from "axios";

const config = {
  headers: {
    "Content-Type": "application/json"
  }
};

export const loginFacebook = data => dispatch => {
  axios
    .post(`${Endpoint.api}/Usuario`, data, config)
    .then(res => {
      localStorage.setItem("accessToken", res.data.accessToken);
      dispatch({
        type: FCB_AUTH,
        payload: res.data
      });
    })
    .catch(error => {
      localStorage.removeItem("accessToken");

      dispatch({
        type: FCB_AUTH_FAILED,
        payload: error
      });
      return Promise.reject(error);
    });
};

export function logout() {
  return { type: LOGOUT };
}
