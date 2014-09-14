var Way = function(id) {
  this.image = "/images/ways/100_Ways_" + id + ".jpg";
};

APP.controller("WaysListController", function($scope) {
  $scope.title = "100 Ways";
  $scope.ways = [];

  // The ways are number 1-100
  var stepAmount = 5;
  for(var i = 1; i <= stepAmount; i++) {
    $scope.ways.push(new Way(i));
  }

  $scope.scroll = function() {
    if ($scope.ways.length < 100) {
      var size = $scope.ways.length;
      for(var i = size + 1; i <= size + stepAmount; i++) {
        $scope.ways.push(new Way(i));
      }
    }
  };
});
