//Primitive Datatypes in JavaScript

//String Datatypes
let str = "Hi! How are You ?";
console.log(str, typeof str)
console.log(typeof str)
//Backticks: Special type template string in which we can use variables directly. For this we use `` instead of single or double quotes.



//Number DataTypes

let n = 12;
console.log(n);
n = 12.4321;
console.log(n);
n = 1.4e15;
console.log(n);
n = 0o10;
console.log(n);
n = -687;
console.log(n);
console.log(typeof n);



//Boolean Datatypes

let a = true;
console.log(a);
console.log(typeof a)



//BigInt Datatypes

let b = 10n;
console.log(b);
console.log(typeof b)
let c = BigInt("100");
console.log(c)
console.log(typeof c);
let res = BigInt("200") + BigInt("300");
console.log(res);
console.log(typeof res)



// Null Datatype
let d = null;
console.log(d, typeof d);


//Undefined Datatype
let e;
console.log(e, typeof e)
let f = undefined;
console.log(f,typeof f)

//Symbol Datatype

let g = Symbol("This is a Symbol.")
console.log(g, typeof g)


// Objects in JavaScript
const car = {
    company:"BMW",
    model:"700",
    color:"black"
};
console.log(car.company, car.color, car.model)



// Create an empty object and assign properties later
const person = {};
person.name="Husnain Ahmad";
person.age=19;
person.city="FSD";
console.log(person.city, person.age,person.name)



//Create an object using the new keyword
const person = new Object({
    firstName:"Husnain",
    lastName:"Ahmad",
    city:"Faisalabad",
    age:19
});
console.log(person.city, person.lastName,person.firstName,person.age)



//JavaScript Object Methods
const person = {
    firstName:"Husnain",
    lastName:"Ahmad",
    city:"FSD",
    age:19,
    fullName:function(){
        return this.firstName + "  " + this.lastName;
        console.log(this.firstName + "  " + this.lastName);
    }
};
console.log(person.fullName, person.city, person.age, person.firstName, person.lastName)
//In above console statement, we wrote person.fullName this will not print the returned string. We have to write as follows: 
// console.log(person.fullName(), person.age,person.city,person.firstName,person.lastName)

//if we use console.log in object method instead of return, then console.log() will print the full name but it will return nothing, so person.fullName() will show Undefined as it got nothing after making function call. 



//Object Constructor Functions
// function person(name,age,city){
//     this.Name = name;
//     this.Age = age;
//     this.City=city;
// }
// const me = new person("Husnain Ahmad",19,"Faisalabad")
// console.log(me.Age,me.City,me.Name)
// const you = new person("Ali",19,"LHR")
// console.log(you.Age,you.City,you.Name)



//Nested Objects:

// const person = {
//     name:"Husnain Ahmad",
//     address:{
//         city:"FSD",
//         province:"Punjab",
//         country:"Pakistan"
//     }
// }
// console.log(person.name)
// console.log(person.address.city, person.address.province,person.address.country)


//Using Prototype with Constructor

function person(NAME){
    this.name=NAME;
}
// Think of the prototype Hi as a “shared storage area” for all Person objects.
person.prototype.Hi = function(){
    console.log("My name is " + this.name)
};
const me = new person("Ali");
const you = new person("Umar");
me.Hi(); // First it will check if me itself has Hi() if not then it will check for prototype. 
you.Hi();
