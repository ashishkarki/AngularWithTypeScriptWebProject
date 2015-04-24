interface ICurrentUser {
    userId: string;
    fullName: string;
}

((): void => {
    'use strict';

   // we are trying to store information on currently logged in user
    // the userId is provided via cookie during login
    var currentUser: ICurrentUser = {
        userId: '',
        fullName: ''
    };
    angular.module('app')
        .value('currentUser', currentUser);

})(); 