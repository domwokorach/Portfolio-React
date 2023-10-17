import React, { Component } from "react";
import { Card, CardHeader, CardText } from "material-ui/Card";
import Chip from "material-ui/Chip";
import "./timeline.css";
import Avatar from "material-ui/Avatar";
class TimelineComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      expanded1: false,
      expanded2: false,
      expanded3: false,
      expanded4: false,
    };
  }

  async componentDidMount() {}

  componentWillUnmount() {}
  // handleExplandChange //
  handleExpandChange1 = (expanded1) => {
    this.setState({ expanded1: expanded1 });
  };

  handleExpandChange2 = (expanded2) => {
    this.setState({ expanded2: expanded2 });
  };

  handleExpandChange3 = (expanded3) => {
    this.setState({ expanded3: expanded3 });
  };

  handleExpandChange4 = (expanded4) => {
    this.setState({ expanded4: expanded4 });
  };

  // handleExplands //
  handleExpand1 = () => {
    this.setState({ expanded1: true });
  };

  handleExpand2 = () => {
    this.setState({ expanded2: true });
  };

  handleExpand3 = () => {
    this.setState({ expanded3: true });
  };

  handleExpand4 = () => {
    this.setState({ expanded4: true });
  };

  // handleReduce //
  handleReduce1 = () => {
    this.setState({ expanded1: false });
  };

  handleReduce2 = () => {
    this.setState({ expanded2: false });
  };

  handleReduce3 = () => {
    this.setState({ expanded3: false });
  };

  handleReduce4 = () => {
    this.setState({ expanded4: false });
  };
  render() {
    return (
      <div className="timeline">
        <p className="headline">
          <a href="">My Projects</a>
        </p>
        <div className="timeline-entry">
          <Card
            expanded={this.state.expanded}
            onExpandChange={this.handleExpandChange}
          >
            <CardHeader
              title="Github"
              subtitle="My Projects"
              actAsExpander={true}
              showExpandableButton={true}
            />
            <CardText expandable={true}>
              <div className="timeline-entries">
                <Avatar src="projects-large.png" size={150} />
                <div className="timeline-entry-chip">
                  <Chip>JavaScript | TypeScript | React | API</Chip>
                </div>
                <div className="timeline-entry-chip">
                  <Chip>Stripe | Google Cloud | Firebase | TailwindCSS</Chip>
                </div>
                <p>
                  <br />
                  <a
                    href="https://videos-hooks-amber-theta.vercel.app/"
                    alt="Click - My API Data"
                  >
                    Click - My project API Data.
                  </a>
                  <br></br>
                  <a
                    href="https://dom-steamovie.vercel.app/"
                    alt="Click - My API Data"
                  >
                    Click - My project Steamovie.
                  </a>
                </p>
              </div>
            </CardText>
          </Card>
        </div>
        <div className="timeline-entry">
          <Card
            expanded={this.state.expanded}
            onExpandChange={this.handleExpandChange}
          >
            <CardHeader
              title="Looking a new job"
              subtitle="Searching open to new opportunities in 2023!"
              actAsExpander={true}
              showExpandableButton={true}
            />
            <CardText expandable={true}>
              <div className="timeline-entries">
                <Avatar src="dom-large.jpg" size={150} />
                <div className="timeline-entry-chip">
                  <Chip>React | Typescript | React Native | Javascript </Chip>
                </div>
                <div className="timeline-entry-chip">
                  <Chip>Software Engineer</Chip>
                </div>
              </div>
            </CardText>
          </Card>
        </div>

        <p className="headline">Working experience</p>
        <div className="timeline-entry">
          <Card
            expanded={this.state.expanded}
            onExpandChange={this.handleExpandChange}
          >
            <CardHeader
              title="Web Development Bootcamp (Course)"
              subtitle="Home | 2020 - 2021"
              actAsExpander={true}
              showExpandableButton={true}
            />
            <CardText expandable={true}>
              <div className="timeline-entries">
                <div className="timeline-entry-chip">
                  <Chip>Bootstrap 4</Chip>
                </div>
                <div className="timeline-entry-chip">
                  <Chip>React</Chip>
                </div>
                <div className="timeline-entry-chip">
                  <Chip>React Native</Chip>
                </div>
                <div className="timeline-entry-chip">
                  <Chip>Nodes</Chip>
                </div>
                <div className="timeline-entry-chip">
                  <Chip>Express</Chip>
                </div>
                <div className="timeline-entry-chip">
                  <Chip>JavaScript</Chip>
                </div>
                <div className="timeline-entry-chip">
                  <Chip>NoSQL & MongoDB</Chip>
                </div>
                <div className="timeline-entry-chip">
                  <Chip>Material-UI</Chip>
                </div>
                <div className="timeline-entry-chip">
                  <Chip>Sass</Chip>
                </div>
              </div>
            </CardText>
          </Card>
        </div>
        <div className="timeline-entry">
          <Card
            expanded={this.state.expanded1}
            onExpandChange={this.handleExpandChange1}
          >
            <CardHeader
              title="Front End Developer"
              subtitle="Lloyds Banking Group | 2018 - 2020"
              actAsExpander={true}
              showExpandableButton={true}
            />

            <CardText expandable={true}>
              <strong>Specialist | Web Accessibility on Banking online.</strong>
              <p>
                By creating JavaScript together with my team, I played a key
                role within the special Signly partnership at Lloyds, which won
                the financial Innovation Awards 2017. Signly is a BSL British
                Sign Language accessibility service that allows deaf customers
                to see a video pop up with a sign language video. <br></br>
                <a href="https://vimeo.com/manage/videos/660215557">
                  Click Video
                </a>
              </p>

              <strong>
                Front End Developer | Applied Technology, Innovation & Strategy
              </strong>
              <p>
                HTML5, CSS3, React, Nodes, Express, Webpack and JavaScript -
                Front End Development.
              </p>
              <p>
                A part of the team the delivery the successful Innovation
                Communities conference 2018.
                <p>
                  A part of the team the delivery the successful
                  <a href="https://www.hackathon.com/event/innovation-community-2018-51205550179">
                    {" "}
                    Innovation Communities conference 2018.
                  </a>
                </p>
              </p>
              <p>
                Actively engaged with other colleagues to help determine values
                and set KPIs.
              </p>
              <p>
                Took part in showcasing prototypes for Applied Technology
                Innovation and Strategy team.
              </p>
              <br />
              <br />
              <div className="timeline-entries">
                <div className="timeline-entry-chip">
                  <Chip>React</Chip>
                </div>
                <div className="timeline-entry-chip">
                  <Chip>Nodes</Chip>
                </div>
                <div className="timeline-entry-chip">
                  <Chip>Express</Chip>
                </div>
                <div className="timeline-entry-chip">
                  <Chip>Webpack</Chip>
                </div>
                <div className="timeline-entry-chip">
                  <Chip>JavaScript</Chip>
                </div>
                <div className="timeline-entry-chip">
                  <Chip>Git</Chip>
                </div>
                <div className="timeline-entry-chip">
                  <Chip>Confluence, JIRA</Chip>
                </div>
                <div className="timeline-entry-chip">
                  <Chip>Web Accessibility</Chip>
                </div>
              </div>
            </CardText>
          </Card>
        </div>
        <div className="timeline-entry">
          <Card
            expanded={this.state.expanded2}
            onExpandChange={this.handleExpandChange2}
          >
            <CardHeader
              title="Web Developer"
              subtitle="Lloyds Banking Group | 2016 - 2018"
              actAsExpander={true}
              showExpandableButton={true}
            />
            <CardText expandable={true}>
              <strong>
                Web Developer and Backend (Basic) | Architecture, Methodogy &
                Innovation, Applied Technology
              </strong>
              <p>
                Python learn the basic - backend functions Data Analyst, Data
                Science and Machine Learning.
              </p>
              <p>
                Joined the Innovation X team supporting to developer Neo4j Graph
                Database/ used Cascading Style Sheets (CSS) and added icons to
                the tool bar/navigation bar so make searing for people in the
                team easier.
              </p>
              <p>
                Libraries the programmes languages and functionality. I
                constantly try to push myself and enjoy learning all the time.
                My aim is to become a Front End Developer/Software Engineer.
                <br></br>
                <a href="https://vimeo.com/manage/videos/660216744">
                  Click Video
                </a>
              </p>
              <div className="double-img">
                <Avatar src="lyd_2016.jpg" size={150} />
                <Avatar src="lyd-1_2016.png" size={150} />
              </div>

              <div className="timeline-entries">
                <div className="timeline-entry-chip">
                  <Chip>Data Analyst / Data Scientists (Basic)</Chip>
                </div>
                <div className="timeline-entry-chip">
                  <Chip>Machine Learning (Basic)</Chip>
                </div>
                <div className="timeline-entry-chip">
                  <Chip>Neo4j - Graph</Chip>
                </div>
                <div className="timeline-entry-chip">
                  <Chip>CSS3/CSS</Chip>
                </div>
                <div className="timeline-entry-chip">
                  <Chip>Python (Basic)</Chip>
                </div>
              </div>
            </CardText>
          </Card>
        </div>
        <div className="timeline-entry">
          <Card
            expanded={this.state.expanded3}
            onExpandChange={this.handleExpandChange3}
          >
            <CardHeader
              title="Software Engineer"
              subtitle="Lloyds Banking Group | 2015 - 2016"
              actAsExpander={true}
              showExpandableButton={true}
            />
            <CardText expandable={true}>
              <strong>Software Engineer | UI Delivery & Transformation</strong>
              <p>
                UI Delivery, our team has the responsibility to review error
                codes/update before business release on Lloyds Banking online in
                the real time across the UK.
              </p>
              <p>
                I have strong knoewleadge in HTML/CSS and JavaScript & Git
                programmers language through pattern library Desktop/Mobile an
                error fixing bug issues - Web Accessibility
              </p>
              <div className="timeline-entries">
                <div className="timeline-entry-chip">
                  <Chip>HTML</Chip>
                </div>
                <div className="timeline-entry-chip">
                  <Chip>CSS/LESS</Chip>
                </div>
                <div className="timeline-entry-chip">
                  <Chip>JavaScript</Chip>
                </div>
                <div className="timeline-entry-chip">
                  <Chip>GIT</Chip>
                </div>
                <div className="timeline-entry-chip">
                  <Chip>TDD</Chip>
                </div>
              </div>
            </CardText>
          </Card>
        </div>
        <div className="timeline-entry">
          <Card
            expanded={this.state.expanded4}
            onExpandChange={this.handleExpandChange4}
          >
            <CardHeader
              title="IT Apprentice"
              subtitle="Lloyds Banking Group | 2014 - 2015"
              actAsExpander={true}
              showExpandableButton={true}
            />
            <CardText expandable={true}>
              <strong>Information of Technology | Apprentice</strong>
              <p>
                Information of Technology | I joined Lloyds Banking Group as an
                Apprentice where I shadowed four teams and trained to become a
                Software Engineer.
              </p>
            </CardText>
          </Card>
        </div>
        <br></br>
        <p className="headline">Award to 10 Downing Street </p>
        <div className="timeline-entry">
          <Card
            expanded={this.state.expanded}
            onExpandChange={this.handleExpandChange}
          >
            <CardHeader
              title="In Support"
              subtitle=" Leonard Cheshire Disability | 2014"
              actAsExpander={true}
              showExpandableButton={true}
            />
            <CardText expandable={true}>
              <div className="images-blog">
                <Avatar src="image-2014.jpg" size={200} />
              </div>
              <p>
                In support of Leonard Cheshire Disability and the global
                contribution of disabled people to enterprise,{" "}
                <b>Samantha Cameron </b>requests the pleasure of the company of
                Dominic attended to 10th Downing Street London.
              </p>
              <Avatar src="lcd_1.jpg" size={90} />
              <Avatar src="lcd_2.jpg" size={90} />
              <Avatar src="lcd_3.jpg" size={90} />
              <Avatar src="lcd_4.jpg" size={90} />
              <p>
                <b>Change Works</b>
                <br></br>a new employment programmes for disabled people based
                in London.
              </p>
              <p>
                "We are delighted to announce the launch of ChangeWorks.
                Delivered by Leonard Cheshire Disability, this programmes will
                support disabled adults who are for paid employment."
              </p>
            </CardText>
          </Card>
        </div>
        <br></br>
        <p className="headline">Work Experience</p>
        <div className="timeline-entry">
          <Card
            expanded={this.state.expanded}
            onExpandChange={this.handleExpandChange}
          >
            <CardHeader
              title="Web Designer"
              subtitle="Lion Web Vision | 2013"
              actAsExpander={true}
              showExpandableButton={true}
            />
            <CardText expandable={true}>
              <p>Training Work Experience (4 Weeks)</p>
              <div className="timeline-entries">
                <div className="timeline-entry-chip">
                  <Chip>HTML</Chip>
                </div>
                <div className="timeline-entry-chip">
                  <Chip>CSS</Chip>
                </div>
                <div className="timeline-entry-chip">
                  <Chip>Wordpress</Chip>
                </div>
                <div className="timeline-entry-chip">
                  <Chip>Photoshop</Chip>
                </div>
              </div>
            </CardText>
          </Card>
        </div>
        <br></br>
        <p className="headline">Education </p>
        <div className="timeline-entry">
          <Card
            expanded={this.state.expanded}
            onExpandChange={this.handleExpandChange}
          >
            <CardHeader
              title=""
              subtitle="Hammersmith & West London College"
              actAsExpander={true}
              showExpandableButton={true}
            />
            <CardText expandable={true}>
              <strong>Information of Technology</strong>
              <p>BTEC National Diploma for - IT Pratitioners (IT & Business)</p>
              <p>BTEC First Diploma in ICT Practitioners</p>
              <p>GNVQ Foundation Business</p>
              <p>ICT Practitioners</p>
            </CardText>
          </Card>
        </div>
      </div>
    );
  }
}

export default TimelineComponent;
