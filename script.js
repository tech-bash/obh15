// searching -> if i give you 10 elements, and I ask you to find a specific element
// this process is called searching ..

//let arr = [ 22, 202, 30, 3, 5, 5, 99, 100 ,111, 90, 101, 5, 5, 5]
let arr = ["aamir", "elephant", "don", "bhavy", "dune"];
// [1,2, 7, 8, 9]

arr.sort((a,b )=> { return b.charCodeAt(0) - a.charCodeAt(0)})
// sort-> converts the numbers into strings and then on the basis of 
// their utf 16 units, lexiographically try to sort the array

//arr.sort((a,b) => {return b - a})

console.log(arr)


// let a = 40;
// let b = 10;
//  a - b = -30 // positive, we will try to push smaller values
// to the left 

// let a = 40
// let b = 50
// b- a = 10// b with a a will come before b

/// a - b => ascending 
/// b - a => decending


let str = "hemant is a good boy"

// is hemant good boy a 
console.log(str.split(" ").sort().reverse().join(" "));
console.log(str.split(" ").sort().reverse().join(" "));


let obj = [{name: "bhavy", marks: 90}, {name: "pawann", marks: 50}, {name: "panav", marks: 10},
    
]


console.log(obj.sort((a,b) => b.name.charCodeAt(0) - a.name.charCodeAt(0)))