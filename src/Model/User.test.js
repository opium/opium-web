import rawUser from 'rawUser';
import rawAdmin from 'rawAdmin';
import User from './User';

describe('user creation', () => {
  it('generate a valid user', () => {
    const user = new User(rawUser);

    expect(user).toBeInstanceOf(User);
    expect(user.username).toEqual('test');
    expect(user.roles.size).toEqual(1);
    expect(user.roles.first()).toEqual('ROLE_USER');

    expect(user.isAdmin()).toBe(false);
  });

  it('generate a valid admin user', () => {
    const user = new User(rawAdmin);

    expect(user).toBeInstanceOf(User);
    expect(user.username).toEqual('admin');
    expect(user.roles.size).toEqual(1);
    expect(user.roles.first()).toEqual('ROLE_ADMIN');

    expect(user.isAdmin()).toBe(true);
  });
});

