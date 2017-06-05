(function() {
    'use strict';

    angular
        .module('peliculaseoi')
        .controller('PeliculasController', PeliculasController);

    PeliculasController.$inject = ['$scope', 'PeliculasFactory', 'PelicualasHttp'];
    function PeliculasController($scope, PeliculasFactory, PelicualasHttp) {
        $scope.busquedaPelis = busquedaPelis;
        

        activate();

        ////////////////

        function activate() {
            $scope.peliculas = PeliculasFactory.getAll();
         }
         function busquedaPelis(){
             var searchPelis = $scope.searchPelis;
             PeliculasHttp.searchPelicula(searchPelis).then(function(response){
                 $scope.pelis = response;
             })
             
         }
    }
})();