/*Create an Array */
// Using Array Literal:
const arrayName = [];

// Using new Keyword:
const arrayName2 = new Array();

//These both ways do exactly the same. But For Simplicity, Readability and Execution Speed use the Array Literal Method.

/*Accessing Array Elements */
const arr = [10,11,12,13,14,15];
console.log(arr[1]);
console.log(arr); //displays the whole list.

/*Changing an Array Element */
arr[1]=20;
console.log(arr[1]);

/*Converting an Array to a String */
//Converts an array to a string of comma seperated array values.
const fruits = ["Banana","Apple","Mango","Orange"];
console.log(fruits.toString());

console.log(typeof arr);

// Array Elements can be Objects:
const users = [{name:"Ali",age:20},{name:"Husnain",age:19},{name:"Ayesha",age:20}];
console.log(users[0]);
console.log(users[0].age);

//Arrays can have functions:
const actions = [function(){console.log("Hello World")},function(name){console.log(`Welcome ${name}`);}];
actions[0]();
actions[1]("Ali");


//Arrays can have mixed types:
const mixedTypes = [10,"Ali",{name:"Husnain",age:19},function(){console.log("HELLO");},20];
console.log(mixedTypes[0]);
console.log(mixedTypes[1]);
console.log(mixedTypes[2]);
mixedTypes[3]();
console.log(mixedTypes[4]);

//The length propert of an array returns the number of array elements:
console.log(mixedTypes.length);

//Adding a new Elements: 
//using the push() method:
const FRUITS = ["Banana","Apple","Orange"];
FRUITS.push("Lemon");
console.log(FRUITS);

//How to Recognize Array: 
console.log(Array.isArray(FRUITS));
console.log(FRUITS instanceof Array);