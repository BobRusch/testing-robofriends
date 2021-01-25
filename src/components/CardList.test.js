import { shallow, mount, render } from 'enzyme';
import React from 'react';
import CardList from './CardList';

it('expect to render CardList Component', () => {
  const mockRobots = [
    {
      id: 1,
      name: 'John Smith',
      username: 'JohnJohn',
      email: 'john@gmail.com',
    },
    {
      id: 1,
      name: 'Jane Doe',
      username: 'DeerDoe',
      email: 'janedoe@gmail.com',
    },
  ];

  expect(shallow(<CardList robots={mockRobots} />)).toMatchSnapshot();
});
