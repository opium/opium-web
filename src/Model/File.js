import { Map, Record } from 'immutable';
import { mapEntityRelationShips } from './Factory';
import Directory from './Directory';

class File extends Record({
  '@id': null,
  id: null,
  name: null,
  slug: null,
  thumbnails: null,
  parent: null,
  next: null,
  previous: null,
  cropTemplate: null,
  position: null,
  width: null,
  height: null,
  exif: Map(),
}) {
  constructor(val) {
    const data = val;
    data['@id'] = val['@id'].replace('/v2/directories/', '/v2/files/').replace('/v2/photos/', '/v2/files/');
    data.id = data['@id'].replace('/v2/files/', '');
    // data.thumbnails = Map(val.thumbnails);
    // data.parent = typeof val.parent && new Directory(val.parent);
    // if (val.previous) {
    //   data.previous = val.previous.type === 'directory' ?
    //     new Directory(val.previous) :
    //     new File(val.previous)
    //   ;
    // } else {
    //   data.previous = false;
    // }

    // if (val.next) {
    //   data.next = val.next.type === 'directory' ?
    //     new Directory(val.next) :
    //     new File(val.next)
    //   ;
    // } else {
    //   data.next = false;
    // }

    // data.cropTemplate = val._links &&
    //   val._links.cropTemplate &&
    //   val._links.cropTemplate.href;

    return mapEntityRelationShips(super(data), data);
  }

  generateCrop(width, height) {
    return this.cropTemplate &&
      this.cropTemplate
        .replace('%7BcropWidth%7D', width)
        .replace('%7BcropHeight%7D', height)
    ;
  }
}

export default File;
