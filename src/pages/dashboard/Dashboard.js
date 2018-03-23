import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import "./styles/Dashboard.scss";
import Calendar from "../../components/icons/calendar";
import Mail from "../../components/icons/mail";
import Placeholder from "../../components/icons/placeholder";
import Heart from "../../components/icons/heart";
import { connect } from "react-redux";
import * as UserActions from "../../services/redux/actions/UserActions"

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
      data: {}
    };
  }

  componentDidMount() {
   
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
              <img
                src="https://graph.facebook.com/1619613838114740/picture"
                className="dashboard-container-picture"
              />
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
                  <b>Data de nascimento:</b>
                </p>
                <p>
                  {" "}
                  <Mail />vinicios2508@gmail.com
                </p>
                <p>
                  {" "}
                  <Placeholder />
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
  console.log(state);
  return {
    firstName: state.auth.firstName,
    lastName: state.auth.lastName,
    facebookId: state.auth.facebookId
  };
}
export default connect(mapStateToProps)(Dashboard);
