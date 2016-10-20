import React from 'react';
import renderer from 'react-test-renderer';
import App from './App';
import Directory from '../Model/Directory';

it('renders without crashing without directory', () => {
  const component = renderer.create(<App />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot()
});

it('renders an empty directory', () => {
  const directory = new Directory({
    name: 'foo',
  });
  const component = renderer.create(<App directory={directory} />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot()
});

it('renders a non empty directory', () => {
  const directory = new Directory({
    name: 'foo',
    children: [
      {
        id: 1,
        name: "Alps",
        slug: "alps",
      },
      {
        id: 2,
        name: "Pacific Ocean",
        slug: "pacific-ocean",
      }
    ],
    image_lines: [
      {
        "1": {
          thumbs: 'http://demo.opium.sitioweb.fr/2909-vallon-moy-res-jpg/thumbs/200-200',
        },
        "2": {
          thumbs: 'http://demo.opium.sitioweb.fr/2010-mavericks-competition-edit1-jpg/thumbs/200-200',
        }
      }
    ],
  });
  const component = renderer.create(<App directory={directory} />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot()
});
