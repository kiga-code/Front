import React, { Component } from "react";
import "./styles/Navbar.scss";
import FacebookLogin from "react-facebook-login";
import { Link } from "react-router-dom";
import * as AuthActions from "../../services/redux/actions/AuthActions";
import { Redirect } from "react-router-dom";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
      error: false
    };
    this.signup = this.signup.bind(this);
  }

  signup(res, type) {
    let postData;
    if (type === "facebook" && res.email) {
      postData = {
        name: res.name,
        email: res.email,
        picture: res.picture,
        token: res.acessToken
      };
    }

    if (postData) {
      this.dispach(AuthActions.loginFacebook());
      this.setState({ redirect: true });
    }
  }

  render() {
    if (this.state.redirect || localStorage.getItem("acess-token")) {
      return <Redirect to="/dashboard" />;
    }

    return (
      <nav className="Navbar">
        <Link className="Navbar-link" to="/">
          <h1 className="Navbar-logo">Kiga</h1>
        </Link>
        <ul className="Navbar-ul">
          <Link className="Navbar-link" to="/">
            <li>Home</li>
          </Link>
          <Link className="Navbar-link" to="#">
            <li>About</li>
          </Link>
        </ul>

        <FacebookLogin
          appId="220764528493510"
          autoLoad={false}
          fields="name,email,picture"
          callback={response => {
            console.log(response);
            this.signup(response, "facebook");
          }}
          icon="fa-facebook"
          scope="public_profile,user_friends,user_actions.books"
          cssClass="my-facebook-button-class"
          size="small"
        />

        <img
          src="https://image.freepik.com/free-vector/obama-frontal-face_91-9878.jpg"
          className="picture-icon"
          alt="UserPicture"
        />
      </nav>
    );
  }
}
export default Navbar;
