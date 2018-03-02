import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import thunk from "redux-thunk";
import Home from "./pages/homePage";
import Navbar from "./components/navbar";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route path="/" exact component={Home} />
        </div>
      </Router>
    );
  }
}

export default App;
