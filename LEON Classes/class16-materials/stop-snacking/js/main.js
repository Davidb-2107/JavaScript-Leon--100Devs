//Create a function that grabs the number
// of snacks from the input and tells you to stop that many times
document.querySelector("#help").addEventListener("click",stopSnacking);

function stopSnacking() {
    const inputValue = document.querySelector("input").value
    document.querySelector("#stops").innerText = " "
   for(i=1;i <= inputValue;i++) {
    console.log(i)
    const stopValue = document.querySelector("#stops").innerText += " stop"
   }
   
}