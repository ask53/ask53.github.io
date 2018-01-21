//script.js
// scripts for ask53.github.io

$(document).bind('keypress', function (event) {
	if(String(event.originalEvent.key) == "Enter") {
		enter_pressed(event);	
	}
})

function enter_pressed(e) {
	if (PASSWORD_BOX) {			// if password protected
		
		var el = document.getElementById('password');
		
		if (passwordIsCorrect()) {
			flashInput(el);
		} else {
			flashInput(el);
			clearInput(el);
		}
	} else {					// password box is closed
		alert('nahhhhh');
	}
}

function passwordIsCorrect() {
	var newhash = hex_md5(document.getElementById('password').value);
	console.log(newhash+", "+HASHED);
	
	if (newhash == HASHED) {
		return true;
	} else {
		return false;
	}
}

function flashInput(el, color) {
	// Animates the flashing of an input box a certain color,
	//	then fades back to its original color
}