// *Variables*
// Create a variable and console log the value
const aVariable = "Hi, I'm a variable";
console.log(aVariable);
// Create a variable, add 10 to it, and alert the value
let variableToAdd = 20;
variableToAdd += 10;
alert(variableToAdd);
// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function subtracts(n1,n2,n3,n4) {
    const substractedN = n1 - n2 - n3 - n4;
    alert(substractedN);
}

subtracts(100,12,10,5);

// Create a function that divides one number by another and returns the remainder
function divideAndRemainder(n1,n2) {
    const returned = n1 % n2;
    return console.log(returned);
}

divideAndRemainder(6,4);

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function addTwoNumbersAndAlertIf(n1,n2) {
    const sumOfTwoNumbers = n1 + n2;
    if(sumOfTwoNumbers > 50) {
        alert("Jumanji");
    }
}
addTwoNumbersAndAlertIf(30,30);

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function multiplysThreeNumbersAndIf(n1,n2,n3) {
    const resultOfMultiply = n1 * n2 * n3;
    if (resultOfMultiply % 3 === 0) {
        alert("Zebra");
    }
}

multiplysThreeNumbersAndIf(3,3,3);