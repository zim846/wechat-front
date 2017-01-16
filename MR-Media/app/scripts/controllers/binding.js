'use strict';

mrmedia.controller('BindingCtrl', ['$scope','NoticeSrv','$state', '$location', '$http', function($scope,NoticeSrv,$state, $location, $http) {

  var url = $location.absUrl();
  var urlArray= url.split('?');
  var code;
  var openId;

  if(urlArray.length == 1){
      window,location.href = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxc833e93ee9bb4bc1&redirect_uri=http://112.74.50.130/weChat/index.html&response_type=code&scope=snsapi_base&state=123#wechat_redirect";
  }else if(urlArray.length == 2){
      var _code = urlArray[1];
      code = _code.substring(_code.indexOf('=')+1, _code.indexOf('&'));
      alert(code);
      var config = {
         params: {
          code : code,
          state : 'state123'}
      };
      //send get request.
      $http({
        method : 'GET',
        url : '/weChat/check'
      }).then(function mySucces(response) {
            //响应成功
            if(response.data.errCode == 0){
               openId = response.data.openId;
               $state.go('app.salaryShow', {
                  params: openId
               });}
      }, function myError(response) {
            alert("Fail");
      });


      // $http.get('/weChat/check',config)
      //       .success(function(response){
      //           //响应成功
      //           if(response.errCode == 0){
      //              openId = response.openId;
      //              $state.go('app.salaryShow', {
      //                 params: openId
      //              });
      //
      //           }else{
      //             openId = response.openId;
      //           }
      //
      //       }).error(function(data,header,config,status){
      //           //处理响应失败
      // });

  }

  $scope.cancelDialog = function () {
    $('#salaryDialog').fadeOut(200);
  }

  $scope.showDialog = function () {
    var username = $('#username').text();
    var password = $('#password').text();
    // do check.
    //if check successfully, bind the openId
    $state.go('app.salaryShow',{
      params: openId
    });

    //if not ...
  }
}]);
