import { Map } from 'immutable';
import { entityFactory } from './Factory';
import Directory from './Directory';

it('test passing anything to entityFactory', () => {
  const item = entityFactory({ a: 'A' });

  expect(item instanceof Map).toBeTruthy();
  expect(item.get('a')).toEqual('A');
});

it('generate a valid entity', () => {
  const directory = entityFactory({ a: 'A' }, 'item', 'Directory');

  expect(directory instanceof Directory).toBeTruthy();
});
