import React, {Component, useEffect, useState} from 'react';
import './footer.css';
import FlatButton from 'material-ui/FlatButton';
import Cookies from 'js-cookie';
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

const CookiePopup = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!Cookies.get('cookieConsent')) {
      setShow(true);
    }
  }, []);

  const acceptCookies = () => {
    Cookies.set('cookieConsent', 'true', { expires: 365 });
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="cookie-popup">
      <p>This website uses cookies to enhance your experience.</p>
      <button onClick={acceptCookies}>Accept</button>
    </div>
  );
};

export default FooterComponent;
export { CookiePopup };
