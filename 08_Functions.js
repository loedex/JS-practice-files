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



/*Use of Rest Parameter */
const printOrder = (customerName, ...ITEMS) => {
    console.log("Customer Name : "+ customerName);
    for(let i=0; i<ITEMS.length; i++){
        console.log("  "+(i+1)+"   "+ITEMS[i]);
    }
};
printOrder("Husnain Ahmad","Piza","Burger","Sandwich","Cold Drink");


/* Calculating Student Average */
const calculateAverage = (studentName, ...studentMarks) =>{
    let marksAVG = 0;
    let marksNo = studentMarks.length;
    console.log("Student Name   :   "+studentName);
    for(let i=0; i<studentMarks.length; i++){
        marksAVG += studentMarks[i]; 
    }
    console.log("Average Marks :  "+marksAVG/marksNo);
}
calculateAverage("Husnain Ahmad",100,100,90,85,87);


/*Building a Notification System */
const notificationSystem = (message, ...receivers) => {
    console.log("Message is :   "+message);
    console.log("Number of Receivers :  ",receivers.length);
    for(let i=0; i<receivers.length; i++){
        console.log((i+1)+"  Receiver :: ",receivers[i]);

    }
}
notificationSystem("Hi! Nice to meet you.","Husnain Ahmad","Waleed Ahmed","Anas Bilal");




/*Callback Functions */
const prepareOrder = (foodItem,callback)=>{
    console.log("Kitchen Received Item : "+foodItem);
    callback();
};

//Different callbacks for different for different situations
const serveToTable = ()=>{
    console.log("Serving to you, Enjoy.");
};
const packForDelivery = ()=>{
    console.log("Packing for Delivery.");
};

//same prepareOrder() function bahaves differently based on which callback we pass:
prepareOrder("Pizza",serveToTable);
prepareOrder("Burger",packForDelivery);



/*Inline Callbacks */
const prepareOrder2 = (itemFood,callback)=>{
    console.log("Kitchen Received Item : "+itemFood);
    callback();
}
prepareOrder("Pizza",()=>{
    console.log("Serving to you, Enjoy");
});
prepareOrder("Burger",()=>{
    console.log("Packing for Delivery");
});


/*Success and Error Callbacks */
const loginUser = (userName,password,onError,onSuccess)=>{
    console.log("Checking Credentials...");
    if((userName === "") || (password === "")){
        onError(userName,"Username or Password is invalid");
        return;
    }
    else if(password.length < 8){
        onError(userName,"Username or Password is invalid");
        return;
    }
    else{
        onSuccess(userName,"Start using the platform");
        return;
    }
};
const onError = (nm,msg)=>{
    console.log("Sorry "+nm);
    console.log(msg);
};
const onSuccess = (nm,msg)=>{
    console.log("Congratulations! "+nm);
    console.log(msg);
};
loginUser("HusnainAhmad","1001",onError,onSuccess);
loginUser("Husnain","8989898989",onError,onSuccess);



//Callback Functions
//A function passed as argument -- That's a callback
const sayWelcome = ()=>{
    console.log("Welcome! Registeration Complete");
    console.log("Enjoy using app");
}
const registerUser = (name,callback)=>{
    console.log("Hi "+name);
    callback();
}
registerUser("Husnain Ahmad",sayWelcome);

//Inline Callback
const register = (name,callback)=>{
    console.log("Hi "+name);
    callback();
};
register("M.Husnain Ahmad",()=>{
     console.log("Welcome! Registeration Complete");
     console.log("Enjoy using app..");
});
