((): void => {
    'use strict';

    angular.module('app.blogposts').config(config);

    config.$inject = ['$routeProvider'];
    function config($routeProvider: ng.route.IRouteProvider): void {
        /*
         * https://docs.angularjs.org/api/ngRoute/provider/$routeProvider
         * syntax: when(path, route): Adds a new route definition to the $route service.
         */
        $routeProvider.when('/admin/blogposts/newpost', {
            template: '<div>Add NewPosts here..</div>',
            controller: (): void => { },
            controllerAs: 'vm'
        });
    }
})();