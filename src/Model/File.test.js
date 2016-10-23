import { Map } from 'immutable';
import rawFile from 'rawFile';
import rawEndFile from 'rawEndFile';
import File from './File';
import Directory from './Directory';

it('generate a valid file', () => {
  const file = new File(rawFile);

  expect(file).toBeInstanceOf(File);
  expect(file.id).toEqual(5);
  expect(file.name).toEqual('2909_vallon_moy_res.jpg');
  expect(file.slug).toEqual('2909-vallon-moy-res-jpg');
  expect(file.thumbnails).toBeInstanceOf(Map);
  expect(file.thumbnails.get('image')).toEqual('http://demo.opium.sitioweb.fr/2909-vallon-moy-res-jpg/thumbs/1170-auto');

  expect(file.parent).toBeInstanceOf(Directory);
  expect(file.parent.slug).toEqual('alps');

  expect(file.previous).toBeFalsy();
  expect(file.next).toBeInstanceOf(File);

  const endFile = new File(rawEndFile);
  expect(endFile.next).toBeFalsy();
  expect(endFile.previous).toBeInstanceOf(File);
});
