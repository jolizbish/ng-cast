angular.module('video-player')
.service('youTube', function($http) {

  var withQuery = (url, params) => {
    var qs = [];
    for (var key in params) {
      if (params[key] !== undefined) {
        qs.push(`${key}=${params[key]}`);
      }
    }
    return `${url}?${qs.join('&')}`;
  };

  this.search = function(string, callback, options = {}) {
    return $http.get(withQuery('https://www.googleapis.com/youtube/v3/search', {
      id: options.id,
      part: 'snippet',
      key: options.key || window.YOUTUBE_API_KEY,
      q: string,
      maxResults: options.max || 5,
      type: 'video'
    })).then(response => callback(response.data.items));
  };

  myhttp = this.search;
});
