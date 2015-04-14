var opiumControllers = angular.module('opiumControllers', []);



opiumControllers.controller(
    'AlbumListCtrl',
    [
        '$scope', '$routeParams', 'Album', 'RootAlbum',
        function AlbumListCtrl($scope, $routeParams, Album, RootAlbum) {
            // TODO fix for this https://github.com/angular/angular.js/pull/7940
            var path = $routeParams.path;
            if (path) {
                path = encodeURIComponent(path);
                $scope.folder = Album.get({id: path});
            } else {
                $scope.folder = RootAlbum.get();
            }

            /*
            $('.container').magnificPopup({
                delegate: '.popup-image',
                type: 'image',
                gallery: {
                    enabled: true
                },
                image: {
                    titleSrc: function (item) {
                        return item.el.text().trim();
                    }
                },
                callbacks: {
                    open: function () {
                        var regex = /\/([^/]+)$/;
                        var name = regex.exec(this.currItem.src)[1];
                        history.pushState({}, name, '#/' + $scope.folder.current.pathname + name);
                    },
                    change: function () {
                        var regex = /\/([^/]+)$/;
                        var name = regex.exec(this.currItem.src)[1];
                        history.replaceState({}, name, '#/' + $scope.folder.current.pathname + name);
                    },
                    close: function () {
                        history.pushState({}, name, '#/' + $scope.folder.current.pathname);
                    }
                }
            });
            */

            $scope.setPhoto = function(photo) {
                $scope.folder.directory_thumbnail = photo;
                $scope.folder.$update()
            };
        }
    ]
);

opiumControllers.controller(
    'PhotoCtrl',
    [
        '$scope', '$routeParams', 'Photo',
        function PhotoCtrl($scope, $routeParams, Photo) {
            // TODO fix for this https://github.com/angular/angular.js/pull/7940
            var path = $routeParams.path;

            var photo = $routeParams.photo + '.' + $routeParams.extension;

            var path = encodeURIComponent(path + '/' + photo);
            $scope.photo = Photo.get({ path: path });
            debugger;
        }
    ]
);
