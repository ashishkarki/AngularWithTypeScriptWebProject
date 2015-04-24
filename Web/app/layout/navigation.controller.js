var app;
(function (app) {
    var layout;
    (function (layout) {
        'use strict';
        var NavigationController = (function () {
            function NavigationController(currentUser) {
                var vm = this; // store current instance in vm variable
                vm.fullName = currentUser.fullName;
            }
            return NavigationController;
        })();
    })(layout = app.layout || (app.layout = {}));
})(app || (app = {}));
//# sourceMappingURL=navigation.controller.js.map