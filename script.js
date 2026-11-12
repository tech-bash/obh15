// shallow copy and deep copy ..

// reference copying
// let arr1  = [10, 20, 30, 40]

// let arr2 = arr1;

// arr1.push(50)

// console.log(arr1)
// console.log(arr2)


// shallow copy -> creates a new outer array, ** but nested arrays and objects are still shared

// let arr1 = [10, 20, [30, 40]]; // nested array

// let arr2 = [...arr1]

// arr1[2][1] = 300

// console.log(arr1)
// console.log(arr2)

// deep copy -> creates independent copies of arrays/objects** even the nested ones

let arr1 = [10, 20, [30, 40]]

let arr2 = structuredClone(arr1);

arr2[2][0] = 900

console.log(arr1)
console.log(arr2)