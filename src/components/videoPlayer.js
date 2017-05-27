angular.module('video-player')

.directive('videoPlayer', function() {
  return {
    restrict: 'E',
    templateUrl: 'src/templates/videoPlayer.html',
    scope: {
      video: '<'
    },
    controllerAs: 'ctrl',
    bindToController: true,
    controller: function() {
    }
  };
});
