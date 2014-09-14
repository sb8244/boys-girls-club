var Way = function(id) {
  this.image = "/images/ways/100_Ways_" + id + ".jpg";
};

APP.controller("WaysListController", function($scope) {
  $scope.title = "100 Ways";
  $scope.ways = [];

  // The ways are number 1-100
  for(var i = 1; i <= 100; i++) {
    $scope.ways.push(new Way(i));
  }
});
