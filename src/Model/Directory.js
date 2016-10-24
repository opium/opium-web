import { List, Map, Record } from 'immutable';
import { entityFactory, mapEntityRelationShips } from './Factory';

class Directory extends Record({
  id: null,
  name: null,
  slug: null,
  children: [],
  _links: {},
  _embedded: {},
  imageLines: [],
  parent: null,
  directoryThumbnail: null,
}) {
  constructor(val) {
    const data = val;
    if (val.image_lines) {
      data.imageLines = List(val.image_lines.map(line =>
        Map(Object.keys(line).map(key => [key, line[key]]))
      ));
    }

     data.directoryThumbnail = val._embedded &&
       val._embedded.directory_thumbnail &&
       entityFactory(val._embedded.directory_thumbnail);

    return mapEntityRelationShips(super(data), data);
  }

  getChildById(id) {
    return this.children.find(item => item.id === parseInt(id, 10));
  }

  getChildrenSize() {
    return this.children.size || 0;
  }
}

export default Directory;
