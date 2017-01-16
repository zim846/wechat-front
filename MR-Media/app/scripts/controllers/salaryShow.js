'use strict';

mrmedia.controller('SalaryShowCtrl' ['NoticeSrv', '$stateParams',function(NoticeSrv, $stateParams) {
  var openId = $stateParams.openId;

  alert(openId);

}]);
