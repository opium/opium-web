import { Record, Set } from 'immutable';
import { mapEntityRelationShips } from './Factory';

export default class User extends Record({
  username: null,
  roles: Set(),
}) {
  constructor(val) {
    const data = val;
    data.roles = Set(val.roles);

    return mapEntityRelationShips(super(data), data);
  }

  isAdmin() {
    return this.roles.includes('ROLE_ADMIN');
  }
}
