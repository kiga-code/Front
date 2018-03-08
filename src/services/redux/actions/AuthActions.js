import * as Endpoint from "../../api/EndpointAPI";
import { FCB_AUTH, FCB_AUTH_FAILED, LOGOUT } from "../actions/actionTypes";
import axios from "axios";


const config = {
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json"
  }
};

export const loginFacebook = () => dispatch => {
  axios.post(`${Endpoint.api}/Usuario/`, config).then(res => {
    localStorage.setItem("acessToken", res.data.token);
    localStorage.setItem("picture", res.data.picture);
    dispatch({
      type: FCB_AUTH,
      payload: res.data
    }).catch(error => {
      localStorage.removeItem("acessTokenn");
      localStorage.removeItem("picture");
      dispatch({
        type: FCB_AUTH_FAILED,
        payload: error
      });
      return Promise.reject(error);
    });
  });
};

export function logout() {
  return { type: LOGOUT };
}
