import React from 'react';

export default class RouletteGun extends React.Component {   
    static defaultProps = {
        bulletInChamber: 8
    }
    
    constructor(props) {
        super(props);
        this.state = {
            chamber: null, 
            spinningTheChamber: false,
            message: '',
        };
    }

    handleSpinningChamber = () => {
        this.setState({spinningTheChamber: true});
    }

    generateRandomNumber() {
        return Math.ceil(Math.random() * 8);
    }

    renderResults = () => {
        if (this.state.spinningTheChamber) {
            this.setState({message: 'spinning the chamber and pulling the trigger! ...'})
        }
        if ((!this.state.spinningTheChamber) && (this.state.chamber === this.props.bulletInChamber)) {
            this.setState({message: 'BANG!!!!'});
        } 
        if ((!this.state.spinningTheChamber) && (this.state.chamber !== this.props.bulletInChamber)) {
            console.log('chamber ' + this.state.chamber, 'bullet '+ this.props.bulletInChamber);
            this.setState({message: 'you are safe'});
        }
    }

    handleTimeout = () => {
        let count = 0;
        this.timeout = setInterval(() => {
            count++;
            this.setState({chamber: this.generateRandomNumber()});
            if (count === 2) {
                this.setState({spinningTheChamber: false});
                clearInterval(this.timeout);
            }
            this.renderResults();
        }, 1000)
    }

    handleTriggerPull = (e) => {
        this.handleSpinningChamber();
        this.handleTimeout();
    }

    componentWillUnmount() {
        clearInterval(this.timeout);
    }

    render() {
        return (
            <div>
                <p>{this.state.message}</p>
                <button onClick={this.handleTriggerPull}>Pull the trigger!</button>
            </div>
        );
    }
}