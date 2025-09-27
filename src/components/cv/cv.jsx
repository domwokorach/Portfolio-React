import { Component } from "react";
import { Card, CardHeader, CardActions, CardText } from "material-ui/Card";
import FlatButton from "material-ui/FlatButton";

import "./cv.css";
import cvPdf from "./CV D Wokorach-O.pdf";

class CodeGithubComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { showPdf: false };
  }

  openPdf = () => {
    this.setState({ showPdf: true });
  };

  closePdf = () => {
    this.setState({ showPdf: false });
  };

  render() {
    return (
      <div className="cv">
        <p className="headline">Please Find me, my CV Test.</p>
        <Card>
          <CardHeader
            title="PDF Download - CV"
            avatar="cv.png"
          />
          <CardText className="test">
            Please find attached my CV from below.
          </CardText>
          <CardActions>
            <FlatButton
              href={cvPdf}
              target="_blank"
              primary={true}
              label="Download CV"
            />
            <FlatButton
              label="View CV"
              onClick={this.openPdf}
              primary={true}
            />
          </CardActions>
        </Card>

        {this.state.showPdf && (
          <div className="pdf-modal-overlay" onClick={this.closePdf}>
            <div className="pdf-modal-content animate-pdf-modal" onClick={e => e.stopPropagation()}>
              <span className="pdf-modal-close" onClick={this.closePdf}>&times;</span>
              <h3>CV Viewer</h3>
              <iframe
                src={cvPdf}
                title="CV PDF Viewer"
                width="100%"
                height="500px"
                style={{ border: 'none', borderRadius: '8px' }}
              />
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default CodeGithubComponent;