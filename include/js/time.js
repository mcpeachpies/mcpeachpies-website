function innerHTML(element, text) {
	document.getElementById(element).innerHTML = text;
}

function example() {

	var date = new Date();

	var hours = (date.getHours()).toString();
	var T_hours = hours;

	if (T_hours > 11) {
		var meridiem = "pm";
		T_hours -= 12

	} else { var meridiem = "am" };

	if (hours < 10) { hours = "0" + hours }

	var minutes = (date.getMinutes()).toString();
	if (minutes < 10) { minutes = "0" + minutes }

	var currentTime = hours + minutes;
	convert(currentTime);
	document.getElementById("time").value = currentTime;

	innerHTML("example", "(e.g. " + currentTime + " = " + T_hours + ":" + minutes + meridiem + ")")
}

function calculate(form) {

	var fullTime = document.querySelector(`[name="time"]`).value;
	convert(fullTime);

}

function convert(fullTime) {

	var Chours = fullTime.slice(0, 2);
	var Cminutes = fullTime.slice(2, 4);

	if (Chours < 06) {
		var daytime = Math.ceil(((Chours * 1000) + 18000) + (Cminutes * (1000 / 60)));
		innerHTML("output", "<i>((" + Chours + "*1000)+18000)+(" + Cminutes + "*16.<span style=\"text-decoration: overline;\">6</span>)=" + daytime +"</i>");
		document.getElementById("command").value = "/time set " + daytime + "t";
	}
	else {
		var daytime = Math.ceil(((Chours * 1000) - 6000) + (Cminutes * (1000 / 60)));
		innerHTML("output", "<i>((" + Chours + "*1000)-6000)+(" + Cminutes + "*16.<span style=\"text-decoration: overline;\">6</span>)=" + daytime +"</i>");
		document.getElementById("command").value = "/time set " + daytime + "t";
	}


}

var copyButton = document.getElementById("copy");

copyButton.addEventListener('click', function (event) {
	var commandArea = document.getElementById("command");
	commandArea.select();

	document.execCommand('copy');

});