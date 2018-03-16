import React, { Component } from "react";
import "./styles/Navbar.scss";
import FacebookLogin from "react-facebook-login";
import { Link } from "react-router-dom";
import * as AuthActions from "../../services/redux/actions/AuthActions";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
      error: false,
      clicked: false
    };
    this.signup = this.signup.bind(this);
  }

  signup(res) {
    let postData;

    console.log(res.first_name);
    console.log(res.last_name);
    console.log(res.id);

    postData = {
      firstName: res.first_name,
      lastName: res.last_name,
      facebookId: res.id
    };

    console.log(postData);

    if (postData) {
      this.props.dispatch(AuthActions.loginFacebook(postData));
      this.setState({ redirect: true });
    }
  }
  handleClick(e) {
    this.setState({ click: !this.state.clicked });
  }
  render() {
    const { hasToken } = this.props;
    if (this.state.redirect) {
      return <Redirect to={"/dashboard"} />;
    }

    return (
      <nav className="Navbar">
        <Link className="Navbar-link" to="/">
          <h1 className="Navbar-logo">Kiga</h1>
        </Link>
        {hasToken ? (
          <ul>
            <li>Chatboat</li>
          </ul>
        ) : (
          ""
        )}
        {hasToken ? (
          <Link onClick={this.handleClick}>
            <img
              src="https://image.freepik.com/free-vector/obama-frontal-face_91-9878.jpg"
              className="picture-icon"
              alt="UserPicture"
            />
          </Link>
        ) : (
          <FacebookLogin
            appId="220764528493510"
            autoLoad={false}
            fields="name,picture, first_name, last_name"
            callback={this.signup}
            icon="fa-facebook"
            scope="public_profile,user_friends,user_actions.books"
            size="small"
            textButton=" Login"
          />
        )}
        <ul className={"navbar-dropdown-" + "" + this.state.clicked}>
          <li>Perfil</li>
          <li>Sair</li>
        </ul>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  console.log(state);
  return {
    hasToken: state.auth.token ? true : false
  };
}
export default connect(mapStateToProps)(Navbar);
