angular.module('video-player')
.directive('videoList', function() {
  return {
    restrict: 'E',
    scope: {
      videos: '<', 
      onClick: '<'
    },
    controllerAs: 'ctrl',
    bindToController: true,
    controller: function() {
    },
    templateUrl: 'src/templates/videoList.html'
  };
});
