const nestedArray = [1, [2, [3, 4, [2, 3, 6]], 5], 6, [7, 8]];

const flattenArray = (nestedArray) => {
    return nestedArray.reduce((flat, item) => {
        return flat.concat(Array.isArray(item) ? flattenArray(item) : item)
    }, [])
}

console.log(flattenArray(nestedArray)); // [    1, 2, 3, 4, 2, 3, 6, 5, 6, 7,8  ]