let randomNumber =Math.trunc(Math.random() *10)
alert('Play Game')
let numberOfAttempts = 0;
let answer=parseInt(prompt("Enter Number: "));
while(answer !==randomNumber){
    numberOfAttempts ++;
    if(answer < randomNumber){
        answer = prompt("More than: ");
    }
    else if(answer > randomNumber){
        answer = prompt("Less than: ");
    }
    else {
        alert("Congratulations true answer- " +answer + "." +" You did " + numberOfAttempts + " attempts.");
        break
    }
}