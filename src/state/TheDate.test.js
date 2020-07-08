import React from 'react';
import ReactDOM from 'react-dom';
import TheDate from './TheDate';
import renderer from 'react-test-renderer';

describe('TheDate Component', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<TheDate />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it.skip('renders the UI as expected', () => {
        const tree = renderer
            .create(<TheDate />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
})