var isOptions = document.getElementById("Handler").className.indexOf("options") !== -1;
(function () {
document.querySelector('html').className += " theme-A"; // We begin with the first theme selected
ColorUpdate();
})();

function UploadPicture1(files) {
window.URL = window.URL || window.webkitURL;
const img = document.createElement("img");
img.src = window.URL.createObjectURL(files[0]);

if (files[0].size > 1000000) {
	alert("Image is too big. Please pick another one.");
	return
}

	if ($("html.theme-A").length) {
		$("style.designer-style").append(
		'html.theme-A:not(.win10) {' +
		'--background-image:url("' + img.src + '")!important;' +
		'}'
		);	
	}

	if ($("html.theme-B").length) {
		$("style.designer-style").append(
		'html.theme-B:not(.win10) {' +
		'--background-image:url("' + img.src + '")!important;' +
		'}'
		);	
	}

	if ($("html.theme-C").length) {
		$("style.designer-style").append(
		'html.theme-B:not(.win10) {' +
		'--background-image:url("' + img.src + '")!important;' +
		'}'
		);	
	}

	if ($("html.theme-D").length) {
		$("style.designer-style").append(
		'html.theme-D:not(.win10) {' +
		'--background-image:url("' + img.src + '")!important;' +
		'}'
		);	
	}

}



function UploadPicture2(files) {
window.URL = window.URL || window.webkitURL;
const img = document.createElement("img");
img.src = window.URL.createObjectURL(files[0]);


if (files[0].size > 1000000) {
	alert("Image is too big. Please pick another one.");
	return
}

$("img[alt='HM100']").attr("src", img.src);

}


function UploadPicture3(files) {
window.URL = window.URL || window.webkitURL;
const img = document.createElement("img");
img.src = window.URL.createObjectURL(files[0]);
img.width = 471;
img.height = 115;


if (files[0].size > 1000000) {
	alert("Image is too big. Please pick another one.");
	return
}

	if ($("html.theme-A").length) {
		$("style.designer-style").append(
		'html.theme-A:not(.win10) {' +
		'--graphic:url("' + img.src + '")!important;' +
		'}'
		);	
	}

	if ($("html.theme-B").length) {
		$("style.designer-style").append(
		'html.theme-B:not(.win10) {' +
		'--graphic:url("' + img.src + '")!important;' +
		'}'
		);	
	}

	if ($("html.theme-C").length) {
		$("style.designer-style").append(
		'html.theme-B:not(.win10) {' +
		'--graphic:url("' + img.src + '")!important;' +
		'}'
		);	
	}

	if ($("html.theme-D").length) {
		$("style.designer-style").append(
		'html.theme-D:not(.win10) {' +
		'--graphic:url("' + img.src + '")!important;' +
		'}'
		);	
	}

}


function UploadPicture4(files) {
window.URL = window.URL || window.webkitURL;
const img = document.createElement("img");
img.src = window.URL.createObjectURL(files[0]);
img.width = 471;
img.height = 115;


if (files[0].size > 1000000) {
	alert("Image is too big. Please pick another one.");
	return
}

		$("style.designer-style").append(
		'html {' +
		'--wordmark:url("' + img.src + '")!important;' +
		'}'
		);
		$(".mpisto-header-container .wordmark img").attr("src", img.src);

}



