import { shallow, mount, render } from 'enzyme';
import React from 'react';
import Card from './Card';

it('expect to render Card Component', () => {
  const mockName = 'Jane Doe';
  const mockUsername = 'DeerDoe';
  const mockEmail = 'janedoe@gmail.com';

  expect(
    shallow(<Card name={mockName} username={mockUsername} email={mockEmail} />)
  ).toMatchSnapshot();
});
