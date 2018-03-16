import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      picture: "",
      redirect: false
    };
  }



  render() {
    if (!localStorage.getItem("accessToken") || this.state.redirect) {
      return <Redirect to="/" />;
    }
    return (
      <div>
        Ola
      </div>
    );
  }
}
export default Dashboard;
