const opiumSlideshow = angular.module('opiumSlideshow', ['ngProgress']);

opiumSlideshow.service(
  'opiumSlideshow',
  function(localStorageService, ngProgressFactory, $timeout, $interval) {
    this.currentStatus = 'stopped';
    this.currentProgressBarValue = 0;
    this.progressbar = ngProgressFactory.createInstance();
    //this.progressbar.setParent(document.getElementById('photo-navbar')); does not work when calling "next"

    this.play = function() {
      this.currentProgressBarValue = 0;
      this.currentStatus = 'playing';

      this.progressbar.reset();
      this.progressbar.start();

      this.nextTimeout = $interval(
        () => {
          console.log(this.progressbar.status());
          this.progressbar.reset();
          this.progressbar.start();
          this.currentProgressBarValue = 0;
          if (typeof this.onNext == 'function') {
            this.onNext();
          }
        },

        5000
      );

      this.increaseProgressBarTimeout = $interval(
        () => {
          this.currentProgressBarValue += 5;
          this.progressbar.set(this.currentProgressBarValue);
        },

        250
      );
    };

    this.stop = function() {
      this.currentStatus = 'stopped';
      this.progressbar.reset();
      $interval.cancel(this.nextTimeout);
      $interval.cancel(this.increaseProgressBarTimeout);
    };

    this.isPlaying = function() {
      return this.currentStatus == 'playing';
    };
  }

);
