import * as Endpoint from "../../api/EndpointAPI";
import axios from "axios";
import { BPM, BPM_FAILED } from "../../redux/actions/actionTypes";

const config = {
  headers: {
    "Content-type": "application/json",
    accept: "application/json"
  }
};

export const heartData = data => dispatch => {
  axios
    .post(`${Endpoint.api}/data/list_last`, data, config)
    .then(res => {
      dispatch({
        type: BPM,
        payload: res.data
      });
    })
    .catch(error => {
      dispatch({
        type: BPM_FAILED,
        payload: error
      });
    });
};
