//--- Easy
//create a variable and assign it a number
let numberTypeVariable = 100;
//minus 10 from that number
numberTypeVariable -= 10;
//print that number to the console
console.log(numberTypeVariable)
console.log(typeof(numberTypeVariable))
//--- Medium
//create a variable that holds a value from the input
let inputtedVal = document.querySelector("#danceDanceRevolution").value;
//add 25 to that number
// inputtedVal += 25;
//alert that number
if (typeof inputtedVal === "string") {
    console.log("an empty string")
}
alert(inputtedVal);
console.log(typeof(inputtedVal))

//--- Hard
//create a variable that holds the h1
let h1Holder = document.querySelector("h1");
console.log(h1Holder)
//add an event listener to that element that console logs the sum of the two previous variables
h1Holder.addEventListener("click", added);

function added() {
    console.log(numberTypeVariable + Number(inputtedVal))
    
}