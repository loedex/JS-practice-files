function NumberGuessing(){
    let num = Math.floor(Math.random()*100);
let inNum = document.getElementById("a01").value;

if(num == inNum){
    document.getElementById("a02").innerText="Great! You guessed correct";
}else{
    document.getElementById("a02").innerText="Sorry! You guessed wrong";
}
}