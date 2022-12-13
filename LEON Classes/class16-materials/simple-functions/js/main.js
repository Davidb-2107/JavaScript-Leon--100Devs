//---Easy
//create a function that subtracts two numbers and alerts the difference
 function subtract(n1,n2) {
    alert(n1 - n2);
 }

 subtract(5,2)
//create a function that divides three numbers and console logs the quotient
function divide(n1, n2, n3) {
    console.log(n1 / n2 / n3)
}

divide(10,2,1);
//create a function that multiplys three numbers and returns the product
function multiply(n1,n2,n3) {
    return console.log(n1*n2*   n3)
}

multiply(5,10,5)
 //---Medium
//create a function that takes in three numbers. Add the first two numbers and return the remainder of 
// dividing the sum of the first two numbers by the third number
 function addTwoAndGetTheRemainder(n1,n2,n3) {
    const addition = n1 + n2;
    return (addition % n3);
 }
 console.log(addTwoAndGetTheRemainder(3,3,2))
//---Hard
//create a function that takes in 4 numbers. Multiply the first two numbers. 
//If the product is greater than 100 add the sum of the last two numbers and console log the value. 
//If the product is less that 100, subtract the difference of the last two numbers and console log the value. 
//If the product is 100, multiply the first three numbers together and alert the remainder of dividing the fourth number

function take4(n1,n2,n3,n4) {
    let multiplyFirstTwo = n1 * n2;
    if (multiplyFirstTwo > 100) {
        multiplyFirstTwo = multiplyFirstTwo + (n3 + n4);
        console.log(multiplyFirstTwo)
    } else if (multiplyFirstTwo < 100) {
        multiplyFirstTwo = multiplyFirstTwo - (n3 + n4);
        console.log(multiplyFirstTwo);
    } else if (multiplyFirstTwo === 100) {
        multiplyFirstTwo = multiplyFirstTwo * n3 / n4;
        console.log(multiplyFirstTwo)
    }
}
take4(10,10,1,1);









//================================================================
// function four(n1,n2,n3,n4) {
//     let multiply = n1 * n2 * n3 * n4;
//     let digits = [];
//     if (multiply > 100) {
//         while (multiply > 0) {
//         digits.push(multiply);
//         multiply = Math.trunc(multiply / 10);
//         console.log(digits)
//         }
//         digits.reverse();
// console.log(digits);
//     }
// }

// four(5,10,5,4)