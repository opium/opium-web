const opiumControllers = angular.module('opiumControllers', []);

opiumControllers.controller(
  'LoginCtrl',
  function LoginCtrl($scope, localStorageService, $location, OpiumRestClientConfig) {
    $scope.apiUrl = OpiumRestClientConfig.getApiUrl();

    $scope.save = function() {
      OpiumRestClientConfig.setApiUrl($scope.apiUrl);
      OpiumRestClientConfig.setAuth($scope.login, $scope.password);

      $location.path('/');
    }
  }

);

function AlbumGeoPoints(leafletBoundsHelpers) {
  this.getMapDefaultNoInteractions = function() {
    return {
      attributionControl: false,
      dragging: false,
      boxZoom: false,
      scrollWheelZoom: false,
      zoomControl: false,
      doubleClickZoom: false,
      touchZoom: false,
      //tileLayer: 'http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png'
      tileLayer: 'http://openmapsurfer.uni-hd.de/tiles/roadsg/x={x}&y={y}&z={z}'
    };
  };

  this.getBoundsFromMarkers = function(markers) {
    if (!markers || markers.length == 0) {
      return null;
    }

    let neLat;
    let neLng;
    let swLat;
    let swLng;

    for (let marker of  markers) {
      // latitude
      if (neLat === undefined || neLat < marker.lat) {
        neLat = marker.lat;
      }

      if (swLat === undefined || swLat > marker.lat) {
        swLat = marker.lat;
      }

      // longitude
      if (neLng === undefined || neLng < marker.lng) {
        neLng = marker.lng;
      }

      if (swLng === undefined || swLng > marker.lng) {
        swLng = marker.lng;
      }
    }

    let latDiff = (neLat - swLat) / 2;
    neLat = neLat + latDiff;
    swLat = swLat - latDiff;

    let lonDiff = (neLng - swLng) / 2;
    neLng = neLng + lonDiff;
    swLng = swLng - lonDiff;

    return leafletBoundsHelpers.createBoundsFromArray([
        [neLat, neLng],
        [swLat, swLng]
    ]);
  };

  this.getMarkersFromPhotos = function(children, showMarkerText, bwIcon) {
    let markers = [];
    let i;
    for (let photo of children) {
      if (photo && photo.position) {
        let marker = {
          lat: photo.position.lat,
          lng: photo.position.lng
        };

        if (showMarkerText) {
          marker.message = '<a href="' + photo.slug + '">' + photo.name + '</a>';
          marker.slug = photo.slug;

          marker.icon = {
            iconUrl: photo.thumbnails.smallSquare,
            iconAnchor: [25, 25]
          };
        }

        if (bwIcon) {
            marker.icon = {
              iconUrl: '/bwpin.png',
              iconAnchor: [12, 41]
            };
        }

        markers.push(marker);
      }
    }

    return markers;
  }
};

opiumApp.service('albumGeoPoints', ['leafletBoundsHelpers', AlbumGeoPoints]);

opiumControllers.controller(
  'AlbumListCtrl',
  function AlbumListCtrl($scope, $routeParams, Album, leafletEvents, $location, $anchorScroll, albumGeoPoints, moment) {
    let path = $routeParams.path;
    let getter = Album.one(path).get({gutter: 10});

    // map
    $scope.markers = new Array();
    $scope.maxbounds = null;
    $scope.events = {
      markers: {
        enable: leafletEvents.getAvailableMarkerEvents()
      }
    };
    $scope.mapDefaults = albumGeoPoints.getMapDefaultNoInteractions();

    getter.then((data) => {
      $scope.folder = data;

      $scope.markers = albumGeoPoints.getMarkersFromPhotos(data.children, false, true);
      $scope.maxbounds = albumGeoPoints.getBoundsFromMarkers($scope.markers);

      $scope.bounds = $scope.getDateBounds();
    });

    $scope.getDateBounds = function() {
      // dates managements
      let sorted = _.sortByOrder(
        _.filter(
          $scope.folder.children,
          function(item) {
            return item.exif && item.exif.DateTimeOriginal && item.exif.DateTimeOriginal.match(/^[0-9]{4}:[0-9]{2}:[0-9]{2} /)
          }

        ),
        'exif.DateTimeOriginal'
      );

      if (sorted.length > 0) {
        let firstDate = sorted[0].exif.DateTimeOriginal;
        let lastDate = sorted[sorted.length - 1].exif.DateTimeOriginal;

        return {
          firstDate: firstDate,
          lastDate: lastDate
        };
      }
    };

    $scope.getHeaderStyle = function() {
      let cover = $scope.getCover();
      if (cover) {
        return {'background-image': `linear-gradient(to bottom, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, .8)), url(${cover})`};
      }
    };

    $scope.getCover = function() {
      if ($scope.folder && $scope.folder._embedded.directory_thumbnail) {
        return $scope.folder._embedded.directory_thumbnail.thumbnails.banner;
      }
    };

    $scope.getAlbumById = function(itemId) {
      for (let album of $scope.folder.children) {
        if (album.id == itemId) {
          return album;
        }
      }
    };
  }

);

