import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import "roboto-npm-webfont";
import "./App.css";

import ProgressComponent from "./components/progress/progress";
import BrowserDetectComponent from "./components/browser-detect/browser-detect";
import HeaderComponent from "./components/header/header";
import DarkVoiceComponent from "./components/dark-voice/dark-voice";
import IntroductionComponent from "./components/introduction/introduction";
import TimelineComponent from "./components/timeline/timeline";
import ProgrammingComponent from "./components/programming/programming";
import AgileQuoteComponent from "./components/agile-quote/agile-quote";
import AgileComponent from "./components/agile/agile";
import DesignComponent from "./components/design/design";
import CodeGithubComponent from "./components/code-github/code-github";
import CVComponent from "./components/components/cv/cv";
import ContactComponent from "./components/contact/contact";
import FooterComponent from "./components/footer/footer";
import GreetingComponent from "./components/components/greeting";
import TimerComponent from "./components/components/timer/timer";
class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <BrowserDetectComponent></BrowserDetectComponent>
          <ProgressComponent></ProgressComponent>
          <div className="section header-section">
            <div className="section-container header-component">
              <HeaderComponent></HeaderComponent>
            </div>
          </div>
          <div className="section colored">
            <div className="section-container">
              <TimerComponent></TimerComponent>
              <GreetingComponent />
              <IntroductionComponent></IntroductionComponent>
            </div>
          </div>
          <div className="section">
            <div className="section-container">
              <TimelineComponent></TimelineComponent>
            </div>
          </div>
          <div className="section dark">
            <div className="section-container">
              <DarkVoiceComponent></DarkVoiceComponent>
            </div>
          </div>
          <div className="section colored">
            <div className="section-container">
              <ProgrammingComponent></ProgrammingComponent>
            </div>
          </div>
          <div className="section">
            <div className="section-container">
              <DesignComponent></DesignComponent>
            </div>
          </div>

          <div className="section colored">
            <div className="section-container">
              <AgileComponent></AgileComponent>
            </div>
          </div>
          <div className="section dark">
            <div className="section-container">
              <AgileQuoteComponent></AgileQuoteComponent>
            </div>
          </div>
          <div className="section colored">
            <div className="section-container">
              <CodeGithubComponent></CodeGithubComponent>
            </div>
          </div>
          <div className="section dark">
            <div className="section-container">
              <CVComponent></CVComponent>
            </div>
          </div>
          <div className="section">
            <div className="section-container">
              <ContactComponent></ContactComponent>
            </div>
          </div>
          <div className="section colored">
            <div className="section-container footer-component">
              <FooterComponent></FooterComponent>
            </div>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
