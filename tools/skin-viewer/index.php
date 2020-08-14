<?php include("../../include/start.php") ?>

<!-- MAIN PAGE -->
<div class="wrapper">
	<div class="content extra-wide">
		<div class="content-core">


			<h1 class="title">Minecraft Skin viewer</h1>
			<p>Powered by <a href="http://minotar.net/" target="blank" class="read-more">minotar.net</a> </p>

			<form id="form" onsubmit="event.preventDefault()">
				
			
				<div>
					Username
					<input type="text" name="u" placeholder="mcpeachpies" onchange="return getSkin(this.form)">
				</div>
				
				<div class="option-wrapper">
					Options
					<div class="options">
						<div class="card">
							Arm width<br>
							<div><input onclick="getSkin(this.form)" type="radio" name="a" checked><span>4px (Steve)</span></div>
							<div><input onclick="getSkin(this.form)" type="radio" name="a" value="3" id="a_3"><span>3px (Alex)</span></div>
						</div>
		
						<div class="card">
							Skin Hat/Jacket<br>
							<div><input onclick="getSkin(this.form)" type="radio" name="t" checked><span>On</span></div>
							<div><input onclick="getSkin(this.form)" type="radio" name="t" value="no" id="t_no"><span>Off</span></div>
						</div>
					</div>
				</div>

			</form>

			<div class="results">
				<img id="head" src="/tools/skin-viewer/assets/head.php/?s=200" />
				<img id="body" src="/tools/skin-viewer/assets/body.php" />
				<a href="" target="_blank" id="skinImage">
					<img id="skin" src="/tools/skin-viewer/assets/skin.php" />
				</a>
				<img id="bodyFull" src="/tools/skin-viewer/assets/bodyFull.php" />
			</div>

		</div>
	</div>
</div>

<script src="/include/js/skinViewer.js"></script>

<?php include("../../include/end.php") ?>
