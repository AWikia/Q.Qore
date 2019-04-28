// JS for Preferences


function TogglePane() {
    var x = document.getElementById("OptionsContent");
    if (x.className.indexOf("transition-on") == -1) {
        x.className += " transition-on";
    }
    
    if (x.className.indexOf("pane-on") == -1) {
        x.className += " pane-on";
    } else {
        x.className = x.className.replace(" pane-on", "");
    }
    }

function NoPix() {
    var x = document.getElementById("Handler");
    if (x.className.indexOf("pixelatedoff") == -1) {
        x.className += " pixelatedoff";
    } else {
        x.className = x.className.replace(" pixelatedoff", "");
    }
}

function Widescreen() {
    var x = document.querySelector('html');
    if (x.className.indexOf("wide") == -1) {
        x.className += " wide";
    } else {
        x.className = x.className.replace(" wide", "");
    }
}


function Widescreen2() {
    var x = document.querySelector('html');
    if (x.className.indexOf("serif") == -1) {
        x.className += " serif";
    } else {
        x.className = x.className.replace(" serif", "");
    }
}

function Cursor(cur) {
	$("body").attr("cursor", cur);
}


/* Some JS for some older browsers */
if (!CSS.supports('(flex-wrap:wrap)')) {
    var x = document.getElementById("OptionsContent");
	x.className += " old";
}

function RemovePane() {
var UnmodernPref = document.getElementById("OptionsContent").className.indexOf("modernp") == -1; // Needed for check if modern version is on
	if (UnmodernPref || window.innerWidth < 755) {
		var x = document.getElementById("OptionsContent");
		x.className = x.className.replace(" pane-on", "");
	    setTimeout(RemoveTransition, 990) 
	}
}

function RemoveTransition() {
    var x = document.getElementById("OptionsContent");
        x.className = x.className.replace(" transition-on", "");
}


function p1() {
    var x = document.getElementById("OptionsContent");
        x.className = x.className.replace(" page-2", "");
        x.className = x.className.replace(" page-3", "");
        x.className = x.className.replace(" page-4", "");
        x.className = x.className.replace(" page-5", "");
        x.className = x.className.replace(" page-6", "");
    if (x.className.indexOf("page-1") == -1) {
        x.className += " page-1";
        sleep(50);
    }/* else {
        x.className = x.className.replace(" pane-on", "");        
    }*/
}


function p2() {
    var x = document.getElementById("OptionsContent");
        x.className = x.className.replace(" page-1", "");
        x.className = x.className.replace(" page-3", "");
        x.className = x.className.replace(" page-4", "");
        x.className = x.className.replace(" page-5", "");
        x.className = x.className.replace(" page-6", "");
    if (x.className.indexOf("page-2") == -1) {
        x.className += " page-2";
        sleep(50);
    } /*else {
        x.className = x.className.replace(" pane-on", "");        
    }*/
}


function p3() {
    var x = document.getElementById("OptionsContent");
        x.className = x.className.replace(" page-1", "");
        x.className = x.className.replace(" page-2", "");
        x.className = x.className.replace(" page-4", "");
        x.className = x.className.replace(" page-5", "");
        x.className = x.className.replace(" page-6", "");
    if (x.className.indexOf("page-3") == -1) {
        x.className += " page-3";
        sleep(50);
    } /*else {
        x.className = x.className.replace(" pane-on", "");        
    }*/
}

function p4() {
    var x = document.getElementById("OptionsContent");
        x.className = x.className.replace(" page-1", "");
        x.className = x.className.replace(" page-2", "");
        x.className = x.className.replace(" page-3", "");
        x.className = x.className.replace(" page-5", "");
        x.className = x.className.replace(" page-6", "");
    if (x.className.indexOf("page-4") == -1) {
        x.className += " page-4";
        sleep(50);
    }  /*else {
        x.className = x.className.replace(" pane-on", "");        
    }*/
}

function p5() {
    var x = document.getElementById("OptionsContent");
        x.className = x.className.replace(" page-1", "");
        x.className = x.className.replace(" page-2", "");
        x.className = x.className.replace(" page-3", "");
        x.className = x.className.replace(" page-4", "");
        x.className = x.className.replace(" page-6", "");
    if (x.className.indexOf("page-5") == -1) {
        x.className += " page-5";
        sleep(50);
    }  /*else {
        x.className = x.className.replace(" pane-on", "");        
    }*/
}

