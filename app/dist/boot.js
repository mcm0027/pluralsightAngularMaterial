/// <reference path="_all.ts" />
var ContactManagerApp;
(function (ContactManagerApp) {
    angular.module('ContactManagerApp', ['ngMaterial', 'ngMdIcons'])
        .service('userService', ContactManagerApp.UserService)
        .controller('mainController', ContactManagerApp.MainController)
        .config(function ($mdThemingProvider) {
        $mdThemingProvider.theme('default')
            .primaryPalette('blue-grey')
            .accentPalette('deep-orange');
    })
        .config(function ($mdIconProvider) {
        $mdIconProvider
            .icon('menu', './assets/svg/menu.svg', 24)
            .defaultIconSet('./assets/svg/avatars.svg', 128);
    });
})(ContactManagerApp || (ContactManagerApp = {}));
;
//# sourceMappingURL=boot.js.map