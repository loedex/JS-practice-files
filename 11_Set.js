//Create a Set by passing an array
const arr = [1,2,3,4,4,4,5];
const num = new Set(arr);
//Now list all the elements present in the set
//for this we can use for-of loop
for(let i of num){
    console.log(i);
}

console.log("Add Values using add()");
//Now create an empty Set and then add values using the add() function
const num2 = new Set();
num2.add("a");
num2.add("b");
num2.add("c");
num2.add("c");
num2.add("c");
num2.add("d");
//Now list the elements present in the Set
for(let j of num2){
    console.log(j);
}