import * as Endpoint from "../../api/EndpointAPI";
import axios from "axios";

const config = {
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: "Bearer " + localStorage.getItem("accessToken")
  }
};

export const userProfile = () => dispatch => {
  axios
    .get(`https://graph.facebook.com/me?fields=name, email, picture`)
    .then(res => {
      res.json();
    })
    .catch(error => error);
};
