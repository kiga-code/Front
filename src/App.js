import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import HomeContainer from "./containers/HomePageContainer";
import Navbar from "./components/navbar";
import Dashboard from "./pages/dashboard";
import ChatbotContainer from "./containers/ChatbotContainer";
import NotFound from "./components/notFound";
import "./App.css";

require("moment/locale/pt-br.js");

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={HomeContainer} />
          <Route path="/dashboard" exact component={Dashboard} />
          <Route path="/chatbot"  component={ChatbotContainer} />
          <Route path="*" component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
