require("angular/angular");


angular.module("needleApp", [])
  .controller("MyController", ["$scope", function($scope) {
      $scope.greetMe = "World!";
  }]);


angular.element(document).ready(function() {
    angular.bootstrap(document, ['needleApp']);
});
