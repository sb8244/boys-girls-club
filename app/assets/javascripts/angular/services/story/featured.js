APP.service('FeaturedStories', function($sce, Restangular, $q) {
  var stories = null;

  var service = {
    load: function(promise) {
      Restangular.all("stories").getList({featured: 1}).then(function(results) {
        stories = _(results).map(function(story) {
          story.content = $sce.trustAsHtml(story.content);
          return story;
        }).value();
        promise.resolve(stories);
      });
    },

    get: function() {
      var promise = $q.defer();

      if (stories === null) {
        service.load(promise);
      } else {
        promise.resolve(stories);
      }

      return promise.promise;
    }
  };

  return service;
});
