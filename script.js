// object -> collection of key value pairs

// {} => means we are declaring or defining an object
// when defining object, {} -> needs key value pairs or pair
// {} -> whenever comes into code, js considers it to be object
let car = {
    bmw : {
        color : "black",
        ts : 280,
        name : "m8",
        message: "I just bought this car the name is: " + this.name
    },
    merc : {
        colour : "red",
        ts : 220,
        name : "amg"
    },

    audi : {
        color : "green",
        ts : 280,
        name : "q8"
    }
}
// console.log(car.audi.color , car.audi.name);

// for(let k in car){
//     console.log(car[k].ts,car[k].name)
// }


let calc = {
  sum: {
        a: 10,
        b: 20,
        name: "Bhavy",
        answer: "hi : " ,
        answer1: function () {
            console.log(this.a + this.b)
            return this.a + this.b
        }, // answer 1 is a method of my sum objec
        answer2: function() {
            return this.a * this.b
        },// answer2 is a method
        answer3: () => {
            return this.a + this.b
        }
    }
} // this -> refers to the surrounding object and when called direclty inside the
// prop -> this will not be able to call the surroundings(the object)
//this used only inside object methods

console.log(calc.sum.answer2())



//nested objects
