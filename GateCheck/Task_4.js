// Copy an array and add a new item to the copy WITHOUT mutating the original, using the spread
// operator
const numbers = [1,2,3,4,5,6,7,8,9];
const newCopy = [...numbers,10];
newCopy.push(11);
console.log(newCopy);
