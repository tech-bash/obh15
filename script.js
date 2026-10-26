// console.log("first batch 1");
// // // is mainly used to output the information that u particulalry want 

// variables 

// Block's scope ..

// let variable = 60;
// console.log(variable)

// {

// let variable = 70;
// console.log(variable)
//     {
//     let variable = 80;
//     console.log(variable)
//     }
    
// // }

// //using let 
// let test2 = 70; // declaring + defining 

// {
// let test2 = "string";
// console.log(test2)
// }
// console.log(test2)

//using var and let 

// var test = 50; // scope sized is different
// console.log(test)

// // let test = "I'm using var"
// console.log(test)

// test = "batch 15"
// console.log(test)


//using const 

// const test = "string 1"

// console.log(test);
//u


// u {
// //     const test = "string 3";
// //     console.log(test);
// u//         const test = "string 4"
// //         console.log(test)
// /u/     }
// // }

// test = 'ca';

// example = 90;
//uuuuuuuuuuuuuu
// result = "A bird was just born";

// answer = test;
// //lhs = rhs

// console.log(typeof test);
// console.log(typeof example);
// console.log(typeof result);
//
// const len = "string";
// let width = "string1";
//console.log(typeof len)
// console.log(typeof width)

// result = len *  width; 

// // + = global operator, it can add numbers, strings, objects when used properly
// // except + all the other operators i.e mathematical operator like -, %, *, ** are treated as math
// // matical operators only

// console.log(typeof result)

// // console.log(result);
// let a = 8
// let b = 9

// console.log((a + b) / b); // 1.8
// console.log(a + b / b); // 9
// console.log(a + ( b / b)); // 9


// let score = 5

// score += 7; // score = score + 7

// // +=, *=, /=, -=   ===> Compound assignment operators

// score *= 2; // score = score * 2

// score /= 20;

// score -= 10;

// console.log(score);


// console.log(Math.floor(4.5))
// console.log(Math.floor(4.9))
// console.log(Math.floor(-4.2)) // rounds off to the smallest integer

// console.log(Math.round(4.5))
// console.log(Math.round(4.9))
// console.log(Math.round(4.2))
// console.log(Math.round(-4.5)) // rounds off to the nearest number

// console.log(Math.ceil(4));
// console.log(Math.ceil(4.6))
// console.log(Math.ceil(4.2))
// console.log(Math.ceil(4.9))
// console.log(Math.ceil(4.5)) // rounds off to the largest value or number


// let a = 78.909909; // hard coded 

// console.log(a.toFixed(3))

// let result  = true; // 1

// let answer = false; // 0

// console.log(typeof result)
// console.log(typeof answer)

let result = 49;

answer = true;

if(result >= 50 || answer) { // by default if conditional statements check for booleans if(true)
    console.log("Pavan had 100% in 12th")
} 

else if(result == 9) {
    console.log("passed")
}

else {
    console.log("failed")
}
