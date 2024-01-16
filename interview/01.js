// Problem 1: get output 1, 2 without let and also explain how to do that and why?

// with var
for (var i = 1; i <= 2; i++) {
    setTimeout(() => console.log(i), 100) // 3, 3
}
console.log("outside : ", i); // output 3

// with const
for (const j = 1; j <= 2; j++) {
    setTimeout(() => console.log(j), 100) // 1, TypeError: Assignment to constant variable. j++
}
console.log("outside : ", j); // ReferenceError: j is not defined

// *** Solution

// i will create a seprate function and i will pass that variable i to that function

for (var k = 1; k <= 2; k++) {
    print(k)
}

// function is used to create a new scope for each iteration of the loop.
function print(k) {
    setTimeout(() => console.log(k), 100) // 1, 2
}
console.log("outside : ", k); // 3

// or by using Immediately Invoked Function Expression (IIFE)

for (var l = 1; l <= 2; l++) {
    (function (l) {
        setTimeout(() => console.log(l), 100); // 1,2
    })(l);
}
console.log("outside: ", l); // 3


// Problem 2: type of copy (shallow vs deep copy) explain and how to do that and why?