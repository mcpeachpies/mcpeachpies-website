function getSkin(form) {

	var username = form.u.value;
	
	if (document.getElementById('a_3').checked) {
  		var arm = document.getElementById('a_3').value;
	};
	
	if (document.getElementById('t_no').checked) {
  		var top = document.getElementById('t_no').value;
	};
	
	var parameter = username;
	
	if (arm == '3') {
		parameter = username + "&a=3";
		
		if (top == 'no') {
			parameter += "&t=no";
		}
	}
	
	if (arm == null && top == 'no') {
		parameter = username + "&t=no";
	
	}

	console.log(parameter);

	
    document.getElementById("head").src = '/tools/skin-viewer/assets/head.php/?s=200&u=' + parameter;
    document.getElementById("body").src = '/tools/skin-viewer/assets/body.php/?u=' + parameter;
    document.getElementById("bodyFull").src = '/tools/skin-viewer/assets/bodyFull.php/?u=' + parameter;
    document.getElementById("skin").src = '/tools/skin-viewer/assets/skin.php/?u=' + parameter;
    
  
    if (username == "") {
    	
    	if (arm == 3) {
    		document.getElementById("skinImage").href = "./assets/alex.png";
    	} else {
    		document.getElementById("skinImage").href = "./assets/steve.png";
    	}
    	
    } else {
    	document.getElementById("skinImage").href = "https://minotar.net/skin/" + username + ".png";
    }
    
    return false
}