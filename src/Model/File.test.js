import File from './Directory';
import rawFile from 'rawFile';

it('generate a valid file', () => {
  const file = new File(rawFile);

  expect(file instanceof File).toBeTruthy();
  expect(file.id).toEqual(5);
  expect(file.name).toEqual('2909_vallon_moy_res.jpg');
  expect(file.slug).toEqual('2909-vallon-moy-res-jpg');
});