function UpdateValue() {
var linkcolor1final = chroma($('input[type="color"][name="linkcolor"]').val()).get('rgb.r') + ',' + chroma($('input[type="color"][name="linkcolor"]').val()).get('rgb.g') + ',' + chroma($('input[type="color"][name="linkcolor"]').val()).get('rgb.b'); 
var headercolorfinal = chroma($('input[type="color"][name="header"]').val()).get('rgb.r') + ',' + chroma($('input[type="color"][name="header"]').val()).get('rgb.g') + ',' + chroma($('input[type="color"][name="header"]').val()).get('rgb.b'); 

	if ($("html.theme-A").length) {
		$("style.designer-style").append(
		'html.theme-A:not(.win10) {' +
		'--background-color:' + $('input[type="color"][name="bg"]').val() + '!important;' +
		'--link-color:' + linkcolor1final + '!important;' +
		'--content-bg:' + $('input[type="color"][name="contentbg"]').val() + '!important;' +
		'--content-border:' + $('input[type="color"][name="border"]').val() + '!important;' +
		'--content-color:' + $('input[type="color"][name="contentcolor"]').val() + '!important;' +
		'--button-color:' + $('input[type="color"][name="buttoncolor"]').val() + '!important;' +
		'--community-header-bg:' + headercolorfinal + '!important;' +
		'}'
		);	
	}

	if ($("html.theme-B").length) {
		$("style.designer-style").append(
		'html.theme-B:not(.win10) {' +
		'--background-color:' + $('input[type="color"][name="bg"]').val() + '!important;' +
		'--link-color:' + linkcolor1final + '!important;' +
		'--content-bg:' + $('input[type="color"][name="contentbg"]').val() + '!important;' +
		'--content-border:' + $('input[type="color"][name="border"]').val() + '!important;' +
		'--content-color:' + $('input[type="color"][name="contentcolor"]').val() + '!important;' +
		'--button-color:' + $('input[type="color"][name="buttoncolor"]').val() + '!important;' +
		'--community-header-bg:' + headercolorfinal + '!important;' +
		'}'
		);	
	}

	if ($("html.theme-C").length) {
		$("style.designer-style").append(
		'html.theme-C:not(.win10) {' +
		'--background-color:' + $('input[type="color"][name="bg"]').val() + '!important;' +
		'--link-color:' + linkcolor1final + '!important;' +
		'--content-bg:' + $('input[type="color"][name="contentbg"]').val() + '!important;' +
		'--content-border:' + $('input[type="color"][name="border"]').val() + '!important;' +
		'--content-color:' + $('input[type="color"][name="contentcolor"]').val() + '!important;' +
		'--button-color:' + $('input[type="color"][name="buttoncolor"]').val() + '!important;' +
		'--community-header-bg:' + headercolorfinal + '!important;' +
		'}'
		);	
	}

	if ($("html.theme-D").length) {
		$("style.designer-style").append(
		'html.theme-D:not(.win10) {' +
		'--background-color:' + $('input[type="color"][name="bg"]').val() + '!important;' +
		'--link-color:' + linkcolor1final + '!important;' +
		'--content-bg:' + $('input[type="color"][name="contentbg"]').val() + '!important;' +
		'--content-border:' + $('input[type="color"][name="border"]').val() + '!important;' +
		'--content-color:' + $('input[type="color"][name="contentcolor"]').val() + '!important;' +
		'--button-color:' + $('input[type="color"][name="buttoncolor"]').val() + '!important;' +
		'--community-header-bg:' + headercolorfinal + '!important;' +
		'}'
		);	
	}

	ColorUpdate();
}

function ColorUpdate() {
/** Button Color **/
/* Set Vars */
var button_color = getComputedStyle(document.querySelector('html')).getPropertyValue("--button-color");

if ((chroma(button_color).luminance()) > 0.3) {
var buttoncolor1 = chroma(button_color).brighten(-0.6);
var buttoncolor2 = 'black';
} else {
var buttoncolor1 = chroma(button_color).brighten(0.6);
var buttoncolor2 = 'white';

}

/* Set Values */
document.querySelector('body').style.setProperty("--button-color-dark", buttoncolor1);
document.querySelector('body').style.setProperty("--button-color-text", buttoncolor2);
$('input[type="color"][name="buttoncolor"]').val(chroma(button_color));


/** Header Color **/
/* Set Vars */
var header_color =	'rgb(' + getComputedStyle(document.querySelector('html')).getPropertyValue("--community-header-bg") + ');';

if ((chroma(header_color).luminance()) > 0.3) {
var headercolor1 = '23,23,23';
} else {
var headercolor1 = '248,248,248';

}

/* Set Values */
document.querySelector('body').style.setProperty("--community-header-text", headercolor1);
$('input[type="color"][name="header"]').val(chroma(header_color));

/** Link Color **/
/* Set Vars */
var link_color = 'rgb(' + getComputedStyle(document.querySelector('html')).getPropertyValue("--link-color") + ');';

if ((chroma(link_color).luminance()) > 0.3) {
var linkcolor1 = chroma(link_color).brighten(-0.6);
var linkcolor2 = 'black';
} else {
var linkcolor1 = chroma(link_color).brighten(0.6);
var linkcolor2 = 'white';

}

var linkcolor1final = chroma(linkcolor1).get('rgb.r') + ',' + chroma(linkcolor1).get('rgb.g') + ',' + chroma(linkcolor1).get('rgb.b'); 

/* Set Values */
document.querySelector('body').style.setProperty("--link-color-dark", linkcolor1final);
document.querySelector('body').style.setProperty("--link-color-text", linkcolor2);
$('input[type="color"][name="linkcolor"]').val(chroma(link_color));

/** Content Border **/
/* Set Vars */
var border_color =	getComputedStyle(document.querySelector('html')).getPropertyValue("--content-border");

if ((chroma(border_color).luminance()) > 0.3) {
var bordercolor1 = chroma(border_color).brighten(-0.6);
} else {
var bordercolor1 = chroma(border_color).brighten(0.6);
}

/* Set Values */
document.querySelector('body').style.setProperty("--content-border-dark", bordercolor1);
$('input[type="color"][name="border"]').val(chroma(border_color));

/** Dropdown BG **/
/* Set Vars */
var content_color =	getComputedStyle(document.querySelector('html')).getPropertyValue("--content-bg");
var content_text =	getComputedStyle(document.querySelector('html')).getPropertyValue("--content-color");
var body_bg =	getComputedStyle(document.querySelector('html')).getPropertyValue("--background-color");

if ((chroma(content_color).luminance()) > 0.8) {
	var dropdowncolor = 'white';
} else if ((chroma(content_color).luminance()) > 0.3) {
var dropdowncolor = chroma.mix(content_color, 'black', 0.1);
} else {
var dropdowncolor = chroma.mix(content_color, 'white', 0.1);
}


var emphasiscolor = chroma.mix(content_color, link_color, 0.6);


document.querySelector('body').style.setProperty("--dropdown-bg", dropdowncolor);
document.querySelector('body').style.setProperty("--emphasis-bg", emphasiscolor);
$('input[type="color"][name="bg"]').val(chroma(body_bg));
$('input[type="color"][name="contentbg"]').val(chroma(content_color));
$('input[type="color"][name="contentcolor"]').val(chroma(content_text));

}

