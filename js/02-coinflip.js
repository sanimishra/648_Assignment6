var coinFlip = Math.round(Math.random());
var choice = window.prompt("Heads or Tails");
var flipResult;

if (coinFlip >= 5 ){
    flipResult = "Heads";
} else {
    flipResult = "Tails";
}

if (flipResult == "Heads"){
    if (choice == flipResult){
        window.alert("The flip was heads and you chose heads...you win!");
    } else {
        window.alert("The flip was heads but you chose tails...you lose!");
    }
} else if (flipResult == "Tails") {
    if (choice == flipResult){
        window.alert("The flip was tails and you chose tails...you win!");
    } else {
        window.alert("The flip was tails but you chose heads...you lose!");
    }
}