import { fromJS, Record } from 'immutable';

class Directory extends Record({
  id: null,
  name: null,
  slug: null,
  children: [],
  _links: {},
  _embedded: {},
  imageLines: [],
}) {
  constructor(val) {
    const data = val;
    data.imageLines = fromJS(val.image_lines);
    data.children = val.children.map(child => new Directory(child));

    super(data);
  }

  getChildById(id) {
    return this.children.find(item => item.id === parseInt(id, 10));
  }
}

export default Directory;
