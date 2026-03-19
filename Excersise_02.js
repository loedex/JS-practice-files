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