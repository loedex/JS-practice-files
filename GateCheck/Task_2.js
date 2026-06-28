// Destructure name, age, and city from a nested user object in a single line
const user = {
    name : "Husnain Ahmad",
    age : "20 years old",
    address : {
        city : "Faisalabad",
        province : "Punjab",
        country : "Pakistan"
    },
    email : "abc@gmail.com"
};
const {name, age, address:{city}} = user;
console.log(`Name : ${name}`);
console.log(`Age : ${age}`);
console.log(`City : ${city}`);


