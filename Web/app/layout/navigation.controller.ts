module app.layout {
    'use strict';

    interface INavigationScope {
        fullName: string;
    }

    class NavigationController implements INavigationScope{
        /*
         * by using $scope style, unlike the controllerAs pattern we will use below
         */
        /*constructor($scope: INavigationScope) {
            $scope.fullName = "Ashish Karki";
        } */
        fullName: string;

        constructor(currentUser: ICurrentUser) {
            var vm = this; // store current instance in vm variable
            vm.fullName = currentUser.fullName;
        }
    }

    /*
     * Put the ng registration code below the class definition as the corresponding code in JS is a IFFI code which does not get elevated/hoisted. Ng will throw error that your controller argument not being a function if we were to register it before the class.
     */
}