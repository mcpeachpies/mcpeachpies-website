<?php
	
	if (isset($_GET['u'])) { 
		$user = $_GET['u']; 
		
		$testConnection = file_get_contents('https://minotar.net/skin/'.$user.'.png');

		if ($testConnection == FALSE) {
		
			if (isset($_GET['a'])) {
				$skin = imagecreatefrompng('alex.png');
			} else {
				$skin = imagecreatefrompng('steve.png');	
			}
			
		} else {
			$skin = imagecreatefrompng('https://minotar.net/skin/'.$user.'.png');
		}
		

	} else {
	
		if (isset($_GET['a'])) {
			$skin = imagecreatefrompng('alex.png');
		} else {
			$skin = imagecreatefrompng('steve.png');	
		}
	}
	
	if (isset($_GET['s'])) { $size = $_GET['s']; } else {$size = '50'; }


	header('Content-Type: image/png');
	
	imagesavealpha($skin, true);
	imagealphablending($skin, true);
	
	$blankSkin = imagecreatetruecolor($size, $size);
	
	imagesavealpha($blankSkin, true);
	imagealphablending($blankSkin, true);
	
	imagecopyresampled($blankSkin, $skin, 0, 0, 8, 8, $size, $size, 8, 8);
	
	if (empty($_GET['t'])) {
	
	imagesavealpha($skin, true);
	imagealphablending($skin, true);
	
	imagecopyresampled($blankSkin, $skin, 0, 0, 40, 8, $size, $size, 8, 8);

	}
	
	imagepng($blankSkin);
	
	imagedestroy($blankSkin);
	imagedestroy($skin);
	
?>
