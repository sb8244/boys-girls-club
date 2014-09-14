APP.service('SingleStory', function($sce, Restangular, $q) {
  return {
    get: function(id) {
      var promise = $q.defer();

      Restangular.one("stories", id).get().then(function(story) {
        story.content = $sce.trustAsHtml(story.content);
        promise.resolve(story);
      });

      return promise.promise;
    }
  };
});
