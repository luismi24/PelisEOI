(function() {
    'use strict';

    angular
        .module('peliculaseoi')
        .factory('PeliculasHttp', PeliculasHttp);

    PelicualasHttp.$inject = ['http'];
    function PelicualasHttp($http) {
        var service = {
            searchPelicula:searchPelicula
        }
        
        return service;

        ////////////////
        function searchPelicula() {
            return $http.get("https://api.themoviedb.org/3/discover/movie?api_key=6d902fed9905cee850c1703213b4e631&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1")
                .then(function(responese)){
                    var pelis = [];
                    response.data.data.forEach(fucntion(element){
                        pelis.push(element);
                    }); console.log(pelis);
                }
        }
    }
})();