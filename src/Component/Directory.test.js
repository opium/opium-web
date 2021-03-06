jest.mock('react-leaflet');
jest.mock('react-router-dom');

import React from 'react';
import renderer from 'react-test-renderer';
import Directory from './Directory';
import DirectoryModel from '../Model/Directory';

it('renders directory without crashing', () => {
  const component = renderer.create(<Directory
    findDirectory={jest.fn()}
    slug=""
    loadImage={jest.fn()}
    hasBackground={false}
    displayAdminLink
    isFetchingDirectory={false}
  />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot()
});

it('renders an empty directory', () => {
  const directory = new DirectoryModel({
    name: 'foo',
  });
  const component = renderer.create(<Directory
    directory={directory}
    findDirectory={jest.fn()}
    slug=""
    loadImage={jest.fn()}
    hasBackground={false}
    displayAdminLink
    isFetchingDirectory={false}
  />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot()
});

it('renders an empty directory without admin link', () => {
  const directory = new DirectoryModel({
    name: 'foo',
  });
  const component = renderer.create(<Directory
    directory={directory}
    findDirectory={jest.fn()}
    slug=""
    loadImage={jest.fn()}
    hasBackground={false}
    displayAdminLink={false}
    isFetchingDirectory={false}
  />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot()
});

it('renders a non empty directory', () => {
  const directory = new DirectoryModel({
    name: 'foo',
    children: [
      {
        id: 1,
        name: "Alps",
        slug: "alps",
        type: 'directory',
      },
      {
        id: 2,
        name: "Pacific Ocean",
        slug: "pacific-ocean",
        type: 'directory',
      }
    ]
  });
  const component = renderer.create(<Directory
    directory={directory}
    findDirectory={jest.fn()}
    slug=""
    loadImage={jest.fn()}
    hasBackground={false}
    displayAdminLink
    isFetchingDirectory={false}
  />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot()
});

it('renders a non empty directory with parent', () => {
  const directory = new DirectoryModel({
    name: 'foo',
    children: [
      {
        id: 1,
        name: "Alps",
        slug: "alps",
        type: 'directory',
      },
      {
        id: 2,
        name: "Pacific Ocean",
        slug: "pacific-ocean",
        type: 'directory',
      }
    ],
    parent: {
      name: 'bar',
      slug: 'bar',
    },
  });
  const component = renderer.create(<Directory
    directory={directory}
    findDirectory={jest.fn()}
    slug=""
    loadImage={jest.fn()}
    hasBackground={false}
    displayAdminLink
    isFetchingDirectory={false}
  />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot()
});

it('renders a directory with header', () => {
  const directory = new DirectoryModel({
    name: 'foo',
    children: [
      {
        id: 1,
        name: "Alps",
        slug: "alps",
        type: 'directory',
      },
      {
        id: 2,
        name: "Pacific Ocean",
        slug: "pacific-ocean",
        type: 'directory',
      }
    ],
    parent: {
      name: 'bar',
      slug: 'bar',
    },
    _embedded: {
      directory_thumbnail: {
        type: 'file',
        _links: {
          cropTemplate: {
            href: 'http://demo.opium.sitioweb.fr/2010-mavericks-competition-edit1-jpg/thumbs/%7BcropWidth%7D-%7BcropHeight%7D',
          }
        },
      }
    }
  });
  const component = renderer.create(<Directory
    directory={directory}
    findDirectory={jest.fn()}
    slug=""
    loadImage={jest.fn()}
    hasBackground={true}
    backgroundLoaded={false}
    backgroundImage="http://demo.opium.sitioweb.fr/2909-vallon-moy-res-jpg/thumbs/1170-400"
    localBackgroundImage="http://demo.opium.sitioweb.fr/2909-vallon-moy-res-jpg/thumbs/1170-400"
    displayAdminLink
    isFetchingDirectory={false}
  />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot()
});

it('renders a directory with children and loaded background', () => {
  const directory = new DirectoryModel({
    name: 'foo',
    children: [
      {
        id: 1,
        name: "Alps",
        slug: "alps",
        type: 'directory',
      },
      {
        id: 2,
        name: "Pacific Ocean",
        slug: "pacific-ocean",
        type: 'directory',
      }
    ],
    parent: {
      name: 'bar',
      slug: 'bar',
    },
    _embedded: {
      directory_thumbnail: {
        type: 'file',
        _links: {
          cropTemplate: {
            href: 'http://demo.opium.sitioweb.fr/2010-mavericks-competition-edit1-jpg/thumbs/%7BcropWidth%7D-%7BcropHeight%7D',
          }
        },
      }
    }
  });
  const component = renderer.create(<Directory
    directory={directory}
    findDirectory={jest.fn()}
    slug=""
    loadImage={jest.fn()}
    hasBackground={true}
    backgroundLoaded={true}
    backgroundImage="http://demo.opium.sitioweb.fr/2909-vallon-moy-res-jpg/thumbs/1170-400"
    localBackgroundImage="http://demo.opium.sitioweb.fr/2909-vallon-moy-res-jpg/thumbs/1170-400"
    displayAdminLink
    isFetchingDirectory={false}
  />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot()
});

it('renders root directory with file as children', () => {
  const directory = new DirectoryModel({
    name: 'foo',
    children: [
      {
        id: 1,
        name: "Alps",
        slug: "alps",
        type: 'directory',
      },
      {
        id: 2,
        name: "Pacific Ocean",
        slug: "pacific-ocean",
        type: 'directory',
      },
      {
        id: 3,
        name: "A Photo",
        slug: "a-photo",
        type: 'file',
      },
    ],
    _embedded: {
      directory_thumbnail: {
        type: 'file',
        _links: {
          cropTemplate: {
            href: 'http://demo.opium.sitioweb.fr/2010-mavericks-competition-edit1-jpg/thumbs/%7BcropWidth%7D-%7BcropHeight%7D',
          }
        },
      }
    }
  });
  const component = renderer.create(<Directory
    directory={directory}
    findDirectory={jest.fn()}
    slug=""
    loadImage={jest.fn()}
    hasBackground={true}
    backgroundLoaded={true}
    backgroundImage="http://demo.opium.sitioweb.fr/2909-vallon-moy-res-jpg/thumbs/1170-400"
    localBackgroundImage="http://demo.opium.sitioweb.fr/2909-vallon-moy-res-jpg/thumbs/1170-400"
    displayAdminLink
    isFetchingDirectory={false}
  />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot()
});
