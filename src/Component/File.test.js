import React from 'react';
import renderer from 'react-test-renderer';
import File from './File';
import FileModel from '../Model/File';

jest.mock('react-leaflet');

it('renders empty file without crashing', () => {
  const component = renderer.create(<File
    file={new FileModel({})}
    findFile={() => {}}
    removeCurrentFile={() => {}}
    pushLocation={() => {}}
    isFetchingFile={false}
    viewportHeight={700}
  />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot()
});

it('renders a loader if file is not loaded', () => {
  const file = new FileModel({});
  const component = renderer.create(<File
    file={file}
    findFile={() => {}}
    removeCurrentFile={() => {}}
    pushLocation={() => {}}
    isFetchingFile={true}
    viewportHeight={700}
  />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot()
});

it('renders real file without crashing', () => {
  const file = new FileModel({
    name: 'Foo',
    slug: 'foo',
    thumbnails: {
      image: 'http://demo.opium.sitioweb.fr/2010-mavericks-competition-edit1-jpg',
    },
  });
  const component = renderer.create(<File
    file={file}
    findFile={() => {}}
    removeCurrentFile={() => {}}
    pushLocation={() => {}}
    isFetchingFile={false}
    viewportHeight={700}
  />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot()
});

it('renders file with backlink', () => {
  const file = new FileModel({
    name: 'Foo',
    slug: 'foo',
    thumbnails: {
      image: 'http://demo.opium.sitioweb.fr/2010-mavericks-competition-edit1-jpg',
    },
    parent: {
      name: 'Bar',
      slug: 'bar',
    },
  });
  const component = renderer.create(<File
    file={file}
    findFile={() => {}}
    removeCurrentFile={() => {}}
    pushLocation={() => {}}
    isFetchingFile={false}
    viewportHeight={700}
  />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot()
});

it('renders file with prev / next links', () => {
  const file = new FileModel({
    name: 'Foo',
    slug: 'foo',
    thumbnails: {
      image: 'http://demo.opium.sitioweb.fr/2010-mavericks-competition-edit1-jpg',
    },
    parent: {
      name: 'Directory',
      slug: 'directory',
    },
    previous: {
      name: 'Bar',
      slug: 'bar',
    },
    next: {
      name: 'Baz',
      slug: 'baz',
    },
  });
  const component = renderer.create(<File
    file={file}
    findFile={() => {}}
    removeCurrentFile={() => {}}
    pushLocation={() => {}}
    isFetchingFile={false}
    viewportHeight={700}
  />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot()
});

it('renders file with a map', () => {
  const file = new FileModel({
    name: 'Foo',
    slug: 'foo',
    thumbnails: {
      image: 'http://demo.opium.sitioweb.fr/2010-mavericks-competition-edit1-jpg',
    },
    parent: {
      name: 'Directory',
      slug: 'directory',
    },
    position: {
      lat: 45,
      lng: 4,
    },
  });
  const component = renderer.create(<File
    file={file}
    findFile={() => {}}
    removeCurrentFile={() => {}}
    pushLocation={() => {}}
    isFetchingFile={false}
    viewportHeight={700}
  />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot()
});
