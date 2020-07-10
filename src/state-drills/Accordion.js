import React from 'react';
import './Accordion.css';

export default class Accordion extends React.Component {
    static defaultProps = {
        sections: []
    };
    
    state = {
        currentSectionIndex: null
    };

    handleButtonClick = (index) => {
        this.setState({currentSectionIndex: index})
    }

    renderButtons() {
        return this.props.sections.map((section, index) => (
            <li key={index}>
                <button key={index} onClick={() => this.handleButtonClick(index)}>
                    {section.title}
                </button>
                    {this.state.currentSectionIndex === index && this.renderContent()}
            </li>
        ));
    }

    renderContent() {
        const currentSection = this.props.sections[this.state.currentSectionIndex];
        return (
            <p className='content'>
                {currentSection.content}
            </p>
        );
    }

    render() {
        return (
            <ul>
                {this.renderButtons()}
            </ul>
        );
     }
}