import React, { Component } from "react";
import { Card, CardHeader, CardActions, CardText } from "material-ui/Card";
import FlatButton from "material-ui/FlatButton";

import "./code-github.css";

class CodeGithubComponent extends Component {
  render() {
    return (
      <div className="code-github">
        <p className="headline">Look at my code, my code is amazing</p>
        <Card>
          <CardHeader
            subtitle="Github Repository"
            title="domwokorach/Portfolio-React"
            avatar="github.png"
          />
          <CardText>
            This application is made with React and Material UI. Check out the
            code on Github.
          </CardText>
          <CardActions>
            <FlatButton
              className="button"
              label="View on github"
              href="https://github.com/domwokorach"
              target="_blank"
            />
          </CardActions>
        </Card>
      </div>
    );
  }
}

export default CodeGithubComponent;
