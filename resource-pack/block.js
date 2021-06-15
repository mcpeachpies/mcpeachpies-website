document.querySelectorAll(".block img").forEach(img => {
	img.src = `https://raw.githubusercontent.com/mcpeachpies/mcpeachpies-resource-pack/master/mcpeachpies_resource_pack_1.17${img.getAttribute("data-src")}`
});