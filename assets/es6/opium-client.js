const opiumRestClient = angular.module('opiumRestClient', ['restangular']);

// config and redirect on login on error
opiumRestClient.run(function(Restangular, $location, localStorageService, OpiumRestClientConfig) {
  // set base uri
  let apiUrl = OpiumRestClientConfig.getApiUrl();
  OpiumRestClientConfig.setApiUrl(apiUrl);

  if (!apiUrl) {
    $location.path('/login');
  }

  // set authentication
  let authorizationHeader = OpiumRestClientConfig.getAuthorizationHeader();
  let headers = {
    'X-Device-Width': window.innerWidth - 30, // we need to substitute the future scrollbar size
    'X-Device-Height': window.innerHeight
  };

  if (authorizationHeader) {
    headers.Authorization = authorizationHeader;
  }

  headers = _.extend(Restangular.defaultHeaders, headers);


  Restangular.setDefaultHeaders(headers);

  Restangular.setErrorInterceptor((response, deferred, responseHandler) => {
    if (response.status >= 400 && response.status < 500) {
      $location.path('/login');
    }
  });
});

opiumRestClient.service(
  'OpiumRestClientConfig',
  function(Restangular, localStorageService) {
    this.setApiUrl = function(apiUrl) {
      if (apiUrl) {
        localStorageService.set('apiUrl', apiUrl);
      } else {
        localStorageService.remove('apiUrl');
        console.log('removed url');
      }
      Restangular.setBaseUrl(apiUrl + '/v1');
    };

    this.getApiUrl = function() {
        return localStorageService.get('apiUrl') || API_URL;
    };

    this.setAuth = function(login, password) {
      if (login) {
        let auth = 'Basic ' + btoa(login + ':' + password);
        let headers = _.extend(Restangular.defaultHeaders, { Authorization: auth });
        Restangular.setDefaultHeaders(headers);
        localStorageService.set('Authorization', auth);
      } else {
        localStorageService.remove('Authorization');

        let headers = _.extend(Restangular.defaultHeaders, { Authorization: null });
        Restangular.setDefaultHeaders(headers);
      }
    };

    this.getAuthorizationHeader = function () {
      return localStorageService.get('Authorization');
    };
  }
);

opiumRestClient.factory(
  'Album',
  function(Restangular) {
    return Restangular.service('directories');
  }

);

opiumRestClient.factory(
  'Photo',
  function(Restangular) {
    return Restangular.service('files');
  }

);
