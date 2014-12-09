var MainApp = angular.module('MainApp', ['ngRoute']);

MainApp.config(function($routeProvider){
    $routeProvider.
    when('/', {
        // ログイン画面を表示
        controller : 'mainsCtrl',
        templateUrl: 'login.html',
    }).
    when('/view2',{
        //
        controller : 'mainsCtrl',
        templateUrl: 'view2.html',
    }).
    otherwise({ // 上記に該当しない場合は '/' にリダイレクトしてログイン画面を表示
        redirectTo: '/'
    });
});

MainApp.controller('mainsCtrl', function($http, $scope){
});
