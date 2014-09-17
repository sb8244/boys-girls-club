APP.controller("StoriesShowController", function(Heart, $scope, $window, $stateParams, SingleStory) {
  $scope.title = "Viewing Story";
  $scope.shareBase = $window.location.href + "?id=";
  $scope.id = $scope.selected = $stateParams.id;
  $scope.heart = Heart;

  SingleStory.get($scope.id).then(function(story) {
    $scope.stories = [story];
  });
});
