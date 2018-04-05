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
      open: false,
      checked: false
    };
    this.signup = this.signup.bind(this);
  }

  // Logout
  handleLogout = () => {
    const { logout } = this.props.actions;
    const { history } = this.props;
    logout();
    history.push("/");
  };

  // Loggin
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
      this.props.login(postData, res);
      this.setState({ redirect: true });
    }
  }

  // Change state
  handleClick() {
    this.setState({ open: !this.state.open });
  }

  // OPEN MENU
  toggleMenu() {
    if (window.innerWidth <= 700) {
      this.setState(state => ({ checked: !state.checked }));
      if (this.state.checked) {
        document.body.classList.remove("navbar-active");
      } else {
        document.body.classList.add("navbar-active");
      }
    }
  }

  render() {
    const { hasToken, picture, firstName } = this.props;
    const { checked } = this.state;

    var hamburgerMenu = `hamburger ${checked ? "active" : ""}`;

    return (
      <div className="container">
        <nav className="Navbar">
          <div className="Navbar-btn">
            <label htmlFor="Navbar-check" className={hamburgerMenu}>
              <span className="line" />
              <span className="line" />
              <span className="line" />
            </label>
          </div>
          <input
            type="checkbox"
            id="nav-check"
            onChange={() => this.toggleMenu()}
            checked={this.state.checked}
          />
          <div className="Navbar-links">
          {/* MOBILE */}
            <div className="Navbar-mobile">
              <img src={picture} className="picture-icon" alt={firstName} />
              <Link to="/" onClick={() => this.toggleMenu()}>
                Inicio
              </Link>
              <Link to="/dashborad" onClick={() => this.toggleMenu()}>
                Perfil
              </Link>
              <Link to="/chatbot" onClick={() => this.toggleMenu()}>
                Chatbot
              </Link>
              <a onClick={this.handleLogout}>
                <li className="Navbar-dropDown-li">Sair</li>
              </a>
            </div>
            {/* DESKTOP */}
            <div className="Navbar-desktop">
              <div className="Navbar-Logo-desktop">
                <Link className="Navbar-link-logo" to="/">
                  <img className="Navbar-logo" src={Logo} alt="Logo" />
                </Link>
              </div>
              {hasToken ? (
                <ul className="Navbar-ul">
                  <Link to="/chatbot">
                    <li className="Navbar-li">Chatbot</li>
                  </Link>
                </ul>
              ) : (
                ""
              )}
              {/* DROPDOWN */}
              <ul className={"Navbar-dropDown-" + this.state.open}>
                <div className="Navbar-dropDown-arrow" />
                <Link
                  to="/dashboard"
                  onclick={() => {
                    this.handleClick();
                  }}
                >
                  <li className="Navbar-dropDown-li">Perfil</li>
                </Link>
                <a
                  onClick={() => {
                    this.handleLogout();
                    this.handleClick();
                  }}
                >
                  <li className="Navbar-dropDown-li">Sair</li>
                </a>
              </ul>
              {/* FACEBOOKLOGIN */}
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
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    hasToken: state.auth && state.auth.token ? true : false,
    firstName: state.auth && state.auth.firstName,
    lastName: state.auth && state.auth.lastName,
    picture:
      state.auth &&
      state.auth.user &&
      state.auth.user.picture &&
      state.auth.user.picture.data &&
      state.auth.user.picture.data.url
  };
}

function mapDispatchToProps(dispatch) {
  console.log(dispatch);
  return {
    actions: bindActionCreators(AuthActions, dispatch),
    login: (data, fcbData) => {
      dispatch(AuthActions.loginFacebook(data, fcbData));
    }
  };
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Navbar));
