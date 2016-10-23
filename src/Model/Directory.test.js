import { List, Map } from 'immutable';
import { entityFactory } from './Factory';
import Directory from './Directory';
import File from './Directory';
import rawDirectory from 'rawDirectory';
import rawDirectoryWithParent from 'rawDirectoryWithParent';


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

  const alps = directory.children.first();
  expect(alps).toBeInstanceOf(Directory);
  expect(alps.id).toEqual(2);
  expect(alps.name).toEqual('Alps');

  const imageLines = directory.imageLines;
  expect(imageLines).toBeInstanceOf(List);
  expect(imageLines.size).toEqual(1);
  expect(imageLines.first()).toBeInstanceOf(Map);
  expect(imageLines.first().size).toEqual(3);

  expect(directory.getChildById(2).name).toEqual('Alps');
  expect(directory.getChildrenSize()).toEqual(3);
});

it('generate a valid entity with parent', () => {
  const directory = new Directory(rawDirectoryWithParent);

  expect(directory).toBeInstanceOf(Directory);
  expect(directory.parent).toBeInstanceOf(Directory);
});

it('generate a valid entity with file as children', () => {
  const directory = new Directory(rawDirectoryWithParent);

  expect(directory.children).toBeInstanceOf(List);

  const file = directory.children.first();
  expect(file).toBeInstanceOf(File);
});
