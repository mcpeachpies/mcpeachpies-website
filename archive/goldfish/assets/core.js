//This script contains all core function to be fun throughout the processes of the main script and other core functions

//Changes content of specifed element ID
function changeInnerHTML(element, content) {
	document.getElementById(element).innerHTML = content;
}

//Will change the source of an image with the specified ID
function changeImageSRC(element, source) {
	document.getElementById(element).src = source;
}

//Returns a random whole number within the set min and max range
function random(min, max) {
	return Math.round(Math.random() * (max - min) + min);
}

//Preview function to clone fish stats into new object that can be used globally and displays stats for the fish
function preview(fishObject) {
	fish = fishObject;
	changeInnerHTML("fishImage", '<img src="./assets/images/fish/' + fish.Type + 'Large.png" />')
	changeInnerHTML("fishType", fish.Type);
	outputStats()
}

//Displays fish statistics onto the page including it's main statistics and tank cleanliness
function outputStats() {
	//String containing formatted HTML list and fish statistics
	var stats =
		'<ul>' +
		'<li><b>Hunger</b></li>' +
		fish.Hunger + '%' +
		'<li><b>Entertainment</b></li>' +
		fish.Entertainment + '%' +
		'<li><b>Health</b></li>' +
		fish.Health + '%' +
		'<li><b>Weight</b></li>' +
		fish.Weight + 'g' +
		'</ul>';
	//Displays fish statistics
	changeInnerHTML("fishStats", stats);
	
	//Checks if the fish has been chosen before displaying the tank cleanliness level on the page
	if (fishChosen == true) { changeInnerHTML("tankCleanliness", "<ul><li><b>Tank Cleanliness</b></li>" + fish.TankCleanliness + "%</ul>"); }
	
}

//Checks the fish statistics and runs processes accordingly
function checkStats() {
	
	//Sets the background colour of the fish tank, the blue level is dependent on the tank cleanliness level, the lower the cleanliness the less blue making the tank turn green
	document.getElementById("tank").style.backgroundColor = "rgb(63, 176, " + fish.TankCleanliness*2 + ")";
	
	//Provents the tank cleanliness from being lower than 0
	if (fish.TankCleanliness < 0) { fish.TankCleanliness = 0; }
	//Provents the tank cleanliness from being greater than 100
	else if (fish.TankCleanliness > 100) { fish.TankCleanliness = 100; }
	
	//Provents the entertainment from being lower than 0
	if (fish.Entertainment < 0) { fish.Entertainment = 0; }
	//Provents the entertainment from being greater than 100
	else if (fish.Entertainment > 100) { fish.Entertainment = 100; }
	
	//Rounds the fish weight to 2 decimal places
	fish.Weight = parseFloat(fish.Weight.toFixed(2));
	
	//Provents the entertainment from being greater than 100
	if (fish.Health > 100) { fish.Health = 100; } 
	//If the health is less than or equal to 0, the killFish function will be called with the parameter of "Health" resulting in a message being displayed stating the fish was too sick
	else if (fish.Health <= 0) {
		//Provents the health from being lower than 0
		fish.Health = 0;
		//Calls function killing fish
		killFish("Health");
	}
	
	//Checks if the fish weight is less than or equal to 2 greater than its min weight to warn user
	if (fish.Weight <= (fish.WeightMin+2)) {
		//Checks if the min weight warning message timeout is still in effect, variable will set to false if timeout has reached timeout mark
		//Warns the user that their fish is getting under weight and will get sick
		if (weightWarningMin == false) { message(name + " weighs <b>" + fish.Weight + "g</b>, they are <b>under weight</b> and will start getting sick.<br />If they get to <b>" + fish.WeightMin + "g</b> it will not be good for them");
		//Sets warning check to true to provent message from repeating when function is called, instead will only be displayed after 150000 if need be.
		weightWarningMin = true;
		//Adds 15000 milliseconds delay until warning can be displayed again
		setTimeout(function(){ weightWarningMin = false }, 15000);
		}
	}
	
	//Provents the hunger from being lower than 0
	if (fish.Hunger < 0) { fish.Hunger = 0;}
	
	//Checks if the fish weight is greater than or equal to 2 less than its max weight to warn user
	else if (fish.Weight >= (fish.WeightMax-2)) {
		//Checks if the max weight warning message timeout is still in effect, variable will set to false if timeout has reached timeout mark
		//Warns the user that their fish is getting over weight and will get sick
		if (weightWarningMax == false) { message(name + " weighs <b>" + fish.Weight + "g</b>, they are <b>over weight</b> and will start getting sick.<br />If they get to <b>" + fish.WeightMax + "g</b> it will not be good for them");
		//Sets warning check to true to provent message from repeating when function is called, instead will only be displayed after 150000 if need be.
		weightWarningMax = true;
		//Adds 15000 milliseconds delay until warning can be displayed again
		setTimeout(function(){ weightWarningMax = false; }, 15000);
		}
	}
	
	//Checks if the fish has reached its min or passed its min weight and will call the function killFish if so
	if (fish.Weight <= fish.WeightMin) { killFish("WeightMin");
	//Checks if the fish has reached its max or passed its max weight and will call the function killFish if so
	} else if (fish.Weight >= fish.WeightMax) { killFish("WeightMax"); }
	
	outputStats(fish); 
}

