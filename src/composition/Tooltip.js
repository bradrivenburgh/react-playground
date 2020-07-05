import React from 'react';
import './Tooltip.css';

function Tooltip(props) {
    return (
        <span className='Tooltip'>
            <span 
                className='Tooltip-content'
                style={{ color: props.color }}
            >
                {props.children}
            </span>
            <span className='Tooltip-message'>
                {props.message}
            </span>
        </span>
    );
}

class TooltipClass extends React.Component {
    render() {
        console.log('Using a class component!');
        console.log(this.props);
        return (
            <span className='Tooltip'>
                <span 
                    className='Tooltip-content'
                    style={{ color: this.props.color }}
                >
                    {this.props.children}
                </span>
                <span className='Tooltip-message'>
                    {this.props.message}
                </span>
            </span>
        );
    
    }
}

export default TooltipClass;