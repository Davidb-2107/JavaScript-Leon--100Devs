//Write your pseudo code first! 

// GET the value from the input & save it
let select = document.querySelector("button");

//ON CLICK, call the function
select.addEventListener("click", getValue)

function getValue() {
    let celsiusValue = document.querySelector('input[type="text"]').value
    // test
    console.log(celsiusValue)
}

