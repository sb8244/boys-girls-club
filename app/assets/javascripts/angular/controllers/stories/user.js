APP.controller("UserStoriesController", function(Heart, $scope, $window, UserStories, StoryFilter, $stateParams) {
  $scope.selected = null;
  $scope.filters = {};
  $scope.type = "user";
  $scope.title = "User Stories";
  $scope.shareBase = $window.location.host + "/stories/";
  $scope.heart = Heart;

  UserStories.get().then(function(stories) {
    $scope.stories = stories;
  });

  $scope.show = function(story) {
    if($scope.selected == story.id) {
      $scope.selected = null;
    } else {
      $scope.selected = story.id;
      var $parentDiv = $("#scroll-container");
      var $innerListItem = $("#story-" + story.id);
      var position = $parentDiv.scrollTop() + $innerListItem.position().top;
      $parentDiv.animate({ scrollTop :position });
    }
  };

  $scope.applyFilters = function(filters) {
    $scope.filtersActive = false;
    $scope.filters = filters;
  };

  $scope.filter = function(story) {
    return StoryFilter($scope, story);
  };

  $scope.reloadWithoutParams = function() {
    $state.transitionTo($state.current.name);
  };
});
