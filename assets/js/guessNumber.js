// Function to generate random number 
function randomNumber(min, max) { 
    return Math.floor(Math.random() * (max - min) + min);
} 

let secret = randomNumber(1, 100);
console.log(`Secret is: ${secret}`);

let button = document.getElementById('check-button');

button.addEventListener('click', function (event){
    
    let guessSecret = parseInt(document.getElementById('input-number').value, 10);

    if (Number.isInteger(guessSecret) == true && secret == guessSecret) {
        console.log(`You did guess the secret number: ${secret}`);
        document.getElementById("message").innerHTML=`Congratulations!! <br> You did guess the secret number: <strong>${secret}</strong>!`;
        document.getElementById("input-number").placeholder=`${guessSecret}`;
        document.getElementById("input-number").value=null;
    } else if (Number.isInteger(guessSecret) == true && secret > guessSecret){
        console.log("You didn`t guess the secret number. Secret number is higher");
        document.getElementById("message").innerHTML=`You didn't guess the secret number. Secret number is <strong>higher<strong>!`;
        document.getElementById("input-number").placeholder=`${guessSecret}`;
        document.getElementById("input-number").value=null;
    } else if (Number.isInteger(guessSecret) == true && secret < guessSecret){
        console.log("You didn`t guess the secret number. Secret number is lower");
        document.getElementById("message").innerHTML=`You didn't guess the secret number. Secret number is <strong>lower<strong>!`;
        document.getElementById("input-number").placeholder=`${guessSecret}`;
        document.getElementById("input-number").value=null;
    } else {
        console.log("You didn`t enter a number. Something went wrong");
        document.getElementById("message").innerHTML=`You didn't enter a number. Something went wrong!`;
        document.getElementById("input-number").placeholder=`Insert a number`;
        document.getElementById("input-number").value=null;
    }
});



