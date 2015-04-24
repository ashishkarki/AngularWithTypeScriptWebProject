// this is required coz ng.cookies.ICookieService din't have any property/function named userID
interface IAppCookies {
    userId: string;
}

 // create a run() to pass into the angular.run method
((): void => {
    'use strict';

    angular.module('app').run(run);

    run.$inject = ['$rootScope', 'cookies', 'currentUser'];
    function run($rootScope: ng.IRootScopeService, $cookies: IAppCookies, currentUser: ICurrentUser): void {
        $rootScope.$on('$routeChangeError',(): void => {

        });
        currentUser.userId = $cookies.userId;
    };
})();