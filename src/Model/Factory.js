import { fromJS, List } from 'immutable';
import { Serializer } from 'rest-client-sdk';
import Directory from './Directory';
import File from './File';
import User from './User';
import Collection from './Collection';

function entityFactory(input) {
  switch (input['@type']) {
    case 'Directory':
      return new Directory(input);
    case 'File':
    case 'Photo':
      return new File(input);
    case 'User':
      return new User(input);
    case 'hydra:Collection':
      return new Collection(input);
    case 'hydra:PartialCollectionView':
    case 'hydra:IriTemplate':
      return fromJS(input);
    default:
      if (typeof input === 'object') {
        console.warn('Could not convert object to entity', input);
        return fromJS(input);
      }
      return input;
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
  normalizeItem(entity, classMetadata) {
    return entity.toJSON();
  }

  encodeItem(object, classMetadata) {
    return JSON.stringify(object);
  }

  denormalizeItem(object, classMetadata, response) {
    return object ? entityFactory(object) : null;
  }

  decodeItem(rawData, classMetadata, response) {
    return rawData ? JSON.parse(rawData) : null;
  }

  denormalizeList(objectList, classMetadata, response) {
    return objectList ? entityFactory(objectList) : null;
  }

  decodeList(rawListData, classMetadata, response) {
    return rawListData ? JSON.parse(rawListData) : null;
  }
}

export default new OpiumSerializer();
