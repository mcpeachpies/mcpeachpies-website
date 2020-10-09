//Creation of live variables that will decide whether some functions can run
var fishChosen = false;
var fishAlive = false;

var movementActive = false;
var movementTop = false;
var movementLeft = false;

var weightWarningMin = false;
var weightWarningMax = false;

//Creation of global variables that are used in a number of functions
var fish = {};
var marginleft;
var margintop;

//Creation of fish types with the type set to be read when creating more statistics
var fantail = {Type: "Fantail"};
var shubunkin = {Type: "Shubunkin"};
var comet = {Type: "Comet"};
var blackmoor = {Type: "Blackmoor"};

//Creation of list containing all fish stats to be displayed on page load
var fishList = [fantail, shubunkin, comet, blackmoor];

//Creation of different fish type objects to store data of each types statistics
for (i=0; i<fishList.length; i++) {

	//Checks type of fish to as Fantails and Blackmoors have different stats to Shubunkins and Comets
	if (fishList[i].Type == "Fantail" || fishList[i].Type == "Blackmoor") { 
		//Hunger along with other objects calling random function to create statistics for that object withing a range
		fishList[i].Hunger = random(80,100);
		fishList[i].Entertainment = random(50,100);
		//Weight range created with whole number within range then has a deciamal which is randomly generated, rounded to 2dp and converted into a float.
		fishList[i].Weight = random(13.0, 17.0) + parseFloat(Math.random().toFixed(2));
		//Max and min weight set as custom values.
		fishList[i].WeightMin = 10;
		fishList[i].WeightMax = 20;
		
		//Statistic generation for Shubunkins and Comets as they have different stats to Fantails and Blackmoors 
		} else if (fishList[i].Type == "Shubunkin" || fishList[i].Type == "Comet") { 
		
		fishList[i].Hunger = random(85,100);
		fishList[i].Entertainment = random(60,100);
		fishList[i].Weight = random(11.0, 15.0) + parseFloat(Math.random().toFixed(2));
		fishList[i].WeightMin = 8;
		fishList[i].WeightMax = 18;
		
		}
	
	//Health of all fish is set to a random number within range of 90 to 100
	fishList[i].Health = random(90,100);
	
}

//Random fish type selected
var displayFishNum = random(0, 3);
//Type of fish selected and displayed on page load
preview(fishList[displayFishNum]);

//Defining of pickFish function
function pickFish(form) {
	
	//Getting of user input for name from form object that is recieved in the defining of the function
	name = form.input.value;
	
	//Less than and greater than symbols are replaced with hex codes to ensure no HTML or other scripts are created within the name being displayed on the page
	name = name.replace(/[>]/g, "&gt;");
	name = name.replace(/[<]/g, "&lt;");
	
	//Check if the name is set i.e greater than 0 characters long
	if (name.length < 1) {
		//Creation of list containing preset names to be selected at random
		var presetNames = ["Dory", "Flo", "Mr. Ray", "Sheldon", "Nemo", "Bubbles", "Bloat", "Marlin", "Squirt", "Nigel", "Bruce", "Gill", "Anchor", "Chum", "Crush", "Pearl", "Peach", "Coral"];
		//Selection of random name from list within range of the first item to the last
		name = presetNames[random(0, presetNames.length-1)];
	}
	
	//Display to user the fish name and type in the title
	changeInnerHTML("title", name + " the " + fish.Type);
	//Change to image in the tank just to the single chosen fish
	changeInnerHTML("tank", '<img src="./assets/images/fish/' + fish.Type + '.png" id="fish" />');
	
	//Create a random position for the fish to go within the bounds of the tank
	marginleft = random(10, 400);
	margintop = random(10, 250);
	
	//Set the position of the fish from the random margins set above
	document.getElementById("fish").style.margin = margintop + "px " + "0px " + "0px " + marginleft + "px";
	
	//Creation of elements to contain interaction buttons
	changeInnerHTML("control", '<span id="feed"></span><br />\n<span id="entertain"></span><br />\n<span id="heal"></span><br />\n<span id="clean"></span><br />\n<span id="rearrange"></span><br />\n');
	
	//List containing interaction features
	var controlFunctions = ['Feed', 'Entertain', 'Clean', 'Rearrange', 'Heal'];
	
	//Loops to create interactive buttons within elements with same name
	for (i=0; i<controlFunctions.length; i++) {
		
		//Checks if the button is named Clean or Rearrange so that the button is displayed with the correct message
		if (controlFunctions[i] == 'Clean' || controlFunctions[i] == 'Rearrange') {
			//Sets button value to be Clean or Rearrange tank rather than all other buttons that are set below
			var functionValue = controlFunctions[i] + " tank";
		} else {
			//Sets button value for all other buttons to be feature plus name
			var functionValue = controlFunctions[i] + " " + name;
		}
		
		//String containing full HTML tag to be output onto the page
		var controlContent = '<input type="Button" class="button" onclick="fish' + controlFunctions[i] + '()" ' + 'value="' + functionValue + '" />';
		//Conversion of function name to lower case so it is the same as the HTML element id
		var controlName = controlFunctions[i].toLowerCase();
		//Changing of HTML element to contain interactive button
		changeInnerHTML(controlName, controlContent)
	}
	
	//Setting of tank cleanliness
	fish.TankCleanliness = random(90,100);
	
	//Setting fishChosen and fishAlive to begin main loop and processes of fish
	fishChosen = true;
	fishAlive = true;
	
	//Setting of tank background images at a random position within the tank
	document.getElementById("tank").style.backgroundImage = "url('./assets/images/tank/plant1.png'), url('./assets/images/tank/plant2.png'), url('./assets/images/tank/castle.png'), url('./assets/images/tank/rock.png'), url('./assets/images/tank/background.png')";

	//Call of tankRearrange funtion to randomly place background images within the tank
	tankRerrange();
	
	//Display stats to user as loop has delay before starting
	outputStats(fish); 
	changeInnerHTML("tankCleanliness", "<ul><li><b>Tank Cleanliness</b></li>" + fish.TankCleanliness + "%</ul>");
	
	//Help and information do be displayed to the user to help then understand how to care for the fish
	message(name + " sometimes gets bored, entertain them from time to time. <br />\nRearranging the tank can be fun<br /><br /><br />\n\n\n");
	message("If the tank starts to get too dirty, clean it so that " + name + " doesn't get sick");
	message("Take care of " + name + ", be sure to keep their hunger at <b>100%</b> <br />\n" + name + " has a min weight of <b>" + fish.WeightMin + "g</b> and a max weight of <b>" + fish.WeightMax + "g</b>, this is a healthy weight range for " + name);
	message("You have picked " + name + " the " + fish.Type + "\n<br />");

}
