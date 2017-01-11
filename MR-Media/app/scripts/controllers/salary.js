'use strict';

mrmedia.controller('SalaryCtrl', ['$scope','NoticeSrv', function($scope,NoticeSrv) {



  $scope.cancelDialog = function () {
    $('#salaryDialog').fadeOut(200);
  }

  $scope.showDialog = function () {
    $('#salaryDialog').fadeIn(200);
  }
}]);
