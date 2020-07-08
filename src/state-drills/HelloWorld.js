import React from 'react';

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            who: 'world'
        }
    }

    render() {
        return (
            <div>
                <p>Hello, world</p>
                <button id="world">World</button>
                <button id="friend">Friend</button>
                <button id="react">React</button>
            </div>

        );
    }

}