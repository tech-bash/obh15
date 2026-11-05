// // Js Global execution context
// var a = 11;
// var b = 2;
// let c = 30
// const d = 89

// let z; //tdz
// const f = 50; //tdz
// var x;

// function add1() {} // global memory

// function add() {
//     var sum = a + b + c + d;
//     console.log(sum)

//     return sum;
// } // user defined function 132

// add()// FEC => function execution context will be created after the function returns or executions stops then fec gets removed
// // from the memory and we go back to GEC and GEC will check for the completion of function's execution and then it stops.. 

// console.log(a) // javascript's predefined function 

// **call stack

// function first() {
//     console.log("first")

//     third()
// }

// function second() {
//     console.log("second")
// }

// function third() {
//     console.log("third")

//     second()
// }

// first();

// my ask .. 

var x = 10;

function one() {
    var x = 2;

    function two() {
        var x = 30;
        console.log(x);
    }

    two()
    console.log(x)
}

one()
console.log(x)