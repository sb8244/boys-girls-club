APP.service('SingleStory', function($sce, Restangular, $q, ID) {
  return {
    get: function(id) {
      var promise = $q.defer();

      Restangular.one("stories", id).get({uuid: ID()}).then(function(story) {
        story.content = $sce.trustAsHtml(story.content);
        promise.resolve(story);
      });

      return promise.promise;
    }
  };
});
