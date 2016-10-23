import { Map, Record } from 'immutable';
import { mapEntityRelationShips } from './Factory';
import Directory from './Directory';

class File extends Record({
  id: null,
  name: null,
  slug: null,
  thumbnails: null,
  parent: null,
}) {
  constructor(val) {
    const data = val;
    data.thumbnails = Map(val.thumbnails);
    data.parent = val.parent && new Directory(val.parent);

    return mapEntityRelationShips(super(data), data);
  }
}

export default File;
