import { Record } from 'immutable';
import { mapEntityRelationShips } from './Factory';

class File extends Record({
  id: null,
  name: null,
  slug: null,
}) {
  constructor(val) {
    const data = val;

    return mapEntityRelationShips(super(data), data);
  }
}

export default File;
