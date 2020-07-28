<?php include("../include/start.php") ?>

<script>document.querySelector(".resource-pack-link").classList.add("current")</script>

<!-- MAIN PAGE -->
<div class="wrapper">
	<div class="content layout">
		<div class="content-core">

			<h2 class="title">Resource pack</h2>

			<p>Lorem ipsum dolor sit amet consectetur adipiscing elit, torquent nullam pretium litora magna. Dui posuere quis ante purus dictumst gravida senectus nunc dignissim aliquam egestas, himenaeos curae vivamus fermentum nostra justo eget nulla lacinia facilisi, tempus sem lobortis magnis cursus tortor semper integer dictum nec.</p>

			<h3 class="sub-title">Preview images</h3>
			<div class="resource-previews">
				<img alt src="/resource-pack/images/title.png">
				<img alt src="/resource-pack/images/creative-inventory.png">
				<img alt src="/resource-pack/images/survival-inventory.png">
				<img alt src="/resource-pack/images/hotbar.png">
			</div>

			<h3 class="sub-title">Doors</h3>
			<div class="blocks">
				<div class="block door">
					<img data-src="/assets/minecraft/textures/block/iron_door_top.png">
					<img data-src="/assets/minecraft/textures/block/iron_door_bottom.png">
				</div>
				<div class="block door">
					<img data-src="/assets/minecraft/textures/block/acacia_door_top.png">
					<img data-src="/assets/minecraft/textures/block/acacia_door_bottom.png">
				</div>
				<div class="block door">
					<img data-src="/assets/minecraft/textures/block/jungle_door_top.png">
					<img data-src="/assets/minecraft/textures/block/jungle_door_bottom.png">
				</div>
				<div class="block door">
					<img data-src="/assets/minecraft/textures/block/oak_door_top.png">
					<img data-src="/assets/minecraft/textures/block/oak_door_bottom.png">
				</div>

			</div>

			<h3 class="sub-title">Blocks</h3>
			<div class="blocks">
				<div class="block">
					<img data-src="/assets/minecraft/textures/block/observer_front.png">
				</div>
				<div class="block">
					<img data-src="/assets/minecraft/textures/block/nether_bricks/0.png">
				</div>
				<div class="block">
					<img data-src="/assets/minecraft/textures/block/red_nether_bricks/0.png">
				</div>
				<div class="block">
					<img data-src="/assets/minecraft/textures/block/diamond_ore.png">
				</div>
				<div class="block">
					<img data-src="/assets/minecraft/textures/block/gold_ore.png">
				</div>
				<div class="block">
					<img data-src="/assets/minecraft/textures/block/purpur_block.png">
				</div>
				<div class="block">
					<img data-src="/assets/minecraft/textures/block/purpur_pillar.png">
				</div>
				<div class="block">
					<img data-src="/assets/minecraft/textures/block/purpur_pillar_top.png">
				</div>
			</div>

			<script src="/resource-pack/block.js"></script>

		</div>
		<aside class="content-aside">
			<div class="downloads">
				<h2 class="title">Downloads</h2>
				<div class="buttons">
					<a href="#" class="download-button skeleton">Download</a>
				</div>
			</div>
		</aside>
	</div>
</div>

<?php include("../include/end.php") ?>