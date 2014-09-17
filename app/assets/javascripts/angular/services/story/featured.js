/*
 * This service gives us featured stories, but caches them so they only load once
 *  This removes load time after the first load and leads to a fast application
 * Service must resolve with promises because this can all be async
 */
APP.service('FeaturedStories', function($sce, Restangular, $q, ID) {
  var stories = null;

  var service = {
    load: function(promise) {
      Restangular.all("stories").getList({featured: 1, uuid: ID()}).then(function(results) {
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
