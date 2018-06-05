import { Map, Record } from 'immutable';
import serializer, { mapEntityRelationShips } from './Factory';

class Collection extends Record({
  '@context': null,
  '@id': null,
  '@type': null,
  'hydraMember': null,
  'hydraSearch': null,
  'hydraTotalItems': null,
  'hydraView': null,

}) {
  constructor(val) {
    const data = val;
    // data.directoryThumbnail = typeof val.directoryThumbnail === 'object' ?
    //    serializer.denormalizeItem(val.directoryThumbnail) : val.directoryThumbnail;
    //
    data.hydraMember = val['hydra:member'];
    data.hydraSearch = val['hydra:search'];
    data.hydraTotalItems = val['hydra:totalItems'];
    data.hydraView = val['hydra:view'];

    return mapEntityRelationShips(super(data), data);
  }

  getMembers() {
    return this.hydraMember;
  }

  [Symbol.iterator]() {
    return {
      next: () => {
        if (this.index < this.getMembers().size) {
          return { value: this.getMembers().get(this.index++), done: false };
        } else {
          this.index = 0; //If we would like to iterate over this again without forcing manual update of the index
          return { done: true };
        }
      },
    };
  }
}

export default Collection;
