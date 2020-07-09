import React from 'react';

export default class HelloWorld extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            who: 'world'
        }
    }

    handleWhoChange = (event) => {
        const newWho = event.target.value;
        this.setState({ who: newWho });
    }

    render() {
        return (
            <div>
                <p>Hello, {this.state.who}</p>
                <button value="world" onClick={this.handleWhoChange}>world</button>
                <button value="friend" onClick={this.handleWhoChange}>friend</button>
                <button value="react" onClick={this.handleWhoChange}>react</button>
            </div>

        );
    }

}