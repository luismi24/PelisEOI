(function() {
    'use strict';

    angular
        .module('peliculaseoi')
        .controller('PeliculasController', PeliculasController);

    PeliculasController.$inject = ['$scope', '$http'];
    function PeliculasController($scope, $http) {
        $scope.movies = [];
        $scope.img = 'https://image.tmdb.org/t/p/w500';

        activate();

        ////////////////

        function activate() {
            
         }
         function iniciales() {
            $http.get('https://api.themoviedb.org/3/discover/movie?with_genres=18&primary_release_year=2017&api_key=6d902fed9905cee850c1703213b4e631')
                .then(function(response){
                    console.log(response);
                    $scope.data = response;
                    $scope.movies = $scope.movies.concat(response.data.results);
                    console.log($scope.movies);
                });
        } 
        iniciales();
    }
})();