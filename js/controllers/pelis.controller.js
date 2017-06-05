(function() {
    'use strict';

    angular
        .module('peliculaseoi')
        .controller('PeliculasController', PeliculasController);

    PeliculasController.$inject = ['$scope', 'PeliculasFactory', 'PeliculasHttp'];
    function PeliculasController($scope, PeliculasFactory, PeliculasHttp) {
        $scope.searchPelicula = searchPelicula;
        

        activate();

        ////////////////

        function activate() {
            searchPelicula();
         }
         function searchPelicula() {
            return $http.get("https://api.themoviedb.org/3/discover/movie?api_key=6d902fed9905cee850c1703213b4e631&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1")
                .then(function(response){
                    var pelis = [];
                    console.log(response);
                })
        }
         /*function busquedaPelis(){
             var searchPelis = $scope.searchPelis;
             PeliculasHttp.searchPelicula().then(function(response){
                 $scope.pelis = response;
             })
             
         }*/
    }
})();