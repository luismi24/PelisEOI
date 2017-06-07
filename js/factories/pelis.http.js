(function() {
    'use strict';

    angular
        .module('peliculaseoi')
        .factory('PeliculasHttp', PeliculasHttp);

    PeliculasHttp.$inject = ['$http'];
    function PeliculasHttp($http) {
        var service = {
            searchPelicula:searchPelicula,
            generos:generos,
            filterbygenre:filterbygenre
        };
        var staticUrl = 'https://api.themoviedb.org/3';
        var apiKey = 'api_key=6d902fed9905cee850c1703213b4e631';
        var genre = '&with_genres=';
        return service;

        ////////////////
        
        function searchPelicula() {
            return $http.get(staticUrl +'/discover/movie?'+apiKey+'&language=es-ES&sort_by=popularity.desc&page=1')
                .then(function(response){
                    return response.data.results;
                });
        } 
        function generos() {
            return $http.get(staticUrl+'/genre/movie/list?'+apiKey+'&language=es-ES')
            .then(function(response){
                
                return response.data.genres;
            });
        }
        function filterbygenre(genreId){
            return $http.get(staticUrl+'/discover/movie?'+ apiKey+ '&language=es-ES&sort_by=popularity.desc&page=1' + genre + genreId)
            .then(function(response){
                return response.data.results;
            })
        }
    }
})();