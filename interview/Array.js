//  Question 1: Write a function to flatten a nested array in JavaScript.

const nestedArray = [1, [2, [3, 4], 5], 6, [7, 8]];

// by built-in flat() method
console.log(nestedArray.flat(2)); // [1,2,3,4,5,6,7,8]

const nestedArray1 = [1, [2, [3, 4, [2, 3, 6]], 5], 6, [7, 8]];

const flattenArray = (nestedArray) => {
    return nestedArray.reduce((flat, item) => {
        return flat.concat(Array.isArray(item) ? flattenArray(item) : item)
    }, [])
}

console.log(flattenArray(nestedArray1)); // [    1, 2, 3, 4, 2, 3, 6, 5, 6, 7,8  ]