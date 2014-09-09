APP.factory("StoryFilter", function() {
  return function StoryFilter($scope, story) {
    var filters = $scope.filters;
    var keep = true;

    if(filters !== undefined) {
      if (filters.age !== undefined) {
        keep = keep && story.age >= filters.age.min && story.age <= filters.age.max;
      }
      if (filters.ethnicity !== undefined) {
        keep = keep && story.ethnicity == filters.ethnicity;
      }
      if (filters.gender !== undefined) {
        keep = keep && story.gender == filters.gender;
      }
      if (filters.genre !== undefined) {
        keep = keep && story.genre == filters.genre;
      }
    }

    if ($scope.id != null) {
      keep = story.id == $scope.id; //overrides everything else
    }

    return keep;
  };
});