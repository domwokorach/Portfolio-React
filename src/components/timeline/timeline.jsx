import React, {Component} from 'react';
import {
    Card,
    CardHeader,
    CardText
} from 'material-ui/Card';
import Chip from 'material-ui/Chip';
import './timeline.css';
import { Avatar } from 'material-ui';

class TimelineComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
          expanded1: false,
          expanded2: false,
          expanded3: false,
          expanded4: false,
          expanded5: false,
          expanded6: false,
          expanded7: false,
          expanded8: false,
          expanded9: false,
          expanded10: false,
          showModal: false,
          selectedChip: null
        };
    }

    openChipModal = (chipLabel) => {
      this.setState({ showModal: true, selectedChip: chipLabel });
    };

    closeChipModal = () => {
      this.setState({ showModal: false, selectedChip: null });
    };

    async componentDidMount() {}

    componentWillUnmount() {}

    handleExpandChange = (expanded1) => {
      this.setState({expanded1: expanded1});
    };

    handleExpandChange2 = (expanded2) => {
      this.setState({expanded2: expanded2});
    };

    handleExpandChange3 = (expanded3) => {
      this.setState({expanded3: expanded3});
    };

    handleExpandChange4 = (expanded4) => {
      this.setState({expanded4: expanded4});
    };

    handleExpandChange5 = (expanded5) => {
      this.setState({expanded5: expanded5});
    };

    handleExpandChange6 = (expanded6) => {
      this.setState({expanded6: expanded6});
    };

    handleExpandChange7 = (expanded7) => {
      this.setState({expanded7: expanded7});
    };

    handleExpandChange8 = (expanded8) => {
      this.setState({expanded8: expanded8});
    };

    handleExpandChange9 = (expanded9) => {
      this.setState({expanded9: expanded9});
    };

    handleExpandChange10 = (expanded10) => {
      this.setState({expanded10: expanded10});
    };

    handleExpand = () => {
      this.setState({expanded: true});
    };

    handleExpand2 = () => {
      this.setState({expanded2: true});
    };

    handleExpand3 = () => {
      this.setState({expanded3: true});
    };

    handleExpand4 = () => {
      this.setState({expanded4: true});
    };

    handleExpand5 = () => {
      this.setState({expanded5: true});
    };

    handleExpand6 = () => {
      this.setState({expanded6: true});
    };

    handleExpand7 = () => {
      this.setState({expanded7: true});
    };

    handleExpand8 = () => {
      this.setState({expanded8: true});
    };

    handleExpand9 = () => {
      this.setState({expanded9: true});
    };

    handleExpand10 = () => {
      this.setState({expanded10: true});
    };

    handleReduce = () => {
      this.setState({expanded1: false});
    };

    handleReduce2 = () => {
      this.setState({expanded2: false});
    };

    handleReduce3 = () => {
      this.setState({expanded3: false});
    };

    handleReduce4 = () => {
      this.setState({expanded4: false});
    };

    handleReduce5 = () => {
      this.setState({expanded5: false});
    };

    handleReduce6 = () => {
      this.setState({expanded6: false});
    };

    handleReduce7 = () => {
      this.setState({expanded7: false});
    };

    handleReduce8 = () => {
      this.setState({expanded8: false});
    };

    handleReduce9 = () => {
      this.setState({expanded9: false});
    };

    handleReduce10 = () => {
      this.setState({expanded10: false});
    };

    render() {
        return (
            <div className="timeline">
                      <p className="headline">Licenses & certifications</p>
                      <div className="timeline-entry">
                      <Card expanded={this.state.expanded} onExpandChange={this.handleExpandChange}>
                        <CardHeader title="Certifications" subtitle="Codecademy, HackerRank and other - 2025"
                        actAsExpander={true} showExpandableButton={true}/>
                        <CardText expandable={true}>
                        <div className='double-img'>
                         <Avatar src="certificate.png" size={100} style={{ objectFit: 'cover' }} />
                        </div>
                        <div className="timeline-entries">
                          <div className="timeline-entry-chip">
                          <Chip onClick={() => this.openChipModal('')}>Click info</Chip>
                          </div>
                        </div>
                        </CardText>
                      </Card>
                      </div>

              {this.state.showModal && (
                <div className="chip-modal-overlay" onClick={this.closeChipModal}>
                  <div className="chip-modal-content animate-chip-modal" onClick={e => e.stopPropagation()}>
                    <span className="chip-modal-close" onClick={this.closeChipModal}>&times;</span>
                    <h3>{this.state.selectedChip}</h3>
                    <p>Learn Programming: <b>{this.state.selectedChip} Programming | </b><a href=""> Certification</a></p>
                    <p>Learn Javascript Online: <b>{this.state.selectedChip} Javascript | </b><a href=""> Certification</a></p>
                    <p>Learn TypeScript: <b>{this.state.selectedChip} TypeScript | </b><a href="#"> Certificate</a></p>
                    <p>Codecademy: <b>{this.state.selectedChip} React Course | </b><a href="#"> Certificate</a></p>
                    <p>Codecademy: <b>{this.state.selectedChip} Express Course | </b><a href=""> Certificate</a></p>
                    <p>Codecademy: <b>{this.state.selectedChip} Python 3 Course | </b><a href="#" src=""> Certificate</a></p>
                    <p>Codecademy: <b>{this.state.selectedChip} Implement Search Algorithm with Python | </b><a href="#"> Certificate</a></p>
                    <p>HackerRank: <b>{this.state.selectedChip} Javascript (Intermediate) | </b><a href=""> Certificate</a></p>
                    <p>HackerRank: <b>{this.state.selectedChip} Rest API (Intermediate) | </b><a href=""> Certificate</a></p>
                    <p>HackerRank: <b>{this.state.selectedChip} Problem Solving (Basic) | </b><a href=""> Certificate</a></p>
                  </div>
                </div>
              )}

              {/* ...existing code... */}

              <p className="headline">Shadowing Sessions</p>
                  <div className="timeline-entry">
                    <Card expanded={this.state.expanded2} onExpandChange={this.handleExpandChange2}>
                        <CardHeader title="Software Engineering" subtitle="Sky | Shadowing Session - 2024"
                          actAsExpander={true} showExpandableButton={true}/>
                        <CardText expandable={true}>
                          <Avatar src="sky_group_logo.png" size={150} style={{ objectFit: 'cover', marginLeft: '100px' }} />
                          <h4>Shadowing Sessions</h4>
                          <p>Roles & Responsibilities:<br />
                            Backend | Evaluate | Get Available Catalogue (GAC).
                          </p>
                          <p>CATS (Catalogue Service):<br />
                            Analysis | Design | Development | Testing | Deployment | Deployment & Maintenance & Design.
                          </p>
                          <p>Day to Day Tasks:<br />
                            Unit Testing & Features Testing | Bug is reported | Code Review | Scrum rituals.
                          </p>
                          <p>Scrum Rituals:<br />
                            Stand up | Sprint Demos | Retrospective (Retros) | Refinement.
                          </p>
                          <p>Developing Code:<br />
                            CATS | Understand what the code is doing, identify the problem | Testing (Unit Tests) | Feature Test (Does the API work?).
                          </p>
                            <div className="timeline-entries">
                            <div className="timeline-entry-chip">
                              <Chip>Python (Basic) | Javascript | API | Unit Test | Git/Github</Chip>
                            </div>
                            <div className="timeline-entry-chip">
                              <Chip>Bulk Tools | Backend & Microservice | Jenkins & Docker</Chip>
                            </div>
                          </div>
                        </CardText>
                    </Card>
                </div>

              <p className="headline">Projects</p>
                <div className="timeline-entry">
                    <Card expanded={this.state.expanded3} onExpandChange={this.handleExpandChange3}>
                        <CardHeader title="Project" subtitle="Blogs | 2024"
                          actAsExpander={true} showExpandableButton={true}/>
                        <CardText expandable={true}>
                            <Avatar src="project.png" size={150} style={{ objectFit: 'cover', marginLeft: '100px' }} />

                            <div className="timeline-entries">
                            <div className="timeline-entry-chip-blogs">
                              <ul>
                                <li>Steaming API</li>
                                <li>Opening Account</li>
                                <li>Travel World Web Developer</li>
                              </ul>
                            </div>
                          </div>
                        </CardText>
                    </Card>
                </div>

              <p className="headline">Working experience</p>

                <div className="timeline-entry">
                    <Card expanded={this.state.expanded4} onExpandChange={this.handleExpandChange4}>
                        <CardHeader title="Front End Developer" subtitle="Lloyds Banking Group | 2018 - 2020"
                          actAsExpander={true} showExpandableButton={true}/>
                        <CardText expandable={true}>
                          <h4>Specialist | Web Accessibility on Banking online.</h4>
                          <p>By creating JavaScript together with my team, I played a key role within the special Signly partnership at Lloyds, which won the financial Innovation Awards 2017. Signly is a BSL British Sign Language accessibility service that allows deaf customers to see a video pop up with a sign language video.</p>                          
                          <h4>Front End Developer | Applied Technology, Innovation & Strategy</h4>
                          <p>HTML5, CSS3, React, Node.js, Express, Webpack and Javascript - Front End Development</p>
                          <p>A part of the team the delivery the successful Innovation Communities conference 2018.</p>
                          <p>Actively engaged with other colleagues to help determine values and set KPIs.</p>
                          <p>Took part in showcasing prototypes for Applied Technology Innovation and Strategy team.</p>
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
                              <Chip>Javascript</Chip>
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
                    <Card expanded={this.state.expanded5} onExpandChange={this.handleExpandChange5}>
                      <CardHeader title="Web Developer" subtitle="Lloyds Banking Group | 2016 - 2018"
                        actAsExpander={true} showExpandableButton={true}/>
                      <CardText expandable={true}>
                          <h4>Web Developer and Backend (Basic) | Architecture, Methodogy & Innovation, Applied Technology</h4>
                          <p>Python learn the basic - backend functions Data Analyst, Data Science and Machine Learning.</p>
                          <p>Joined the Innovation X team supporting to developer Neo4j Graph Database/ used Cascading Style Sheets (CSS) and added icons to the tool bar/navigation bar so make searing for people in the team easier.</p>
                          <p>Libraries the programmes languages and functionality. I constantly try to push myself and enjoy learning all the time. My aim is to become a Front End Developer/Software Engineer.</p>
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
                  <Card expanded={this.state.expanded6} onExpandChange={this.handleExpandChange6}>
                      <CardHeader title="Software Engineer" subtitle="Lloyds Banking Group | 2015 - 2016"
                        actAsExpander={true} showExpandableButton={true}/>
                      <CardText expandable={true}>
                          <Avatar src="lloyds-banking-group-logo.png" size={150} style={{ objectFit: 'cover', marginLeft: '100px' }} />
                          <h4>Software Engineer | UI Delivery & Transformation</h4>
                          <p>UI Delivery, our team has the responsibility to review error codes/update before business release on Lloyds Banking online in the real time across the UK.</p>
                          <p>I have strong knowledge in HTML/CSS and JavaScript & Git programmers language through pattern library Desktop/Mobile an error fixing bug issues - Web Accessibility</p>
                          <div className="timeline-entries">
                            <div className="timeline-entry-chip">
                              <Chip>HTML</Chip>
                            </div>
                            <div className="timeline-entry-chip">
                              <Chip>CSS/Less</Chip>
                            </div>
                            <div className="timeline-entry-chip">
                              <Chip>Javascript</Chip>
                            </div>
                            <div className="timeline-entry-chip">
                              <Chip>GIT</Chip>
                            </div>
                            <div className="timeline-entry-chip">
                              <Chip>TTD</Chip>
                            </div>
                             <div className="timeline-entry-chip">
                              <Chip>Jenkins</Chip>
                            </div>
                          </div>
                      </CardText>
                  </Card>
                </div>

                <div className="timeline-entry">
                  <Card expanded={this.state.expanded7} onExpandChange={this.handleExpandChange7}>
                      <CardHeader title="IT Apprentice" subtitle="Lloyds Banking Group | 2014 - 2015"
                        actAsExpander={true} showExpandableButton={true}/>
                      <CardText expandable={true}>
                        <h4>Information of Technology</h4>
                          <p>Information of Technology | I joined Lloyds Banking Group as an Apprentice where I shadowed four teams and trained to become a Software Engineer.</p>

                          <div className="timeline-entries">
                            <div className="timeline-entry-chip">
                              <Chip>Mobile</Chip>
                            </div>
                            <div className="timeline-entry-chip">
                              <Chip>HR</Chip>
                            </div>
                            <div className="timeline-entry-chip">
                              <Chip>DevOps</Chip>
                            </div>
                            <div className="timeline-entry-chip">
                              <Chip>UI Delivery & Transformation</Chip>
                            </div>
                          </div>
                      </CardText>
                  </Card>
                </div>

               <div className="timeline-entry">
                  <Card expanded={this.state.expanded8} onExpandChange={this.handleExpandChange8}>
                      <CardHeader title="In Support" subtitle="Leonard Cheshire Disability | 2014"
                        actAsExpander={true} showExpandableButton={true}/>
                      <CardText expandable={true}>
                          <Avatar src="Leonard-Cheshire-Disability-logo.jpg" size={150} style={{ objectFit: 'cover', marginLeft: '100px' }} />
                          <p>In support of Leonard Cheshire Disability and the global contribution of disabled people to enterprise, Samantha Cameron requests the pleasure of the company of Dominic attended to 10th Downing Street London <em>(20th May 2014)</em>.</p>
                          <p>a new employment programmes for disabled people based in London.</p>
                          <p>"We are delighted to announce the launch of ChangeWorks. Delivered by Leonard Cheshire Disability, this programmes will support disabled adults who are for paid employment."</p>
                          <div className="double-img">
                              <Avatar src="lcd_5.jpg" size={70} />
                              <Avatar src="lcd_2.jpg" size={70} />
                              <Avatar src="lcd_3.jpg" size={70} />
                              <Avatar src="lcd_4.jpg" size={70} />
                          </div>
                      </CardText>
                  </Card>
                </div>

              <div className="timeline-entry">
                  <Card expanded={this.state.expanded9} onExpandChange={this.handleExpandChange9}>
                      <CardHeader title="Web Designer " subtitle="Lion Web Vision | 2013"
                        actAsExpander={true} showExpandableButton={true}/>
                      <CardText expandable={true}>
                          Training Work Experience (4 Weeks)
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
                              <Chip>Photoshop CS3</Chip>
                            </div>
                          </div>
                      </CardText>
                  </Card>
              </div>

              <p className="headline">Education</p>

              <div className="timeline-entry">
                  <Card expanded={this.state.expanded10} onExpandChange={this.handleExpandChange10}>
                      <CardHeader title="Hammersmith & West London College" subtitle="2005 - 2009"
                        actAsExpander={true} showExpandableButton={true}/>
                      <CardText expandable={true}>
                        <p>BTEC National Diploma for - IT Practitioners (IT & Business)</p>
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
