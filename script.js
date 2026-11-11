// Array Day 2

// slice in arrays-> used to extract a portion of an array without modifying the original array


let str = ["orange", "animal", "papaya", "apple"] // array of strings

// arr.slice(start, end)

// let result = arr.slice(2, 4); // start = slice will consider the starting the index, and it will consider end - 1 index not the end index
 // 1 and 3 it will not consider 4th index
// console.log(result);
// console.log(arr)


// ** printing order will remain the same in +/- cases, only the start will change 

// console.log(arr.slice(-3)) // if it is positive so the slicing will start from the start 

// // console.log(arr.slice(-3)) // if it is negative so slicing will start from the last 

// // **** for +ve case it is taking the starting index and printing upto last existing +ve index
// // **** for -ve case it is taking the ending index and printing upto that index from -1
// // console.log(arr.slice(1, -1))


// console.log(arr.slice(-1))

// array of decimal numbers

// //console.log(arr.indexOf(60)) // if it gives -1 that means value is not present inside the array
// // if duplicates are present, it will print the first index that is having the matched value
// // this function returns the index of the found value, 

// // arr[90] values can be undefined

// let index = arr.indexOf(20) // 1

// while(index !== -1) {
//     console.log(index);
//     // update the index
//     index = arr.indexOf(20, index + 1) // 2, 5
// }



// let arr = [10, NaN, 30, 40] 

// // includes -> it will tell that whether the value is present or not i.e it will return either true for found and false for not found

// console.log(arr.includes(NaN))

// // *** indexOf cannot detect NaN, includes can detect NaN.


let arr1 = [10, 20, 30]
let arr2 = [50, "string", "string11"]

let result = arr1.concat(arr2)

// console.log(arr1.concat(arr2))

let a = [1,2];
let b = [3,5]
let c = [6,8]

console.log(b.concat(a,c))