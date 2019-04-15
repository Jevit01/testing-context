import React, { Component } from "react";
import { MyContext } from "./MyProvider.js";

class Person extends Component {
  render() {
    return (
      <>
        <MyContext.Consumer>
          {context => (
            <>
              <p>Name: {context.state.name}</p>
              <p>Age:{context.state.age}</p>
              <button onClick={context.func.getOlder}>click</button>
            </>
          )}
        </MyContext.Consumer>
      </>
    );
  }
}

export default Person;
