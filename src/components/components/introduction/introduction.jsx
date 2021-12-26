import React, { Component } from "react";
import "./introduction.css";
import Avatar from "material-ui/Avatar";

class IntroductionComponent extends Component {
  render() {
    return (
      <div className="introduction">
        <Avatar src="avatar.jpg" size={150} />
        <p className="introduction-text text-justify">
          <b>&#x3C;ListenMusic&#x3E;</b>
          <br />
          In the world of 1000 frameworks, I'm fighting for the cause of clean
          and well structured code. No bug can stop me. No build-tool will
          dominate me. When the tests fail and the linting breaks, I will
          remain.
          <br />
          <br />
          <b>&#x3C;/ListenMusic&#x3E;</b>
          Loves React, Javascript, Node and etc...
        </p>
      </div>
    );
  }
}

export default IntroductionComponent;
