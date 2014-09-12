/*
 * Abstract controller that ties all of the donation steps into a single scope
 */
APP.controller("DonateController", function($scope, $state) {
  $scope.title = "Donate";
  $scope.amount = null;
  $scope.monthly = null;
  $scope.details = {};

  $scope.setAmount = function(val) {
    $scope.amount = val;
    $state.go('donate.monthly');
  };

  $scope.setMonthly = function(val) {
    $scope.monthly = val;
    $state.go('donate.details');
  };

  // Credit card details let us know when we can submit our form
  $scope.$watch('details', function(details) {
    if(details.card && details.expiry && details.cvc && details.name) {
      $scope.canSubmit = true;
    } else {
      $scope.canSubmit = false;
    }
  }, true);

  $scope.submit = function() {
    if($scope.canSubmit) {
      $state.go('donate.finish');
    }
  };

  if($state.current.name == "donate.finish" && !$scope.amount) {
    $state.go('donate.amount');
  }
});
