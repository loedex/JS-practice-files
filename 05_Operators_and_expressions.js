// Arithmetic Operators in JavaScript
let i = 11;
let j = 5;
console.log(i,"+",j, " = ",i+j);

console.log(i,"-",j," = ",i-j);

console.log(i,"*",j," = ",i*j);

console.log(i,"/",j," = ",i/j);

console.log(i,"%",j," = ",i%j)

console.log(i,"**",j," = ",i**j);

console.log(i,"++"," = ",i++); // This will print 11 and then increment in value
console.log(i) //Now as value has been incremented by 1, so now 12 will be printed
console.log("++",i," = ",++i); //Now prefix Increment will increment the value first then print.
console.log(i);

console.log(i,"--"," = ",i--); //Again here the postfix decrement will print the value of i first then decrement.
console.log(i); //Here we can see that value has decreased by 1
console.log("--",i," = ",--i); // This prefix Decrement will first decrease the value by 1 and then print. 
console.log(i);


//JavaScript String Addition
let text1 = "My name is Husna";
let text2 = "in Ahmad";
let text3 = text1+text2;
console.log(text3);

let str1 = "Husn";
str1+="ain Ahmad.";
console.log(str1);


// Assignment Operators
console.log("Assignment Operators: ")
let a = 5;
console.log(a);
a+=5;
console.log(a);
a-=3;
console.log(a);
a*=2;
console.log(a);
a/=7;
console.log(a);
a%=2;
console.log(a);
a+=5;
console.log(a);
a**=2;
console.log(a);


// Comparison Operators:
console.log("Comparison Operators : ");
let num1=10;
let num2=17;
console.log(num1," == ",num2,"   ",num1==num2);
console.log(num1," === ",num2,"   ",num1===num2);
console.log(num1," != ",num2,"   ",num1!=num2); 
console.log(num1," !== ",num2,"   ",num1!==num2); 
console.log(num1," < ",num2,"   ",(num1<num2)); //We can write num1<num2 in seperate small braces and also without them.
console.log(num1," > ",num2,"   ",num1>num2);


//Logical Operators
console.log("Logical operators: ");
let n1 = 10;
let n2 = 12;
let n3 = 15;
let n4 = 15;
console.log(n1,"==",n2,"&&",n3,"==",n4,"   ",(n1==n2)&&(n3==n4));

console.log(n1,"==",n2," || ",n3,"==",n4,"   ",(n1==n2)||(n3==n4));

console.log("!(",n3,"==",n4,")  ",!(n3==n4))
