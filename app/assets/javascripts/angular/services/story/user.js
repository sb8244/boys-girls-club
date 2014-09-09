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
