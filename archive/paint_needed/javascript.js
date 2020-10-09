function respond(content) {
	
	document.getElementById("result").innerHTML = content;

}

function submitForm(form) {

	var surface = form.surface.value;
	var spread = form.spread.value;
	var coats = form.coats.value;
	
	var paintNeeded = parseFloat((surface/spread)*coats).toFixed(2);
	
	respond("You will need " + paintNeeded + " litres of paint")
}

