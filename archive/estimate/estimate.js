function innerHTML(element, text) {
	document.getElementById(element).innerHTML = text;
}

innerHTML("output", "(((Size*Percent)*1024)/Speed)/3600" + "<br />Time remaining = hours <br />Time remaining = hours & minutes & seconds");


function estimate(form) {

	var size = form.size.value;
	var percent = form.percent.value;
	var speed = form.speed.value;
	
	percent = 1 - (percent/100);

	var full = String((((size*percent)*1024)/speed)/3600);
	var equation = "((("+ size +"*" + percent + ")*1024)/" + speed + ")/3600";
	var time = full.split(".");
	
	var hours = time[0];
	
	var minutesFull = String(60*(full - hours));
	var minutesTime = minutesFull.split(".");
	
	var minutes = minutesTime[0];
	var seconds = 60*(minutesFull - minutes);
	
	hours = (parseInt(hours)).toFixed(0).slice(0,2);
	minutes = (parseInt(minutes)).toFixed(0).slice(0,2);
	seconds = (parseInt(seconds)).toFixed(0).slice(0,2);
	
	innerHTML("output", equation + "<br />Time remaining = " + full + " hours" + "<br />Time remaining = " + hours + " hours & " + minutes + " minutes & " + seconds + " seconds");
	
}