//When called will stop all processes of code and kill fish, meaning that there can be no more interaction between the user and the fish and will announce to the user that their fish has passes away
function killFish(reason) {

	//Provents anymore processes that require the fish to be alive from running
	fishAlive = false;
	
	//Stops any interval loops from processing
	clearInterval(intervalMain);
	clearInterval(intervalMove);
	
	//Gives 500 milliseconds of delay to allow from interval loops to finish processing
	setTimeout(function() {
		//Changes large fish image to grave stone
		changeInnerHTML("fishImage", '<img src="./assets/images/grave/GraveLarge.png" />');
		//Changes fish image in tank to grave stone
		changeImageSRC("fish", './assets/images/grave/Grave.png');
		//"Sinks" grave stone to bottom of tank by placing it at it's current left margin and then at to bottom of the tank
		document.getElementById("fish").style.margin = "250px " + "0px " + "0px " + marginleft + "px";
	}, 500)
	
	//Removes all elements within the control element, this includes interactive buttons
	changeInnerHTML("control", "")
	//Gives use option to reload the page within the message box
	message('Click <b><a href="./index.html">here</a></b> to get a new fish<br />\n');
	
	//Announces to user their fish has passed away, message depends on parameters within the calling of the function
	if (reason == 'Health') {
		message("Sadly, " + name + " got too sick and passed away ☹");
		
	} else if (reason == 'WeightMax') {
	
		message(name + " was too heavy and passed away ☹");
		
	} else if (reason == 'WeightMin') {
		message(name + " was too light and passed away ☹");
	
	//Default message if no parameters are used or the parameter does not have a set message when the function is called
	} else { message("Sadly " + name + " passed away ☹"); }

}

//Cooldown function to remove interactive buttons for a set amount of time before user can use again
function cooldownButton(functionName, length) {

	//Changes length parameter into an interger to be read by the timeout
	parseInt(length);
	
	//Creates variable element as the function name parameter in lower case to match the element id name
	var element = functionName.toLowerCase();
	
	//Checks if the button is named Clean or Rearrange so that the button is displayed with the correct message
	if (functionName == 'Clean' || functionName == 'Rearrange') {
		//Sets button value to be Clean or Rearrange tank rather than all other buttons that are set below
		var functionValue = functionName + " tank";
	} 
	else {
		//Sets button value for all other buttons to be feature plus name
		var functionValue = functionName + " " + name;
	}
	
	//Creates the cooldown display numer as seconds rather than milliseconds
	var cooldown = length/1000;
	//Function to display cooldown message and reduce the time shown in the message
	function countdown(){
		//Displays message to use of how long till they can use the button again
		changeInnerHTML(element, 'You can ' +  functionValue + " again in <b>"+ cooldown + " seconds</b>" );
		//Reduces the time left before the user can use the button again
		cooldown--;
	}
	
	//Calls cooldown function for the 1st time before interval has done first loop
	countdown();
	//Interval to run the cooldown function every 1000 milliseconds to display countdown message
	var outputCooldown = setInterval(function(){ if (fishAlive == true) { countdown() } }, 1000);
	
	//Time out to stop cooldown function and interval after set time of cooldown
	setTimeout(function(){ 
		//Clears cooldown display interval to stop message
		clearInterval(outputCooldown);
		//Checks if the fish is still alive before replacing the set button id contents with a new button.
		if (fishAlive == true) { changeInnerHTML(element, '<input type="Button" class="button" onclick="fish' + functionName + '()" ' + 'value="' + functionValue + '" />'); }
	} ,length);
}

