APP.controller("FiltersController", function($rootScope, $scope) {
  $scope.ages = [
    { value: "All",     min: 0, max: 150 },
    { value: "18 -",    min: 0, max: 18 },
    { value: "19 - 25", min: 19, max: 25 },
    { value: "26 - 35", min: 26, max: 35 },
    { value: "36 - 45", min: 36, max: 45 },
    { value: "46 - 55", min: 46, max: 55 },
    { value: "55 +",    min: 55, max: 150 }
  ];

  $scope.ethnicities = [
    "All",
    "American Indian or Alaska Native",
    "Asian",
    "Black or African American",
    "Hispanic or Latino",
    "Native Hawaiian or Other Pacific Islander",
    "White"
  ];

  $scope.genders = [
    "All",
    "Female",
    "Male"
  ];

  $scope.genres = [
    "All",
    "Politics",
    "Technology"
  ];

  // All of the initial filters need to be selected
  $scope.filters = {
    age: $scope.ages[0],
    ethnicity: $scope.ethnicities[0],
    gender: $scope.genders[0],
    genre: $scope.genres[0]
  };

  /*
   * Any user of this template must implement applyFilters which accepts filters to apply
   *  Not receiving a filter means to not filter on that value, even if previously filtered.
   *  $scope.applyFilters = function(filters) {}
   */
  $scope.prepareFilters = function(filters) {
    var prepared = _.pick(filters, function(v, k) {
      // We pass the filter unless it is "All"
      if (v === "All" || (_.isObject(v) && v.value === "All")) {
        return false;
      } else {
        return true;
      }
    });
    $scope.applyFilters(prepared);
  };
});
