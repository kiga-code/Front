import React, { Component } from "react";
import "./styles/Navbar.scss";
import FacebookLogin from "react-facebook-login";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    const responseFacebook = response => {
      console.log(1);
    };
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
          fields="name,email,picture"
          callback={this.responseFacebook}
          icon="fa-facebook"
          scope="public_profile,user_friends,user_actions.books"
          cssClass="my-facebook-button-class"
          size="small"
        />
      </nav>
    );
  }
}
export default Navbar;