//Adds the new message to the current contents of the message element to notify user of things such as warning of fish health and what function they have interacted with
function message(contentNew) {
	
	//Saves the current content of the message element to be combinded with the new message
	var content = document.getElementById("message").innerHTML;
	//Changes the content of the message element to the new message along with the current content/past messages
	changeInnerHTML("message", "- " + contentNew + "<br />\n" + content);
	
}

//Creates movement for the fish within the tank
function fishSwim() {
	
	//Checks if the fish is already moving, will be true if the fish is moving. This provents overlay of movement positions and changes.
	if (movementActive == false) {
		
		//Sets the movement active to true to provent multible movement calls
		movementActive = true;
		//Allows for movement up and down, i.e. changes of the top margin
		movementTop = true;
		//Allows for movement left and right, i.e. changes of the left margin
		movementLeft = true;
		
		//Sets the speed at which the fish will move depending on how entertained the fish is, the lower the entertainment level, the slower it will change it's margins therefor how fast it visually changes.
		if (fish.Entertainment > 75) { var speed = 20; }
		else if (fish.Entertainment < 75 && fish.Entertainment > 50) { var speed = 30; }
		else if (fish.Entertainment < 50 && fish.Entertainment > 25) { var speed = 40; }
		else if (fish.Entertainment < 25 ) { var speed = 50; }
		
		//Creates a new random position for the left margin to change to within the bounds of the tank
		var newLeft = random(10, 400);
		//Creates a new random position for the top margin to change to within the bounds of the tank
		var newTop = random(10, 250);
		
		//Begins changing of the top margin within a interval looping at the set speed, the lower the speed value the more rapid the interval i.e. faster movements
		var moveTop = setInterval(function() {	 
		//Checks if the fish is alive before attempting to move it
		if (fishAlive == true) {
			
			//Checks if the new margin is less than the current/old and will reduce the position of the current if so
			if (newTop < margintop) { margintop -= 1; }
			//Checks if the new margin is greater than the current/old and will increase the position of the current if so
			else if (newTop > margintop) { margintop += 1; }
			
			//Checks if the margin has reached the position of the new margin
			if (margintop == newTop) { 
				//Stops interval that changes position
				clearInterval(moveTop); 
				//Sets the movment status for the top margin to false
				movementTop = false;
				
				
			}
			
			checkMovement();
			
		}
		}, speed);
		
		//Begins changing of the left margin within a interval looping at the set speed, the lower the speed value the more rapid the interval i.e. faster movements
		var moveLeft = setInterval(function() {	
		//Checks if the fish is alive before attempting to move it
		if (fishAlive == true) {
			
			//Checks if the new margin is less than the current/old and will reduce the position of the current if so
			if (newLeft < marginleft) { marginleft -= 1; 
				//Changes the image of the fish to be facing left i.e. facing the way it is swimming and flipped of the orignal image
				changeImageSRC("fish", "./assets/images/fish/" + fish.Type + "Flip.png");
			}
			//Checks if the new margin is less than the current/old and will reduce the position of the current if so
			else if (newLeft > marginleft) { marginleft += 1; 
				//Changes the image of the fish to be facing right i.e. facing the way it is swimming and the orignal image
				changeImageSRC("fish", "./assets/images/fish/" + fish.Type + ".png");
			}
			
			//Checks if the margin has reached the position of the new margin
			if (marginleft == newLeft) { 
				//Stops interval that changes position
				clearInterval(moveLeft);
				//Sets the movment status for the left margin to false
				movementLeft = false;
				
			}
			
			checkMovement();
			
		}
		}, speed);
	}
	
	
}

