import React, { Component } from "react";
import { Card, CardHeader, CardActions, CardText } from "material-ui/Card";
import FlatButton from "material-ui/FlatButton";

import "./cv.css";

class CodeGithubComponent extends Component {
  render() {
    return (
      <div className="code-github">
        <p className="headline">Please Find me, my CV</p>
        <Card>
          <CardHeader
            subtitle="My CV"
            title="Dominic Experience CV historty"
            avatar="github.png"
          />
          <CardText>Please find attached my CV.</CardText>
          <CardActions>
            <FlatButton label="View on CV" href="" target="_blank" />
          </CardActions>
        </Card>
      </div>
    );
  }
}

export default CodeGithubComponent;
