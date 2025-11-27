//for loop
/*console.log("for loop");
for(let n=1; n<5; n++){
    console.log(n,"Cycle");
}*/




//while loop
/*console.log("while loop");
let n=1;
while(n<=5){
    console.log(n,"Cycle");
    n++;
}*/




//do-while loop
/*console.log("do while loop");
let k = 1;
do{
    console.log(k,"Cycle");
    k++;
}
while(k<=2);*/




//break Statement
// console.log("break statement");
//if i use let here then the ;ast console.log() statement will display an error that i is not defined. So I used var here because it has global scope and we know that let has blocked scope.
/*for(var i = 1; i<=5; i++){ 
    if(i==3){
        break;
    }
    else{
        console.log(i,"is less than 3");
    }
}
console.log("Now",i," is equal to 3. So break statement was executed");*/



//JavaScript Labels and Continue Statement
console.log("break and continue Statement");
outerloop:
for(let i = 1; i<=3;i++){
    for(let j = 1; j<=5;j++){
        if(j==3){continue outerloop;}
        console.log(j,"th Inner Loop");
    }
}
//Remember the following important points when working with label and continue:
/* (1)- continue statement can target only a loop
   (2)- and that loop must be outside the current block
   (3)- continue statement can't jump to a label that is not a loop
   (4)- continue statement can't jump to a loop that is not wrapping the current code. means can't jump to a loop which is completely seperate from the current loop structure
*/




//for-of Loop in JavaScript
console.log("for-of loop in JavaScript");
