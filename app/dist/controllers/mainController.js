/// <reference path="../_all.ts" />
var ContactManagerApp;
(function (ContactManagerApp) {
    var MainController = (function () {
        function MainController(userService, $mdSidenav, $mdToast, $mdDialog, $mdMedia, $mdBottomSheet) {
            this.userService = userService;
            this.$mdSidenav = $mdSidenav;
            this.$mdToast = $mdToast;
            this.$mdDialog = $mdDialog;
            this.$mdMedia = $mdMedia;
            this.$mdBottomSheet = $mdBottomSheet;
            this.tabIndex = 0;
            this.searchText = "";
            this.users = [];
            this.selected = null;
            var self = this;
            this.userService
                .loadAllUsers()
                .then(function (users) {
                self.selected = users[0];
                self.users = users;
                self.userService.selectedUser = self.selected;
                console.log(self.users);
            });
        }
        MainController.prototype.toggleSideNav = function () {
            this.$mdSidenav('left').toggle();
        };
        MainController.prototype.selectUser = function (user) {
            this.selected = user;
            var sidenav = this.$mdSidenav('left');
            if (sidenav.isOpen()) {
                sidenav.close();
            }
            this.tabIndex = 0;
        };
        MainController.prototype.showContactOptions = function ($event) {
            this.$mdBottomSheet.show({
                parent: angular.element(document.getElementById('wrapper')),
                templateUrl: './dist/views/contactSheet.html',
                controller: ContactManagerApp.ContactPanelController,
                controllerAs: "cp",
                bindToController: true,
                targetEvent: $event
            }).then(function (clickedItem) {
                clickedItem && console.log(clickedItem.name + ' clicked!');
            });
        };
        MainController.prototype.addUser = function ($event) {
            var self = this;
            var useFullScreen = (this.$mdMedia('sm') || this.$mdMedia('xs'));
            this.$mdDialog.show({
                templateUrl: './dist/views/newUserDialog.html',
                parent: angular.element(document.body),
                targetEvent: $event,
                controller: ContactManagerApp.AddUserDialogController,
                controllerAs: 'ctrl',
                clickOutsideToClose: true,
                fullscreen: useFullScreen
            }).then(function (user) {
                self.openToast("User added");
            }, function () {
                console.log('You cancelled the dialog.');
            });
        };
        MainController.prototype.clearNotes = function ($event) {
            var confirm = this.$mdDialog.confirm()
                .title('Are you sure you want to delete all notes?')
                .textContent('All notes will be deleted. You can\'t undo this action.')
                .targetEvent($event)
                .ok('Yes')
                .cancel('No');
            var self = this;
            this.$mdDialog.show(confirm).then(function () {
                self.selected.notes = [];
                self.openToast('Cleared notes');
            });
        };
        MainController.prototype.removeNote = function (note) {
            var foundIndex = this.selected.notes.indexOf(note);
            this.selected.notes.splice(foundIndex, 1);
            this.openToast("Note was removed");
        };
        MainController.prototype.openToast = function (message) {
            this.$mdToast.show(this.$mdToast.simple()
                .textContent(message)
                .position('top right')
                .hideDelay(3000));
        };
        MainController.$inject = [
            'userService',
            '$mdSidenav',
            '$mdToast',
            '$mdDialog',
            '$mdMedia',
            '$mdBottomSheet'];
        return MainController;
    })();
    ContactManagerApp.MainController = MainController;
})(ContactManagerApp || (ContactManagerApp = {}));
//# sourceMappingURL=mainController.js.map