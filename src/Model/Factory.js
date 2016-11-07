import { fromJS, List } from 'immutable';
import Directory from './Directory';
import File from './File';
import User from './User';

export function entityFactory(input) {
  switch (input.type) {
    case 'directory':
      return new Directory(input);
    case 'file':
      return new File(input);
    case 'user':
      return new User(input);
    default:
      return fromJS(input);
  }
}

function mapListToEntityList(list) {
  return new List(list.map(value => entityFactory(value)));
}

export function mapEntityRelationShips(entity, baseJson) {
  return entity.withMutations(mutableEntity => {
    for (const prop of Object.keys(baseJson)) {
      const val = baseJson[prop];

      if (!val || !entity.has(prop)) {
        continue;
      }

      if (val.constructor === Array) {
        mutableEntity.set(prop, mapListToEntityList(val));
      } else if (typeof val === 'object') {
        mutableEntity.set(prop, entityFactory(val));
      }
    }
  });
}