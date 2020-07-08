import React, { createElement } from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter';
import renderer from 'react-test-renderer';

describe('Counter component', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Counter />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it.skip('renders the UI as expected', () => {
        const tree = renderer
            .create(<Counter count={123} step={3} />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
    //Not sure how to check for a change in state for count
    it.skip('increases the count', ()=> {
        const initialCount = Counter.this.handleButtonClick;
    });

});

