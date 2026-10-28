// let result = 5;

// == -> loose equality i.e doesn't check the type of the variables and gives unwanted type results
// === -> strict equality i.e it checks the type of variables along with the values that the variables are holding

// if(5 == "5") {
//     console.log("correct")
// }

// let isAdmin = true;
// let isLogin = true;
// let isHavingKey = false

// if(isLogin) {
//     if(isAdmin) {
//         if(isHavingKey) {
//         console.log("You are admin")
//         } else {console.log("you don't have a key")}
//     }
//     if(5 == "5") console.log(5)

//     if(6 == "6") console.log(6)


//     else {
//         console.log("you are user")
//     }
// }

// else {
//     console.log("please log in")
// }

// if(6%2 !== 0) {
//     console.log("Even")
// }

// else{
//     console.log("odd")
// }

// let result  = 

// ternary operator



// if(result%3 === 0) {
//     console.log("is divisible")
// }
// else console.log("not divisible")

// result%3 !== 0  ? console.log("is divisible") : console.log("not divisible"); // this is direct output
// let result = false
// // condition ? true : false
// !result ? console.log("amaan is a good student") : console.log("amaan is a bad student")

// let answer =  result%3 === 0 ? ("is divisible") : ("not divisible");

// console.log(answer)

// result = 99

// let answer = result > 0 ?  (result%9) === 0 ? "divisible by 9"   : "not divisible by 9" : "negative number"        ;
// console.log(answer)

let a = 10
let b  = 0
let symbol = "/";

let answer = (a >0 && b >= 0) ? (symbol === "*") ? a*b : (symbol === "+") ? a+b : (symbol === "-") ? a -b : (symbol ==="/") ? a/b : "it is done" :  "not positive numbers" 

console.log(answer)