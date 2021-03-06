import * as Endpoint from "../../api/EndpointAPI";
import { FCB_AUTH, LOGOUT, USER } from "../actions/actionTypes";
import axios from "axios";

const config = {
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json"
  }
};

export const loginFacebook = (data, fcbData) => dispatch => {
  axios
    .post(`${Endpoint.api}/Usuario`, data, config)
    .then(res => {
      localStorage.setItem("accessToken", res.data.token);
      localStorage.setItem("firstName", res.data.firstName);
      localStorage.setItem("lastName", res.data.lastName);
      localStorage.setItem("facebookId", res.data.facebookId);
      dispatch({
        type: FCB_AUTH,
        payload: res.data
      });
      dispatch({
        type: USER,
        payload: fcbData
      });
    })
    .catch(error => {
      localStorage.removeItem("accessToken");
      return Promise.reject(error);
    });
};

export function logout() {
  return { type: LOGOUT };
}
