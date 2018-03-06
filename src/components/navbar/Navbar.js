import React, { Component } from "react";
import "./styles/Navbar.scss";
import FacebookLogin from "react-facebook-login";

class Navbar extends Component {
  render() {
    const responseFacebook = response => {
      console.log(1);
    };
    return (
      <nav className="Navbar">
      <h1 className="Navbar-logo">Kiga</h1>
        <ul className="Navbar-ul">
          <li>Home</li>
          <li>About</li>
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
