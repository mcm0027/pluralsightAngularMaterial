/// <reference path="../_all.ts" />

module ContactManagerApp {
  export class MainController {
    static $inject = [
      'userService',
      '$mdSidenav'];

    constructor(
      private userService: IUserService,
      private $mdSidenav: angular.material.ISidenavService) {
      var self = this;

      this.userService
        .loadAllUsers()
        .then((users: User[]) => {
          self.selected = users[0];
          self.users = users;
          console.log(self.users);
        });
    }

    tabIndex: number = 0;
    searchText: string = "";
    users: User[] = [];
    selected: User = null;
    toggleSideNav() : void {
      this.$mdSidenav('left').toggle();
    }

    select (user: User) : void {
      this.selected = user;

      var sidenav = this.$mdSidenav('left');
      if (sidenav.isOpen()) {
        sidenav.close();
      }

      this.tabIndex = 0;
    }

  }
}