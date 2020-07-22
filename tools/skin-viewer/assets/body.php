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
	imagesavealpha($skin, true);
	imagealphablending($skin, true);
	
	$skinLayout = imagecreatefrompng("skinLayout.png");
	$legsLayout = imagecreatefrompng("legsLayout.png");
	
	if ($armWidth == '3') {
	$armWidth = '1';
	$fullBody = imagecreatefrompng("blank3px.png");
	} 
	
	else {
	$armWidth = '0';
	$fullBody = imagecreatefrompng("blank.png");
	}


	imagesavealpha($skin, true);
	imagealphablending($skin, true);
	
	imagecopy($skinLayout, $skin, 0, 0, 0, 0, $skinWidth_orig, $skinHeight_orig);
	
	imagesavealpha($legsLayout, true);
	imagealphablending($legsLayout, true);
	
	imagesavealpha($fullBody, true);
	imagealphablending($fullBody, true);
	
	if ($skinHeight_orig == '32') {
	imagecopy($skinLayout, $skinLayout, 16, 48, 0, 16, 16, 16);
	imagecopy($skinLayout, $skinLayout, 32, 48, 40, 16, 16, 16);
	}

//Head
imagecopyresampled($fullBody, $skinLayout, 32, 0, 8, 8, 64, 64, 8, 8);

//Hat
if (empty($_GET['t'])) {

imagecopyresampled($fullBody, $skinLayout, 32, 0, 40, 8, 64, 64, 8, 8);

}

//Arms
imagecopyresampled($fullBody, $skinLayout, 0+($armWidth*8), 64, 44, 20, 64, 96, 8, 12);


if (empty($_GET['t'])) {

imagecopyresampled($fullBody, $skinLayout, 0+($armWidth*8), 64, 44, 36, 64, 96, 8, 12);

}

imagecopyresampled($fullBody, $skinLayout, 96, 64, 36, 52, 64, 96, 8, 12);

if (empty($_GET['t'])) {

imagecopyresampled($fullBody, $skinLayout, 96, 64, 52, 52, 64, 96, 8, 12);

}

//Body
imagecopyresampled($fullBody, $skinLayout, 32, 64, 20, 20, 64, 96, 8, 12);

//Jacket Body

if (empty($_GET['t'])) {

imagecopyresampled($fullBody, $skinLayout, 32, 64, 20, 36, 64, 96, 8, 12);

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

imagecopy($fullBody, $legsLayout, 0, 0, 0, 0, 96, 256);

#imagecopyresized($image, $fullBody, 19, 19, 0, 0, 86-($armWidth*10*(86/128)), 171, 128-($armWidth*8), 256);
	
	imagepng($fullBody);
	
	imagedestroy($fullBody);
	imagedestroy($blankSkin);
	imagedestroy($skin);


?>