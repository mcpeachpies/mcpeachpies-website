<?php

if (isset($_GET['u'])) { 
		$user = $_GET['u']; 
		
		$testConnection = file_get_contents('https://minotar.net/skin/'.$user.'.png');

		if ($testConnection == FALSE) {
		
			if (isset($_GET['a'])) {
				$skin = imagecreatefrompng('alex.png');
				list($skinWidth_orig, $skinHeight_orig) = getimagesize('alex.png');
			} else {
				$skin = imagecreatefrompng('steve.png');	
				list($skinWidth_orig, $skinHeight_orig) = getimagesize('steve.png');
			}
			
		} else {
			$skin = imagecreatefrompng('https://minotar.net/skin/'.$user.'.png');
			list($skinWidth_orig, $skinHeight_orig) = getimagesize('https://minotar.net/skin/'.$user.'.png');
		}
		

	} else {
		$skin = imagecreatefrompng('steve.png');
		list($skinWidth_orig, $skinHeight_orig) = getimagesize('steve.png');
	}
	
if (isset($_GET['a'])) { $armWidth = $_GET['a']; } else { $armWidth = '4'; }

if (isset($_GET['a']) && empty($_GET['u'])) {
	$skin = imagecreatefrompng('alex.png');
	list($skinWidth_orig, $skinHeight_orig) = getimagesize('alex.png');
}

	header('Content-Type: image/png');
	$skinLayout = imagecreatefrompng("skinLayout.png");
	$legsLayout = imagecreatefrompng("legsLayout.png");
	
	imagesavealpha($skin, true);
	imagealphablending($skin, true);
	
	imagecopy($skinLayout, $skin, 0, 0, 0, 0, $skinWidth_orig, $skinHeight_orig);
	
	
	if ($armWidth == '3') {
	$armWidth = '1';
	$bodyFront = imagecreatefrompng("blank3px.png");
	list($width_orig, $height_orig) = getimagesize('blank.png');
	$bodyBack = imagecreatefrompng("blank3px.png");
	$bodySideL = imagecreatefrompng("blank3px.png");
	$bodySideR = imagecreatefrompng("blank3px.png");
	
	$bodyFull = imagecreatefrompng('full3px.png');
	
	imagesavealpha($bodyFull, true);
	imagealphablending($bodyFull, true);
	
	} else {
	$armWidth = '0';
	$bodyFront = imagecreatefrompng("blank.png");
	list($width_orig, $height_orig) = getimagesize('blank.png');
	$bodyBack = imagecreatefrompng("blank.png");
	$bodySideL = imagecreatefrompng("blank.png");
	$bodySideR = imagecreatefrompng("blank.png");
	
	$bodyFull = imagecreatefrompng('full.png');
	
	imagesavealpha($bodyFull, true);
	imagealphablending($bodyFull, true);
	}
	
	imagesavealpha($skin, true);
	imagealphablending($skin, true);
	
	imagecopy($skinLayout, $skin, 0, 0, 0, 0, $skinWidth_orig, $skinHeight_orig);
	
	imagesavealpha($skinLayout, true);
	imagealphablending($skinLayout, true);
	
	imagesavealpha($legsLayout, true);
	imagealphablending($legsLayout, true);
	
	imagesavealpha($bodyFront, true);
	imagealphablending($bodyFront, true);
	
	if ($skinHeight_orig == '32') {
	imagecopy($skinLayout, $skinLayout, 16, 48, 0, 16, 16, 16);
	imagecopy($skinLayout, $skinLayout, 32, 48, 40, 16, 16, 16);
	}

//Head
imagecopyresampled($bodyFront, $skinLayout, 32, 0, 8, 8, 64, 64, 8, 8);

//Hat
if (empty($_GET['t'])) {

imagecopyresampled($bodyFront, $skinLayout, 32, 0, 40, 8, 64, 64, 8, 8);

}

//Arms
imagecopyresampled($bodyFront, $skinLayout, 0+($armWidth*8), 64, 44, 20, 64, 96, 8, 12);


if (empty($_GET['t'])) {

imagecopyresampled($bodyFront, $skinLayout, 0+($armWidth*8), 64, 44, 36, 64, 96, 8, 12);

}

imagecopyresampled($bodyFront, $skinLayout, 96, 64, 36, 52, 64, 96, 8, 12);

if (empty($_GET['t'])) {

imagecopyresampled($bodyFront, $skinLayout, 96, 64, 52, 52, 64, 96, 8, 12);

}

//Body
imagecopyresampled($bodyFront, $skinLayout, 32, 64, 20, 20, 64, 96, 8, 12);

//Jacket Body

if (empty($_GET['t'])) {

imagecopyresampled($bodyFront, $skinLayout, 32, 64, 20, 36, 64, 96, 8, 12);

}

//Legs
imagecopyresampled($legsLayout, $skinLayout, 32, 160, 4, 20, 64, 96, 8, 12);

if (empty($_GET['t'])) {

imagecopyresampled($legsLayout, $skinLayout, 32, 160, 4, 36, 64, 96, 8, 12);

}

