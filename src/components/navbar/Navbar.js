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
      error: false
    };
    this.signup = this.signup.bind(this);
  }

  signup(res) {
    let postData;

    postData = {
      firstName: res.name,
      email: res.email,
      picture: res.picture,
      token: res.acessToken
    };

    this.props.dispatch(AuthActions.loginFacebook(postData));
    this.setState({ redirect: true });
  }

  render() {
    const { hasToken } = this.props;

    if (this.state.redirect || localStorage.getItem("acess-token")) {
      return <Redirect to="/dashboard" />;
    }

    return (
      <nav className="Navbar">
        <Link className="Navbar-link" to="/">
          <h1 className="Navbar-logo">Kiga</h1>
        </Link>

        {hasToken ? (
          <img
            src="https://image.freepik.com/free-vector/obama-frontal-face_91-9878.jpg"
            className="picture-icon"
            alt="UserPicture"
          />
        ) : (
          <FacebookLogin
            appId="220764528493510"
            autoLoad={false}
            fields="name,email,picture"
            callback={response => {
              console.log(response);
              this.signup(response);
            }}
            render={renderProps => (
              <button onClick={renderProps.onClick}>Login</button>
            )}
            icon="fa-facebook"
            scope="public_profile,user_friends,user_actions.books"
            cssClass="my-facebook-button-class"
            size="small"
          />
        )}
      </nav>
    );
  }
}
export default connect()(Navbar);
