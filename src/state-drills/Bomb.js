import React from 'react';

export default class Bomb extends React.Component {
    constructor(props) {
        super(props);
        // Set the initial state
        this.state = { count: 0, bombTicker: 'tick'} ;
    }

    //If 'count' is divisible by 2, display 'tick'
    //If 'count' isn't divisible by 2, display 'tock'
    //If 'count' >= 8, display 'BOOM!!!!' and clearInterval
    bombCountDown = () => {
        if (this.state.count % 2 === 0) {
            this.setState({bombTicker: 'tick'});
        } else if (!(this.state.count % 2 === 0)) {
            this.setState({bombTicker: 'tock'});
        } 
        if (this.state.count >=8) {
            this.setState({bombTicker: 'BOOM!!!!'});
            this.componentWillUnmount();
        }
    }

    //When the component mounts, register an interval that adds 1
    //to the count for every 1000ms 
    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState({count: this.state.count + 1});
            this.bombCountDown();
        }, 1000)

    }

    //Clear the interval when the component is about to unmount
    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <div>
                <p>{this.state.bombTicker}</p>
            </div>
        );
    }
}