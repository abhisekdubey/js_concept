for (var l = 1; l <= 2; l++) {
    (function (l) {
        setTimeout(() => console.log(l), 100); // 1,2
    })(l);
}
console.log("outside: ", l); // 3