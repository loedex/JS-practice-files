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


//has()
//returns true if specified value exists in a set
console.log(num2.has("d"));
console.log(num2.has("e"));

//forEach()
//invokes a function for each Set element
num.forEach(function (value){
    console.log(value+1);
})

//values()
//returns an iterator object with the values in a set
ans = [10,20,30,40,50]
const ns = new Set(ans);
console.log(ns.values());

//keys()
//Resturns an iterator object with the values in a set
console.log(ns.keys());

//entries()
//return an iterator with [value,value] pairs from a set
console.log(ns.entries());


/*Set Logic -- Logic Methods */

//union()
//returns the union of two sets in  a new set
const s1 = new Set([1,2,3,4,5]);
const s2 = new Set([4,5,6,7,8,3,9]);
const s = s1.union(s2);
for(let k of s){
    console.log(k);
}


console.log("Intersection")
//intersection()
//returns the intersection of two sets in a new set
const ints = s1.intersection(s2);
for(let k of ints){
    console.log(k);
}

//difference()
//returns the difference between two sets
let ds11 = [1,2,3,4,5,6,7,8,9];
let ds22 = [1,3,5,7,9];
// let ds = ds1.difference(ds2);
// for(let d of ds){
//     console.log(d);
// }


//symmetricDifference()
//returns a new set containing elements which are in this set or in the argument set but not in both
console.log(ds11.symmetricDifference(ds22));