function p6() {
    var x = document.getElementById("OptionsContent");
        x.className = x.className.replace(" page-1", "");
        x.className = x.className.replace(" page-2", "");
        x.className = x.className.replace(" page-3", "");
        x.className = x.className.replace(" page-4", "");
        x.className = x.className.replace(" page-5", "");
    if (x.className.indexOf("page-6") == -1) {
        x.className += " page-6";
        sleep(50);
    }  /*else {
        x.className = x.className.replace(" pane-on", "");        
    }*/
}

function CustomVEOn() {
        document.getElementById("VEset").removeAttribute('disabled');
}


function CustomVEOff() {
        document.getElementById("VEset").setAttribute('disabled', 'true');
}

function CustomVE1() {
    var x = document.getElementById("131");
    if (!(x.className.indexOf("check") == -1)) {
        x.className = x.className.replace("check", "");
        x.className = x.className.replace("med", "");
 		x.checked = false
		x.indeterminate = false 
    } else if (!(x.className.indexOf("med") == -1)) {
        x.className += "check";
        x.className = x.className.replace("med", "");
		x.checked = true
		x.indeterminate = false
    } else {
        x.className += "med";
        x.className = x.className.replace("check", "");
		x.checked = false
		x.indeterminate = true
    }
}

function CustomVE2() {
    var x = document.getElementById("132");
    if (!(x.className.indexOf("check") == -1)) {
        x.className = x.className.replace("check", "");
        x.className = x.className.replace("med", "");
 		x.checked = false
		x.indeterminate = false 
    } else if (!(x.className.indexOf("med") == -1)) {
        x.className += "check";
        x.className = x.className.replace("med", "");
		x.checked = true
		x.indeterminate = false
    } else {
        x.className += "med";
        x.className = x.className.replace("check", "");
		x.checked = false
		x.indeterminate = true
    }
}

function CustomVE3() {
    var x = document.getElementById("133");
    if (!(x.className.indexOf("check") == -1)) {
        x.className = x.className.replace("check", "");
        x.className = x.className.replace("med", "");
 		x.checked = false
		x.indeterminate = false 
    } else if (!(x.className.indexOf("med") == -1)) {
        x.className += "check";
        x.className = x.className.replace("med", "");
		x.checked = true
		x.indeterminate = false
    } else {
        x.className += "med";
        x.className = x.className.replace("check", "");
		x.checked = false
		x.indeterminate = true
    }
}

function CustomVE4() {
    var x = document.getElementById("134");
    if (!(x.className.indexOf("check") == -1)) {
        x.className = x.className.replace("check", "");
        x.className = x.className.replace("med", "");
 		x.checked = false
		x.indeterminate = false 
    } else if (!(x.className.indexOf("med") == -1)) {
        x.className += "check";
        x.className = x.className.replace("med", "");
		x.checked = true
		x.indeterminate = false
    } else {
        x.className += "med";
        x.className = x.className.replace("check", "");
		x.checked = false
		x.indeterminate = true
    }
}

function CustomVE5() {
    var x = document.getElementById("135");
    if (!(x.className.indexOf("check") == -1)) {
        x.className = x.className.replace("check", "");
        x.className = x.className.replace("med", "");
 		x.checked = false
		x.indeterminate = false 
    } else if (!(x.className.indexOf("med") == -1)) {
        x.className += "check";
        x.className = x.className.replace("med", "");
		x.checked = true
		x.indeterminate = false
    } else {
        x.className += "med";
        x.className = x.className.replace("check", "");
		x.checked = false
		x.indeterminate = true
    }
}


function SetLogIn() {
    var x = document.getElementById("421");
    if (x.checked) {
        document.getElementById("429").setAttribute('disabled', 'true');
        document.getElementById("421-1").setAttribute('disabled', 'true');
        document.getElementById("AnonFS1").setAttribute('disabled', 'true');
        document.getElementById("AnonFS2").setAttribute('disabled', 'true');
    } else {
        document.getElementById("429").removeAttribute('disabled');
        document.getElementById("421-1").removeAttribute('disabled');
        document.getElementById("AnonFS1").removeAttribute('disabled');
        document.getElementById("AnonFS2").removeAttribute('disabled');
    }
}

function DateTimeOn() {
    var x = document.getElementById("31");
    if (x.checked) {
        document.getElementById("timezone1").setAttribute('disabled', 'true');
        document.getElementById("timezone2").setAttribute('disabled', 'true');
    } else {
        document.getElementById("timezone1").removeAttribute('disabled');
        document.getElementById("timezone2").removeAttribute('disabled');
    }
}

function prmon() {
    var x = document.getElementById("Handler");
    if (x.className.indexOf("prm") == -1) {
        x.className += " prm";
    } else {
        x.className = x.className.replace(" prm", "");
}
}

