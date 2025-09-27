import React, {Component} from 'react';
import './timer.css';

class Timer extends Component {
    state = {
        date: new Date()
    };
    
    callMe(){
        setInterval(() => {
        this.setState({date:new Date()});
        },1000);
    }
    render() {
        return(
            <div className="Timer">
            <h2>GMT: {this.state.date.toLocaleTimeString()}</h2>
            {this.callMe()}
            </div>
        );
    }
}

export default Timer;