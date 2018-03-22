import * as Endpoint from "../../api/EndpointAPI";
import { FCB_AUTH, FCB_AUTH_FAILED, LOGOUT } from "../actions/actionTypes";
import axios from "axios";

const config = {
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json"
  }
};

export const loginFacebook = data => dispatch => {
  axios
    .post(`${Endpoint.api}/Usuario`, data, config)
    .then(res => {
      console.log("ress", res);
      localStorage.setItem("accessToken", res.data.token);
      localStorage.setItem("firstName", res.data.firstName);
      localStorage.setItem("lastName", res.data.lastName);
      localStorage.setItem("picture", res.data.picture.data.url);
      dispatch({
        type: FCB_AUTH,
        payload: res.data
      });
    })
    .catch(error => {
      console.log("error", error);
      localStorage.removeItem("accessToken");
      return Promise.reject(error);
    });
};

export function logout() {
  return { type: LOGOUT };
}
