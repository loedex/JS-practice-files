// Title : GUESS THE NUMBER

// Generate a random number
// Keep asking user for the number until the correct number is guessed.
// User have maximum 15 chances
// Eventually display the score of user (score = 100-number of times the user gueessed)
// Then also display the actual number

var num = Math.floor(Math.random() * (10-0+1)) + 0;
var guessNum = 1;
var guessUsed = 0;
var p =0;
var n = prompt("Guess Number in range of 10 (You have 5 Chances): ");
guessUsed++;
n = Number.parseInt(n);
startfromhere:
while(guessNum <=5){
    if(n == num){
       console.log("Congratulations you Guessed by using ",guessUsed,"Chances.");
       console.log("Correct Number is also : ",num);
       guessNum++;
       p=1;
       break;
    }
    else{
       guessNum++;
        n = prompt("Sorry! Guess Again : ");
       guessUsed++;
       n = parseInt(n);
       continue startfromhere;
       
    }
}
if(p==0){
    console.log("Sorry! You lost");
    console.log("You have used ",guessNum-1,"Chances");
}