import React from 'react';
import ReactDOM from 'react-dom';
import Accordion from './Accordion';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

const sectionsProp = [
    {
      title: 'Section 1',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
      title: 'Section 2',
      content: 'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!',
    },
    {
      title: 'Section 3',
      content: 'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?',
    },
]

describe('Accordion Component', () => {
    it('renders an empty li when sections prop is not supplied', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Accordion />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders no sections content by default', () => {
        const wrapper = shallow(<Accordion sections={sectionsProp} />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('opens a clicked section', () => {
        const wrapper = shallow(<Accordion sections={sectionsProp} />);
        // console.log('>>>WRAPPER<<<');
        // console.log(wrapper.debug());
        // console.log('>>>>FIND(BUTTON)<<<<');
        // console.log(wrapper.find('button').at(0).debug());
        wrapper.find('button').at(0).simulate('click');
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('only opens the last section when multiple sections have been clicked', () => {
        const wrapper = shallow(<Accordion sections={sectionsProp} />);
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(1).simulate('click');
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});
