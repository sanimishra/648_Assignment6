var firstNumber =  parseInt(window.prompt("Enter the first number"),10);
var secondNumber =  parseInt(window.prompt("Enter the second number"),10);
if (firstNumber > secondNumber) {
    document.write("The larger number is " + firstNumber);
} else if (secondNumber > firstNumber) {
    document.write("The larger number is " + secondNumber);
} else {
    document.write("Both numbers are equal.");
}