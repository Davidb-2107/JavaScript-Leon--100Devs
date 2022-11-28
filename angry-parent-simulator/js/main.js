const buttonYell = document.querySelector("#yell");
buttonYell.addEventListener("click", yell);

function yell() {
    console.log(buttonYell.type)
    const firstName = document.querySelector("#firstName").value
    const firstMiddle = document.querySelector("#firstMiddle").value
    const lastMiddle = document.querySelector("#lastMiddle").value
    const lastName = document.querySelector("#lastName").value

    const placeToYell = document.querySelector("#placeToYell")
    placeToYell.textContent = `${firstName} ${firstMiddle} ${lastMiddle} ${lastName} `
}
