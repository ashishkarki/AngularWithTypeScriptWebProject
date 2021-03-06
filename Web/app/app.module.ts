﻿// this registers our main/entry app

/*(function () : void {
    'use strict';
})(); */

// same thing as above but using lambda expression
((): void => {
    'use strict';

    // the ones within [] are the module on which the 'app' module depends on
    angular.module('app', [
        'app.core',
        'app.layout',
        'app.services',
        'app.widgets',
        'app.blocks',
        /*
         * Feature related modules
         */
        'app.blogposts',
        'app.dashboard',
        'app.sitesettings',
        'app.users',
        'app.usersettings',
    ]);
})();