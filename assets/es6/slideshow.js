const opiumSlideshow = angular.module('opiumSlideshow', []);

opiumSlideshow.service(
  'opiumSlideshow',
  function(localStorageService) {
    this.currentStatus = 'stopped';

    this.play = function() {
      this.currentStatus = 'playing';
      this.nextTimeout = setInterval(
        () => {
          if (typeof this.onNext == 'function') {
            this.onNext();
          }
        },

        5000
      );
    };

    this.stop = function() {
      this.currentStatus = 'stopped';
      clearInterval(this.nextTimeout);
    };

    this.isPlaying = function() {
      return this.currentStatus == 'playing';
    };
  }

);
