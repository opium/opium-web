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

  getPositionBounds() {
    let bounds = Map();
    const children = this.children.filter(c => !!c.position);

    if (children.size === 1) {
      const child = children.first().position;

      return Map({
        top: child.get('lat') + 1,
        bottom: child.get('lat') - 1,
        left: child.get('lng') - 1,
        right: child.get('lng') + 1,
      });
    }

    for (const child of children) {
      const latitude = child.position.get('lat');
      const longitude = child.position.get('lng');

      if (!bounds.get('top') || bounds.get('top') < latitude) {
        bounds = bounds.set('top', latitude);
      }
      if (!bounds.get('bottom') || bounds.get('bottom') > latitude) {
        bounds = bounds.set('bottom', latitude);
      }
      if (!bounds.get('right') || bounds.get('right') < longitude) {
        bounds = bounds.set('right', longitude);
      }
      if (!bounds.get('left') || bounds.get('left') > longitude) {
        bounds = bounds.set('left', longitude);
      }
    }

    if (!bounds.get('top')) {
      return null;
    }

    const latDelta = (bounds.get('top') - bounds.get('bottom')) / 4;
    const lngDelta = (bounds.get('right') - bounds.get('left')) / 4;

    return bounds.merge({
      top: bounds.get('top') + latDelta,
      bottom: bounds.get('bottom') - latDelta,
      left: bounds.get('left') - lngDelta,
      right: bounds.get('right') + lngDelta,
    });
  }

  // hack until https://github.com/mapado/rest-client-js-sdk/issues/11 is resolved
  get(key) {
    if (key === '@id') {
      return `/v1/directories/${this.id}`;
    }

    return super.get(key);
  }
}

export default Directory;
