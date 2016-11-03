import { List, Map } from 'immutable';
import { entityFactory } from './Factory';
import Directory from './Directory';
import File from './File';
import rawDirectory from 'rawDirectory';
import rawDirectoryWithParent from 'rawDirectoryWithParent';
import rawDirectoryWithFileAsChild from 'rawDirectoryWithFileAsChild';


it('test passing anything to entityFactory', () => {
  const item = entityFactory({ a: 'A' });

  expect(item).toBeInstanceOf(Map);
  expect(item.get('a')).toEqual('A');
});

it('generate a valid entity', () => {
  const directory = new Directory(rawDirectory);

  expect(directory).toBeInstanceOf(Directory);
  expect(directory.id).toEqual(1);
  expect(directory.name).toEqual('');
  expect(directory.children).toBeInstanceOf(List);
  expect(directory.parent).toBeFalsy();

  // children
  const alps = directory.children.first();
  expect(alps).toBeInstanceOf(Directory);
  expect(alps.id).toEqual(2);
  expect(alps.name).toEqual('Alps');

  // image lines
  const imageLines = directory.imageLines;
  expect(imageLines).toBeInstanceOf(List);
  expect(imageLines.size).toEqual(1);
  expect(imageLines.first()).toBeInstanceOf(Map);
  expect(imageLines.first().size).toEqual(3);

  expect(directory.getChildById(2).name).toEqual('Alps');
  expect(directory.getChildrenSize()).toEqual(3);

  // directory thumbnail
  expect(directory.directoryThumbnail).toBeFalsy();
});

it('generate a valid entity with parent', () => {
  const directory = new Directory(rawDirectoryWithParent);

  expect(directory).toBeInstanceOf(Directory);
  expect(directory.parent).toBeInstanceOf(Directory);
});

it('generate a valid entity with file as children', () => {
  const directory = new Directory(rawDirectoryWithFileAsChild);

  expect(directory.children).toBeInstanceOf(List);

  const file = directory.children.first();
  expect(file).toBeInstanceOf(File);

  expect(directory.directoryThumbnail).toBeInstanceOf(File);
  expect(directory.directoryThumbnail.name).toEqual('2909_vallon_moy_res.jpg');

  // check lat / lng of childrens
  expect(directory.children.getIn([0, 'position', 'lat'])).toEqual(-2);
  expect(directory.children.getIn([0, 'position', 'lng'])).toEqual(0);
  expect(directory.children.getIn([1, 'position', 'lat'])).toEqual(2);
  expect(directory.children.getIn([1, 'position', 'lng'])).toEqual(0);
  expect(directory.children.getIn([2, 'position', 'lat'])).toEqual(0);
  expect(directory.children.getIn([2, 'position', 'lng'])).toEqual(1);
  expect(directory.children.getIn([3, 'position', 'lat'])).toEqual(0);
  expect(directory.children.getIn([3, 'position', 'lng'])).toEqual(-1);

  expect(directory.getPositionBounds()).toEqual(Map({
    top: 3,
    bottom: -3,
    right: 1.5,
    left: -1.5,
  }));
});


