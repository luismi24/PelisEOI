(function () {
    'use strict';

    angular
        .module('peliculaseoi')
        .factory('PeliculasHttp', PeliculasHttp);

    PeliculasHttp.$inject = ['$http'];

    function PeliculasHttp($http) {
        var service = {
            searchPelicula: searchPelicula,
            generos: generos,
            filterbygenre: filterbygenre,
            topRated: topRated,
            searchFilms: searchFilms,
            bestVoted:bestVoted,
            totalResults:totalResults
        };
        var staticUrl = 'https://api.themoviedb.org/3';
        var apiKey = 'api_key=6d902fed9905cee850c1703213b4e631';
        var genre = '&with_genres=';
        return service;

        ////////////////

        function searchPelicula() {
            return $http.get(staticUrl + '/discover/movie?' + apiKey + '&language=es-ES&include_video=true&sort_by=popularity.desc&page=1')
                .then(function (response) {
                    return response.data.results;
                });
        }

        function generos() {
            return $http.get(staticUrl + '/genre/movie/list?' + apiKey + '&language=es-ES')
                .then(function (response) {
                    return response.data.genres;
                });
        }

        function filterbygenre(genreId) {
            return $http.get(staticUrl + '/discover/movie?' + apiKey + '&language=es-ES&sort_by=popularity.desc&page=1' + genre + genreId)
                .then(function (response) {
                    return response.data.results;
                })
        }

        function topRated() {
            return $http.get(staticUrl + '/discover/movie?' + apiKey + '&language=es-ES&sort_by=popularity.desc&page=1')
                .then(function (response) {
                    return response.data.results;
                })
        }

        function searchFilms(buscapeli) {
            return $http.get(staticUrl + '/search/movie?' + apiKey + '&query=' + buscapeli + '&page=1')
                .then(function (response) {
                    return response.data.results;
                })
        }

        function bestVoted() {
            return $http.get(staticUrl + '/discover/movie?' + apiKey + '&language=es-ES&sort_by=vote_average.desc&page=1')
                .then(function (response) {
                    return response.data.results;
                })
        }

        function nextFilms() {
            return $http.get(staticUrl + '/discover/movie?' + apiKey + '&language=es-ES&sort_by=primary_release_date.desc&page=1')
                .then(function (response) {
                    return response.data.results;
                })
        }
        function totalResults(){
            return $http.get(staticUrl + '/discover/movie?' + apiKey + '&language=es-ES&include_video=true&sort_by=popularity.desc&page=1')
            .then(function(response){
                return response.data.total_results;
            })
        }
    }
})();