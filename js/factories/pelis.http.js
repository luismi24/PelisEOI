(function() {
    'use strict';

    angular
        .module('peliculaseoi')
        .factory('PeliculasHttp', PeliculasHttp);

    PeliculasHttp.$inject = ['$http'];
    function PeliculasHttp($http) {
        var service = {
            searchPelicula:searchPelicula
        };
        
        return service;

        ////////////////
        
        function searchPelicula() {
            return $http.get('https://api.themoviedb.org/3/discover/movie?api_key=6d902fed9905cee850c1703213b4e631&language=en-US&sort_by=popularity.desc&page=1')
                .then(function(response){
                    return response.data.results;
                });
        } 
    }
})();