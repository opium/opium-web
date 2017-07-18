import { tokenStorage } from '../Sdk';
import { apiConfig } from '../Config';

export default (imageUrl) => {
  return tokenStorage
    .getAccessToken()
    .then(accessToken => {
      const headers = {
        Authorization: `${apiConfig.authorizationType} ${accessToken}`,
      };

      return fetch(imageUrl, { headers });
    })
    .then(r => r.blob())
    .then((blob) => URL.createObjectURL(blob))
    .catch(console.error)
}
;
