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
}) {
  constructor(val) {
    const data = val;
    data.thumbnails = Map(val.thumbnails);
    data.parent = val.parent && new Directory(val.parent);
    data.previous = val.previous && new File(val.previous);
    data.next = val.next && new File(val.next);

    return mapEntityRelationShips(super(data), data);
  }
}

export default File;
