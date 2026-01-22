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


/*Nested Arrays and Objects */
//Values in objects can be arrays, and values in arrays can be objects:
//Example: 
const myObject = {
    name: "Ali",
    age:18,
    cars:[{name:"BMW",models:["101","102","103"]},{name:"Fiat",models:["1","2","3"]},{name:"Fiesta",models:["10","11"]}],
    city:"Lahore"
}
console.log(`Lenght of Array cars: `,myObject.cars.length);
console.log(`Length of Array models in cars: `,myObject.cars[2].models.length);
//Now to access arrays inside arrays: 
for(let i=0;i<myObject.cars.length;i++){
    console.log(myObject.cars[i].name);
    for(let j=0;j<myObject.cars[i].models.length;j++){
        console.log(myObject.cars[i].models[j]);
    }
}

/*JS Array Search */
//indexOf()
const Z = [1,2,3,4,5,5,7,6,0,8];
console.log(Z.indexOf(5));

//lastIndexOf()
console.log(Z.lastIndexOf(5));

//includes()
console.log(Z.includes(10));

//find()
console.log(Z.find(myFunction)) // we are passing function not calling function
function myFunction(value){
    return value > 5;
}

//findIndex()
console.log(Z.findIndex(myFunction));

//findLast()
console.log(Z.findLast(myFunction));

//findLastIndex()
console.log(Z.findLastIndex(myFunction));