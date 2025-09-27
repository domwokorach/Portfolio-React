import React, {Component} from 'react';
import './introduction.css';
import Avatar from 'material-ui/Avatar';


class IntroductionComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            temperature: null,
            loading: true,
            error: null
        };
    }

    componentDidMount() {
        // London coordinates: 51.5074° N, 0.1278° W
        fetch('https://api.open-meteo.com/v1/forecast?latitude=51.5074&longitude=-0.1278&current_weather=true')
            .then(res => res.json())
            .then(data => {
                if (data && data.current_weather && typeof data.current_weather.temperature === 'number') {
                    this.setState({ temperature: data.current_weather.temperature, loading: false });
                } else {
                    this.setState({ error: 'No weather data', loading: false });
                }
            })
            .catch(() => this.setState({ error: 'Failed to fetch weather', loading: false }));
    }

    render() {
        const { temperature, loading, error } = this.state;
        return (
          <div className="introduction">
            <Avatar src="avatar.jpg" size={150}/>
            <p className="introduction-text">
              Loves React, Typescript, Javascript, Node and Express. Software Engineer/Front End Development, currently living in <b>London, United Kingdom</b>.
            </p>
            <br />
            <div className="weather-info">
              {loading && <span>Loading weather...</span>}
              {!loading && error && <span style={{color: 'red'}}>{error}</span>}
              {!loading && !error && (
                <span>Current temperature: <b>{temperature}&deg;C</b></span>
              )}
            </div>


          </div>
        );
    }
}

export default IntroductionComponent;