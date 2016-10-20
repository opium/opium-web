import React from 'react';
import renderer from 'react-test-renderer';
import Thumbnail from './Thumbnail';

it('renders without crashing', () => {
  const component = renderer.create(
    <Thumbnail
      image="http://demo.opium.sitioweb.fr/2909-vallon-moy-res-jpg/thumbs/200-200"
      title="Alps"
    />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot()
});
