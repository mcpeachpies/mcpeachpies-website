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
	
		if (isset($_GET['a'])) {
			$skin = imagecreatefrompng('alex.png');
			list($skinWidth_orig, $skinHeight_orig) = getimagesize('alex.png');
		} else {
			$skin = imagecreatefrompng('steve.png');	
			list($skinWidth_orig, $skinHeight_orig) = getimagesize('steve.png');	
		}
	}

	header('Content-Type: image/png');
	$blank = imagecreatefrompng("skinLayout.png");
	$skinLayout = imagecreatefrompng("skin.png");
	
	imagesavealpha($skin, true);
	imagealphablending($skin, true);
	
	imagesavealpha($blank, true);
	imagealphablending($blank, true);
	
	imagesavealpha($skinLayout, true);
	imagealphablending($skinLayout, true);
	
	imagecopy($blank, $skin, 0, 0, 0, 0, $skinWidth_orig, $skinHeight_orig);
	
	imagecopyresampled($skinLayout, $blank, 0, 0, 0, 0, 200, 200, 64, 64);
	
	imagepng($skinLayout);
	
	imagedestroy($skinLayout);
	imagedestroy($skin);

?>