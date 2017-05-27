angular.module('video-player')

.directive('app', function() {
  return {
    restrict: 'E',
    controllerAs: 'ctrl',
    bindToController: true,
    scope: {
    },
    controller: function(youTube) {
      this.service = youTube;
      this.currentVideo = exampleVideoData[0];
      this.videos = exampleVideoData;
      this.selectVideo = (video) => { this.currentVideo = video; };
      this.searchResults = (videos) => { this.videos = videos; };
      youTube.search('cats', (videos) => {
        this.videos = videos;
        this.currentVideo = videos[0];
      });
    },
    templateUrl: `src/templates/app.html`
  };
});

var youTubes;