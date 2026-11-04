
// Function => reusable block of code 

// function -> is a key word
// add is the function's name
//{} contains my function's body

// **what my javascript does, irrespective of the creation of function type, if we have two functions with the same name the later one will be considered for the execution whenever and whereever called


// add2();

// function add2() {
//   let a = 20
//   let b = 50

//   console.log(a+b)
// } // -> function declaration

// // add -> calls or invokes the functions 

// // lhs left hand side adapts to the rhs -> right hand side

// // const add creates a variable
// // function() creating an function
// // the function created on the rhs is being assigned to the add
// const add = function() {
//   let a = 20
//   let b = 50

//   console.log(a+b)
// } // => function expression

// add1()


// add1 = function() {
//   let a = 50;
//   let b = 90;

//   console.log(a+b)
// } // function expression

// // ** function cannot be called before the initialisation if made using function expression, if not then can be called

// // we invoke(we call the compiler to execute the block of code) using add()
// add1()


// // parameters and arguments

// function product(a, b, c) { // multiple parameters
    
//     console.log(a + b + c + " old")

//     console.log(typeof a, typeof b, typeof c)
// } // generic function for the product of two numbers

// // invoking the function
// product("pranav", " is ", 2) // arguments // you cannot multiply a number with a string 

// product("pawan ", " is ", 3) // arguments

// product(9, " is ", 2) // arguments
// // at runtime your compiler decides what type of variable you want in your function's parameter 

 // default parameter

 function greet(name = "default", age = 80) {
    console.log("hello " + name  + " " + age)
    console.log(typeof name)
    console.log(typeof age)
 }

//  greet("Rahul", 78)
//  greet() // when I'm not passing any arguments then if given a default values inside parameters, it will take that value but if 
 // i'm passing even one argument then that argument will be binded by the parameter
//  greet( 22.5 , "string")
//  greet()
//  let x = 89;
//  let y = "abc"
//  greet(x, y) // if not javascript for java, c++, c this line will throw you error, you are required string as the first param
//  // and number as a second param, but what you are doing is passing the switched values that means type mismatch

// return statements => sends a calculated value back to the caller, it immediately ends the function

// function add(a, b) {
//         return a + b
// }

// function multiply(value = 100)
// {
//     value = add(30, 20);

//     return value * 2
// }

// let result = multiply(); // result is not able to store the number 30, that should be the output .. 
// //result = 60

// console.log(result) 


const readLine = require("readline");

const rl = readLine.createInterface( {
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter your name: ", function(name) {
    console.log(typeof Number(name))



      rl.close()// once you are finished with the input just close the readline
})
