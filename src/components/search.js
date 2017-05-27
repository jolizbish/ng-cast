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

      this.search = (searchText) => {
        this.service.search(searchText, (videos) => {
          this.result(videos);
        });
      };

      this.onTextChange = _.debounce(this.search, 500);

      this.onKeypress = function(event, searchText) {
        if (event.keyCode === 13) {
          this.search(searchText);
        }
      };
    }
  };
});
