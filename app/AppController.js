(function() {
    'use strict';

    angular
        .module('catclick')
        .controller('AppController', AppController);

    /* @ngInject */
    function AppController() {
        /*jshint validthis: true */
        var vm = this;

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
        	vm.selectedCat = vm.catList[pos];
        }
        
        vm.clickIncrement = function(cat) {
        	cat.clickCount = cat.clickCount +1;
        };

        activate();

        function activate() {        	
        }
    }
})();