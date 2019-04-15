import React, { Component } from "react";
import { Link } from "react-router-dom";

class Nav extends Component {
  render() {
    return (
      <>
        <div>
          <Link to="/">Home</Link>
          <Link to="favorite">Favorite</Link>
        </div>
      </>
    );
  }
}

export default Nav;
