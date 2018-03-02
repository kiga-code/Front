import React, { Component } from "react";
import FacebookLogin from 'react-facebook-login';

const responseFacebook = response => {
  console.log(1)
};
class Home extends Component {
  render() {
    return (
      <div>
        <FacebookLogin
          appId="220764528493510"
          autoLoad={true}
          fields="name,email,picture"
          callback={this.responseFacebook}
          cssClass="my-facebook-button-class"
          icon="fa-facebook"
        />
      </div>
    );
  }
}
export default Home;
