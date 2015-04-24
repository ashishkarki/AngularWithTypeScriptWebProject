((): void => {
    'use strict';   
    
    // modules used across the whole app
    angular.module('app.core', [
        /*
         * Angular Modules
         */
        'ngRoute',
        'ngSanitize',
        'ngCookies',

        /*
         * 3rd party modules
         */
        'hc.marked'
        ]);
})();