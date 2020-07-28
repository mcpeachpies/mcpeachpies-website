<?php include("../../include/start.php") ?>

<!-- MAIN PAGE -->
<div class="wrapper">
	<div class="content extra-wide">
		<div class="content-core">

			<h1 class="title">Real time to Minecraft time converter</h1>
			<p>by mcpeachpies</p>

			<div class="input-div">
				<label for="time">Insert time in 24hrs <sup id="example">(e.g. 0600 = 6am)</sup></label>
				<div class="nowrap-div">
					<input name="time" type="text" value="0600" id="time" /> 
					<input type="button" value="Submit" onclick="calculate(this.form)" />
				</div>
			</div>


			<div class="output-wrapper">
				<h3 class="sub-title">Result</h3>
				<p id="output">(( hours * 1000 ) - 6000 ) + ( minutes * 16 ) = daytime</p>
			</div>

			<div class="input-div nowrap-div">
				<input type="text" id="command" value="/time set daytime" readonly />
				<input type="button" value="Copy command" id="copy" /> <input type="button" value="Refrest current time" onclick="example()" />
			</div>

		</div>
	</div>
</div>

<script src="/include/js/time.js"></script>

<?php include("../../include/end.php") ?>