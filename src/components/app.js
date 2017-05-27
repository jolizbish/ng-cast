angular.module('video-player')

.directive('app', function() {
  return {
    restrict: 'E',
    controllerAs: 'ctrl',
    bindToController: true,
    scope: {},
    controller: function(youTube) {
      youTube.search('', () => {});
      this.currentVideo = exampleVideoData[0];
      this.videos = exampleVideoData;
      this.onClick = (video) => {
        this.currentVideo = video;
      };
      this.selectVideo = function(video) {};
      this.searchResults = function(video) {};
    },
    templateUrl: `src/templates/app.html`
  };
});

