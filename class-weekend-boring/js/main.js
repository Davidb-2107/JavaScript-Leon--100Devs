//Handle Capital Letters, Place result in DOM, add a check for humpday (Wed)


const check = document.querySelector("#check");
check.addEventListener("click", boring);

function boring() {
 //GET the value from input
let inputValue = document.querySelector("#day").value.toLowerCase();
console.log(inputValue);

if(inputValue === "tuesday" || inputValue === "thursday") {
    document.querySelector("#placeToSee").textContent = "You have class"
    
} else if (inputValue === "saturday" || inputValue === "sunday"){
        document.querySelector("#placeToSee").textContent = "week-end";
    } else {
        document.querySelector("#placeToSee").textContent = "boring";
    }

};

