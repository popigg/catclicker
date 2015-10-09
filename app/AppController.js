(function() {
    'use strict';

    angular
        .module('catclick')
        .controller('AppController', AppController);

    /* @ngInject */
    function AppController() {
        /*jshint validthis: true */
        var vm = this;
                
        vm.clickCount = 0;
        vm.clickIncrement = function() {
        	vm.clickCount = vm.clickCount +1;
        };

        activate();

        function activate() {
        	console.log(vm.clickCount);
        }
    }
})();