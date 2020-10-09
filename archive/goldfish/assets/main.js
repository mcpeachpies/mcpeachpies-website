//Beginning of main loop to increase/decrease fish statisitic levels
var intervalMain = setInterval(function(){

//Checks if the fish has been chosen and is alive before running loop
if (fishChosen == true && fishAlive == true) {
		//Generate intergers to be checked by the processes that decide if the statistic/level should change
		var hungerChance = random(0, 100);
		var entertainmentChance = random(0, 100);
		var tankCleanChance = random(0, 100);
		var healthChance = random(0, 100);
		var weightChance = random(0, 100);
		
		//Checks the fish hunger is between 50 and 100 before checking the chance of the level changing
		if (fish.Hunger < 100 && fish.Hunger > 50) {
			//If the hunger is within range will check if the chance is less than 5 therefor having a 5/100 chance of reducing the hunger level
			if (hungerChance <= 5) {
				//Reduces the hunger level by 1
				fish.Hunger--;
			}
		//Checks the fish hunger is less than 50 before checking the chance of the level changing
		} else if (fish.Hunger < 50) {
			//If the hunger is within range will check if the chance is less than 10 therefor having a 10/100 chance of reducing the hunger level
			if (hungerChance <= 10) {
				//Reduces the hunger level by 1
				fish.Hunger--;
			}
		}
		
		//Checks if the chance for entertainment is less than 8 therefor having a 8/100 chance of reducing the entertainment level
		if (entertainmentChance <= 8) {
			//Reduces the entertainment level by 1
			fish.Entertainment--;
		}
		
		//Checks if the chance for tankCleaniness is less than 3 therefor having a 3/100 chance of reducing the tank cleanliness level
		if (tankCleanChance <= 3) {
			//Reduces the tank cleanliness level by 1
			fish.TankCleanliness--;
		}
		
		//Checks the tank cleanliness is greater than 75 and the hunger greater than 50 before checking the chance of the level changing
		if (fish.TankCleanliness > 75 && fish.Hunger > 50) {
			//Checks if the chance for health is less than 1 therefor having a 1/100 chance of reducing the health level
			if (healthChance <= 1) {
				//Reduces the health level by 1
				fish.Health--;
			}
		//If the tank cleanliness is not greater than 75 and the fish hunger is not greater than 50 will run checks to change the health depending on said levels
		} else {
			//Checks if the tank cleanliness is within range of stated values before setting a value to be added to other dependant values that will inturn be used as the chance of the health decreasing
			if (fish.TankCleanliness < 75 && fish.TankCleanliness > 50) { var tankCombined = 3;}
			else if (fish.TankCleanliness < 50 && fish.TankCleanliness > 25) { var tankCombined = 5;}
			else if (fish.TankCleanliness < 25 && fish.TankCleanliness > 15) { var tankCombined = 10;}
			else if (fish.TankCleanliness < 15) { var tankCombined = 50;}
			//If the tank is clean i.e. greater than 75, the tank cleanliness will not be used to increase the chance of the health decreasing
			else {var tankCombined = 0; }
			
			//Checks the fish hunger level before creating the value the hunger will increase to the chance of the health decreasing
			if (fish.Hunger < 50 && fish.Hunger > 25) { var hungerCombined = 10;}
			else if (fish.Hunger > 25) { var hungerCombined = 20;}
			else {var hungerCombined = 0; }
			
			//Checks if the fish is under weight or over weight, this will largely increase the chance of the health decreasing
			if (fish.Weight < fish.WeightMin || fish.Weight > fish.WeightMin) { var hungerCombined = 50; }
			else {var weightCombined = 0; }
			
			//Checks if the health chance is less then the combined values of the tank hunger and weight to change the health, the combined chances will set how likely it is that the health chance is below 			the combined value
			if (healthChance <= (tankCombined + hungerCombined + weightCombined)) {
				//Reduces the health by 1
				fish.Health--;
			}
			
		//Checks if the hunger is less than 50 to decided if the weight should be decreased
		if (fish.Hunger < 50) {
			//Checks the weight chance is less than or equal to 30
			if (weightChance <= 30) {
				//Reduces the weight by a random 2 decimal value
				fish.Weight -= parseFloat(Math.random().toFixed(2));
			}
		//If the hunger is not less than 50 the chance of the weight reducing is lower than if it was.
		} else {
			//Checks the weight chance is less than or equal to 1
			if (weightChance <= 1) {
				//Reduces the weight by a random 2 decimal value
				fish.Weight -= parseFloat(Math.random().toFixed(2));
			}
		}
		
		
		}
}
//End of main loop, repeats every 500 milliseconds
}, 500);

//Rapid loop to check fish statistics constantly
var intervalStats = setInterval(function() {
//Checks if the fish has been chosen and is alive before checking stats
if (fishChosen == true && fishAlive == true) {
	//Check the fish stats to process within the function as needed, e.g. check values for messages, death, tank colour etc.
	outputStats();
	checkStats();
	
}}, 1)

//Interval to move fish
var intervalMove = setInterval(function() {
	//Checks if the fish is chosen and alive before attempting to make it move
	if (fishChosen == true && fishAlive == true) { fishSwim() }
//Randomly sets the interval time between 5000 and 10000 milliseconds each loop so that the time between movements is random
}, random(5000, 10000));