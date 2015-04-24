((): void => {
    'use strict';

    angular.module('app').config(config);

    // If a function has an $inject property and its value is an array of strings, then the strings represent names of services to be injected into the function
    config.$inject = ['app.blocks.ApiEndpointProvider'];
    function config(apiEndpointProvider: app.blocks.IApiEndpointProvider): void {
        apiEndpointProvider.configure('/api'); // /api is our rest endpoint
    };
})();