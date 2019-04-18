var isOptions = document.getElementById("Handler").className.indexOf("options") !== -1;
(function () {
document.querySelector('html').className += " theme-A"; // We begin with the first theme selected
ColorUpdate();
})();


function UpdateSitename() {
    var x = document.getElementById("311");
    var y = $(".mpisto-input.sitename").val();
    if (y === '') {
		var y = 'Untitled';
		console.log('No Sitename is used. Untitled will be used as a fallback')
    }
    if (x.checked) {
	$(".color-header .title a").text(y + ' Wiki');
	$(".mobile-header .title a").text(y + ' Wiki');
	} else {
	$(".color-header .title a").text(y);
	$(".mobile-header .title a").text(y);
	}
}

function UploadPicture1(files) {
window.URL = window.URL || window.webkitURL;
const img = document.createElement("img");
img.src = window.URL.createObjectURL(files[0]);

if (files[0].size > 1000000) {
	alert("Image is too big. Please pick another one.");
	return
}

	if ($("html.theme-A").length) {
		$("style.designer-style.theme-A").append(
		'.theme-A:not(.win10) {' +
		'--background-image:url("' + img.src + '")!important;' +
		'}'
		);	
	}

	if ($("html.theme-B").length) {
		$("style.designer-style.theme-B").append(
		'.theme-B:not(.win10) {' +
		'--background-image:url("' + img.src + '")!important;' +
		'}'
		);	
	}

	if ($("html.theme-C").length) {
		$("style.designer-style.theme-C").append(
		'.theme-B:not(.win10) {' +
		'--background-image:url("' + img.src + '")!important;' +
		'}'
		);	
	}

	if ($("html.theme-D").length) {
		$("style.designer-style.theme-D").append(
		'.theme-D:not(.win10) {' +
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

		$("style.designer-style.theme-Global").append(
		'html {' +
		'--graphic:url("' + img.src + '")!important;' +
		'}'
		);	


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

		$("style.designer-style.theme-Global").append(
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
		$("style.designer-style.theme-A").append(
		'.theme-A:not(.win10) {' +
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
		$("style.designer-style.theme-B").append(
		'.theme-B:not(.win10) {' +
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
		$("style.designer-style.theme-C").append(
		'.theme-C:not(.win10) {' +
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
		$("style.designer-style.theme-D").append(
		'.theme-D:not(.win10) {' +
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

function ResetTheme() {
if (confirm('Are you sure you want to reset this theme to the pre-set ones? This action cannot be undone') === true) {
	if ($("html.theme-A").length) {
		$("style.designer-style.theme-A").text('/* This CSS left intentionally blank */');	
	}

	if ($("html.theme-B").length) {
		$("style.designer-style.theme-B").text('/* This CSS left intentionally blank */');	
	}

	if ($("html.theme-C").length) {
		$("style.designer-style.theme-C").text('/* This CSS left intentionally blank */');	
	}

	if ($("html.theme-D").length) {
		$("style.designer-style.theme-D").text('/* This CSS left intentionally blank */');	
	}

	ColorUpdate();
}
}


function ResetThemeA() {
if (confirm('Are you sure you want to reset this theme to the pre-set ones? This action cannot be undone') === true) {
		$("style.designer-style.theme-A").text('/* This CSS left intentionally blank */');	
	ColorUpdate();
}
}


function ResetThemeB() {
if (confirm('Are you sure you want to reset this theme to the pre-set ones? This action cannot be undone') === true) {
		$("style.designer-style.theme-B").text('/* This CSS left intentionally blank */');	
	ColorUpdate();
}
}

function ResetThemeC() {
if (confirm('Are you sure you want to reset this theme to the pre-set ones? This action cannot be undone') === true) {
		$("style.designer-style.theme-C").text('/* This CSS left intentionally blank */');	
	ColorUpdate();
}
}

function ResetThemeD() {
if (confirm('Are you sure you want to reset this theme to the pre-set ones? This action cannot be undone') === true) {
		$("style.designer-style.theme-D").text('/* This CSS left intentionally blank */');	
	ColorUpdate();
}
}



function ResetThemes() {
if (confirm('Are you sure you want to reset all themes to the pre-set ones? This action cannot be undone') === true) {
		$("style.designer-style.theme-A").text('/* This CSS left intentionally blank */');	
		$("style.designer-style.theme-B").text('/* This CSS left intentionally blank */');	
		$("style.designer-style.theme-C").text('/* This CSS left intentionally blank */');	
		$("style.designer-style.theme-D").text('/* This CSS left intentionally blank */');	

	ColorUpdate();
}
}



function ColorUpdate() {
/** Button Color **/
/* Set Vars */
var button_color = getComputedStyle(document.querySelector('html')).getPropertyValue("--button-color");

if ((chroma(button_color).luminance()) > 0.3) {
var buttoncolor1 = chroma(button_color).brighten(-0.6);
var buttoncolor2 = 'black';
document.querySelector('body').style.setProperty("--button-color-blend-light", button_color);
document.querySelector('body').style.setProperty("--button-color-blend", buttoncolor1);
} else {
var buttoncolor1 = chroma(button_color).brighten(0.6);
var buttoncolor2 = 'white';
document.querySelector('body').style.setProperty("--button-color-blend-light", buttoncolor1);
document.querySelector('body').style.setProperty("--button-color-blend", button_color);
}

/* Set Values */
document.querySelector('body').style.setProperty("--button-color-dark", buttoncolor1);
document.querySelector('body').style.setProperty("--button-color-text", buttoncolor2);
$('input[type="color"][name="buttoncolor"]').val(chroma(button_color));


/** Header Color **/
/* Set Vars */
var header_color =	'rgb(' + getComputedStyle(document.querySelector('html')).getPropertyValue("--community-header-bg") + ');';

if ((chroma(header_color).luminance()) > 0.3) {
var headercolor1 = chroma(header_color).brighten(-0.6);
var headercolor2 = '0,0,0';
var headercolor1final = chroma(headercolor1).get('rgb.r') + ',' + chroma(headercolor1).get('rgb.g') + ',' + chroma(headercolor1).get('rgb.b'); 
document.querySelector('body').style.setProperty("--community-header-bg-blend-light", header_color);
document.querySelector('body').style.setProperty("--community-header-bg-blend", headercolor1final);
} else {
var headercolor1 = chroma(header_color).brighten(0.6);
var headercolor2 = '255,255,255';
var headercolor1final = chroma(headercolor1).get('rgb.r') + ',' + chroma(headercolor1).get('rgb.g') + ',' + chroma(headercolor1).get('rgb.b'); 
document.querySelector('body').style.setProperty("--community-header-bg-blend-light", headercolor1final);
document.querySelector('body').style.setProperty("--community-header-bg-blend", header_color);
}

/* Set Values */
document.querySelector('body').style.setProperty("--community-header-dark", headercolor1final);
document.querySelector('body').style.setProperty("--community-header-text", headercolor2);
$('input[type="color"][name="header"]').val(chroma(header_color));

/** Link Color **/
/* Set Vars */
var link_color = 'rgb(' + getComputedStyle(document.querySelector('html')).getPropertyValue("--link-color") + ');';

if ((chroma(link_color).luminance()) > 0.3) {
var linkcolor1 = chroma(link_color).brighten(-0.6);
var linkcolor2 = 'black';
var linkcolor1final = chroma(linkcolor1).get('rgb.r') + ',' + chroma(linkcolor1).get('rgb.g') + ',' + chroma(linkcolor1).get('rgb.b'); 
document.querySelector('body').style.setProperty("--link-color-blend-light", link_color);
document.querySelector('body').style.setProperty("--link-color-blend", linkcolor1final);
} else {
var linkcolor1 = chroma(link_color).brighten(0.6);
var linkcolor2 = 'white';
var linkcolor1final = chroma(linkcolor1).get('rgb.r') + ',' + chroma(linkcolor1).get('rgb.g') + ',' + chroma(linkcolor1).get('rgb.b'); 
document.querySelector('body').style.setProperty("--link-color-blend-light", linkcolor1final);
document.querySelector('body').style.setProperty("--link-color-blend", link_color);
}


/* Set Values */
document.querySelector('body').style.setProperty("--link-color-dark", linkcolor1final);
document.querySelector('body').style.setProperty("--link-color-text", linkcolor2);
$('input[type="color"][name="linkcolor"]').val(chroma(link_color));

/** Content Border **/
/* Set Vars */
var border_color =	getComputedStyle(document.querySelector('html')).getPropertyValue("--content-border");

if ((chroma(border_color).luminance()) > 0.3) {
var bordercolor1 = chroma(border_color).brighten(-0.6);
var bordercolor2 = 'black';
document.querySelector('body').style.setProperty("--content-border-blend-light", border_color);
document.querySelector('body').style.setProperty("--content-border-blend", bordercolor1);
} else {
var bordercolor1 = chroma(border_color).brighten(0.6);
var bordercolor2 = 'white';
document.querySelector('body').style.setProperty("--content-border-blend-light", bordercolor1);
document.querySelector('body').style.setProperty("--content-border-blend", border_color);
}

/* Set Values */
document.querySelector('body').style.setProperty("--content-border-dark", bordercolor1);
document.querySelector('body').style.setProperty("--content-border-text", bordercolor2);
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
    }
        x.className = x.className.replace(" theme-B", "");
        x.className = x.className.replace(" theme-C", "");
        x.className = x.className.replace(" theme-D", "");
		ColorUpdate();
}

function HCb() {
    var x = document.querySelector('html');
    if (x.className.indexOf("theme-B") == -1) {
        x.className += " theme-B";
		}
        x.className = x.className.replace(" theme-A", "");
        x.className = x.className.replace(" theme-C", "");
        x.className = x.className.replace(" theme-D", "");
		ColorUpdate();
}

function HCc() {
    var x = document.querySelector('html');
    if (x.className.indexOf("theme-C") == -1) {
        x.className += " theme-C";
    }
        x.className = x.className.replace(" theme-A", "");
        x.className = x.className.replace(" theme-B", "");
        x.className = x.className.replace(" theme-D", "");
		ColorUpdate();
}

function HCd() {
    var x = document.querySelector('html');
    if (x.className.indexOf("theme-D") == -1) {
        x.className += " theme-D";
    }
        x.className = x.className.replace(" theme-A", "");
        x.className = x.className.replace(" theme-B", "");
        x.className = x.className.replace(" theme-C", "");
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
