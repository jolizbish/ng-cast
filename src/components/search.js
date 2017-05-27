angular.module('video-player')

.directive('search', function() {
  return {
    templateUrl: `src/templates/search.html`,
    restrict: 'E',
    controllerAs: 'ctrl',
    bindToController: true,
    scope: {
      result: '=',
      service: '<'
    },
    controller: function() {
      this.onButtonClick = (searchText) => {
        this.service.search(searchText, (videos) => {
          this.result(videos);
        });
      };
    }
  };
});
