//Functions in JavaScript
/*function sum(a,b){
    return a+b;
}
console.log("Sum = ",sum(10,40));*/

//store returned value in a variable.
/*function sum(a,b){
    return a+b;
} 
let a=10;
let b=90;
let res = sum(a,b);              
console.log("Result = ",res);*/



//Arrow Functions
/*console.log("Arrow Functions");
const sum = (a,b)=>a+b;
console.log("Sum = ",sum(10,120));*/

//Arrow Function
/*let product = (a,b)=>{return a*b};  //It's an assignment statement so we should end with semicolon.
let res =  product(3,5);
console.log("Priduct : ",res);*/


//Function Rest Parameter
/*console.log("Function Rest Parameter");
function sum(...params){
    console.log(arguments);
    console.log(arguments.length);
    let Sum=0;
    for(let i=0;i<=arguments.length-1;i++){
        Sum+=params[i];
    }
    return Sum;
}
console.log("Addition = ",sum(5,5,8,10,4,8,13,43,90,12,0,23,40,50))*/

let sum = (...params)=>{
    // console.log(arguments);
    // console.log(arguments.lenght);
    //Note that here I can't use pre-defined arguments object in arrow function. It's not allowed in arrow function.
    //So we have to do as follows: 
    console.log(params);
    console.log(params.length);
    let Sum=0
    for(let i =0;i<params.length; i++){
       Sum+=params[i];
    }
    return Sum;
}
console.log("Addition = ",sum(5,5,8,10,4,8,13,43,90,12,0,23,40,50));
