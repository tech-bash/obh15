//stack memory = used to manage function execution contexts and also their local data

// let a = 10;
// let b = 20;
// // globally 
// function add() {
//     let x =5;
//     let y = 15;

//     console.log(x + y);
//     product()
// }

// function product(){
//     let o = 10
//     let m = 5
//     console.log(o*m)
// }

// add()

// scope -> defines where a variable can be accessed in my Javascript

// let name = "rahul" // declared globally so it can be accessed inside and outside the function 

// function greet() {
//     let age = 22;
//     var marks = 90; // the variables declared inside the function are called local variables .. 

//     console.log(age)
//     console.log(marks)

//     function test(){
//         console.log(age)

//         function test1(){
//             console.log(age)
//         }

//         test1()
//     }

//     test()
// }

// greet()
// console.log(age) // function scope, any variable declared using var, let, const inside the function 
// are accessible within that function, including it's nested blocks

// if(true) {
//     const a = 10;
//     var b = 20;
// }

// console.log(b)
// console.log(a)

// why? var => function scoped, let, const => blocked scoped


// TDZ -> temporal dead zone = it is the period between entering a scope and reaching the let or const
// declaration

// console.log(a)

// var a = 10

// ***** let const and var all are hoisted, but let and const cannot be accessed before initialization and var has a property
// that we can access it before intialization

// scope chain => when js cannot find a variable in the current scoope, it(js) searches the outer scope


//  let a = 10;

// function outer() {
//     let b = 20;

//     function inner() {
//         let c= 30;

//         console.log(a)
//         console.log(b)
//         console.log(c)
//     }
//     inner()
// }

// outer()

// variable shadowing -> when an inner scope declares a variable with the same name as outer variable,
// it shadows the outer variable within that scope.

// let name = "rahul"

// function show() {
//     let name  = "Amit"

//     console.log(name)
// }

// show()
// console.log(name)

// hoisting -> but able to access functions or var variables before js reaches their initialization

hello()

function hello() {
    console.log("hello")
}