 // for main 'app' module configuration
((): void => {
    'use strict';

    angular.module('app').config(config);

    // If a function has an $inject property and its value is an array of strings, then the strings represent names of services to be injected into the function
    config.$inject = ['$locationProvider'];
    function config($locationProvider: ng.ILocationProvider): void {
        $locationProvider.html5Mode(true);
    };
})();