const PAGE = location.search.slice(1);

const WEB_INFO = `https://raw.githubusercontent.com/${GIT_INFO.USERNAME}/${GIT_INFO.REPO}/master/${PAGE}/website.json`
let data = {};

async function getData() {
	const webInfoRes = await fetch(WEB_INFO);
	if(webInfoRes.ok) {
		data = await webInfoRes.json();
		render();
	} else {
		// Page not found. Sad.
		
		// Hide non-relevant divs
		document.querySelectorAll(".downloads, .features, .sub-title, .description").forEach(div => {
			div.classList.add("hidden");
		});

		// Alter title
		document.querySelector(".title").innerHTML = "Page not found";
		document.querySelector(".title").classList.remove("skeleton");

		// Add youtube embed
		document.querySelector(".youtube-video").innerHTML = `<iframe src="https://www.youtube.com/embed/p3G5IXn0K7A" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
	}
}

function render() {
	document.querySelector(".title").innerText = data.title || "Unknown title";
	document.querySelector(".description").innerText = data.description || "";

	// Features
	const featuresDiv = document.querySelector(".features");
	featuresDiv.innerHTML = "";
	for(let feature of data.features || []) {
		let li = document.createElement("li");

		li.innerText = feature.label;

		featuresDiv.appendChild(li);
	}

	// YouTube
	if(data.youtube) {
		document.querySelector(".youtube-video").innerHTML = `<iframe src="https://www.youtube.com/embed/${data.youtube}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
	} else {
		document.querySelector(".youtube-video").remove();
	}

	// Downloads
	let downloads = document.querySelector(".downloads .buttons");
	downloads.innerHTML = "";
	for(let download of data.downloads) {

		download.file = download.file.replace(/dg-/g, `https://jipfr.github.io/DownGit/?redirect=${location.pathname + location.search}#/home?url=https://github.com/${GIT_INFO.USERNAME}/${GIT_INFO.REPO}/tree/master/${PAGE}/`);

		let a = document.createElement("a");
		a.classList.add("download-button");

		a.target = "_blank";
		a.href = download.file;

		a.innerText = download.label || "No label found";

		downloads.appendChild(a);
	}

	// Remove skeleton tags
	document.querySelectorAll(".skeleton").forEach(el => {
		el.classList.remove("skeleton");
	});

}

getData();