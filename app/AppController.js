(function() {
    'use strict';

    angular
        .module('catclick')
        .controller('AppController', AppController);

    /* @ngInject */
    function AppController() {
        /*jshint validthis: true */
        var vm = this;

        vm.adminMode = false;

        vm.catList = [
        	{
        		name: 'harry',
        		pic: 'img/littleCuteCat.jpg', 
        		clickCount : 0      			
        	},
        	{
        		name: 'sally',
        		pic: 'img/littleCuteCat1.jpg',        			
        		clickCount : 0
        	},
        	{
        		name: 'robby',
        		pic: 'img/littleCuteCat2.jpg',        			
        		clickCount : 0
        	},
        	{
        		name: 'jenny',
        		pic: 'img/littleCuteCat3.jpg',        			
        		clickCount : 0
        	},
        	{
        		name: 'natz',
        		pic: 'img/littleCuteCat4.jpg',        			
        		clickCount : 0
        	}
        ];       

        vm.selectCat = function(pos) {
        	vm.selectedCat = angular.copy(vm.catList[pos]);
        	vm.selectedCat.pos = pos;
        };
        
        vm.clickIncrement = function(cat) {        	
        	cat.clickCount = cat.clickCount +1;
        };

        vm.activateAdminMode = function() {
        	vm.adminMode = true;
        };

        vm.cancelAdminMode = function() {
        	vm.selectedCat = vm.catList[vm.selectedCat.pos];
        	vm.adminMode = false;
        };

        vm.saveCat = function() {
        	vm.catList[vm.selectedCat.pos] = vm.selectedCat;
        	vm.adminMode = false;
        }

        activate();

        function activate() {        	
        }
    }
})();