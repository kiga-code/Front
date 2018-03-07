import * as Endpoint from "../../api/EndpointAPI";
import { FCB_AUTH, FCB_AUTH_FAILED } from "../actions/actionTypes";
import axios from "axios";

const config = {};

export const loginFacebook = () => dispatch => {
  axios.post(`${Endpoint.api}/Usuario/`, config).then(res => {
    dispatch({
      type: FCB_AUTH,
      payload: res.data
    }).catch(error => {
      dispatch({
        type: FCB_AUTH_FAILED,
        payload: error
      });
    });
  });
};
