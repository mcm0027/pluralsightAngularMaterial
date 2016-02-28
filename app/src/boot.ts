/// <reference path="_all.ts" />

module ContactManagerApp {
  angular.module('ContactManagerApp', ['ngMaterial', 'ngMdIcons'])
    .service('userService', UserService)
    .controller('mainController', MainController)
    .config(function($mdThemingProvider) {
      $mdThemingProvider.theme('default')
        .primaryPalette('blue-grey')
        .accentPalette('deep-orange')
     })
    .config(function($mdIconProvider) {
       $mdIconProvider
        .icon('menu', './assets/svg/menu.svg', 24)
        .defaultIconSet('./assets/svg/avatars.svg', 128);

    })
};