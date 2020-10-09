function innerHTML(element, text) {
	document.getElementById(element).innerHTML = text;

}

var copySleeping = document.getElementById("copy-sleeping");

	copySleeping.addEventListener('click', function(event) {
	var areaSleeping = document.getElementById("single-player-sleeping");
	areaSleeping.select();

 	document.execCommand('copy');

	});
	
var copyDragon = document.getElementById("copy-dragon");

	copyDragon.addEventListener('click', function(event) {
	var areaDragon = document.getElementById("more-dragon-drops");
	areaDragon.select();

 	document.execCommand('copy');

	});
	
var copyHeads = document.getElementById("copy-heads");

	copyHeads.addEventListener('click', function(event) {
	var areaHeads = document.getElementById("player-head-drops");
	areaHeads.select();

 	document.execCommand('copy');

	});
	
var copyAFK = document.getElementById("copy-afk");

	copyAFK.addEventListener('click', function(event) {
	var areaAFK = document.getElementById("afk-detector");
	areaAFK.select();

 	document.execCommand('copy');

	});
	
var copy24hr = document.getElementById("copy-24hr");

	copy24hr.addEventListener('click', function(event) {
	var area24hr = document.getElementById("24hr-time");
	area24hr.select();

 	document.execCommand('copy');

	});
	
var copyGold = document.getElementById("copy-gold");

	copyGold.addEventListener('click', function(event) {
	var areaGold = document.getElementById("gold-nugget");
	areaGold.select();

 	document.execCommand('copy');

	});
	
var copyEndPortals = document.getElementById("copy-end-portals");

	copyEndPortals.addEventListener('click', function(event) {
	var areaEndPortals = document.getElementById("moveable-end-portals");
	areaEndPortals.select();

 	document.execCommand('copy');

	});
	
var copyIron = document.getElementById("copy-iron");

	copyIron.addEventListener('click', function(event) {
	var areaIron = document.getElementById("iron-nugget");
	areaIron.select();

 	document.execCommand('copy');

	});
	
var copySaplings = document.getElementById("copy-saplings");

	copySaplings.addEventListener('click', function(event) {
	var areaSaplings = document.getElementById("self-planting-saplings");
	areaSaplings.select();

 	document.execCommand('copy');

	});
	
	
	