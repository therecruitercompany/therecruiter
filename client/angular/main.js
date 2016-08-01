angular.module('therecruiter', ["ui.router", "ngRoute"])
    .config(function ($stateProvider, $urlRouterProvider){

        $urlRouterProvider
                .otherwise('/login');

        $stateProvider
            .state('login', 
                {
                    url: '/login',
                    views: 
                        {
                            'body-view': 
                                {
                                    templateUrl: 'angular/templates/login.html',
                                    controller : 'SingInUpController'
                                }
                        }
                })
            .state('index',
                {
                    url: '/index',
                    views: 
                        {
                            'body-view':
                                {
                                    templateUrl: 'angular/templates/index.html'
                                }
                        }
                })
    
})
