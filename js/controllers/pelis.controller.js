(function() {
    'use strict';

    angular
        .module('peliculaseoi')
        .controller('PeliculasController', PeliculasController);

    PeliculasController.$inject = ['$scope', 'PeliculasFactory'];
    function PeliculasController($scope, PeliculasFactory) {
        var vm = this;
        

        activate();

        ////////////////

        function activate() { }
    }
})();