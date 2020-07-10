import React from 'react';
import ReactDOM from 'react-dom';
import Accordion from './Accordion';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('Accordion Component', () => {
    it('renders an empty li when sections prop is not supplied', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Accordion />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders no sections content by default', () => {
        
    });

    it('opens a clicked section', () => {

    });

    it('only opens the last section when multiple sections have been clicked', () => {

    });
});
