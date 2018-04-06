import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import moment from "moment";
import "./styles/Dashboard.scss";
import Calendar from "../../components/icons/calendar";
import Mail from "../../components/icons/mail";
import Placeholder from "../../components/icons/placeholder";
import Heart from "../../components/icons/heart";
import { connect } from "react-redux";
import * as heartBeatsActions from "../../services/redux/actions/HeartBeatsActions";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
      data: {}
    };
  }

  componentDidMount() {
    this.props.heartBeatsActions(this.props.facebookId);
  }

  render() {
    const {
      firstName,
      birth,
      email,
      location,
      name,
      picture,
      facebookId,
      hasToken,
      heart
    } = this.props;
    console.log(heart);
    return (
      <div className="dashboard-container">
        <h1 className="dashboard-container-title">Olá {firstName} !</h1>
        <div className="dashboard-container-align">
          <div className="dashboard-container-middle">
            <span className="dashboard-container-circle">
              <img
                src={`https://graph.facebook.com/${facebookId}/picture?type=large`}
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
                    {birth
                      ? moment(birth)
                          .locale("pt-br")
                          .format("LL")
                      : "Data não encontrada"}
                  </b>
                </p>
                <p>
                  {" "}
                  <Mail />
                  {email ? email : "Email não encontrado"}
                </p>
                <p>
                  {" "}
                  <Placeholder />
                  {location ? location : "Localização não encontrada"}
                </p>
              </span>
              <div>
                <h3 className="dashboard-container-icon-title">
                  Frequência cardiaca
                </h3>{" "}
                <span className="dashboard-container-icon">
                  <Heart />
                  {this.props.heart} bpm{" "}
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
    hasToken: state.auth ? true : false,
    facebookId: state.auth && state.auth.facebookId,
    firstName: state.auth && state.auth.firstName,
    birth: state.auth && state.auth.user && state.auth.user.birthday,
    email: state.auth && state.auth.user && state.auth.user.email,
    name: state.auth && state.auth.user && state.auth.user.name,
    location:
      state.auth &&
      state.auth.user &&
      state.auth.user.location &&
      state.auth.user.location.name,
    picture:
      state.auth &&
      state.auth.user &&
      state.auth.user.picture &&
      state.auth.user.picture.data &&
      state.auth.user.picture.data.url,
    heart: state.heart.data.bpm
  };
}

function mapDispatchToProps(dispatch) {
  return {
    heartBeatsActions: facebookId => {
      dispatch(heartBeatsActions.heartData({ facebookId }));
    }
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
