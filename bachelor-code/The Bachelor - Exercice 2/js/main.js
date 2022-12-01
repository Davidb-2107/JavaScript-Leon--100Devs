const andi = document.querySelector('#andi') //store the andi img in a variable
const claire = document.querySelector('#claire')
const sharleen = document.querySelector('#sharleen')

document.querySelector('#andiNext').addEventListener('click', andiNext)
document.querySelector('#claireNext').addEventListener('click', claireNext)
document.querySelector('#sharleenNext').addEventListener('click', sharleenNext)

function andiNext(){
	claire.classList.add("hidden") 
	sharleen.classList.add("hidden")
	andi.classList.toggle("hidden") //ON/OFF
}

 function claireNext(){
	claire.classList.toggle("hidden")  //ON/OFF
	sharleen.classList.add("hidden")
	andi.classList.add("hidden")
 }

function sharleenNext(){
	claire.classList.add("hidden")  
	sharleen.classList.toggle("hidden")//ON/OFF
	andi.classList.add("hidden") 
}
