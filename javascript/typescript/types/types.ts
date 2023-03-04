interface User {
    name: string;
    id: number;
}

class UserAccount implements User {
    name: string;
    id: number;

    constructor(name: string, id: number) {
        this.name = name;
        this.id = id;
    }
}

// const user: User = {
//     name: "Hayes",
//     id: 10,
// };

const user: User = new UserAccount("Hayes", 10,);

console.log(`Hello ${user.name}, your id is ${user.id}`);