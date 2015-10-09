(function() {
    'use strict';

    angular
        .module('catclick')
        .config(configure);

        configure.$inject = ['$locationProvider', '$stateProvider', '$urlRouterProvider'];

        function configure($locationProvider, $stateProvider, $urlRouterProvider) {

            $locationProvider.html5Mode( true ); 

            $urlRouterProvider.otherwise('/');

            $stateProvider
                .state('start', {  
                    url:            '/',                                                          
                    templateUrl:    'tpl/home.html',
                    controller:     'AppController',
                    controllerAs:    'AppController'
                                    
                })                
        }
})();