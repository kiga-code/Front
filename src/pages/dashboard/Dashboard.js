import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      picture: "",
      redirect: false
    };
  }

  componentDidMount() {
    let data = JSON.parse(localStorage.getItem("acessToken"));
    console.log(data);
    this.setState({
      name: data.acessToken.name,
      picture: data.acessToken.picture
    });
  }

  render() {
    if (!localStorage.getItem("acessToken") || this.state.redirect) {
      return <Redirect to="/" />;
    }
    return (
      <div>
        Hello User {this.state.name}
        <img src={this.state.picture} alt={this.state.name} />
      </div>
    );
  }
}
export default Dashboard;
