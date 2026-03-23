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


/*JS Array Sort */
//Alphabetic Sort:
//sort()
let arr1 = ["Orange","Apple","Mango","Lemon","Kiwi"];
console.log(arr1.sort());
console.log(arr1); // the original array also has been changed 

//reverse()
console.log(arr1.reverse());
console.log(arr1); // reverse() also modifies the original array.

//toSorted()
console.log(arr1.toSorted()); //toSorted is alternative way of sort() and it does not change the original array
console.log(arr1); //original array will remain unchanged

//toReversed()
console.log(arr1.toReversed()); //toReversed() is an alternative way of reverse() which doesn't modify the original array
console.log(arr1); //original array will remain unchnaged


/*Sorting Object Arrays */
const CARS = [{type:"Volvo",year:2016},{type:"Saab",year:2001},{type:"BMW",year:2019},{type:"Audi",year:2015}];
console.log("Before Sorting: ");
console.log(CARS);
//Now let's sort by type string: Alphabetically A-Z
CARS.sort( (a,b) => a.type.localeCompare(b.type));
console.log("After Sorting: ");
console.log(CARS);


const CARS2 = [{type:"Volvo",year:2016},{type:"saab",year:2001},{type:"bMW",year:2019},{type:"Audi",year:2015}];
//if data has mixed cases:
console.log(CARS2.sort( (a,b) => a.type.toLowerCase().localeCompare(b.type.toLowerCase())));
console.log(CARS2); //original array has been changed
console.log(CARS2.reverse( (a,b) => a.type.toLowerCase().localeCompare(b.type.toLowerCase())));
console.log(CARS2); //original array has been changed
console.log(CARS2.toSorted( (a,b) => a.type.toLowerCase().localeCompare(b.type.toLowerCase())));
console.log(CARS2); //original array remains unchanged

//Now let's sort by year:
console.log(CARS2.sort( (a,b) => a.year-b.year));
//reverse sort by year: 
console.log(CARS2.reverse( (a,b) => a.year-b.year));


//sort numbers in array :
const arr3 = [10,2,9,1,45,0,23,-1];
console.log(arr3.sort( (a,b) => a-b));
//reverse sort
console.log(arr3.reverse( (a,b) => a-b));

const arr4 = [1,2,10,34,90,32,88];
console.log(Math.min.apply(null, arr4));
console.log(Math.max.apply(null,arr4));

/*JS Array Iteration Methods */
//forEach()
arr4.forEach(thisCallBackFunction);
function thisCallBackFunction(value,index,ar){
    console.log(value*=0);
}
console.log(arr4); //original array is not changed


//map()
const arrN = arr4.map(myFunction2);
function myFunction2(value,index,array){
    return value*2;
}
console.log(arrN);
console.log(arr4); //The original array remains unchanged


//flatMap()
const arr5 = [1,2,3];
const arrN2 = arr5.flatMap((value) => value*2);
console.log(arrN2);
console.log(arr5); //original remains unchanged

//filter
const arrr6 = [10,18,20,45,52,1];
const newarr = arrr6.filter((x) =>  x>18);
console.log(newarr);
console.log(arrr6); //original is unchanged

//every()
//checks if all array elements pass a test:
console.log(arrr6.every((x)=>x<100));

//Array.from()
//returns an array object from any iterable object:
let s = "ABCDEF";
console.log(Array.from(s));

//Array.keys()
//returns an Array iterator object with the keys of an array:
const x = ["Apple","Mango","Banana","Kiwi","Lemon"];
const key = x.keys();
key.forEach(myFunctionx);
function myFunctionx(value){
    console.log(value);
}

//entries()
//returns an array iterator with key/value pairs:
const ent = x.entries();
ent.forEach(fn);
function fn(value,index){
    console.log(index,value);
}
ent.forEach(fn2);
function fn2(){
    console.log(ent);
}

//with()
// a safe to update elements in an array without altering the original array:
const xx = [1,2,3,4,5];
const newx = xx.with(2,10);
console.log(newx);

