/// <reference path="_all.ts" />
var ContactManagerApp;
(function (ContactManagerApp) {
    angular.module('ContactManagerApp', ['ngMaterial', 'ngMdIcons'])
        .service('userService', ContactManagerApp.UserService)
        .controller('mainController', ContactManagerApp.MainController)
        .controller('addUserDialogController', ContactManagerApp.AddUserDialogController)
        .controller('contactPanelController', ContactManagerApp.ContactPanelController)
        .config(function ($mdThemingProvider) {
        $mdThemingProvider.theme('default')
            .primaryPalette('blue-grey')
            .accentPalette('deep-orange');
    })
        .config(function ($mdIconProvider) {
        $mdIconProvider
            .icon('menu', './assets/svg/menu.svg', 24)
            .icon('google_plus', './assets/svg/google_plus.svg', 512)
            .icon('hangouts', './assets/svg/hangouts.svg', 512)
            .icon('twitter', './assets/svg/twitter.svg', 512)
            .icon('phone', './assets/svg/phone.svg', 512)
            .defaultIconSet('./assets/svg/avatars.svg', 128);
    });
})(ContactManagerApp || (ContactManagerApp = {}));
;
//# sourceMappingURL=boot.js.map