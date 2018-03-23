import * as Endpoint from "../../api/EndpointAPI";
import axios from "axios";

const config = {
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: "Bearer " + localStorage.getItem("accessToken")
  }
};
console.log(config);

export const userProfile = () => dispatch => {
  axios
    .get(`https://graph.facebook.com/me?fields=name`, config)
    .then(res => {
      res.json();
    })
    .catch(error => error);
};
