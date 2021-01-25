import { shallow, mount, render } from 'enzyme';
import React from 'react';
import CounterButton from './CounterButton';

it('renders without crashing', () => {
  const mockColor = 'blue';
  expect(shallow(<CounterButton color={mockColor} />)).toMatchSnapshot();
});

it('correnctly increments the counter', () => {
  const mockColor = 'blue';
  const wrapper = shallow(<CounterButton color={mockColor} />);

  expect(wrapper).toMatchSnapshot();
  wrapper.find('[id="counter"]').simulate('click');
  expect(wrapper.state()).toEqual({ count: 1 });
  wrapper.find('[id="counter"]').simulate('click');
  wrapper.find('[id="counter"]').simulate('click');
  expect(wrapper.state()).toEqual({ count: 3 });
  wrapper.find('[id="counter"]').simulate('click');
  wrapper.find('[id="counter"]').simulate('click');
  wrapper.find('[id="counter"]').simulate('click');
  wrapper.find('[id="counter"]').simulate('click');
  wrapper.find('[id="counter"]').simulate('click');
  wrapper.find('[id="counter"]').simulate('click');
  expect(wrapper.state()).toEqual({ count: 9 });
  expect(wrapper.props().color).toEqual(mockColor);
});
