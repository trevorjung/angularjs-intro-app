(function() {
  "use strict";

  angular.module("app").controller("exampleCtrl", function($scope) {

    $scope.message = "Hello!";
    $scope.message_2 = "Place Order";
    $scope.message_3 = "Enjoy";

    window.$scope = $scope;

  });
}());
