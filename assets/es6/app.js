const opiumApp = angular.module('opiumApp', [
    'ngRoute',
    'opiumControllers',
    'opiumRestClient',
    'ngTouch',
    'cfp.hotkeys',
    'leaflet-directive',
    'LocalStorageModule',
    'angularFileUpload'
]);

function routeProvider($routeProvider, $locationProvider) {
  $locationProvider.html5Mode(true);

  $routeProvider
    .when('/login', {
      templateUrl: 'views/login.html',
      controller: 'LoginCtrl',
      reloadOnSearch: false
    })
    .when('/:path\/_page_map', {
      templateUrl: 'views/album-map.html',
      controller: 'AlbumMapCtrl',
      reloadOnSearch: false
    })
    .when('/:path\/_page_upload', {
      templateUrl: 'views/upload.html',
      controller: 'AlbumUploadCtrl',
      reloadOnSearch: false
    })
    .when('/:path\/:photo', {
      templateUrl: 'views/photo.html',
      controller: 'PhotoCtrl',
      reloadOnSearch: false
    })
    .when('/', {
      templateUrl: 'views/album-list.html',
      controller: 'AlbumListCtrl',
      reloadOnSearch: false
    })
    .when('/:path', {
      templateUrl: 'views/album-list.html',
      controller: 'AlbumListCtrl',
      reloadOnSearch: false
    })

  //.otherwise({
  //    redirectTo: '/'
  //})
}

opiumApp.config(routeProvider);