function HCa() {
    var x = document.querySelector('html');
    if (x.className.indexOf("theme-A") == -1) {
        x.className += " theme-A";
        if (isOptions) {
		document.getElementById("302").checked = true;
		}
    }
        x.className = x.className.replace(" theme-B", "");
        x.className = x.className.replace(" theme-C", "");
        x.className = x.className.replace(" theme-D", "");
        if (isOptions) {
		document.getElementById("303").checked = false;
		document.getElementById("304").checked = false;
		document.getElementById("305").checked = false;
		}
		ColorUpdate();
}

function HCb() {
    var x = document.querySelector('html');
    if (x.className.indexOf("theme-B") == -1) {
        x.className += " theme-B";
        if (isOptions) {
		document.getElementById("303").checked = true;
		}
    }
        x.className = x.className.replace(" theme-A", "");
        x.className = x.className.replace(" theme-C", "");
        x.className = x.className.replace(" theme-D", "");
        if (isOptions) {
		document.getElementById("302").checked = false;
		document.getElementById("304").checked = false;
		document.getElementById("305").checked = false;
		}
		ColorUpdate();
}

function HCc() {
    var x = document.querySelector('html');
    if (x.className.indexOf("theme-C") == -1) {
        x.className += " theme-C";
        if (isOptions) {
		document.getElementById("304").checked = true;
		}
    }
        x.className = x.className.replace(" theme-A", "");
        x.className = x.className.replace(" theme-B", "");
        x.className = x.className.replace(" theme-D", "");
        if (isOptions) {
		document.getElementById("302").checked = false;
		document.getElementById("303").checked = false;
		document.getElementById("305").checked = false;
	}
		ColorUpdate();
}

function HCd() {
    var x = document.querySelector('html');
    if (x.className.indexOf("theme-D") == -1) {
        x.className += " theme-D";
        if (isOptions) {
		document.getElementById("305").checked = true;
		}
    }
        x.className = x.className.replace(" theme-A", "");
        x.className = x.className.replace(" theme-B", "");
        x.className = x.className.replace(" theme-C", "");
        if (isOptions) {
		document.getElementById("302").checked = false;
		document.getElementById("303").checked = false;
		document.getElementById("304").checked = false;
		}
		ColorUpdate();
}

function HCclear() {
    var x = document.querySelector('html');
        x.className = x.className.replace(" contrast", "");
        x.className = x.className.replace(" basic", "");
       
       
        x.className = x.className.replace(" win10", "");
		ColorUpdate();
}

function HCcustom0() {
    var x = document.querySelector('html');
    if (x.className.indexOf("contrast") == -1) {
        x.className += " contrast";
    }
    if (x.className.indexOf("win10") == -1) {
        x.className += " win10";
    }
        x.className = x.className.replace(" basic", "");
		ColorUpdate();
}

function HCcustom() {
    var x = document.querySelector('html');
    if (x.className.indexOf("contrast") == -1) {
        x.className += " contrast";
    }
        x.className = x.className.replace(" win10", "");
        x.className = x.className.replace(" basic", "");
		ColorUpdate();
}

function HCcustom2() {
    var x = document.querySelector('html');
    if (x.className.indexOf("basic") == -1) {
        x.className += " basic";
    }
        x.className = x.className.replace(" contrast", "");
        x.className = x.className.replace(" win10", "");

		ColorUpdate();
}
