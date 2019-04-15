import React, { Component } from "react";
import { MyContext } from "./MyProvider.js";

class FavoritePage extends Component {
  render() {
    return (
      <>
        <MyContext.Consumer>
          {context => <p>{context.state.favorite} are my favorite</p>}
        </MyContext.Consumer>
      </>
    );
  }
}

export default FavoritePage;
