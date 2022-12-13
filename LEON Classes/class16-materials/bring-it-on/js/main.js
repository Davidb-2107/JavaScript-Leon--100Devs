// *Variables*
// Create a variable and console log the value
const num = 10
console.log(num);
// Create a variable, add 10 to it, and alert the value
let anotherNum = 5;
anotherNum +=10; 
alert(anotherNum)
// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function subtracts(n1,n2,n3,n4) {
    alert(n1-n2-n3-n4);
}
// Create a function that divides one number by another and returns the remainder
function getTheRemainder(n1,n2) {
    return n1%n2
}
console.log(getTheRemainder(12,3))
// *Conditionals*
// Create a function that adds two numbers and 
//if the sum is greater than 50 alert Jumanji
function addTwoN(n1,n2) {
    if (n1+n2 > 50) {
        alert("Jumanji");
    }
}
addTwoN(50,1)

// Create a function that multiplys three numbers 
//and if the product is divisible by 3 alert ZEBRA
function multiplys(n1,n2,n3) {
if (n1*n2*n3 % 3 === 0) {
    alert("ZEBRA");
}
}
//*Loops* 
//Create a function that takes in a word and a number. 
//Console log the word x times where x was the number passed in

function takeAWordAndANumber(word,number) {
    for(let i =1;i <= number;i++) {
        console.log(word)
    }
}

takeAWordAndANumber("hello", 5)