import React, { Component } from "react";
import "./styles/Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
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
