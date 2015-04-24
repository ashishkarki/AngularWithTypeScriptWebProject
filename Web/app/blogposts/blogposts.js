(function () {
    'use strict';
    angular.module('app.blogposts').config(config);
    config.$inject = ['$routeProvider'];
    function config($routeProvider) {
        $routeProvider.when('/admin/blogposts/newpost', {
            template: '<div>Add NewPosts here..</div>',
            controller: function () {
            },
            controllerAs: 'vm'
        });
    }
})();
//# sourceMappingURL=blogposts.js.map