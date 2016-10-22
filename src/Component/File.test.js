import React from 'react';
import renderer from 'react-test-renderer';
import File from './File';
import FileModel from '../Model/File';

it('renders file without crashing', () => {
  const component = renderer.create(<File
    file={new FileModel({})}
  />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot()
});

