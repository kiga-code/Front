import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import "./styles/Dashboard.scss";
import Cardiogram from "../../images/cardiogram.png";
import Vini from "../../images/vinicios.jpg";

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
      <div className="dashboard-container">
        <h1 className="dashboard-container-title">
          Seja bem-vindo Vinicios {this.props.lastName}
        </h1>
        <div className="dashboard-container-align">
          <div className="dashboard-container-middle">
            <span className="dashboard-container-circle">
              <img src={Vini} className="dashboard-container-picture" />
            </span>
            <div className="dashboard-container-right">
              <h1 className="dashboard-container-name">Vinicios Oliveira</h1>
              <span className="dashboard-container-info">
                {" "}
                <p>vinicios2508@gmail.com</p>
                <p>São Paulo - SP</p>
                <br />
                <h4>Frequência cardiaca</h4>
              </span>
              <div>
                {" "}
                <span className="dashboard-container-icon">
                  <img
                    src={Cardiogram}
                    className="dashboard-container-icon-heart"
                    alt=""
                  />{" "}
                  54 bpm{" "}
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
export default Dashboard;
