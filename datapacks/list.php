<script>
	document.querySelector(".datapacks-link").classList.add("current")
</script>

<template class="one-click-card">
	<div class="card">
		<div class="card-top">
			<h3 class="title"><span class="title-text">Title goes here</span></h3>
			<p class="description"><strong class="version">v0.0.0</strong> <span class="for-label">Unknown version</span></p>
			<textarea readonly class="one-click"></textarea>
		</div>
		<div class="card-bottom">
			<a class="read-more">Copy command</a>
		</div>
	</div>
</template>

<div class="wrapper">
	<div class="content extra-wide">
		<div class="content-core">

			<?php include("../include/datapack.php") ?>

			<div class="section">
				<h2 class="title">One-clicks for 1.12</h2>
				<div class="cards one-clicks"></div>

			</div>
		</div>
	</div>
</div>

<script src="../include/js/repo.js"></script>
<script src="../include/js/one-clicks.js"></script>
<script src="../include/js/datapacks.js"></script>