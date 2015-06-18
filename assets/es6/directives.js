opiumApp
.directive('ngThumb', ['$window', ($window) => {
  let helper = {
    support: !!($window.FileReader && $window.CanvasRenderingContext2D),
    isFile: (item) => {
      return angular.isObject(item) && item instanceof $window.File;
    },

    isImage: (file) => {
      let type =  '|' + file.type.slice(file.type.lastIndexOf('/') + 1) + '|';
      return '|jpg|png|jpeg|bmp|gif|'.indexOf(type) !== -1;
    }
  };

  return {
    restrict: 'A',
    template: '<canvas/>',
    link: (scope, element, attributes) => {
      if (!helper.support) return;

      let params = scope.$eval(attributes.ngThumb);

      if (!helper.isFile(params.file)) return;
      if (!helper.isImage(params.file)) return;

      let canvas = element.find('canvas');
      let reader = new FileReader();

      reader.onload = onLoadFile;
      reader.readAsDataURL(params.file);

      function onLoadFile(event) {
        let img = new Image();
        img.onload = onLoadImage;
        img.src = event.target.result;
      }

      function onLoadImage() {
        let width = params.width || this.width / this.height * params.height;
        let height = params.height || this.height / this.width * params.width;
        canvas.attr({ width: width, height: height });
        canvas[0].getContext('2d').drawImage(this, 0, 0, width, height);
      }
    }
  };
}]);
