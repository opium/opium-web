import { List, Map, Record } from 'immutable';
import { entityFactory, mapEntityRelationShips } from './Factory';
import Directory from './Directory';
import File from './File';
import User from './User';

describe('entityFactory', () => {
  it('test passing anything to entityFactory', () => {
    const item = entityFactory({ a: 'A' });

    expect(item instanceof Map).toBeTruthy();
    expect(item.get('a')).toEqual('A');
  });

  it('generate a valid directory', () => {
    const directory = entityFactory({ a: 'A', type: 'directory' });

    expect(directory).toBeInstanceOf(Directory);
  });

  it('generate a valid file', () => {
    const file = entityFactory({ a: 'A', type: 'file' });

    expect(file).toBeInstanceOf(File);
  });

  it('generate a valid user', () => {
    const user = entityFactory({type: 'user', username: 'test', roles: ['ROLE_USER']});
    expect(user).toBeInstanceOf(User);
  });
});

describe('mapEntityRelationShips', () => {
  it('handle mapEntityRelationShips', () => {
    const MyClass = Record({ a: null, b: null });
    const entity = new MyClass({ a: 'A' });
    const json = {
      b: [ 'B' ],
    };

    const mappedEntity = mapEntityRelationShips(entity, json);

    expect(mappedEntity.get('b') instanceof List).toBeTruthy();
  });
});
