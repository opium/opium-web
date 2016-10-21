import { List, Map, Record } from 'immutable';
import { entityFactory, mapEntityRelationShips } from './Factory';
import Directory from './Directory';
import File from './File';

describe('entityFactory', () => {
  it('test passing anything to entityFactory', () => {
    const item = entityFactory({ a: 'A' });

    expect(item instanceof Map).toBeTruthy();
    expect(item.get('a')).toEqual('A');
  });

  it('generate a valid directory', () => {
    const directory = entityFactory({ a: 'A', type: 'directory' });

    expect(directory instanceof Directory).toBeTruthy();
  });

  it('generate a valid file', () => {
    const directory = entityFactory({ a: 'A', type: 'file' });

    expect(directory instanceof File).toBeTruthy();
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
