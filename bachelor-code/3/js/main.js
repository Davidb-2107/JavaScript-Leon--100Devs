const contestants = document.querySelectorAll(".contestant")

// Add a listener to any of DOM elements that have the .contestant class
Array.from(contestants).forEach(element => element.addEventListener('click', checkForRose))

function checkForRose(click){
	// The thing that was clicked, those it has the class of rose ?
		//if yes - so it's Nikki
	if(click.target.classList.contains("rose")){
		document.querySelector('#nikki').classList.toggle("hidden")
		//Otherwise it's Claire
	}else{
		alert("Wrong!");
	}
}
