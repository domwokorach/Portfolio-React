import React, { Component } from "react";
import { Card, CardHeader, CardActions, CardText } from "material-ui/Card";
import FlatButton from "material-ui/FlatButton";

import "./cv.css";

class CodeGithubComponent extends Component {
  render() {
    return (
      <div className="code-github">
        <p className="headline">Please Find me, my CV.</p>
        <Card>
          <CardHeader
            className="cardheader"
            title="PDF Download - CV"
            avatar="cv.png"
          />
          <CardText className="test">
            Please find attached my CV from below.
          </CardText>
          <CardActions>
            <FlatButton
              className="flatbutton"
              label="View on  download"
              href="./dominic.pdf"
              target="_blank"
            />
          </CardActions>
        </Card>
      </div>
    );
  }
}

export default CodeGithubComponent;
