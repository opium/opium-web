import { Map, Record } from 'immutable';
import { mapEntityRelationShips } from './Factory';

class File extends Record({
  id: null,
  name: null,
  slug: null,
  thumbnails: null,
}) {
  constructor(val) {
    const data = val;
    data.thumbnails = Map(val.thumbnails);

    return mapEntityRelationShips(super(data), data);
  }
}

export default File;
