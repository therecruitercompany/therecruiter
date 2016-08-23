angular.module('therecruiter', ["ui.router"])
    .config(function ($stateProvider, $urlRouterProvider){

        $urlRouterProvider.otherwise("/index");

        $stateProvider
            .state('index',
                {
                    url: '/index',
                    controller: 'IndexController',
                    templateUrl: 'angular/templates/index.html'
                })
            .state('user',
                {
                    abstract: true,
                    url:'/user',
                    controller: function($scope){
                        $scope.teste = 'Lucas';
                    },
                    templateUrl: 'angular/templates/menu.html'
                })
            .state('user.home',
                {
                    url: '/',
                    templateUrl: 'angular/templates/find.html'
                })
            .state('user.find',
                {
                    url: '/find',
                    templateUrl: 'angular/templates/find.html'
                })
})