//find()
//returns the value of the first array element that passes a test function:
const farray = [2,4,1,4,4,7,6,9,9];
let fa = farray.find(myfn);
function myfn(value,index,array){
    return value > 5
}
console.log(fa);

//splice()
//adds new items to an array and returns an array with the deleted items
let fru = [1,2,3,4,5,6,7,8,9];
// console.log(fru.length);
// console.log(fru.splice(2,3,50,60,70,80,90)); //returns an array with the deleted items
// console.log(fru); //original array has been modified
// console.log(fru.length);

//slice()
//slices out a piece of array into a new array. It does not modify the original array
let nw = fru.slice(2);// this will print from 2 index to end bcause end index is not specified.
console.log(nw);
console.log(fru); //original array remains unchanged
nw = fru.slice(2,5); //end index is exclusive
console.log(nw);

//for-of loop on Arrays:
//It works like a classic for loop
let h = [1,2,3,4,5,6,7,8];
for(let i of h){
    console.log(i);
}
//for-in loop:
//It displays the indexes not values
console.log("for-in Loop ");
for(let i in h){
    console.log(i);
}
//But if we want to display the values using for-in loop:
console.log("Values using for-in Loop");
for(let i in h){
    console.log(h[i]);
}


//reduce()
//runs a function on each array element to produce a single value:
let arn = [1,2,3,4,5];
let na = arn.reduce((n1,n2)=>{return n1+n2});
console.log(na);


//Pactice Set of Arrays 

//Question : 1
//Create an array of numbers and take the input from user to add number to array
let Anum = [1,2,3,4,5,6,7,8,9];
// let a = prompt("Enter Number : "); //Here a is a string so in next line we will convert this into integer
// a = Number.parseInt(a);
// Anum.push(a);
// console.log(Anum);

//Question : 2
//Filter the numbers divisible by 10 from a given array: 
let Bnum = [2,10,45,30,37,50];
let bn = Bnum.filter((i)=>{return (i%10==0)});
console.log("Numbers which are divisible by 10 are : ",bn);

//Question : 3
//Create an array of squares of given numbers
let Cnum = Bnum.map((value)=>{return value**2});
console.log(Cnum);

//Question : 4
//Use reduce() and calculate the product of numbers in an array
let nn = Bnum.reduce((a,b)=>{return a*b});
console.log(nn);


/*Skip out of stock items*/
console.log("Items in Stock")
const Items = [{Name:"Apple",code:"101", inStock:true},{Name:"Mango",code:"102",inStock:false},{Name:"Banana",code:"103",inStock:true},{Name:"Watermelon",code:"104",inStock:false}];
for(let i=0; i<Items.length; i++){
    if(Items[i].inStock){
        console.log("Detail : ",Items[i].code);
    }
}



//Create an array called myFavouriteFoods with at least 5 of your favourite foods as strings. Print the whole array with console.log and also print how many items are in it using .length!
const myFavouriteFoods = ["Mango","WaterMelon","Apple","Orange","Banana"];
myFavouriteFoods.map((v,i)=> console.log(i+": "+v));
console.log("Lenght of array : "+myFavouriteFoods.length);



//Transforming Objects in an Array
// INPUT — array of product objects:
// Transform each product — add a discounted price field!
const prod = [
    {id:1, name:"Laptop",price:90000},
    {id:2, name:"Mobile",price:50000},
    {id:3,name:"Headset",price:10000}
];
const prodN = prod.map((i)=>{
    return {
        id:i.id,
        name:i.name,
        originalPrice:i.price,
        discountedPrice: Math.round(i.price*0.9)
    };
});
console.log("Original Array");
prod.map((v)=> console.log(v));
console.log("New Array");
prodN.map((v)=> console.log(v));


const students = ["Husnain Ahmad","Waleed Ahmed","Zain Arshad","Muhammad Shahzaib Arshad"];
const studentsN = students.map((v,i)=>{
    return (i+1)+": "+v;
});
console.log(studentsN);