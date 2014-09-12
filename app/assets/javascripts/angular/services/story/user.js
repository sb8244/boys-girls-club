/*
 * This service gives us user stories, but caches them so they only load once
 *  This removes load time after the first load and leads to a fast application
 * Service must resolve with promises because this can all be async
 * You can also upload stories through this service
 */
APP.service('UserStories', function($sce, Restangular, $q) {
  var stories = null;

  var service = {
    load: function(promise) {
      Restangular.all("stories").getList({featured: 0}).then(function(results) {
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
    },

    add: function(story, callback) {
      var promise = $q.defer();

      service.get().then(function() {
        // This is a weird restangular format, but it allows to send raw form image
        // data to the server. Without this, the api service would blow up
        Restangular.all("stories").
          withHttpConfig({transformRequest: angular.identity}).
          customPOST(story, "", {}, {"Content-Type": undefined}).
          then(function (story) {
            story.content = $sce.trustAsHtml(story.content);
            stories.push(story);
            promise.resolve(story);
          });
      });

      return promise.promise;
    }
  };

  return service;
});
