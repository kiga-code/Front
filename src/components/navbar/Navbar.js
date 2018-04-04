import React, { Component } from "react";
import "./styles/Navbar.scss";
import FacebookLogin from "react-facebook-login";
import { Link, withRouter } from "react-router-dom";
import { bindActionCreators } from "redux";
import * as AuthActions from "../../services/redux/actions/AuthActions";
import { connect } from "react-redux";
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

  handleLogout = () => {
    const { logout } = this.props.actions;
    const { history } = this.props;
    logout();
    history.push("/");
  };

  signup(res) {
    let postData;

    postData = {
      firstName: res.first_name,
      lastName: res.last_name,
      facebookId: res.id
    };
    localStorage.setItem("user", JSON.stringify(res));

    console.log(res);
    if (postData) {
      this.props.login(postData);
      this.setState({ redirect: true });
    }
  }

  handleClick() {
    this.setState({ open: !this.state.open });
  }

  render() {
    const { hasToken, picture, firstName } = this.props;

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
          <a onClick={this.handleLogout}>
            <li className="Navbar-dropDown-li">Sair</li>
          </a>
        </ul>
        {hasToken ? (
          <button
            className="Navbar-icon-button"
            onClick={() => this.handleClick()}
          >
            <img src={picture} className="picture-icon" alt={firstName} />
          </button>
        ) : (
          <FacebookLogin
            appId="220764528493510"
            autoLoad={false}
            fields="name, picture, first_name, last_name,email,birthday,location"
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
  return {
    hasToken: state.auth && state.auth.token ? true : false,
    firstName: state.auth && state.auth.firstName,
    lastName: state.auth && state.auth.lastName,
    picture: state.auth && state.auth.user && state.auth.user.picture.data.url
  };
}

function mapDispatchToProps(dispatch) {
  console.log(dispatch);
  return {
    actions: bindActionCreators(AuthActions, dispatch),
    login: data => {
      dispatch(AuthActions.loginFacebook(data));
    }
  };
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Navbar));
