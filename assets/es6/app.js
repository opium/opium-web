const opiumApp = angular.module('opiumApp', [
    'ngRoute',
    'opiumControllers',
    'opiumRestClient',
    'opiumSlideshow',
    'ngTouch',
    'cfp.hotkeys',
    'leaflet-directive',
    'LocalStorageModule',
    'angularFileUpload',
    'afkl.lazyImage',
    'angularMoment',
    'ngProgress',
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
      templateUrl: 'views/Album/map.html',
      controller: 'AlbumMapCtrl',
      reloadOnSearch: false
    })
    .when('/_page_map', {
      templateUrl: 'views/Album/map.html',
      controller: 'AlbumMapCtrl',
      reloadOnSearch: false
    })
    .when('/:path\/_page_upload', {
      templateUrl: 'views/Album/upload.html',
      controller: 'AlbumUploadCtrl',
      reloadOnSearch: false
    })
    .when('/_page_upload', {
      templateUrl: 'views/Album/upload.html',
      controller: 'AlbumUploadCtrl',
      reloadOnSearch: false
    })
    .when('/:path\/:photo', {
      templateUrl: 'views/photo.html',
      controller: 'PhotoCtrl',
      reloadOnSearch: false
    })
    //.when('/:photo', {
    //  templateUrl: 'views/photo.html',
    //  controller: 'PhotoCtrl',
    //  reloadOnSearch: false
    //})
    .when('/', {
      templateUrl: 'views/Album/list.html',
      controller: 'AlbumListCtrl',
      reloadOnSearch: false
    })
    .when('/:path', {
      templateUrl: 'views/Album/list.html',
      controller: 'AlbumListCtrl',
      reloadOnSearch: false
    })

  //.otherwise({
  //    redirectTo: '/'
  //})
}

opiumApp.config(routeProvider);

