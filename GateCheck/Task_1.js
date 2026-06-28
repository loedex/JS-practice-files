// Question : Write an arrow function that takes an array of numbers and returns only the even ones using .filter()
const numbers = [1,2,3,4,5,6,7,8,9,10];

const getEvenNumbers = (nums)=> nums.filter(i=> i%2===0);

const result = getEvenNumbers(numbers);
console.log(`ONly Even Numbers ${result}`);

