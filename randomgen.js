var inputs = document.getElementById("txt");
var generator = document.getElementById("gen");
var showit = document.getElementById("show");
var stop = document.getElementById("dec");



function maxin() {
	if(0 < inputs.value.length) {
		inputs.type = "password";
	}
	else {
		return false;
	}
}

maxin();
setInterval(maxin,1000);

generator.onclick = function() {
var store = inputs.value;
var str = window.btoa(store);
alert(str);
}

stop.onclick = function() {
var store = inputs.value;
var str = window.atob(store);
alert(str);
}


var ss = window.onload();
setInterval(ss, 1000);
