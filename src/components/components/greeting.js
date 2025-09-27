import React, { Component } from "react";
import timeOfDay from "./TimeOfDay";

export default class GreetingComponent extends Component {
  render() {
    return (
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <h1 style={{ color: "#ad7c33" }}>
          Good {timeOfDay()}, Eveyone! {this.props.label}
        </h1>
      </div>
    );
  }
}