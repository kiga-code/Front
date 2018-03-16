import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomeContainer from "./containers/HomePageContainer";
import Navbar from "./components/navbar";
import Dashboard from "./pages/dashboard";
import NotFound from "./components/notFound";
import "./App.css";
import store from "./services/store";
import { Provider } from "react-redux";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />
            <Switch>
              <Route path="/" exact component={HomeContainer} />
              <Route path="/dashboard" exact  component={Dashboard} />
              <Route path="*" component={NotFound} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
