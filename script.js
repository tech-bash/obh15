// Arrays -> it stores multiple values in a single variable

// let students = ["pawan", 7, 5, "pr"] // arrray of strings, before it was array of numbers

// // console.log(students);

// console.log(typeof students[1])


// array declarations 

// // array literal
// let fruits = ["apple", "mango", "Banana"]

// // empty array

// let numbers = [1, 2]

// fruits[1] = "pineapple" // updating the present value inside the array
// fruits[2] = 7

// // it creates an empty slots between the previous last element and index 7
// fruits[5] = "pratiksha"

// // // array constructor

// // let values = new Array(10, 20, 30)


// console.log(fruits)


// // length 

// console.log(fruits[fruits.length - 1])

// whatever the length of the array is for the indexing, you'll always go upto length - 1.
// length will give the number of array slots upto the last index plus one, not necessarily the number of populated elements

//looping inside array

let arr = [10, 20, 30, 40, 50]


// for(let i = 0; i< arr.length; ++i) {
//     console.log(arr[i])
// }
console.log(arr.length)
// arr.push(90) // add the value to the last present index + 1 i.e it will add the value to the right first index of the last index
// arr.push(100)

// let removed = arr.pop() // it removes the last element from the array and modifies the array

// console.log(arr)
// console.log(removed)

// arr.unshift(5) // add the element/value to the beginning of the array
// arr.unshift(1)

let removed = arr.shift() // removes the first element of the array
console.log(arr)
console.log(removed)


// for(let x of arr) {
//     console.log( x)
// }


arr = [-100, 100, -100, 100, 100 , 50 ,89, 900] // find me the sum of all the elements in the array 

// todo-> print me the count of even and odd numbers in the given array
