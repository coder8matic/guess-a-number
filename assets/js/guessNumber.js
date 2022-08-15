// Function to generate random number 
function randomNumber(min, max) { 
    return Math.floor(Math.random() * (max - min) + min);
} 


function makeResponse(message, placeholder) {
    console.log(message);
    let dom = document;
    dom.getElementById("message").innerHTML=message;
    dom.getElementById("input-number").placeholder=placeholder;
    dom.getElementById("input-number").value=null;
}


let secret = randomNumber(1, 100);
console.log(`Secret is: ${secret}`);

let button = document.getElementById('check-button');

button.addEventListener('click', function (event){
    let guessSecret = parseInt(document.getElementById('input-number').value, 10);
    if (Number.isInteger(guessSecret) == false) {
        var notNumberMessage = `You didn't enter a number. Something went wrong`;
        var notNumberPlaceholder = `Insert a number`;
        makeResponse(notNumberMessage, notNumberPlaceholder);
    }else {
        if (secret == guessSecret) {
            var guessedMessage = `Congratulations!! <br> You did guess the secret number: <strong>${secret}</strong>!`;
            var guessedPlaceholder = guessSecret;
            makeResponse(guessedMessage, guessedPlaceholder);
        } else if (secret > guessSecret){
            var higherMessage = `You didn't guess the secret number. Secret number is <strong>higher<strong>!`;
            var higherPlaceholder = guessSecret;
            makeResponse(higherMessage, higherPlaceholder);
        } else if (secret < guessSecret){
            var lowerMessage = `You didn't guess the secret number. Secret number is <strong>lower<strong>!`;
            var lowerPlaceholder = guessSecret;
            makeResponse(lowerMessage, lowerPlaceholder);
        }
    }
});
