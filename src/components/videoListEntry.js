angular.module('video-player')
.directive('videoListEntry', function() {
  return {
    restrict: 'E',
    scope: {
      video: '<',
      onClick: '<'
    },
    controllerAs: 'ctrl',
    bindToController: true,
    controller: function() {
    },
    templateUrl: 'src/templates/videoListEntry.html'
  };
});
