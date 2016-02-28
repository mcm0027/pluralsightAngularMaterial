/// <reference path="../_all.ts" />
var ContactManagerApp;
(function (ContactManagerApp) {
    var UserService = (function () {
        function UserService($q) {
            this.$q = $q;
            this.selectedUser = null;
            this.users = [
                {
                    name: 'Erick Riley',
                    avatar: 'svg-1',
                    bio: "fish fish blah doob",
                    notes: []
                },
                {
                    name: 'Bob Riley',
                    avatar: 'svg-2',
                    bio: "quick squip doob kappa",
                    notes: [
                        { title: "Pay back chipmunk", date: new Date("2016-01-12") },
                        { title: "Buy whips for birthday", date: new Date("2016-01-19") }
                    ]
                },
                {
                    name: 'EmilyPoopbutt',
                    avatar: 'svg-3',
                    bio: "blah blah blah doob",
                    notes: [
                        { title: "Pay back choco", date: new Date("2016-01-12") },
                        { title: "Buy smells for birthday", date: new Date("2016-01-19") }
                    ]
                }
            ];
        }
        UserService.prototype.loadAllUsers = function () {
            return this.$q.when(this.users);
        };
        UserService.$inject = ['$q'];
        return UserService;
    })();
    ContactManagerApp.UserService = UserService;
})(ContactManagerApp || (ContactManagerApp = {}));
//# sourceMappingURL=userService.js.map