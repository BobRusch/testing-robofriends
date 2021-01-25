import { shallow, mount, render } from 'enzyme';
import React from 'react';
import Header from './Header';

let wrapper;

beforeEach(() => {
  const mockProps = {
    onRequestRobots: jest.fn(),
    robots: [],
    searchField: '',
    isPending: false,
  };
  wrapper = shallow(<Header />);
});

it('test that Header renders properly', () => {
  expect(wrapper).toMatchSnapshot();
});
