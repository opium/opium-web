import { Map } from 'immutable';
import rawFile from 'rawFile';
import File from './File';

it('generate a valid file', () => {
  const file = new File(rawFile);
  jest.resetModules();

  expect(file).toBeInstanceOf(File);
  expect(file.id).toEqual(5);
  expect(file.name).toEqual('2909_vallon_moy_res.jpg');
  expect(file.slug).toEqual('2909-vallon-moy-res-jpg');
  expect(file.thumbnails).toBeInstanceOf(Map);
  expect(file.thumbnails.get('image')).toEqual('http://demo.opium.sitioweb.fr/2909-vallon-moy-res-jpg/thumbs/1170-auto');
});