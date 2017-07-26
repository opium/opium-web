jest.mock('react-leaflet');
jest.mock('react-router-dom');

import React from 'react';
import renderer from 'react-test-renderer';
import File from './File';
import FileModel from '../Model/File';

jest.mock('react-leaflet');

it('renders empty file without crashing', () => {
  const component = renderer.create(<File
    canEdit
    file={new FileModel({})}
    findFile={() => {}}
    removeCurrentFile={() => {}}
    updateFilePosition={jest.fn()}
    updateDirectoryCover={jest.fn()}
    pushLocation={() => {}}
    isFetchingFile={false}
    viewportHeight={700}
    loadImage={jest.fn()}
    isLoadedImage={false}
    isDirectoryCoverChanging={false}
  />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot()
});

it('renders a loader if file is not loaded', () => {
  const file = new FileModel({});
  const component = renderer.create(<File
    canEdit
    file={file}
    findFile={() => {}}
    removeCurrentFile={() => {}}
    updateFilePosition={jest.fn()}
    updateDirectoryCover={jest.fn()}
    pushLocation={() => {}}
    isFetchingFile={true}
    viewportHeight={700}
    loadImage={jest.fn()}
    isLoadedImage={false}
    isDirectoryCoverChanging={false}
  />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot()
});

it('renders a loader if directory cover is changing', () => {
  const file = new FileModel({
    name: 'Foo',
    slug: 'foo',
    thumbnails: {
      image: 'http://demo.opium.sitioweb.fr/2010-mavericks-competition-edit1-jpg',
    },
  });
  const component = renderer.create(<File
    canEdit
    file={file}
    localFile={file.thumbnails.get('image')}
    findFile={() => {}}
    removeCurrentFile={() => {}}
    updateFilePosition={jest.fn()}
    updateDirectoryCover={jest.fn()}
    pushLocation={() => {}}
    isFetchingFile={false}
    viewportHeight={700}
    loadImage={jest.fn()}
    isLoadedImage
    isDirectoryCoverChanging
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
    canEdit
    file={file}
    localFile={file.thumbnails.get('image')}
    findFile={() => {}}
    removeCurrentFile={() => {}}
    updateFilePosition={jest.fn()}
    updateDirectoryCover={jest.fn()}
    pushLocation={() => {}}
    isFetchingFile={false}
    viewportHeight={700}
    loadImage={jest.fn()}
    isLoadedImage={true}
    isDirectoryCoverChanging={false}
  />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot()
});

it('renders file with backlink and parent as root', () => {
  const file = new FileModel({
    name: 'Foo',
    slug: 'foo',
    thumbnails: {
      image: 'http://demo.opium.sitioweb.fr/2010-mavericks-competition-edit1-jpg',
    },
    parent: {
      name: '',
      slug: '',
    },
  });
  const component = renderer.create(<File
    canEdit
    file={file}
    localFile={file.thumbnails.get('image')}
    findFile={() => {}}
    removeCurrentFile={() => {}}
    updateFilePosition={jest.fn()}
    updateDirectoryCover={jest.fn()}
    pushLocation={() => {}}
    isFetchingFile={false}
    viewportHeight={700}
    loadImage={jest.fn()}
    isLoadedImage={true}
    isDirectoryCoverChanging={false}
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
    canEdit
    file={file}
    localFile={file.thumbnails.get('image')}
    findFile={() => {}}
    removeCurrentFile={() => {}}
    updateFilePosition={jest.fn()}
    updateDirectoryCover={jest.fn()}
    pushLocation={() => {}}
    isFetchingFile={false}
    viewportHeight={700}
    loadImage={jest.fn()}
    isLoadedImage={true}
    isDirectoryCoverChanging={false}
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
      type: 'file',
      name: 'Bar',
      slug: 'bar',
    },
    next: {
      type: 'file',
      name: 'Baz',
      slug: 'baz',
    },
  });
  const component = renderer.create(<File
    canEdit
    file={file}
    localFile={file.thumbnails.get('image')}
    findFile={() => {}}
    removeCurrentFile={() => {}}
    updateFilePosition={jest.fn()}
    updateDirectoryCover={jest.fn()}
    pushLocation={() => {}}
    isFetchingFile={false}
    viewportHeight={700}
    loadImage={jest.fn()}
    isLoadedImage={true}
    isDirectoryCoverChanging={false}
  />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot()
});

it('does not render prev / next link for directory', () => {
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
      type: 'directory',
    },
    next: {
      name: 'Baz',
      slug: 'baz',
      type: 'directory',
    },
  });
  const component = renderer.create(<File
    canEdit
    file={file}
    localFile={file.thumbnails.get('image')}
    findFile={() => {}}
    removeCurrentFile={() => {}}
    updateFilePosition={jest.fn()}
    updateDirectoryCover={jest.fn()}
    pushLocation={() => {}}
    isFetchingFile={false}
    viewportHeight={700}
    loadImage={jest.fn()}
    isLoadedImage={true}
    isDirectoryCoverChanging={false}
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
    canEdit
    file={file}
    localFile={file.thumbnails.get('image')}
    findFile={() => {}}
    removeCurrentFile={() => {}}
    updateFilePosition={jest.fn()}
    updateDirectoryCover={jest.fn()}
    pushLocation={() => {}}
    isFetchingFile={false}
    viewportHeight={700}
    loadImage={jest.fn()}
    isLoadedImage={true}
    isDirectoryCoverChanging={false}
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
    canEdit
    file={file}
    localFile={file.thumbnails.get('image')}
    findFile={() => {}}
    removeCurrentFile={() => {}}
    updateFilePosition={jest.fn()}
    updateDirectoryCover={jest.fn()}
    pushLocation={() => {}}
    isFetchingFile={false}
    viewportHeight={700}
    loadImage={jest.fn()}
    isLoadedImage={true}
    isDirectoryCoverChanging={false}
  />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot()
});

it('renders file without override position link', () => {
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
    canEdit={false}
    file={file}
    localFile={file.thumbnails.get('image')}
    findFile={() => {}}
    removeCurrentFile={() => {}}
    updateFilePosition={jest.fn()}
    updateDirectoryCover={jest.fn()}
    pushLocation={() => {}}
    isFetchingFile={false}
    viewportHeight={700}
    loadImage={jest.fn()}
    isLoadedImage={true}
    isDirectoryCoverChanging={false}
  />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot()
});
