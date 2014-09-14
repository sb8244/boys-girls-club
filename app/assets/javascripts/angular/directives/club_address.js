APP.directive('clubAddress', function() {
  return {
    templateUrl: "clubs/address.html",
    controller: function($scope) {
      var club = $scope.club;
      $scope.address = club.address_1 + " " +
                       club.address_2 + " " +
                       club.address_3 + " " +
                       club.address_4 + " " +
                       club.city + " " + club.state + " " + club.zip_code;

    }
  };
});
