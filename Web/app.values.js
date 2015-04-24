(function () {
    'use strict';
    // we are trying to store information on currently logged in user
    // the userId is provided via cookie during login
    var currentUser = {
        userId: '',
        fullName: ''
    };
    angular.module('app').value('currentUser', currentUser);
})();
//# sourceMappingURL=app.values.js.map