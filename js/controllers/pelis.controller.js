(function () {
    'use strict';

    angular
        .module('peliculaseoi')
        .controller('PeliculasController', PeliculasController);

    PeliculasController.$inject = ['$scope', '$http', 'PeliculasHttp'];

    function PeliculasController($scope, $http, PeliculasHttp) {
        $scope.movies = [];
        $scope.img = 'https://image.tmdb.org/t/p/w500';
        $scope.busquedaPelis = busquedaPelis;
        $scope.generaGeneros = generaGeneros;
        $scope.detailView = detailView;
        $scope.newMovie = {};
        $scope.filterbyGenres = filterbyGenres;
        $scope.topRatedd = topRatedd;
        $scope.searchFilmss = searchFilmss;
        $scope.totalResultss = totalResultss;
        $scope.results = {};
        activate();

        ////////////////

        function activate() {
            busquedaPelis();
            generaGeneros();
            totalResultss();
        }

        function busquedaPelis() {
            PeliculasHttp.searchPelicula()
                .then(function (movies) {
                    console.log(movies);
                    $scope.movies = $scope.movies.concat(movies);
                })
        }

        function generaGeneros() {
            PeliculasHttp.generos()
                .then(function (generos) {
                    console.log(generos);
                    $scope.generos = generos;
                })
        }

        function detailView(movie) {
            $scope.newMovie = movie;
        }

        function filterbyGenres(genreId) {
            PeliculasHttp.filterbygenre(genreId)
                .then(function (movies) {
                    $scope.movies = movies;
                })
        }

        function topRatedd() {
            PeliculasHttp.topRated()
                .then(function (movies) {
                    $scope.movies = movies;
                })
        }

        function searchFilmss(buscapeli) {
            PeliculasHttp.searchFilms(buscapeli)
                .then(function (movies) {
                    console.log(movies);
                    $scope.movies = movies;
                })
        }
        function totalResultss() {
            PeliculasHttp.totalResults()
                .then(function(response){
                    $scope.results = response;
                })
        }
    }
})();