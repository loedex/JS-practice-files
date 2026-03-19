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
})
console.log(a2);