function prton() {
    var x = document.getElementById("Handler");
    if (x.className.indexOf("prt") == -1) {
        x.className += " prt";
    } else {
        x.className = x.className.replace(" prt", "");
}
}


function ModernPrefs() {
    var x = document.getElementById("OptionsContent");
    if (x.className.indexOf("modernp") == -1) {
        x.className = x.className.replace(" basicp", " modernp");
    } else {
        x.className = x.className.replace(" modernp", " basicp");

}
}


function fontclear() {
    var x = document.getElementById("Handler");
        x.className = x.className.replace(" system-font", "");
        x.className = x.className.replace(" rzz-font", "");
        x.className = x.className.replace(" mob-font", "");
        x.className = x.className.replace(" mob2-font", "");
        x.className = x.className.replace(" mob3-font", "");
        x.className = x.className.replace(" mob4-font", "");
        x.className = x.className.replace(" mob5-font", "");
        x.className = x.className.replace(" mob6-font", "");
        x.className = x.className.replace(" mob7-font", "");
        x.className = x.className.replace(" mob8-font", "");
        x.className = x.className.replace(" mob9-font", "");
}

function fonta() {
    var x = document.getElementById("Handler");
    if (x.className.indexOf("system-font") == -1) {
        x.className += " system-font";
    }
        x.className = x.className.replace(" rzz-font", "");
        x.className = x.className.replace(" mob-font", "");
        x.className = x.className.replace(" mob2-font", "");
        x.className = x.className.replace(" mob3-font", "");
        x.className = x.className.replace(" mob4-font", "");
        x.className = x.className.replace(" mob5-font", "");
        x.className = x.className.replace(" mob6-font", "");
        x.className = x.className.replace(" mob7-font", "");
        x.className = x.className.replace(" mob8-font", "");
        x.className = x.className.replace(" mob9-font", "");
}


function fontb() {
    var x = document.getElementById("Handler");
    if (x.className.indexOf("rzz-font") == -1) {
        x.className += " rzz-font";
    }
        x.className = x.className.replace(" system-font", "");
        x.className = x.className.replace(" mob-font", "");
        x.className = x.className.replace(" mob2-font", "");
        x.className = x.className.replace(" mob3-font", "");
        x.className = x.className.replace(" mob4-font", "");
        x.className = x.className.replace(" mob5-font", "");
        x.className = x.className.replace(" mob6-font", "");
        x.className = x.className.replace(" mob7-font", "");
        x.className = x.className.replace(" mob8-font", "");
        x.className = x.className.replace(" mob9-font", "");
}

function fontc() {
    var x = document.getElementById("Handler");
    if (x.className.indexOf("mob-font") == -1) {
        x.className += " mob-font";
    }
        x.className = x.className.replace(" system-font", "");
        x.className = x.className.replace(" rzz-font", "");
        x.className = x.className.replace(" mob2-font", "");
        x.className = x.className.replace(" mob3-font", "");
        x.className = x.className.replace(" mob4-font", "");
        x.className = x.className.replace(" mob5-font", "");
        x.className = x.className.replace(" mob6-font", "");
        x.className = x.className.replace(" mob7-font", "");
        x.className = x.className.replace(" mob8-font", "");
        x.className = x.className.replace(" mob9-font", "");
}

function fontd() {
    var x = document.getElementById("Handler");
    if (x.className.indexOf("mob2-font") == -1) {
        x.className += " mob2-font";
    }
        x.className = x.className.replace(" system-font", "");
        x.className = x.className.replace(" rzz-font", "");
        x.className = x.className.replace(" mob-font", "");
        x.className = x.className.replace(" mob3-font", "");
        x.className = x.className.replace(" mob4-font", "");
        x.className = x.className.replace(" mob5-font", "");
        x.className = x.className.replace(" mob6-font", "");
        x.className = x.className.replace(" mob7-font", "");
        x.className = x.className.replace(" mob8-font", "");
        x.className = x.className.replace(" mob9-font", "");
}

function fonte() {
    var x = document.getElementById("Handler");
    if (x.className.indexOf("mob3-font") == -1) {
        x.className += " mob3-font";
    }
        x.className = x.className.replace(" system-font", "");
        x.className = x.className.replace(" rzz-font", "");
        x.className = x.className.replace(" mob-font", "");
        x.className = x.className.replace(" mob2-font", "");
        x.className = x.className.replace(" mob4-font", "");
        x.className = x.className.replace(" mob5-font", "");
        x.className = x.className.replace(" mob6-font", "");
        x.className = x.className.replace(" mob7-font", "");
        x.className = x.className.replace(" mob8-font", "");
        x.className = x.className.replace(" mob9-font", "");
}

