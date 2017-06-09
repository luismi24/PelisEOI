(function () {
    'use strict';

    angular
        .module('peliculaseoi')
        .controller('PeliculasController', PeliculasController);

    PeliculasController.$inject = ['$scope', '$http', 'PeliculasHttp', '$sce'];

    function PeliculasController($scope, $http, PeliculasHttp, $sce) {
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
        $scope.vid = 'https://www.youtube.com/embed/';
        $scope.trailer = {};
        activate();

        ////////////////

        function activate() {
            busquedaPelis();
            generaGeneros();
            totalResultss();
            function getVideo(id) {
            PeliculasHttp.getvideo(id)
                .then(function(response){
                    $scope.trailer = $sce.trustAsResourceUrl(vid + response.key)
                    console.log($scope.trailer)
                })
        }
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
            getVideo(movie.id);
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
                    $scope.movies = movies;
                    console.log($scope.movies);
                })
        }
        function totalResultss() {
            PeliculasHttp.totalResults()
                .then(function(response){
                    $scope.results = response;
                })
        }
        function getVideo(id) {
            PeliculasHttp.getvideo(id)
                .then(function(response){
                    $scope.trailer = $sce.trustAsResourceUrl($scope.vid + response.key)
                    console.log($scope.trailer)
                })
        }
    }
})();