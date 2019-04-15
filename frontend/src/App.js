import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import MyProvider from "./components/MyProvider.js";
import Person from "./components/Person.js";
import FavoritePage from "./components/FavoritePage.js";
import Nav from "./components/Nav.js";

class App extends Component {
  render() {
    return (
      <MyProvider>
        <div className="App">
          <Nav />
          <Switch>
            <Route exact path="/" component={Person} />
            <Route path="/favorite" component={FavoritePage} />
          </Switch>
        </div>
      </MyProvider>
    );
  }
}

export default App;
