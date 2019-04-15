import React, { Component } from "react";
export const MyContext = React.createContext();
const axios = require("axios");

class MyProvider extends Component {
  state = {
    name: "Thomas",
    age: 30,
    favorite: "turles"
  };

  getOlder = () => {
    this.setState({
      age: this.state.age + 1
    });
  };

  render() {
    return (
      <MyContext.Provider
        value={{
          state: this.state,
          func: { getOlder: this.getOlder }
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

export default MyProvider;
