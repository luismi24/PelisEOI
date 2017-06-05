(function() {
    'use strict';

    angular
        .module('peliculaseoi')
        .controller('PeliculasController', PeliculasController);

    PeliculasController.$inject = ['$scope', '$http'];
    function PeliculasController($scope, $http) {
      //  $scope.searchPelicula = searchPelicula;
        
console.log('hola q ta');
        activate();

        ////////////////

        function activate() {
            
            searchPelicula();
         }
         function searchPelicula() {
            return $http.get("https://api.themoviedb.org/3/discover/movie?api_key=6d902fed9905cee850c1703213b4e631&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1")
                .then(function(response){
                    
                })
        }
    }
})();