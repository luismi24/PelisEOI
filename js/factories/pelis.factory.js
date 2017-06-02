(function() {
    'use strict';

    angular
        .module('peliculaseoi')
        .factory('PeliculasFactory', PeliculasFactory);

    PeliculasFactory.$inject = [];
    function PeliculasFactory($inject) {
        var service = {
            getAll: getAll
        };
        
        return service;

        ////////////////
        function getAll(){
            
        }
    }
})();