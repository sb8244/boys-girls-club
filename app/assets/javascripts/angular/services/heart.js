APP.service("Heart", function(ID, Restangular) {
  return {
    list: function() {
      return Restangular.all("hearts", { uuid: ID() }).getList();
    },
    toggle: function(story) {
      return Restangular.all("hearts").customPOST({ uuid: ID(), story_id: story.id }, "toggle").then(function() {
        story.hearted = !story.hearted;
      });
    }
  }
});
