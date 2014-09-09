APP.controller("FeaturedStoriesController", function($scope, StoryFilter, FeaturedStories, $stateParams) {
  $scope.selected = null;
  $scope.filters = {};
  $scope.type = "featured";
  $scope.title = "Featured Stories";

  $scope.id = $stateParams.id;
  FeaturedStories.get().then(function(stories) {
     $scope.stories = stories;
  });

  $scope.show = function(story) {
    if($scope.selected == story.id) {
      $scope.selected = null;
    } else {
      $scope.selected = story.id;
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
