// Title : GUESS THE NUMBER

// Generate a random number
// Keep asking user for the number until the correct number is guessed.
// User have maximum 15 chances
// Eventually display the score of user (score = 100-number of times the user gueessed)
// Then also display the actual number

// var num = Math.floor(Math.random() * (10-0+1)) + 0;
// var guessNum = 1;
// var guessUsed = 0;
// var p =0;
// var n = prompt("Guess Number in range of 10 (You have 5 Chances): ");
// guessUsed++;
// n = Number.parseInt(n);
// startfromhere:
// while(guessNum <=5){
//     if(n == num){
//        console.log("Congratulations you Guessed by using ",guessUsed,"Chances.");
//        console.log("Correct Number is also : ",num);
//        guessNum++;
//        p=1;
//        break;
//     }
//     else{
//        guessNum++;
//         n = prompt("Sorry! Guess Again : ");
//        guessUsed++;
//        n = parseInt(n);
//        continue startfromhere;
       
//     }
// }
// if(p==0){
//     console.log("Sorry! You lost");
//     console.log("You have used ",guessNum-1,"Chances");
// }




// let student = {
//   name: "Ali",
//   marks: 80
// };
// console.log(student);
// student.grade = "A";
// console.log(student);
// delete student.marks;
// console.log(student);
// student.grade = "A+";
// console.log(student);


//Nested Object
//User Profile
// const profile = {
//     name:"Husnain Ahmad",
//     age:19,
//     address: {
//         country : "Pakistan",
//         province: "Punjab",
//         city : "Islamabad"
//     },
//     email:"loedex7@gmail.com"
// };
// console.log(profile);
// console.log(profile.address);
// console.log(profile.address.city);

let user = {
  name: "Husnain",
  age: 21,
  city: "Faisalabad"
};
// Object.entries(user).forEach(([item,value])=>{
//     console.log(item + " : "+value);
// });
Object.entries(user).map(([item,value])=>console.log(item+" : "+value));
// const ar = Object.keys(user);
// console.log(ar);
// ar.forEach(v=>console.log(v));
// Object.keys(user).forEach((v,i)=>console.log((i+1)+" : "+v));
// for(let i of Object.keys(user)){
//     console.log(i);
// }
