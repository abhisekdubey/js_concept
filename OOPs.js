const user = {
    name: 'Abhisek',
    signedIn: true,
    loginCount: 8,

    getUserDetails: function () {
        console.log("Name : ", this.name);
    }
}

// console.log(user.name)
// console.log(user.getUserDetails())

function User(username, loginCount, signedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.signedIn = signedIn;

    this.greetings = function () {
        console.log("Username : ", this.username);
    }

    return this;
}

const userOne = new User("Abhi", 3, true);
const userTwo = new User("Dubey", 7, false);

console.log(userOne);
console.log(userTwo.constructor);