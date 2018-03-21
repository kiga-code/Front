import React, { Component } from "react";
import "./styles/Navbar.scss";
import FacebookLogin from "react-facebook-login";
import { Link } from "react-router-dom";
import * as AuthActions from "../../services/redux/actions/AuthActions";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Vini from "../../images/vinicios.jpg";
import Logo from "../../images/kiga.png";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
      error: false,
      open: false
    };
    this.signup = this.signup.bind(this);
  }

  signup(res) {
    let postData;

    postData = {
      firstName: res.first_name,
      lastName: res.last_name,
      facebookId: res.id
    };

    console.log("ss", res.status);

    if (postData) {
      this.props.dispatch(AuthActions.loginFacebook(postData));
      this.setState({ redirect: true });
    }
  }

  handleClick() {
    this.setState({ open: !this.state.open });
  }

  render() {
    const { hasToken } = this.props;
    console.log(this.props);
    console.log(this.state.open);
    if (this.state.redirect | localStorage.getItem("accessToken")) {
      return <Redirect to={"/dashboard"} />;
    }

    return (
      <nav className="Navbar">
        <Link className="Navbar-link-logo" to="/">
          <img className="Navbar-logo" src={Logo} alt="Logo" />
        </Link>
        {hasToken ? (
          <ul className="Navbar-ul">
            <Link to="/chatbot">
              <li className="Navbar-li">Chatbot</li>
            </Link>
          </ul>
        ) : (
          ""
        )}
        <ul className={"Navbar-dropDown-" + this.state.open}>
          <div className="Navbar-dropDown-arrow" />
          <Link to="/dashboard">
            <li className="Navbar-dropDown-li">Perfil</li>
          </Link>
          <Link to="/dashboard">
            <li className="Navbar-dropDown-li">Sair</li>
          </Link>
        </ul>
        {hasToken ? (
          <button
            className="Navbar-icon-button"
            onClick={() => this.handleClick()}
          >
            <img src={Vini} className="picture-icon" alt="UserPicture" />
          </button>
        ) : (
          <FacebookLogin
            appId="220764528493510"
            autoLoad={false}
            fields="status,name,picture, first_name, last_name"
            callback={this.signup}
            icon="fa-facebook"
            scope="public_profile,user_friends,user_actions.books"
            size="small"
            textButton=" Login"
          />
        )}
      </nav>
    );
  }
}

function mapStateToProps(state) {
  console.log(state);
  return {
    hasToken: state.auth.token ? true : false,
    firstName: state.auth.firstName,
    lastName: state.auth.lastName
  };
}
export default connect(mapStateToProps)(Navbar);
