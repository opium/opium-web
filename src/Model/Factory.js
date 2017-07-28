import { fromJS, List } from 'immutable';
import { Serializer } from 'rest-client-sdk';
import Directory from './Directory';
import File from './File';
import User from './User';

function entityFactory(input) {
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


class OpiumSerializer extends Serializer {
  deserializeItem(rawData, type) {
    const data = typeof rawData === 'string' ? JSON.parse(rawData) : rawData;
    return entityFactory(data);
  }

  deserializeList(rawListData, type) {
    return this.deserializeItem(rawListData, type);
  }

  serializeItem(entity, type) {
    return JSON.stringify(entity.toJSON());
  }
}

export default new OpiumSerializer();

