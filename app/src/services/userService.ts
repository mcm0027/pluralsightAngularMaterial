/// <reference path="../_all.ts" />

module ContactManagerApp {

  export interface IUserService {
    loadAllUsers(): ng.IPromise<User[]>;
    selectedUser: User;
  }

  export class UserService implements IUserService {
    static $inject = ['$q'];

    constructor(private $q: ng.IQService) {
    }

    selectedUser: User = null;

    loadAllUsers() : ng.IPromise<User[]> {
      return this.$q.when(this.users);
    }

    private users: User[] = [
      {
        name: 'Erick Riley',
        avatar: 'svg-1',
        bio: "fish fish blah doob",
        notes: [
        ]
      },
         {
        name: 'Bob Riley',
        avatar: 'svg-2',
        bio: "quick squip doob kappa",
        notes: [
          { title: "Pay back chipmunk", date: new Date("2016-01-12")},
          { title: "Buy whips for birthday", date: new Date("2016-01-19")}
        ]
      },
         {
        name: 'EmilyPoopbutt',
        avatar: 'svg-3',
        bio: "blah blah blah doob",
        notes: [
          { title: "Pay back choco", date: new Date("2016-01-12")},
          { title: "Buy smells for birthday", date: new Date("2016-01-19")}
        ]
      }
    ]
  }

}