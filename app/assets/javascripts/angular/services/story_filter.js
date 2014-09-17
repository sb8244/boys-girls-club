/*
 * This defines a filter function
 *  Any property of a story that you want to filter on can be tied in below
 *  following the same format
 */
APP.factory("StoryFilter", function() {
  return function StoryFilter($scope, story) {
    var filters = $scope.filters;
    var keep = true;

    if(filters !== undefined) {
      if (filters.age !== undefined) {
        keep = keep && story.age >= filters.age.min && story.age <= filters.age.max;
      }
      if (filters.ethnicity !== undefined) {
        console.log(story.ethnicity, filters.ethnicity);
        keep = keep && story.ethnicity == filters.ethnicity;
      }
      if (filters.gender !== undefined) {
        keep = keep && story.gender == filters.gender;
      }
      if (filters.genre !== undefined) {
        keep = keep && story.field == filters.genre;
      }
    }

    return keep;
  };
});
