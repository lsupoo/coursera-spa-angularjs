(function () {
'use strict';

angular.module('solutionOneApp', [])
.controller('solutionOneCtrl', solutionOneCtrl);

solutionOneCtrl.$inject=['$scope'];
function solutionOneCtrl($scope) {
  $scope.data="";
  $scope.result="";
  $scope.check = function() {
    var num=0;
    if ($scope.data.trim()==0) {
      $scope.result="Please enter data first";
    } else {
      num= $scope.data.split(',').length;
      if(num <= 3) {
        $scope.result="Enjoy!";
      } else {
        $scope.result="Too much!";
      }
    }
  };

}
})();
