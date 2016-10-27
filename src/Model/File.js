import { Map, Record } from 'immutable';
import { mapEntityRelationShips } from './Factory';
import Directory from './Directory';

class File extends Record({
  id: null,
  name: null,
  slug: null,
  thumbnails: null,
  parent: null,
  next: null,
  previous: null,
  cropTemplate: null,
  position: null,
  exif: Map(),
}) {
  constructor(val) {
    const data = val;
    data.thumbnails = Map(val.thumbnails);
    data.parent = val.parent && new Directory(val.parent);
    data.previous = val.previous && new File(val.previous);
    data.next = val.next && new File(val.next);

    data.cropTemplate = val._links &&
      val._links.cropTemplate &&
      val._links.cropTemplate.href;

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
