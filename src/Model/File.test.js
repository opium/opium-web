import { Map } from 'immutable';
import rawFile from 'rawFile';
import rawFile2 from 'rawFile';
import rawEndFile from 'rawEndFile';
import File from './File';
import Directory from './Directory';

describe('file creation', () => {
  it('generate a valid file', () => {
    const file = new File(rawFile);

    expect(file).toBeInstanceOf(File);
    expect(file.id).toEqual(5);
    expect(file.name).toEqual('2909_vallon_moy_res.jpg');
    expect(file.slug).toEqual('2909-vallon-moy-res-jpg');

    // thumbnails
    expect(file.thumbnails).toBeInstanceOf(Map);
    expect(file.thumbnails.get('image')).toEqual('http://demo.opium.sitioweb.fr/2909-vallon-moy-res-jpg/thumbs/1170-auto');

    // crop template
    expect(file.cropTemplate).toEqual('http://demo.opium.sitioweb.fr/2909-vallon-moy-res-jpg/thumbs/%7BcropWidth%7D-%7BcropHeight%7D');
    const cropUrl = file.generateCrop(200, 100);
    const expectedUrl = 'http://demo.opium.sitioweb.fr/2909-vallon-moy-res-jpg/thumbs/200-100';

    expect(cropUrl).toEqual(expectedUrl);

    // directory
    expect(file.parent).toBeInstanceOf(Directory);
    expect(file.parent.slug).toEqual('alps');

    expect(file.previous).toBeFalsy();
    expect(file.next).toBeInstanceOf(File);

    const endFile = new File(rawEndFile);
    expect(endFile.next).toBeFalsy();
    expect(endFile.previous).toBeInstanceOf(File);
  });
});
