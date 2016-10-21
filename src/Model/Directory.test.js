import { List, Map } from 'immutable';
import { entityFactory } from './Factory';
import Directory from './Directory';
import File from './Directory';
import rawDirectory from 'rawDirectory';
import rawDirectoryWithParent from 'rawDirectoryWithParent';


it('test passing anything to entityFactory', () => {
  const item = entityFactory({ a: 'A' });

  expect(item instanceof Map).toBeTruthy();
  expect(item.get('a')).toEqual('A');
});

it('generate a valid entity', () => {
  const directory = new Directory(rawDirectory);

  expect(directory instanceof Directory).toBeTruthy();
  expect(directory.id).toEqual(1);
  expect(directory.name).toEqual('');
  expect(directory.children instanceof List).toBeTruthy();
  expect(directory.parent).toBeFalsy();

  const alps = directory.children.first();
  expect(alps instanceof Directory).toBeTruthy();
  expect(alps.id).toEqual(2);
  expect(alps.name).toEqual('Alps');

  const imageLines = directory.imageLines;
  expect(imageLines instanceof List).toBeTruthy();
  expect(imageLines.size).toEqual(1);
  expect(imageLines.first() instanceof Map).toBeTruthy();
  expect(imageLines.first().size).toEqual(3);

  expect(directory.getChildById(2).name).toEqual('Alps');
  expect(directory.getChildrenSize()).toEqual(3);
});

it('generate a valid entity with parent', () => {
  const directory = new Directory(rawDirectoryWithParent);

  expect(directory instanceof Directory).toBeTruthy();
  expect(directory.parent instanceof Directory).toBeTruthy();
});

it('generate a valid entity with file as children', () => {
  const directory = new Directory(rawDirectoryWithParent);

  expect(directory.children instanceof List).toBeTruthy();

  const file = directory.children.first();
  expect(file instanceof File).toBeTruthy();
});
