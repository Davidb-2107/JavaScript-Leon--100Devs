//Write your pseudo code first! 

// GET the value in celsius from the input & save it
//ON CLICK of the button, CALL the function
let selectButton = document.querySelector("button").addEventListener("click", convert);

function convert() {
    let temp = document.querySelector('input[type="text"]').value
    // test
    console.log(temp)
    // USING a mathematical formula, convert it to Fahrenheit
    temp = temp * 9/5 +32;
    // DISPLAY the converted value
    document.querySelector("#converted_value").textContent = temp;
    

}

let selectButton2 = document.querySelector("button").addEventListener("click", convertAndAlert);

function convertAndAlert() {
    let temperature = document.querySelector('input[type="text"]').value;
    temperature = temperature * 9/5 + 32;
    alert(temperature)
}


