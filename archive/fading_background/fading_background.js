function random(min, max) {
	return Math.round(Math.random() * (max - min) + min);
}

var backgrounds = ["Yosemite", "Yosemite2", "Yosemite3", "Yosemite4", "Yosemite5",  "ElCapitan", "ElCapitan2"];
var stage = "decrease";
var change;
allowChange();
document.getElementById("background").style.opacity = 1;

//Allow change
function allowChange() {
	change = "deny";
	setTimeout(function(){ change = "allow"; }, 5000);
}

//Change Background
function changeBackground(element) {
	var image = "url(" + backgrounds[random(0, (backgrounds.length - 1))] + ".jpg)";

	if (image !== document.getElementById(element).style.backgroundImage) { document.getElementById(element).style.backgroundImage = image; }
	else { changeBackground(element); }
	
	//console.log("Changed background to " + image);
}

//Change Opacity
function changeOpacity(element) {

	//console.log("#START#");

	var opacity = parseFloat(document.getElementById("background").style.opacity);

	//console.log(opacity)
	//console.log(document.getElementById("background").style.opacity);
	//console.log(stage);
	
	//console.log("#BREAK#");
	
	if (stage == "decrease") { document.getElementById("background").style.opacity = String((opacity - 0.01).toFixed(2)); } 
	if (stage == "increase") { document.getElementById("background").style.opacity = String((opacity + 0.01).toFixed(2)); }
	
	opacity = document.getElementById("background").style.opacity;
	//console.log(opacity);
	
	if (opacity <= 0 && stage == "decrease") { 
		changeBackground("background"); 
		stage = "increase"; 
		
	} if (opacity >= 1 && stage == "increase") { 
		stage = "decrease"; 
		allowChange();
	
	}
	
	//console.log(document.getElementById("background").style.opacity);
	//console.log(stage);
	
	//console.log("#END#");
}

//Set background
changeBackground("background");

//Loop
var loop = setInterval(function(){
	if (change == "allow") { changeOpacity("background"); }
	
}, 10);
