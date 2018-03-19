import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import "./styles/Dashboard.scss";
import Vini from "../../images/vinicios.jpg";
import Calendar from "../../components/icons/calendar";
import Mail from "../../components/icons/mail";
import Placeholder from "../../components/icons/placeholder";
import Heart from "../../components/icons/heart";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.FB = props.fb;
    this.state = {
      redirect: false
    };
    console.log(props.fb);
  }

  componentDidMount() {
    // this.FB.api("/100024880491575", "GET", {}, function(response) {
    //   // Insert your code here
    //   console.log(response)
    // });
  }

  render() {
    // if (!localStorage.getItem("accessToken") || this.state.redirect) {
    //   return <Redirect to="/" />;
    // }

    return (
      <div className="dashboard-container">
        <h1 className="dashboard-container-title">
          Olá Vinicios ! {this.props.lastName}
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
export default Dashboard;
