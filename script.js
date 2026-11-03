
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


// parameters and arguments

function product(a, b, c) { // parameters
    
    console.log(a + b + c + " old")

    console.log(typeof a, typeof b, typeof c)
} // generic function for the product of two numbers

// invoking the function
product("pranav", " is ", 2) // arguments // you cannot multiply a number with a string 

product("pawan ", " is ", 3) // arguments

product(9, " is ", 2) // arguments
// at runtime your compiler decides what type of variable you want in your function's parameter 



