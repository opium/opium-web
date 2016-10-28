import React from 'react';
import renderer from 'react-test-renderer';
import Login from './Login';

it('renders login', () => {
  const component = renderer.create(<Login
    doLogin={jest.fn()}
  />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot()
});
