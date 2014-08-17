var jQuery = require("jquery");
window.jQuery = window.$ = jQuery;
require("angular/angular");
require("./lib/ui-bootstrap-tpls-0.11.0.min");
require("./bootstrap");
require("../styles/bootstrap.css");

var modalTemplate = require("../modal-template.html"),
    ModalInstanceCtrl = function($scope, $modalInstance) {
      $scope.ok = function() {
        $modalInstance.close();
      }

      $scope.cancel = function() {
        $modalInstance.dismiss('cancel');
      }
    };


angular.module("needleApp", ['ui.bootstrap'])
  .controller("ModalController", [function() {
  }])
  .controller("MyController", ["$scope", "$modal", function($scope, $modal) {
      $scope.open = function(size) {
        var modalInstance = $modal.open({
          "template": modalTemplate,
          "controller": ModalInstanceCtrl,
          size: size
        });

        modalInstance.result.then(function(){}, function(){});
      };

      $scope.greetMe = "World!";
  }]);

angular.element(document).ready(function() {
    angular.bootstrap(document, ['needleApp']);
});
