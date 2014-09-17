APP.controller("ClubsListController", function($scope, geolocation, $http, ClubEnrichment) {
  $scope.title = "Find a Club";
  $scope.coords = null;

  // Try to geolocate the user, but prepare for the fact that it will mostly fail
  geolocation.getLocation({timeout: 5000}).then(function(data){
    $scope.coords = { lat: data.coords.latitude, long: data.coords.longitude };
    query($scope.coords.lat, $scope.coords.long);
  }, function() {
    $scope.coords = false;
  });

  // When zipcode has a length of 5, we must geo-decode the zip and query for clubs at that zip
  $scope.$watch('zipcode', function(zipcode) {
    if (zipcode === undefined) { return; }

    if (zipcode.length == 5) {
      var url = "http://maps.googleapis.com/maps/api/geocode/json?address=" + zipcode;
      $http({method: 'GET', url: url}).
        success(function(data) {
          var data = data.results[0];
          if(data) {
            $scope.coords = { lat: data.geometry.location.lat, long: data.geometry.location.lng };
            $scope.results = null;
            query($scope.coords.lat, $scope.coords.long);
          }
        });
    }
  });

  // Uses the cartodb API to query for active clubs in the USA
  function query(lat, long) {
    var sql = "SELECT * " +
    "FROM bgca_sites_2014_02_11 " +
    "WHERE (status IN ('Active - Full Membership')) " +
    "AND country = 'USA' " +
    "ORDER BY the_geom <-> ST_SetSRID(ST_MakePoint(" + long + "," + lat + "),4326) ASC LIMIT 30 ";

    var url = "//bgca.cartodb.com/api/v2/sql?q=" + sql;
    $http({method: 'GET', url: url}).
      success(function(data, status, headers, config) {
        $scope.results = ClubEnrichment(data.rows);
      }).
      error(function(data, status, headers, config) {
        console.log(data);
      });
  }
});
