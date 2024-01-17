# Question 1: How do you create an empty array in JavaScript?

- create an empty array in JavaScript using either of the following methods:
  Using array literal syntax: let arr = [];
  Using the Array() constructor: let arr = new Array();

# Question 2: How do you access the first and last elements of an array?

- access the first element of an array using index 0 and the last element using the index array.length - 1. For example:
  let arr = [1, 2, 3, 4];
  let firstElement = arr[0]; // 1
  let lastElement = arr[arr.length - 1]; // 4

# Question 6: How do you check if an element exists in an array?

- check if an element exists in an array using the indexOf() method. If the element is not found, indexOf() returns -1. For example:
  let arr = [1, 2, 3];
  if (arr.indexOf(2) !== -1) {
  console.log('Element found');
  } else {
  console.log('Element not found');
  }

### ADVANCED \*

## Question 1: Write a function to flatten a nested array in JavaScript.

# Flattening an array in JavaScript involves converting a multi-dimensional array into a one-dimensional array.

- const nestedArray = [1, [2, [3, 4], 5], 6, [7, 8]];

* output : \*[1, 2, 3, 4, 5, 6, 7, 8]

* function flattenArray(nestedArray) {
  return nestedArray.reduce((flat, item) => {
  return flat.concat(Array.isArray(item) ? flattenArray(item) : item);
  }, []);
  }

const nestedArray = [1, [2, [3, 4], 5], 6, [7, 8]];
const flattenedArray = flattenArray(nestedArray);
console.log(flattenedArray);

# Question 2: Can you explain how the flat() method can be used to flatten an array in JavaScript?

- The flat() method is a built-in method in JavaScript that can be used to flatten an array.

* It takes a depth parameter, which specifies how many levels of nested arrays should be flattened. If no depth parameter is provided, it defaults to 1.

* var nestedArray = [1, [2, [3, 4], 5], 6];
  nestedArray.flat(2); // returns [1, 2, 3, 4, 5, 6]

# const nestedArray = [1, [2, [3, 4, [2, 3, 6]], 5], 6, [7, 8]];

- const flattenArray = (nestedArray) => {
  return nestedArray.reduce((flat, item) => {
  return flat.concat(Array.isArray(item) ? flattenArray(item) : item)
  }, [])
  }

* console.log(flattenArray(nestedArray)); // [ 1, 2, 3, 4, 2, 3, 6, 5, 6, 7,8 ]

# This solution uses the reduce function to iterate over the array elements. If an element is an array, the function is called recursively, and if it's not an array, it's added directly to the result array. The Array.isArray check is used to determine whether an element is an array.

# Question 3: What is the difference between .map() and .forEach()?

- .map() and .forEach() are both array methods that allow you to loop through an array, but they differ in what they return.

* .map() returns a new array with the same length as the original array, where each element is the result of applying a callback function to the original element.
* .forEach() does not return anything, but it simply executes a callback function on each element of the array.
  Example:

const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = numbers.map(num => num \* 2);

console.log(doubledNumbers); // [2, 4, 6, 8, 10]

numbers.forEach(num => console.log(num \* 2)); // 2, 4, 6, 8, 10

# .map() Method:

Purpose: The primary purpose of the .map() method is to create a new array by applying a function to each element of the existing array.
Return value: It returns a new array containing the results of applying the provided function to each element in the original array.
Example:
const numbers = [1, 2, 3, 4];
const squaredNumbers = numbers.map(num => num \* num);
// squaredNumbers will be [1, 4, 9, 16]

# .forEach() Method:

Purpose: The main purpose of the .forEach() method is to iterate over each element of an array and perform a specified operation, usually without creating a new array.
Return value: It does not return anything (or returns undefined). It is primarily used for its side effects, such as modifying elements in-place or performing some action for each element.
Example:
const numbers = [1, 2, 3, 4];
numbers.forEach(num => console.log(num));
// This will log each element to the console but won't create a new array.

# use .map() when you want to create a new array based on the transformation of elements, and use .forEach() when you want to perform some operation or action for each element in the array without creating a new array.
