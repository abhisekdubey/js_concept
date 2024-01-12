const promiseOne = new Promise((resolve, reject) => {
    // Do an Async Task
    // DB calls, cryptography
    // network calls
    setTimeout(() => {
        console.log("Async task *1 is completed!");
        resolve()
    }, 1000)
})

promiseOne.then(() => {
    console.log("Promise ^1 Consumed!");
})

new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Async task *2 is completed!");
        resolve()
    }, 1000);
}).then(() => {
    console.log("Promise ^2 Consumed!");
})

const promiseThree = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({ username: "abhisek", email: "abhisek@gmail.com" })
    }, 1000)
})

promiseThree.then((resolve) => {
    console.log(resolve);
})

const apiUrl = 'https://jsonplaceholder.typicode.com/users';
// const promiseFourth = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         fetch(apiUrl)
//             .then(response => {
//                 if (!response.ok) {
//                     reject(`Error: ${response.status} - ${response.statusText}`)
//                     return;
//                 } else {
//                     resolve(response.json());
//                     return
//                 }
//             })
//     }, 1000);
// })

// promiseFourth
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((err) => {
//         console.log(err);
//     })

// promise chaining
const promiseFifth = new Promise((resolve, reject) => {
    setTimeout(() => {
        const error = false
        if (!error) {
            resolve({ username: "abhisek@dev", email: "abhisek@gmail.com" });
            return;
        } else {
            reject(`Error: Something went wrong!`)
            return;
        }
    }, 1000)
});

promiseFifth
    .then((result) => {
        return username = result.username;
    }).then((username) => console.log(username))
    .catch((err) => console.log(err))
    .finally(() => {
        console.log("The promise is either resolved or rejected!");
    })

const promiseSixth = new Promise((resolve, reject) => {
    setTimeout(() => {
        const error = true;
        if (!error) {
            resolve({ username: "javascript@dev", password: "jsdeveloper" });
            return;
        } else {
            reject(`Error: Promise Sixth went wrong!`)
            return;
        }
    }, 1000)
});

// *** Async await proble is - they dont handle error directly

async function consumePromiseSixth() {
    try {
        const response = await promiseSixth;
        console.log("response", response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseSixth()

const getAllUsers = async () => {
    try {
        const response = await fetch(apiUrl)
        const users = await response.json() // api response taken time so we need to wait
        console.log("Users : ", users);
    } catch (error) {
        console.log("Error : ", error);
    }

    // then & catch method
    // fetch(apiUrl)
    //     .then(res => res.json())
    //     .then(data => console.log(data))
    //     .catch((err) => console.log(err))
}

getAllUsers()