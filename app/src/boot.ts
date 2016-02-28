/// <reference path="_all.ts" />

module ContactManagerApp {
  angular.module('ContactManagerApp', ['ngMaterial', 'ngMdIcons'])
    .service('userService', UserService)
    .controller('mainController', MainController)
    .controller('addUserDialogController', AddUserDialogController)
    .controller('contactPanelController', ContactPanelController)
    .config(function($mdThemingProvider) {
      $mdThemingProvider.theme('default')
        .primaryPalette('blue-grey')
        .accentPalette('deep-orange')
     })
    .config(function($mdIconProvider) {
       $mdIconProvider
        .icon('menu', './assets/svg/menu.svg', 24)
        .icon('google_plus', './assets/svg/google_plus.svg', 512)
        .icon('hangouts', './assets/svg/hangouts.svg', 512)
        .icon('twitter', './assets/svg/twitter.svg', 512)
        .icon('phone', './assets/svg/phone.svg', 512)
        .defaultIconSet('./assets/svg/avatars.svg', 128);

    })
};