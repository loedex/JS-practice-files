console.log("Variable Types in JS. var,let & const")
// var i = 5;
// console.log(i)
// var i = 7;
// console.log(i)
// i = 9;
// console.log(i)
// {
//     var i = 11;
//     console.log(i)
// }
// console.log(i)
//Now Lets see what happens with let
let j = 20;
console.log(j)
j=30;
console.log(j)
j="Husnain Ahmad"
console.log(j)
console.log(j)

// Block: 
{
    //  Below if I don't declared j and just assign "xpired" to j, then after this block j will carry "xpired"
    let j="Xpired";
    console.log(j)
}
console.log(j)
// The following statement will be wrong as we studied that in let datatype, variable can't be re_declared, But we can redeclare in a Block as we did above.

// let j = "aadi" ;

//Now Lets see what happens with const
// const k = 10;
// console.log(k)
//The below re_assignment will give error message as we declared the datatype of k as const.
// k=11;
// console.log(k)
//We also can't re_declared const variable
// const k = 11;
// console.log(k)
// Also we can't change the const variable in a seperate block
// {
//     k=12;
//    const k = 12;
//     console.log(k)
// }