function fontf() {
    var x = document.getElementById("Handler");
    if (x.className.indexOf("mob4-font") == -1) {
        x.className += " mob4-font";
    }
        x.className = x.className.replace(" system-font", "");
        x.className = x.className.replace(" rzz-font", "");
        x.className = x.className.replace(" mob-font", "");
        x.className = x.className.replace(" mob2-font", "");
        x.className = x.className.replace(" mob3-font", "");
        x.className = x.className.replace(" mob5-font", "");
        x.className = x.className.replace(" mob6-font", "");
        x.className = x.className.replace(" mob7-font", "");
        x.className = x.className.replace(" mob8-font", "");
        x.className = x.className.replace(" mob9-font", "");
}

function fontg() {
    var x = document.getElementById("Handler");
    if (x.className.indexOf("mob5-font") == -1) {
        x.className += " mob5-font";
    }
        x.className = x.className.replace(" system-font", "");
        x.className = x.className.replace(" rzz-font", "");
        x.className = x.className.replace(" mob-font", "");
        x.className = x.className.replace(" mob2-font", "");
        x.className = x.className.replace(" mob3-font", "");
        x.className = x.className.replace(" mob4-font", "");
        x.className = x.className.replace(" mob6-font", "");
        x.className = x.className.replace(" mob7-font", "");
        x.className = x.className.replace(" mob8-font", "");
        x.className = x.className.replace(" mob9-font", "");
}

function fonth() {
    var x = document.getElementById("Handler");
    if (x.className.indexOf("mob6-font") == -1) {
        x.className += " mob6-font";
    }
        x.className = x.className.replace(" system-font", "");
        x.className = x.className.replace(" rzz-font", "");
        x.className = x.className.replace(" mob-font", "");
        x.className = x.className.replace(" mob2-font", "");
        x.className = x.className.replace(" mob3-font", "");
        x.className = x.className.replace(" mob4-font", "");
        x.className = x.className.replace(" mob5-font", "");
        x.className = x.className.replace(" mob7-font", "");
        x.className = x.className.replace(" mob8-font", "");
        x.className = x.className.replace(" mob9-font", "");
}

function fonti() {
    var x = document.getElementById("Handler");
    if (x.className.indexOf("mob7-font") == -1) {
        x.className += " mob7-font";
    }
        x.className = x.className.replace(" system-font", "");
        x.className = x.className.replace(" rzz-font", "");
        x.className = x.className.replace(" mob-font", "");
        x.className = x.className.replace(" mob2-font", "");
        x.className = x.className.replace(" mob3-font", "");
        x.className = x.className.replace(" mob4-font", "");
        x.className = x.className.replace(" mob5-font", "");
        x.className = x.className.replace(" mob6-font", "");
        x.className = x.className.replace(" mob8-font", "");
        x.className = x.className.replace(" mob9-font", "");
}

function fontj() {
    var x = document.getElementById("Handler");
    if (x.className.indexOf("mob8-font") == -1) {
        x.className += " mob8-font";
    }
        x.className = x.className.replace(" system-font", "");
        x.className = x.className.replace(" rzz-font", "");
        x.className = x.className.replace(" mob-font", "");
        x.className = x.className.replace(" mob2-font", "");
        x.className = x.className.replace(" mob3-font", "");
        x.className = x.className.replace(" mob4-font", "");
        x.className = x.className.replace(" mob5-font", "");
        x.className = x.className.replace(" mob6-font", "");
        x.className = x.className.replace(" mob7-font", "");
        x.className = x.className.replace(" mob9-font", "");
}

function fontk() {
    var x = document.getElementById("Handler");
    if (x.className.indexOf("mob9-font") == -1) {
        x.className += " mob9-font";
    }
        x.className = x.className.replace(" system-font", "");
        x.className = x.className.replace(" rzz-font", "");
        x.className = x.className.replace(" mob-font", "");
        x.className = x.className.replace(" mob2-font", "");
        x.className = x.className.replace(" mob3-font", "");
        x.className = x.className.replace(" mob4-font", "");
        x.className = x.className.replace(" mob5-font", "");
        x.className = x.className.replace(" mob6-font", "");
        x.className = x.className.replace(" mob7-font", "");
        x.className = x.className.replace(" mob8-font", "");
}
function sleep(ms) { 
		setTimeout(RemovePane, 250);
}
