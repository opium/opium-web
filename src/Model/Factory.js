import { fromJS, List } from 'immutable';
import Directory from './Directory';
import File from './File';

export function entityFactory(input) {
  switch (input.type) {
    case 'directory':
      return new Directory(input);
    case 'file':
      return new File(input);
    default:
      return fromJS(input);
  }
}

function mapListToEntityList(list) {
  return new List(list.map(value => entityFactory(value)));
}

export function mapEntityRelationShips(entity, baseJson) {
  return entity.withMutations(mutableEntity => {
    for (const prop in baseJson) {
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
