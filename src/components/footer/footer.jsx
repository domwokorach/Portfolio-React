import React, {Component} from 'react';
import './footer.css';
import FlatButton from 'material-ui/FlatButton';
const scrollTo = require('scroll-to');

class FooterComponent extends Component {

  onScrollToTop() {
    scrollTo(0, 0, {
      ease: 'out-bounce',
      duration: 2000
    });
  }

  render() {
    return (
      <div className="footer">
        <div className="link-list">
          <a target="_blank" href="https://github.com/domwokorach" alt="github">
            Github
          </a>
           /
          <a target="_blank" href="https://x.com/do3inic" alt="X">
            X
          </a>
           /
          <a target="_blank" href="https://linkedin.com/in/dominic-o-3673523b/" alt="linkedin">
            LinkedIn
          </a>
        </div>
        <FlatButton labelStyle={{
          "color": "rgba(0, 0, 0, 0.65)"
        }} label="Back to top" onClick={this.onScrollToTop}/>
      </div>
    );
  }
}
export default FooterComponent;
