import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import "./styles/Dashboard.scss";
import Vini from "../../images/vinicios.jpg";
import Calendar from "../../components/icons/calendar";
import Mail from "../../components/icons/mail";
import Placeholder from "../../components/icons/placeholder";
import Heart from "../../components/icons/heart";
import axios from "axios";
import { connect } from "react-redux";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false
    };
  }

  render() {
    if (!localStorage.getItem("accessToken")) {
      return <Redirect to="/" />;
    }
    const { firstName, lastName, hasToken } = this.props;
    console.log(this.props);
    return (
      <div className="dashboard-container">
        <h1 className="dashboard-container-title">Olá {firstName} !</h1>
        <div className="dashboard-container-align">
          <div className="dashboard-container-middle">
            <span className="dashboard-container-circle">
              <img src={Vini} className="dashboard-container-picture" />
            </span>
            <div className="dashboard-container-right">
              <h1 className="dashboard-container-name">
                {firstName}&nbsp;
                {lastName}
              </h1>
              <span className="dashboard-container-info">
                {" "}
                <p>
                  <Calendar />
                  <b>Data de nascimento:</b> 25/08/1999 - 19 anos
                </p>
                <p>
                  {" "}
                  <Mail />vinicios2508@gmail.com
                </p>
                <p>
                  {" "}
                  <Placeholder />São Paulo - SP
                </p>
              </span>
              <div>
                <h3 className="dashboard-container-icon-title">
                  Frequência cardiaca
                </h3>{" "}
                <span className="dashboard-container-icon">
                  <Heart />
                  0 bpm{" "}
                </span>
              </div>
            </div>
          </div>
          <div />
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    firstName: state.auth.firstName,
    lastName: state.auth.lastName
  };
}
export default connect(mapStateToProps)(Dashboard);
