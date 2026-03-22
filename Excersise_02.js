//  Simulate React button handlers using callbacks! Write a function called simulateButtonClick that takes a buttonLabel and an onClick callback. It prints "🖱️ [buttonLabel] was clicked!" then calls onClick. Create 3 different buttons:


const simulateButtonClick = (buttonLabel,onClick)=>{
    console.log(buttonLabel+"  was pressed");
    onClick();
}

// Notice: onClick is just a parameter name here — it holds whatever callback function we pass in. This is identical to how React's onClick prop works internally!



//Different callbacks
const handleSignUp = ()=>{
    console.log("Opening SignUp Form");
};
const deleteAccount = ()=>{
    console.log("Deleting Account");
};
const viewProfile = ()=>{
    console.log("View your profile");
};


//Now simulate all three button clicks
simulateButtonClick("Sign-Up",handleSignUp);
simulateButtonClick("Delete",deleteAccount);
simulateButtonClick("View",deleteAccount);

//inline callback
simulateButtonClick("Logout",()=>{
    console.log("loging you OUT");
});


//Higher Order Function

// This function returns an another function
const createGreeting = (greeting) => {
    return (name) => {
        console.log(greeting + "  " + name);
    };
};

// createGreeting returns a function , store it in a variable
const sayHello = createGreeting("Hello, Welcome!");
sayHello("Husnain Ahmad");


//Real Life HOF - Discount Calculator
const discountCalculator = (discountPricent) => {
    return (originalPrice) => {
        const saving = (originalPrice * discountPricent)/100;
        const finalPrice = originalPrice-saving;
        console.log("Original Price :  " + originalPrice);
        console.log("Your Saving : " + saving);
        console.log("Final Price : " + finalPrice);
    };
};

const student = discountCalculator(20);
const teacher = discountCalculator(10);

student(500);
student(700);
teacher(1000);

//Built-in HOF : .map()
const arr1 = [1,2,3,4,5];
//map takes one element from arr1 and calls the callback to passed function
const arr2 = arr1.map(myFunction);
function myFunction(value,index){
    console.log("Multiplying "+value+" at index "+index+ " with "+2);
    return value*2;
}
console.log(arr2);

//We can also write arrow function here 

const a1 = [6,7,8,9,10];
const a2 = a1.map((value,index)=>{
     console.log("Multiplying "+value+" at index "+index+ " with "+2);
     return value * 2;
});
console.log(a2);

//Add Currency symbol to all prices  using .map()
const p1 = [100,200,300,500];
const p2 = p1.map((value)=>{
    return value+"USD";
});
console.log(p2);




/*Button Handlers
Inline Callback Version */
const simulateButtonClick2 = (label,onClickFn) => {
    console.log(label + " was "+" pressed.");
    onClickFn();
}
simulateButtonClick2("SignUp",()=>{
    console.log("Wait for Registration form to SignUp");
});
simulateButtonClick2("Delete",()=>{
    console.log("Deleting");
});
simulateButtonClick2("Log Out",()=>{
    console.log("Ok Bye");
});

// So same simulateButtonClick2() function but different behavior, different callbacks on each action. That's the beauty of Callback




// Input a integer and pick every integer and multiply it by 2 and return result values as array. 
//Old Way : without .map()
const ar = [2,3,4,5,6];
const arN=[];
for(let i=0; i<ar.length; i++){
arN.push(ar[i]*2);
}
console.log("New Array");
console.log("Newly Created Array"+arN);
console.log("Original array remains unchanged : "+arN);

//New Way : using .map()
const arN2 = ar.map((v)=>v*3);
console.log("New Array using .map()");
console.log("Newly Created Array : "+arN2);

//The original array remains unchanged
console.log("Original array remains unchanged : "+ar);

//.toUpperCase()
console.log("husnain".toUpperCase());

//Take a list of names in an array and transform all names into Uppercase and return the results in form of array
//Use .map()

const nm = ['husnain ahmad','waleed ahmed','zain arshad','muhammad shahzaib arshad'];
const nmN = nm.map((N)=>N.toUpperCase());
console.log("Original Name List : "+nm);
console.log("Transformed Name List : "+nmN);


// .map() with Objects
//The React Use Case
const products = [
    {id: 1 ,name:"Laptop",price:90000},
    {id: 2, name:"Mobile",price:70000},
    {id: 3, name:"Bike",price: 1000000},
    {id: 4, name:"Car",price: 8000000}
];
//Tranform each product object into a display string.
const productCards = products.map((value)=> value.id+": "+value.name+" : &  "+value.price);
console.log(productCards);



const N1 = [1,2,3,4,5];
N1.map((val)=> console.log(val*10));