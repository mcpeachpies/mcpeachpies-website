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
				<p>Collection of Minecraft 1.12 One-Click Command block modules. These are now archived and no longer supported, but do join my <a href="https://discord.gg/g7DxdVg" target="_blank" class="read-more">Discord</a> server if you have an questions or problems</p>
				<!-- Hi Jip, could you make this fit side-by-side on the page please :) -->
				<!-- Yep, of course! -->
				<div class="frames">
					<iframe class="list-frame" width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PLxWlnWpCLIWWGxZ1aw93ChX5GWCdoMwor" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
					<iframe class="list-frame" width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PLxWlnWpCLIWV0g3Q-t7tRIylHwamyGjF8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
				</div>
				<div class="cards one-clicks"></div>

			</div>
		</div>
	</div>
</div>

<script src="../include/js/repo.js"></script>
<script src="../include/js/one-clicks.js"></script>
<script src="../include/js/datapacks.js"></script>