import { shallow, mount, render } from 'enzyme';
import React from 'react';
import MainPage from '../components/MainPage';

let wrapper;

beforeEach(() => {
  const mockProps = {
    onRequestRobots: jest.fn(),
    robots: [],
    searchField: '',
    isPending: false,
  };
  wrapper = shallow(<MainPage {...mockProps} />);
});

it('MainPage should render without crashing', () => {
  expect(wrapper).toMatchSnapshot();
});

it('MainPage filters robots correctly', () => {
  const mockProps2 = {
    onRequestRobots: jest.fn(),
    robots: [
      {
        id: 3,
        name: 'John',
        email: 'john@gmail.com',
      },
    ],
    searchField: 'a',
    isPending: false,
  };
  const wrapper2 = shallow(<MainPage {...mockProps2} />);

  expect(wrapper.instance().filterRobots()).toEqual([]);
  expect(wrapper2.instance().filterRobots()).toEqual([]);
});

it('MainPage filters robots correctly Part 2', () => {
  const mockProps3 = {
    onRequestRobots: jest.fn(),
    robots: [
      {
        id: 3,
        name: 'John',
        email: 'john@gmail.com',
      },
    ],
    searchField: 'a',
    isPending: false,
  };
  const filteredRobots = [];
  const wrapper3 = shallow(<MainPage {...mockProps3} />);

  expect(wrapper3.instance().filterRobots()).toEqual(filteredRobots);
});

it('MainPage handles loading when isPending true', () => {
  const mockProps4 = {
    onRequestRobots: jest.fn(),
    robots: [
      {
        id: 3,
        name: 'John',
        email: 'john@gmail.com',
      },
    ],
    searchField: 'a',
    isPending: true,
  };
  const wrapper4 = shallow(<MainPage {...mockProps4} />);

  expect(wrapper4).toMatchSnapshot('MPIsPending');
});
