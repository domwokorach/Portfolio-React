import React, { Component } from "react";
import "./introduction.css";
import Avatar from "material-ui/Avatar";

class IntroductionComponent extends Component {
  render() {
    return (
      <div className="introduction">
        <Avatar src="Avatar.jpg" size={150} />
        <p className="introduction-text">
          Loves React, Javascript, Node and Express. Front End Development,
          currently living in London, United Kingdom.
        </p>
      </div>
    );
  }
}

export default IntroductionComponent;
