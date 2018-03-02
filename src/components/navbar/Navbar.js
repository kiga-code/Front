import React, { Component } from "react";
import "./styles/Navbar.scss";

class Navbar extends Component {
  render() {
    return (
      <nav className="Navbar">
        <ul>
          <li>Home</li>
          <li>Kiga</li>
        </ul>
        <i className=""></i>
      </nav>
    );
  }
}
export default Navbar;