//Checks the movement status of the fish and updates it's position
function checkMovement() {
	//Changes the margin styling for the fish element to update its position in the tank
	document.getElementById("fish").style.margin = margintop + "px " + "0px " + "0px " + marginleft + "px";
	
	//Checks if both movements are inactive and if so will allow for new movements to begin
	if (movementTop == false && movementLeft == false) { 
		//Sets movement to false, allowing for new movement
		movementActive = false; 
	}
}

//The following function are for interactive features between the user and the script
//Feed function that changes fish statistics depending on the current hunger level
function fishFeed() {
	if (fish.Hunger >= 50 && fish.Hunger < 100) {
		fish.Hunger += 15;
		fish.Entertainment += 5;
		fish.TankCleanliness -= 2;
		fish.Health += 5;
		fish.Weight += 1.25;
		
	} else if (fish.Hunger >= 100) {
		fish.Hunger += 10;
		fish.Entertainment += 3;
		fish.TankCleanliness -= 30;
		fish.Health -= 20;
		fish.Weight += 1.5;
		
	} else if (fish.Hunger < 50) {
		fish.Hunger += 20;
		fish.Entertainment += 5;
		fish.TankCleanliness -= 3;
		fish.Health += 8;
		fish.Weight += 1.5;
	}
	
	//Messages the user that the fish has been feed
	message("Fed " + name);
//Begins cooldown and countdown of the feed button to provent the user from using it again for 10000 milliseconds
cooldownButton("Feed", "10000");
}

//Entertainment function that changes fish statistics depending on the current entertainment level
function fishEntertain() {
	
	if (fish.Entertainment <= 50) {
		fish.Hunger -= 15;
		fish.Entertainment += 20;
		fish.TankCleanliness -= 10;
		fish.Weight -= 1.30;
	} else {
		fish.Hunger -= 10;
		fish.Entertainment += 25;
		fish.TankCleanliness -= 5;
		fish.Weight -= 1.25;
	}
	
	//Calls the fish move function making the fish move within the tank when entertained
	fishSwim();
	//Messages the user that the fish has been entertained
	message("Entertained " + name);
//Begins cooldown and countdown of the Entertain button to provent the user from using it again for 15000 milliseconds
cooldownButton("Entertain", "15000");
}

//Clean tank function that adds entertainment to the fish and fully cleans the tank
function fishClean() {
	fish.Entertainment += 10;
	fish.TankCleanliness = 100;
	
	//Messages the user that the tank has been cleaned
	message("Cleaned tank");
//Begins cooldown and countdown of the clean tank button to provent the user from using it again for 15000 milliseconds
cooldownButton("Clean", "45000")
}

//Rearrange tank function that adds entertainment to the fish, decreases the cleanliness of the tank and calls the function that rearranges the tank
function fishRearrange() {
	fish.Entertainment += 15;
	fish.TankCleanliness -= 5;
	
	//Calls function to change positon of objects in tank
	tankRerrange();
	
	//Messages the user that the tank has been rearranged
	message("Rearranged tank");
//Begins cooldown and countdown of the rearrange tank button to provent the user from using it again for 45000 milliseconds
cooldownButton("Rearrange", "45000")
}

//Function that randomly positions the objects in the background of the tank
function tankRerrange() { document.getElementById("tank").style.backgroundPosition = random(0, 400) + "px bottom, " + random(0, 400) + "px bottom, " + random(0, 400) + "px bottom, " + random(0, 400) + "px bottom, bottom left"; }

//When called fully heals the fish
function fishHeal() {
	fish.Health = 100;

	//Messages the user that the fish has been healed
	message("Healed " + name);
//Begins cooldown and countdown of the heal button to provent the user from using it again for 60000 milliseconds
cooldownButton("Heal", "60000")
}