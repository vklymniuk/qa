var UserAccount = /** @class */ (function () {
    function UserAccount(name, id) {
        this.name = name;
        this.id = id;
    }
    return UserAccount;
}());
// const user: User = {
//     name: "Hayes",
//     id: 10,
// };
var user = new UserAccount("Hayes", 10);
console.log("Hello ".concat(user.name, ", your id is ").concat(user.id));