import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import moment from "moment";
import "./styles/Dashboard.scss";
import Calendar from "../../components/icons/calendar";
import Mail from "../../components/icons/mail";
import Placeholder from "../../components/icons/placeholder";
import Heart from "../../components/icons/heart";
import { connect } from "react-redux";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
      data: {}
    };
  }

  render() {
    const {
      firstName,
      birth,
      email,
      location,
      name,
      picture,
      hasToken
    } = this.props;
    return (
      <div className="dashboard-container">
        <h1 className="dashboard-container-title">Olá {firstName} !</h1>
        <div className="dashboard-container-align">
          <div className="dashboard-container-middle">
            <span className="dashboard-container-circle">
              <img
                src={picture}
                className="dashboard-container-picture"
                alt={name}
              />
            </span>
            <div className="dashboard-container-right">
              <div>
                <h1 className="dashboard-container-name">{name}</h1>
              </div>
              <span className="dashboard-container-info">
                <p>
                  <Calendar />
                  <b>
                    {moment(birth)
                      .locale("pt-br")
                      .format("LL")}
                  </b>
                </p>
                <p>
                  {" "}
                  <Mail />
                  {email}
                </p>
                <p>
                  {" "}
                  <Placeholder />
                  {location}
                </p>
              </span>
              <div>
                <h3 className="dashboard-container-icon-title">
                  Frequência cardiaca
                </h3>{" "}
                <div>
                  <span className="dashboard-container-icon">
                    <Heart />
                    0 bpm{" "}
                  </span>
                </div>
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
    hasToken: state.auth ? true : false,
    firstName: state.auth && state.auth.firstName,
    birth: state.auth && state.auth.user && state.auth.user.birthday,
    email: state.auth && state.auth.user && state.auth.user.email,
    name: state.auth && state.auth.user && state.auth.user.name,
    location:
      state.auth &&
      state.auth.user &&
      state.auth.user.location &&
      state.auth.user.location.name,
    picture: state.auth && state.auth.user && state.auth.user.picture.data.url
  };
}
export default connect(mapStateToProps)(Dashboard);
