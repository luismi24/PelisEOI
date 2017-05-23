(function () {
    'use strict';
    angular.module('peliseoi', ['ngRoute']).config(config);
    config.$inject = ['$routeProvider', '$locationProvider'];
    function config($routeProvider, $locationProvider) {
        
        $locationProvider.html5Mode(true);
        
        $routeProvider
            .when("/", {

                controller: 'HomeController',
                templateUrl: '/views/home.html'
            })
        
                .when("/film/:id", {
                
                controller: 'FilmController',
                templateUrl: '/views/film.html'
            })
                .otherwise({redirectTo : "/"});
    }
})();