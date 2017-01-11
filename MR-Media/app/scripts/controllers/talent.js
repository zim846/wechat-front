'use strict';

mrmedia.controller('TalentCtrl', ['$scope','NoticeSrv', function($scope,NoticeSrv) {



  $scope.cancelDialog = function () {
    $('#salaryDialog').fadeOut(200);
  }

  $scope.showDialog = function () {
    $('#salaryDialog').fadeIn(200);
  }
}]);