imagecopyresampled($legsLayout, $skinLayout, 64, 160, 20, 52, 64, 96, 8, 12);

if (empty($_GET['t'])) {
imagecopyresampled($legsLayout, $skinLayout, 64, 160, 4, 52, 64, 96, 8, 12);

}

imagecopy($bodyFront, $legsLayout, 0, 0, 0, 0, 96, 256);

imagecopy($bodyFull, $bodyFront, 0, 0, 0, 0, 128-($armWidth*8), 256);

#Body back ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	$legsLayout = imagecreatefrompng("legsLayout.png");
	
//Head
imagecopyresampled($bodyBack, $skinLayout, 32, 0, 24, 8, 64, 64, 8, 8);

//Hat
if (empty($_GET['t'])) {

imagecopyresampled($bodyBack, $skinLayout, 32, 0, 56, 8, 64, 64, 8, 8);

}

//Arms
imagecopyresampled($bodyBack, $skinLayout, 96, 64, 52-($armWidth/3), 20, 64, 96, 8, 12);


if (empty($_GET['t'])) {

imagecopyresampled($bodyBack, $skinLayout, 96, 64, 52-($armWidth/3), 36, 64, 96, 8, 12);

}

imagecopyresampled($bodyBack, $skinLayout, 0+($armWidth*8), 64, 44-($armWidth/3), 52, 64, 96, 8, 12);

if (empty($_GET['t'])) {

imagecopyresampled($bodyBack, $skinLayout, 0+($armWidth*8), 64, 60-($armWidth/3), 52, 64, 96, 8, 12);

}

//Body
imagecopyresampled($bodyBack, $skinLayout, 32, 64, 32, 20, 64, 96, 8, 12);

//Jacket Body

if (empty($_GET['t'])) {

imagecopyresampled($bodyBack, $skinLayout, 32, 64, 32, 36, 64, 96, 8, 12);

}

//Legs
imagecopyresampled($legsLayout, $skinLayout, 32, 160, 12, 20, 64, 96, 8, 12);

if (empty($_GET['t'])) {

imagecopyresampled($legsLayout, $skinLayout, 32, 160, 12, 36, 64, 96, 8, 12);

}

imagecopyresampled($legsLayout, $skinLayout, 64, 160, 28, 52, 64, 96, 8, 12);

if (empty($_GET['t'])) {
imagecopyresampled($legsLayout, $skinLayout, 64, 160, 12, 52, 64, 96, 8, 12);

}

imagecopy($bodyBack, $legsLayout, 0, 0, 0, 0, 96, 256);
imagecopy($bodyFull, $bodyBack, 138, 0, 0, 0, 128-($armWidth*8), 256);

#Body side left ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	$legsLayout = imagecreatefrompng("legsLayout.png");
	
//Head
imagecopyresampled($bodySideL, $skinLayout, 32, 0, 16, 8, 64, 64, 8, 8);

//Hat
if (empty($_GET['t'])) {

imagecopyresampled($bodySideL, $skinLayout, 32, 0, 48, 8, 64, 64, 8, 8);

}

//Arms

imagecopyresampled($bodySideL, $skinLayout, 48, 64, 40-($armWidth/3), 52, 32, 96, 4, 12);

if (empty($_GET['t'])) {

imagecopyresampled($bodySideL, $skinLayout, 48, 64, 56-($armWidth/3), 52, 32, 96, 4, 12);

}

//Legs

imagecopyresampled($legsLayout, $skinLayout, 48, 160, 24-($armWidth/3), 52, 32, 96, 4, 12);

if (empty($_GET['t'])) {
imagecopyresampled($legsLayout, $skinLayout, 48, 160, 8-($armWidth/3), 52, 32, 96, 4, 12);

}

imagecopy($bodySideL, $legsLayout, 0, 0, 0, 0, 96, 256);
imagecopy($bodyFull, $bodySideL, 244, 0, 0, 0, 128-($armWidth*8), 256);

#Body side right ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	$legsLayout = imagecreatefrompng("legsLayout.png");
	
//Head
imagecopyresampled($bodySideR, $skinLayout, 32, 0, 0, 8, 64, 64, 8, 8);

//Hat
if (empty($_GET['t'])) {

imagecopyresampled($bodySideR, $skinLayout, 32, 0, 32, 8, 64, 64, 8, 8);

}

//Arms

imagecopyresampled($bodySideR, $skinLayout, 48, 64, 40, 20, 32, 96, 4, 12);

if (empty($_GET['t'])) {

imagecopyresampled($bodySideR, $skinLayout, 48, 64, 44, 36, 32, 96, 4, 12);

}

//Legs

imagecopyresampled($legsLayout, $skinLayout, 48, 160, 0, 20, 32, 96, 4, 12);

if (empty($_GET['t'])) {
imagecopyresampled($legsLayout, $skinLayout, 48, 160, 0, 36, 32, 96, 4, 12);

}

imagecopy($bodySideR, $legsLayout, 0, 0, 0, 0, 96, 256);
imagecopy($bodyFull, $bodySideR, 318, 0, 0, 0, 128-($armWidth*8), 256);


imagepng($bodyFull);

?>



