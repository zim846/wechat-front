'use strict';

mrmedia.controller('LoadingCtrl', ['$scope','NoticeSrv','$state', '$location', '$http', function($scope,NoticeSrv,$state, $location, $http) {

  var url = $location.absUrl();
  var urlArray= url.split('?');
  var code;
  var openId;

  if(urlArray.length == 1){
    // window,location.href = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxc833e93ee9bb4bc1&redirect_uri=http://112.74.50.130/weChat/index.html&response_type=code&scope=snsapi_base&state=123#wechat_redirect";
  }else if(urlArray.length == 2) {
    var _code = urlArray[1];
    code = _code.substring(_code.indexOf('=') + 1, _code.indexOf('&'));
    var config = {
      code: code,
      state: 'state123'
    };
    //send get request.
    $http({
      method: 'GET',
      url: '/weChat/check',
      config: config
    }).then(function mySucces(response) {
              //响应成功
              //openId已经注册
              if (response.data.errCode == 0) {
                openId = response.data.openId;
                $state.go('app.salaryShow', {
                  openId : openId
                });
              }else{
                //openId未注册
                openId = response.data.openId;
                $state.go('app.binding', {
                  openId : openId
                });
              }
              }, function myError(response) {
                      alert("Fail");
              })
  };

}]);
