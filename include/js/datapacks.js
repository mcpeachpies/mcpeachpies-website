// const FILES_URL = `https://api.github.com/repos/${GIT_INFO.USERNAME}/${GIT_INFO.REPO}/contents`;
let datapacks;

async function loadRepos() {
	// Get files & folders in repo

	const res = await fetch('https://api.modrinth.com/v2/search?facets=%5B%5B"author:mcpeachpies"%5D%5D&limit=100')
	const data = await res.json()

	console.log(data.hits)

	datapacks = data.hits.map(hit => {
		return {
			title: hit.title,
			description: hit.description,
			link: `https://modrinth.com/datapack/${hit.slug}`,
			icon: hit.icon_url
		}
	})

	render();

}

function render() {
	let wrapper = document.querySelector(".cards.datapacks");
	wrapper.innerHTML = "";
	for (let datapack of datapacks) {
		let node = document.importNode(document.querySelector("template.card").content, true).querySelector("*");

		node.querySelector(".title-text").innerText = datapack.title || "Unknown title";
		node.querySelector(".description").innerText = datapack.description || "";

		node.querySelector(".read-more").href = datapack.link;
		node.querySelector(".read-more").setAttribute('target', '_blank')

		if (datapack.icon) {
			// https://github.com/Team-mcpeachpies/afk-detector/tree/main/mcpeachpies_afk_detector
			node.querySelector(".pack-icon").src = datapack.icon
		} else {
			node.querySelector(".pack-icon").remove();
		}

		wrapper.appendChild(node);
	}
}

function init() {

	// Skeleton cards
	let wrapper = document.querySelector(".cards.datapacks");
	for (let i = 0; i < 10; i++) {
		let node = document.importNode(document.querySelector("template.card").content, true);
		node.querySelectorAll(".title, .description, .read-more").forEach(el => {
			el.classList.add("skeleton");
		});
		wrapper.appendChild(node);
	}

	loadRepos();
}

init();