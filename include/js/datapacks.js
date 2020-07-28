const FILES_URL = `https://api.github.com/repos/${GIT_INFO.USERNAME}/${GIT_INFO.REPO}/contents`;
let datapacks;

async function loadRepos() {
	// Get files & folders in repo

	// Folders becomes an array of folder names
	const folders = (await (await fetch(FILES_URL)).json()).filter(obj => obj.type === "dir").map(obj => obj.name);

	// Get website.json from each folder
	const webJsonFiles = folders.map(folderName => {
		return `https://raw.githubusercontent.com/${GIT_INFO.USERNAME}/${GIT_INFO.REPO}/master/${folderName}/website.json`
	});

	let promiseArray = await Promise.all(webJsonFiles.map(url => fetch(url)));
	promiseArray = await Promise.all(promiseArray.map(res => res.ok ? res.json() : { error: true }));
	promiseArray = promiseArray.filter(obj => obj.list_on_site);

	// Store data and render results
	datapacks = promiseArray;
	for(let i = 0; i < promiseArray.length; i++) {
		promiseArray[i] = {
			...promiseArray[i],
			slug: folders[i]
		}
	}
	render();
	
}

function render() {
	let wrapper = document.querySelector(".cards.datapacks");
	wrapper.innerHTML = "";
	for(let datapack of datapacks) {
		let node = document.importNode(document.querySelector("template.card").content, true).querySelector("*");

		node.querySelector(".title-text").innerText = datapack.title || "Unknown title";
		node.querySelector(".description").innerText = datapack.description_short || datapack.description || "";

		node.querySelector(".read-more").href = `/datapacks?${datapack.slug}`;

		if(datapack.icon) {
			node.querySelector(".pack-icon").src = `https://raw.githubusercontent.com/${GIT_INFO.USERNAME}/${GIT_INFO.REPO}/master/${datapack.slug}/${datapack.icon}`;
		} else {
			node.querySelector(".pack-icon").remove();
		}

		wrapper.appendChild(node);
	}
}

function init() {

	// Skeleton cards
	let wrapper = document.querySelector(".cards.datapacks");
	for(let i = 0; i < 10; i++) {
		let node = document.importNode(document.querySelector("template.card").content, true);
		node.querySelectorAll(".title, .description, .read-more").forEach(el => {
			el.classList.add("skeleton");
		});
		wrapper.appendChild(node);
	}

	loadRepos();
}

init();