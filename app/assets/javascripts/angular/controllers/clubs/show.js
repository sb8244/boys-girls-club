APP.controller("ClubsShowController", function($scope, $http, $stateParams, $location, $window, $document, ClubEnrichment) {
  $scope.title = "Viewing Club";


  $scope.map = {
    center: {
      latitude: 1,
      longitude: 2
    },
    zoom: 15
  };

  // When the club is loaded, grab it's geo location from it's address
  $scope.$watch('club', function(club) {
    if (club !== undefined) {
      var url = "http://maps.googleapis.com/maps/api/geocode/json?address=" + club.address_1 + ", " + club.zip_code;
      $http({method: 'GET', url: url}).
        success(function(data) {
          var data = data.results[0];
          if(data) {
            $scope.map.center = { latitude: data.geometry.location.lat, longitude: data.geometry.location.lng };
            $scope.marker = { coords: _.clone($scope.map.center), id: 1 };
          }
        });
    }
  });

  query();

  // Query for an individual club
  function query() {
    var sql = "SELECT * " +
      "FROM bgca_sites_2014_02_11 " +
      "WHERE global_id='" + $stateParams.id + "'";

    var url = "//bgca.cartodb.com/api/v2/sql?q=" + sql;
    $http({method: 'GET', url: url}).
      success(function(data, status, headers, config) {
        if (data.rows[0]) {
          $scope.club = ClubEnrichment(data.rows)[0];
        } else {
          $scope.club = false;
        }
      }).
      error(function(data, status, headers, config) {
        console.log(data);
      });
  }
});