opiumControllers.controller(
  'AlbumMapCtrl',
  function AlbumMapCtrl($scope, $routeParams, Album, leafletEvents, albumGeoPoints) {
    let path = $routeParams.path;
    let getter = Album.one(path).get();

    getter.then((data) => {
      $scope.folder = data;

      $scope.markers = albumGeoPoints.getMarkersFromPhotos(data.children, true);
      $scope.maxbounds = albumGeoPoints.getBoundsFromMarkers($scope.markers);
    });
  }

)

opiumControllers.controller(
  'AlbumUploadCtrl',
  function AlbumUploadCtrl($scope, $routeParams, Album, FileUploader, localStorageService) {
    let path = $routeParams.path;
    $scope.uploader = new FileUploader({
      autoUpload: true,
      method: 'POST',
      headers: {
        Authorization: localStorageService.get('Authorization')
      }
    });

    let uploadUrl = API_URL + '/v1/directories/' + ($scope.folder && $scope.folder.slug ? $scope.folder.slug + '/' : '') + 'upload';

    Album
    .one(path)
    .get()
    .then((data) => {
      $scope.folder = data;
      $scope.uploader.url = uploadUrl
    });
  }

)

opiumControllers.controller(
  'PhotoCtrl',
  function PhotoCtrl($scope, $routeParams, Photo, Album, hotkeys) {
    let id = $routeParams.photo;

    Photo.one(id).get()
    .then((data) => {
      $scope.photo = data;
      $scope.centerMap();
    });

    $scope.photo = null;

    $scope.setCover = function() {
      $scope.uploading = true;
      let parent = Album.one($scope.photo.parent.slug)
      .get()
      .then((parent) => {
        parent._embedded.directory_thumbnail = { id: $scope.photo.id };
        parent.save()
        .then(() => {
          $scope.uploading = false;
        });
      }

           )
    };

    $scope.savePosition = function() {
      $scope.overridingPosition = true;
      $scope.overridePosition = false;

      $scope.photo.save()
      .then((data) => {
        $scope.photo = data;
        $scope.centerMap();
        $scope.overridingPosition = false;
      });

    }

    $scope.previous = function() {
      if ($scope.photo.previous) {
        document.querySelector('.opium-photo-previous a').click();
      }
    };

    $scope.next = function() {
      if ($scope.photo.next) {
        document.querySelector('.opium-photo-next a').click();
      }
    };

    hotkeys.add({
      combo: 'right',
      callback: function() {
        $scope.next();
      }
    });
    hotkeys.add({
      combo: 'left',
      callback: function() {
        $scope.previous();
      }
    });

    $scope.centerMap = function() {
      if ($scope.photo.position) {
        $scope.mapCenter = {
          lat: $scope.photo.position.lat,
          lng: $scope.photo.position.lng,
          zoom: 10
        }

        $scope.markers = {
          photo: {
            lat: $scope.photo.position.lat,
            lng: $scope.photo.position.lng,
            message: $scope.photo.name
          }
        };
      }
    };

    $scope.hasExif = function() {
      return $scope.photo && (!Array.isArray($scope.photo.exif) || $scope.photo.exif.length > 0);
    };
  }

);
