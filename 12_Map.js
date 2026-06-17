const user = new Map();
user.set("ag","2023-ag-9958");
user.set("name","Husnain Ahmad");
user.set("age",19);
user.set("role","Fullstack Developer");
user.set("age",20);
console.log(user);


//Advanced Trick : Map Chain
const USER = new Map();

USER
 .set("ag","2023-ag-9958")
 .set("name","Husnain Ahmad")
 .set("age",19)
 .set("role","FullStack Developer ii")
 .set("age",20);
console.log(USER);


//Declarion and Initialization with Values
const user2 = new Map([
    ["reg","2023-ag-9958"],
    ["nam","Husnian Ahmad"],
    ["country","Pakistan"]
]);
console.log(user2);

//set()  : Add Data
user2.set("role","software engr.");
console.log(user2);

//get() : Retrieve Data
console.log(user2.get("nam"));

//has() : check if key exists
console.log("nam key is present ? ", user2.has("nam"));


//delete() : Remove Item
user2.delete("country");
console.log(user2);

//clear() : Remove Everything in map
user2.clear();
console.log(user2);


//size : Total Items
console.log(user2.size);
console.log(user.size);



/*Looping through maps */

//Method 1 : for-of loop
for(let [k,v] of user){
    console.log(k,"is",v);
}

//Method 2 : keys()
for(let k of user.keys()){
    console.log(k);
}

//Method 3 : values()
for(let v of user.values()){
    console.log(v);
}

//Method 4 : entries()
for(let e of user.entries()){
    console.log(e);
}

//Method 5 : forEach()
user.forEach((v,k)=>{
    console.log(v,"is",k);
})

user.forEach(myfn);
function myfn(v,k){
    console.log(k, " IS", v);
}


/*Using Objects as map keys  (Very Powerful)*/ 

const person = new Map();

const u1 = {name:"Husnain",age:19};
const u2 = {name:"Ahmad",age:20};

person.set(u1,"Admin");
person.set(u2,"Second Admin");

console.log(person);
console.log(person.get(u2));


//Convert Map into Object
console.log("Map to Object Conversion");
const obj = Object.fromEntries(user);
console.log(obj);

//Convert object into map
console.log("Object to Map Conversion");
const mp = new Map(Object.entries(obj));
console.log(mp);


/*Real Mini Project
  Counting Frequency of Elements */
  const words = ["apple", "banana", "apple", "orange", "banana"];
  const m = new Map();
  for(let w of words){
    m.set(w,(m.get(w) || 0)+1);
  }
  console.log(m);