import React from 'react';
import { shallow } from 'enzyme';
import Footer from './index';

it('renders without crashing', () => {
  const wrapper = shallow(<Footer />);
  expect(wrapper).toMatchSnapshot();
});
