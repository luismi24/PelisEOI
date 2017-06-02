(function() {
    'use strict';

    angular
        .module('peliculaseoi')
        .factory('PeliculasHttp', PeliculasHttp);

    PelicualasHttp.$inject = ['http'];
    function PelicualasHttp($http) {
        var service = {
            searchPelicula:searchPelicula
        };
        
        return service;

        ////////////////
        function searchPelicula(pelicula) { }
    }
})();