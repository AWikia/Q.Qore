window.MW18auto = true;
(function () {
document.querySelector('html').className += " theme-A"; // We begin with the first theme selected
ColorUpdate();
	if ($("body.options").length) {
		UpdateSet()
	}
		$('body').attr("cursor", "mpisto");
		CursorT('auto');
		
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

function CursorT(theme) {
	if (theme === 'auto') {
		window.MW18auto = true;
	}	else {
			$('body').attr("curtheme", theme);
			window.MW18auto = false;
	}
   if (window.MW18auto === true) {
		var body_bg =	getComputedStyle(document.querySelector('html')).getPropertyValue("--content-bg");
		if ((chroma(body_bg).get('lab.l')) > 49) {
			$('body').attr("curtheme", "light")
		} else {
			$('body').attr("curtheme", "dark")
		}
	}


}

function UploadPicture1(files) {
window.URL = window.URL || window.webkitURL;
const img = document.createElement("img");
img.src = window.URL.createObjectURL(files[0]);

if (files[0].size > 1000000) {
	console.error("Image is too big. Please pick another one.");
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

function UploadPicture1B() {
img=prompt("Set Background Image (Leave empty for imageless)", "");

	if ($("html.theme-A").length) {
		$("style.designer-style.theme-A").append(
		'.theme-A:not(.win10) {' +
		'--background-image:url("' + img + '")!important;' +
		'}'
		);	
	}

	if ($("html.theme-B").length) {
		$("style.designer-style.theme-B").append(
		'.theme-B:not(.win10) {' +
		'--background-image:url("' + img + '")!important;' +
		'}'
		);	
	}

	if ($("html.theme-C").length) {
		$("style.designer-style.theme-C").append(
		'.theme-B:not(.win10) {' +
		'--background-image:url("' + img + '")!important;' +
		'}'
		);	
	}

	if ($("html.theme-D").length) {
		$("style.designer-style.theme-D").append(
		'.theme-D:not(.win10) {' +
		'--background-image:url("' + img + '")!important;' +
		'}'
		);	
	}

}



function UploadPicture2(files) {
window.URL = window.URL || window.webkitURL;
const img = document.createElement("img");
img.src = window.URL.createObjectURL(files[0]);


if (files[0].size > 1000000) {
	console.error("Image is too big. Please pick another one.");
	alert("Image is too big. Please pick another one.");
	return
}

$("img[alt='HM100']").attr("src", img.src);

}

function UploadPicture2B() {
img=prompt("Set Avatar Image (Leave empty for default)", "");

if (img=='') {
	$("img[alt='HM100']").attr("src", "QoreVatar/Avatar0.png");
} else {
	$("img[alt='HM100']").attr("src", img);
}

}

function RemovePicture2() {
if (confirm('Are you sure you want to reset your account\'s avatar to default? This action cannot be undone') === true) {
	SetAvatar("0");
}
}



function UploadPicture3(files) {
window.URL = window.URL || window.webkitURL;
const img = document.createElement("img");
img.src = window.URL.createObjectURL(files[0]);
img.width = 471;
img.height = 115;


if (files[0].size > 1000000) {
	console.error("Image is too big. Please pick another one.");
	alert("Image is too big. Please pick another one.");
	return
}

		$("style.designer-style.theme-Global").append(
		'html {' +
		'--graphic:url("' + img.src + '")!important;' +
		'}'
		);	


}

function UploadPicture3B() {
img=prompt("Set Header Graphic Image (Leave empty for imageless)", "");

		$("style.designer-style.theme-Global").append(
		'html {' +
		'--graphic:url("' + img + '")!important;' +
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
	console.error("Image is too big. Please pick another one.");
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

function UploadPicture5(files) {
window.URL = window.URL || window.webkitURL;
const img = document.createElement("img");
img.src = window.URL.createObjectURL(files[0]);


if (files[0].size > 1000000) {
	console.error("Image is too big. Please pick another one.");
	alert("Image is too big. Please pick another one.");
	return
}

$("img[alt='altavatar']").attr("src", img.src);

}

function UploadPicture5B() {
img=prompt("Set Bot Avatar Image (Leave empty for default, can be the same as the ones from the main account)", "");

if (img=='') {
	$("img[alt='altavatar']").attr("src", "QoreVatar/Avatar0.png");
} else {
	$("img[alt='altavatar']").attr("src", img);
}

}

function RemovePicture5() {
if (confirm('Are you sure you want to reset your bot account\'s avatar to default? This action cannot be undone') === true) {
	SetAvatar("0",true);
}
}

/* Sets an avatar. Expected file is QoreVatar/Avatar@.png where @ is a number between 0 to 17. Set the 2nd value to true (Not required) to affect alt avatar */
function SetAvatar(avatar="", alt=false) {
if (alt) {
	$("img[alt='altavatar']").attr("src", "QoreVatar/Avatar" + avatar + ".png");
} else {
	$("img[alt='HM100']").attr("src", "QoreVatar/Avatar" + avatar + ".png");
}
}



function RandomColor1() {
var x = chroma.random()
$('input[type="range"][name="bg"].red').val(chroma(x).get('rgb.r'));
$('input[type="range"][name="bg"].green').val( chroma(x).get('rgb.g'));
$('input[type="range"][name="bg"].blue').val( chroma(x).get('rgb.b'));


UpdateValue()
}

function RandomColor2() {
var x = chroma.random()
$('input[type="range"][name="header"].red').val(chroma(x).get('rgb.r') );
$('input[type="range"][name="header"].green').val( chroma(x).get('rgb.g') );
$('input[type="range"][name="header"].blue').val( chroma(x).get('rgb.b') );

UpdateValue()
}

function RandomColor3() {
var x = chroma.random()
$('input[type="range"][name="contentbg"].red').val(chroma(x).get('rgb.r') );
$('input[type="range"][name="contentbg"].green').val( chroma(x).get('rgb.g') );
$('input[type="range"][name="contentbg"].blue').val( chroma(x).get('rgb.b') );

UpdateValue()
}

function RandomColor4() {
var x = chroma.random()
$('input[type="range"][name="contentcolor"].red').val(chroma(x).get('rgb.r') );
$('input[type="range"][name="contentcolor"].green').val(chroma(x).get('rgb.g') );
$('input[type="range"][name="contentcolor"].blue').val(chroma(x).get('rgb.b') );

UpdateValue()
}

function RandomColor5() {
var x = chroma.random()
$('input[type="range"][name="border"].red').val(chroma(x).get('rgb.r') );
$('input[type="range"][name="border"].green').val(chroma(x).get('rgb.g') );
$('input[type="range"][name="border"].blue').val(chroma(x).get('rgb.b') );

UpdateValue()
}

function RandomColor6() {
var x = chroma.random()
$('input[type="range"][name="linkcolor"].red').val(chroma(x).get('rgb.r') );
$('input[type="range"][name="linkcolor"].green').val(chroma(x).get('rgb.g') );
$('input[type="range"][name="linkcolor"].blue').val(chroma(x).get('rgb.b') );


UpdateValue()
}

function RandomColor7() {
var x = chroma.random()
$('input[type="range"][name="buttoncolor"].red').val(chroma(x).get('rgb.r') );
$('input[type="range"][name="buttoncolor"].green').val(chroma(x).get('rgb.g') );
$('input[type="range"][name="buttoncolor"].blue').val(chroma(x).get('rgb.b') );


UpdateValue()
}

function RandomColor() {
	RandomColor1();
	RandomColor2();
	RandomColor3();
	RandomColor4();
	RandomColor5();
	RandomColor6();
	RandomColor7();
}


function PickColor1() {
var x= prompt("Body Background Color", chroma(getComputedStyle(document.querySelector('html')).getPropertyValue("--background-color")));
$('input[type="range"][name="bg"].red').val(chroma(x).get('rgb.r'));
$('input[type="range"][name="bg"].green').val( chroma(x).get('rgb.g'));
$('input[type="range"][name="bg"].blue').val( chroma(x).get('rgb.b'));

UpdateValue()
}

function PickColor2() {
var x= prompt("Header Background Color", chroma('rgb(' + getComputedStyle(document.querySelector('html')).getPropertyValue("--community-header-bg") + ')'));
$('input[type="range"][name="header"].red').val(chroma(x).get('rgb.r') );
$('input[type="range"][name="header"].green').val( chroma(x).get('rgb.g') );
$('input[type="range"][name="header"].blue').val( chroma(x).get('rgb.b') );

UpdateValue()
}

function PickColor3() {
var x= prompt("Page Background Color", chroma(getComputedStyle(document.querySelector('html')).getPropertyValue("--content-bg")));
$('input[type="range"][name="contentbg"].red').val(chroma(x).get('rgb.r') );
$('input[type="range"][name="contentbg"].green').val( chroma(x).get('rgb.g') );
$('input[type="range"][name="contentbg"].blue').val( chroma(x).get('rgb.b') );

UpdateValue()
}

function PickColor4() {
var x= prompt("Page Text Color", chroma(getComputedStyle(document.querySelector('html')).getPropertyValue("--content-color")));
$('input[type="range"][name="contentcolor"].red').val(chroma(x).get('rgb.r') );
$('input[type="range"][name="contentcolor"].green').val(chroma(x).get('rgb.g') );
$('input[type="range"][name="contentcolor"].blue').val(chroma(x).get('rgb.b') );

UpdateValue()
}

function PickColor5() {
var x= prompt("Page Border Color", chroma(getComputedStyle(document.querySelector('html')).getPropertyValue("--content-border")));

$('input[type="range"][name="border"].red').val(chroma(x).get('rgb.r') );
$('input[type="range"][name="border"].green').val(chroma(x).get('rgb.g') );
$('input[type="range"][name="border"].blue').val(chroma(x).get('rgb.b') );

UpdateValue()
}

function PickColor6() {
var x= prompt("Page Link Color", chroma('rgb(' + getComputedStyle(document.querySelector('html')).getPropertyValue("--link-color") + ')'));

$('input[type="range"][name="linkcolor"].red').val(chroma(x).get('rgb.r') );
$('input[type="range"][name="linkcolor"].green').val(chroma(x).get('rgb.g') );
$('input[type="range"][name="linkcolor"].blue').val(chroma(x).get('rgb.b') );
UpdateValue()
}

function PickColor7() {
var x= prompt("Page Button Color", chroma(getComputedStyle(document.querySelector('html')).getPropertyValue("--button-color")));

$('input[type="range"][name="buttoncolor"].red').val(chroma(x).get('rgb.r') );
$('input[type="range"][name="buttoncolor"].green').val(chroma(x).get('rgb.g') );
$('input[type="range"][name="buttoncolor"].blue').val(chroma(x).get('rgb.b') );
UpdateValue()
}

function UpdateSet() {
if  (!($("html.contrast.win10").length)) {
/* Background */
$('input[type="range"][name="bg"].red').val(chroma(getComputedStyle(document.querySelector('html')).getPropertyValue("--background-color")).get('rgb.r') );
$('input[type="range"][name="bg"].green').val( chroma(getComputedStyle(document.querySelector('html')).getPropertyValue("--background-color")).get('rgb.g') );
$('input[type="range"][name="bg"].blue').val( chroma(getComputedStyle(document.querySelector('html')).getPropertyValue("--background-color")).get('rgb.b') );

/* Header */
var header_color =	'rgb(' + getComputedStyle(document.querySelector('html')).getPropertyValue("--community-header-bg") + ')';
$('input[type="range"][name="header"].red').val(chroma(header_color).get('rgb.r') );
$('input[type="range"][name="header"].green').val( chroma(header_color).get('rgb.g') );
$('input[type="range"][name="header"].blue').val( chroma(header_color).get('rgb.b') );


/* Page Background */
$('input[type="range"][name="contentbg"].red').val(chroma(getComputedStyle(document.querySelector('html')).getPropertyValue("--content-bg")).get('rgb.r') );
$('input[type="range"][name="contentbg"].green').val( chroma(getComputedStyle(document.querySelector('html')).getPropertyValue("--content-bg")).get('rgb.g') );
$('input[type="range"][name="contentbg"].blue').val( chroma(getComputedStyle(document.querySelector('html')).getPropertyValue("--content-bg")).get('rgb.b') );

if (getComputedStyle(document.querySelector('html')).getPropertyValue("--adaptive-content-bg") != 'true') {
/* Page Text */
$('input[type="range"][name="contentcolor"].red').val(chroma(getComputedStyle(document.querySelector('html')).getPropertyValue("--content-color")).get('rgb.r') );
$('input[type="range"][name="contentcolor"].green').val( chroma(getComputedStyle(document.querySelector('html')).getPropertyValue("--content-color")).get('rgb.g') );
$('input[type="range"][name="contentcolor"].blue').val( chroma(getComputedStyle(document.querySelector('html')).getPropertyValue("--content-color")).get('rgb.b') );

/* Page Border */
$('input[type="range"][name="border"].red').val(chroma(getComputedStyle(document.querySelector('html')).getPropertyValue("--content-border")).get('rgb.r') );
$('input[type="range"][name="border"].green').val( chroma(getComputedStyle(document.querySelector('html')).getPropertyValue("--content-border")).get('rgb.g') );
$('input[type="range"][name="border"].blue').val( chroma(getComputedStyle(document.querySelector('html')).getPropertyValue("--content-border")).get('rgb.b') );
}

/* Page Link */
var link_color =	'rgb(' + getComputedStyle(document.querySelector('html')).getPropertyValue("--link-color") + ')';
$('input[type="range"][name="linkcolor"].red').val(chroma(link_color).get('rgb.r') );
$('input[type="range"][name="linkcolor"].green').val( chroma(link_color).get('rgb.g') );
$('input[type="range"][name="linkcolor"].blue').val( chroma(link_color).get('rgb.b') );


/* Page Button */
$('input[type="range"][name="buttoncolor"].red').val(chroma(getComputedStyle(document.querySelector('html')).getPropertyValue("--button-color")).get('rgb.r') );
$('input[type="range"][name="buttoncolor"].green').val( chroma(getComputedStyle(document.querySelector('html')).getPropertyValue("--button-color")).get('rgb.g') );
$('input[type="range"][name="buttoncolor"].blue').val( chroma(getComputedStyle(document.querySelector('html')).getPropertyValue("--button-color")).get('rgb.b') );
}
}


function UpdateValue() {
var linkcolor1final = $('input[type="range"][name="linkcolor"].red').val() + ',' + $('input[type="range"][name="linkcolor"].green').val() + ',' + $('input[type="range"][name="linkcolor"].blue').val(); ; 
var headercolorfinal = $('input[type="range"][name="header"].red').val() + ',' + $('input[type="range"][name="header"].green').val() + ',' + $('input[type="range"][name="header"].blue').val(); 


/* Processing */
	if ($("html.theme-A").length) {
		$("style.designer-style.theme-A").append(
		'.theme-A:not(.win10) {' +
		'--background-color:' + chroma('rgb(' + $('input[type="range"][name="bg"].red').val() + ',' + $('input[type="range"][name="bg"].green').val() + ',' + $('input[type="range"][name="bg"].blue').val() + ')') + '!important;' +
		'--link-color:' + linkcolor1final + '!important;' +
		'--content-bg:' + chroma('rgb(' + $('input[type="range"][name="contentbg"].red').val() + ',' + $('input[type="range"][name="contentbg"].green').val() + ',' + $('input[type="range"][name="contentbg"].blue').val() + ')') + '!important;' +
		'--content-border:' + chroma('rgb(' + $('input[type="range"][name="border"].red').val() + ',' + $('input[type="range"][name="border"].green').val() + ',' + $('input[type="range"][name="border"].blue').val() + ')') + '!important;' +
		'--content-color:' + chroma('rgb(' + $('input[type="range"][name="contentcolor"].red').val() + ',' + $('input[type="range"][name="contentcolor"].green').val() + ',' + $('input[type="range"][name="contentcolor"].blue').val() + ')') + '!important;' +
		'--button-color:' + chroma('rgb(' + $('input[type="range"][name="buttoncolor"].red').val() + ',' + $('input[type="range"][name="buttoncolor"].green').val() + ',' + $('input[type="range"][name="buttoncolor"].blue').val() + ')') + '!important;' +
		'--community-header-bg:' + headercolorfinal + '!important;' +
		'}'
		);	
	}

	if ($("html.theme-B").length) {
		$("style.designer-style.theme-B").append(
		'.theme-B:not(.win10) {' +
		'--background-color:' + chroma('rgb(' + $('input[type="range"][name="bg"].red').val() + ',' + $('input[type="range"][name="bg"].green').val() + ',' + $('input[type="range"][name="bg"].blue').val() + ')') + '!important;' +
		'--link-color:' + linkcolor1final + '!important;' +
		'--content-bg:' + chroma('rgb(' + $('input[type="range"][name="contentbg"].red').val() + ',' + $('input[type="range"][name="contentbg"].green').val() + ',' + $('input[type="range"][name="contentbg"].blue').val() + ')') + '!important;' +
		'--content-border:' + chroma('rgb(' + $('input[type="range"][name="border"].red').val() + ',' + $('input[type="range"][name="border"].green').val() + ',' + $('input[type="range"][name="border"].blue').val() + ')') + '!important;' +
		'--content-color:' + chroma('rgb(' + $('input[type="range"][name="contentcolor"].red').val() + ',' + $('input[type="range"][name="contentcolor"].green').val() + ',' + $('input[type="range"][name="contentcolor"].blue').val() + ')') + '!important;' +
		'--button-color:' + chroma('rgb(' + $('input[type="range"][name="buttoncolor"].red').val() + ',' + $('input[type="range"][name="buttoncolor"].green').val() + ',' + $('input[type="range"][name="buttoncolor"].blue').val() + ')') + '!important;' +
		'--community-header-bg:' + headercolorfinal + '!important;' +
		'}'
		);	
	}

	if ($("html.theme-C").length) {
		$("style.designer-style.theme-C").append(
		'.theme-C:not(.win10) {' +
		'--background-color:' + chroma('rgb(' + $('input[type="range"][name="bg"].red').val() + ',' + $('input[type="range"][name="bg"].green').val() + ',' + $('input[type="range"][name="bg"].blue').val() + ')') + '!important;' +
		'--link-color:' + linkcolor1final + '!important;' +
		'--content-bg:' + chroma('rgb(' + $('input[type="range"][name="contentbg"].red').val() + ',' + $('input[type="range"][name="contentbg"].green').val() + ',' + $('input[type="range"][name="contentbg"].blue').val() + ')') + '!important;' +
		'--content-border:' + chroma('rgb(' + $('input[type="range"][name="border"].red').val() + ',' + $('input[type="range"][name="border"].green').val() + ',' + $('input[type="range"][name="border"].blue').val() + ')') + '!important;' +
		'--content-color:' + chroma('rgb(' + $('input[type="range"][name="contentcolor"].red').val() + ',' + $('input[type="range"][name="contentcolor"].green').val() + ',' + $('input[type="range"][name="contentcolor"].blue').val() + ')') + '!important;' +
		'--button-color:' + chroma('rgb(' + $('input[type="range"][name="buttoncolor"].red').val() + ',' + $('input[type="range"][name="buttoncolor"].green').val() + ',' + $('input[type="range"][name="buttoncolor"].blue').val() + ')') + '!important;' +
		'--community-header-bg:' + headercolorfinal + '!important;' +
		'}'
		);	
	}

	if ($("html.theme-D").length) {
		$("style.designer-style.theme-D").append(
		'.theme-D:not(.win10) {' +
		'--background-color:' + chroma('rgb(' + $('input[type="range"][name="bg"].red').val() + ',' + $('input[type="range"][name="bg"].green').val() + ',' + $('input[type="range"][name="bg"].blue').val() + ')') + '!important;' +
		'--link-color:' + linkcolor1final + '!important;' +
		'--content-bg:' + chroma('rgb(' + $('input[type="range"][name="contentbg"].red').val() + ',' + $('input[type="range"][name="contentbg"].green').val() + ',' + $('input[type="range"][name="contentbg"].blue').val() + ')') + '!important;' +
		'--content-border:' + chroma('rgb(' + $('input[type="range"][name="border"].red').val() + ',' + $('input[type="range"][name="border"].green').val() + ',' + $('input[type="range"][name="border"].blue').val() + ')') + '!important;' +
		'--content-color:' + chroma('rgb(' + $('input[type="range"][name="contentcolor"].red').val() + ',' + $('input[type="range"][name="contentcolor"].green').val() + ',' + $('input[type="range"][name="contentcolor"].blue').val() + ')') + '!important;' +
		'--button-color:' + chroma('rgb(' + $('input[type="range"][name="buttoncolor"].red').val() + ',' + $('input[type="range"][name="buttoncolor"].green').val() + ',' + $('input[type="range"][name="buttoncolor"].blue').val() + ')') + '!important;' +
		'--community-header-bg:' + headercolorfinal + '!important;' +
		'}'
		);	
	}
	/**/

	
	UpdateSet();
	/* Color Update */
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

function ResetThemesB() {
if (confirm('Are you sure you want to reset everything to factory defaults? This action cannot be undone') === true) {
		$("style.designer-style.theme-A").text('/* This CSS left intentionally blank */');	
		$("style.designer-style.theme-B").text('/* This CSS left intentionally blank */');	
		$("style.designer-style.theme-C").text('/* This CSS left intentionally blank */');	
		$("style.designer-style.theme-D").text('/* This CSS left intentionally blank */');	
		$("style.designer-style.theme-Miscellaneous").text('/* This CSS left intentionally blank */');	

	ColorUpdate();
	ResetMisc2();
}
}

function ResetMisc() {
if (confirm('Are you sure you want to reset every miscellaneous setting to factory defaults? This action cannot be undone') === true) {
		$("style.designer-style.theme-Miscellaneous").text('/* This CSS left intentionally blank */');	

	ResetMisc2();
}
}


function ResetMisc2() {
$('input.font_2nd').val('');
$('input.button_radi').val(3);
$('input.filter1').val('');
$('input.filter2').val('');
var x = $('input.filter_duration').val(300);
var x = $('input.filter_delay').val(0);
}





function ColorUpdate() {
/** Button Color **/
/* Set Vars */
var button_color = getComputedStyle(document.querySelector('html')).getPropertyValue("--button-color");

if ((chroma(button_color).get('lab.l')) > 49) {
var buttoncolor1 = chroma(button_color).darken(1);
var buttoncolor2 = 'black';
document.querySelector('body').style.setProperty("--button-color-blend-light", button_color);
document.querySelector('body').style.setProperty("--button-color-blend", buttoncolor1);
} else {
var buttoncolor1 = chroma(button_color).darken(-1);
var buttoncolor2 = 'white';
document.querySelector('body').style.setProperty("--button-color-blend-light", buttoncolor1);
document.querySelector('body').style.setProperty("--button-color-blend", button_color);
}

/* Legibility */
if ((chroma(button_color).luminance()) > .275) {
var buttoncolor2 = 'black';
} else {
var buttoncolor2 = 'white';
}


/* Set Values */
document.querySelector('body').style.setProperty("--button-color-dark", buttoncolor1);
document.querySelector('body').style.setProperty("--button-color-text", buttoncolor2);


/** Header Color **/
/* Set Vars */
var header_color =	'rgb(' + getComputedStyle(document.querySelector('html')).getPropertyValue("--community-header-bg") + ')';

if ((chroma(header_color).get('lab.l')) > 49) {
var headercolor1 = chroma(header_color).darken(1);
var headercolor2 = '0,0,0';
var headercolor1final = chroma(headercolor1).get('rgb.r') + ',' + chroma(headercolor1).get('rgb.g') + ',' + chroma(headercolor1).get('rgb.b'); 
document.querySelector('body').style.setProperty("--community-header-bg-blend-light", getComputedStyle(document.querySelector('html')).getPropertyValue("--community-header-bg"));
document.querySelector('body').style.setProperty("--community-header-bg-blend", headercolor1final);
} else {
var headercolor1 = chroma(header_color).darken(-1);
var headercolor2 = '255,255,255';
var headercolor1final = chroma(headercolor1).get('rgb.r') + ',' + chroma(headercolor1).get('rgb.g') + ',' + chroma(headercolor1).get('rgb.b'); 
document.querySelector('body').style.setProperty("--community-header-bg-blend-light", headercolor1final);
document.querySelector('body').style.setProperty("--community-header-bg-blend", getComputedStyle(document.querySelector('html')).getPropertyValue("--community-header-bg"));
}

/* Legibility */
if ((chroma(header_color).luminance()) > .275) {
var headercolor2 = '0,0,0';
} else {
var headercolor2 = '255,255,255';
}


/* Set Values */
document.querySelector('body').style.setProperty("--community-header-dark", headercolor1final);
document.querySelector('body').style.setProperty("--community-header-text", headercolor2);

/** Link Color **/
/* Set Vars */
var link_color = 'rgb(' + getComputedStyle(document.querySelector('html')).getPropertyValue("--link-color") + ')';

if ((chroma(link_color).get('lab.l')) > 49) {
var linkcolor1 = chroma(link_color).darken(1);
var linkcolor2 = 'black';
var linkcolor1final = chroma(linkcolor1).get('rgb.r') + ',' + chroma(linkcolor1).get('rgb.g') + ',' + chroma(linkcolor1).get('rgb.b'); 
document.querySelector('body').style.setProperty("--link-color-blend-light", getComputedStyle(document.querySelector('html')).getPropertyValue("--link-color"));
document.querySelector('body').style.setProperty("--link-color-blend", linkcolor1final);
} else {
var linkcolor1 = chroma(link_color).darken(-1);
var linkcolor2 = 'white';
var linkcolor1final = chroma(linkcolor1).get('rgb.r') + ',' + chroma(linkcolor1).get('rgb.g') + ',' + chroma(linkcolor1).get('rgb.b'); 
document.querySelector('body').style.setProperty("--link-color-blend-light", linkcolor1final);
document.querySelector('body').style.setProperty("--link-color-blend", getComputedStyle(document.querySelector('html')).getPropertyValue("--link-color"));
}

/* Legibility */
if ((chroma(link_color).luminance()) > .275) {
var linkcolor2 = 'black';
} else {
var linkcolor2 = 'white';
}


/* Set Values */
document.querySelector('body').style.setProperty("--link-color-dark", linkcolor1final);
document.querySelector('body').style.setProperty("--link-color-text", linkcolor2);


/** Dropdown BG **/
/* Set Vars */
var content_color =	getComputedStyle(document.querySelector('html')).getPropertyValue("--content-bg");
var content_text =	getComputedStyle(document.querySelector('html')).getPropertyValue("--content-color");
var body_bg =	getComputedStyle(document.querySelector('html')).getPropertyValue("--background-color");

if ((chroma(content_color).get('lab.l')) > 74) {
	var dropdowncolor = 'white';
	if ((getComputedStyle(document.querySelector('html')).getPropertyValue("--adaptive-content-bg") === 'true') && !($("html.contrast.win10").length)  ) {
		var dropdowncolor2 = chroma(content_color).darken(1);
		var dropdowncolor3 = '#2b2b2b';		
	} else {
		var dropdowncolor2 = 'inherit';
		var dropdowncolor3 = 'inherit';
	}
	
} else if ((chroma(content_color).get('lab.l')) > 49) {
var dropdowncolor = chroma(content_color).darken(1);
	if ((getComputedStyle(document.querySelector('html')).getPropertyValue("--adaptive-content-bg") === 'true') && !($("html.contrast.win10").length)  ) {
		var dropdowncolor2 = chroma(content_color).darken(2);
		var dropdowncolor3 = '#2b2b2b';		
	} else {
		var dropdowncolor2 = 'inherit';
		var dropdowncolor3 = 'inherit';
	}

} else {
var dropdowncolor = chroma(content_color).darken(-1);
	if ((getComputedStyle(document.querySelector('html')).getPropertyValue("--adaptive-content-bg") === 'true') && !($("html.contrast.win10").length)  ) {
		var dropdowncolor2 = chroma(content_color).darken(-2);
		var dropdowncolor3 = '#e2e2e2';		
	} else {
		var dropdowncolor2 = 'inherit';
		var dropdowncolor3 = 'inherit';
	}

}



document.querySelector('body').style.setProperty("--dropdown-bg", dropdowncolor);
document.querySelector('body').style.setProperty("--content-border", dropdowncolor2);
document.querySelector('body').style.setProperty("--content-color", dropdowncolor3);

/** Content Border **/
/* Set Vars */
if ((getComputedStyle(document.querySelector('html')).getPropertyValue("--adaptive-content-bg") === 'true') && !($("html.contrast.win10").length)  ) {
	var border_color =	getComputedStyle(document.querySelector('body')).getPropertyValue("--content-border");
} else {
	var border_color =	getComputedStyle(document.querySelector('html')).getPropertyValue("--content-border");
}
if ((chroma(border_color).get('lab.l')) > 49) {
var bordercolor1 = chroma(border_color).darken(1);
var bordercolor2 = 'black';
document.querySelector('body').style.setProperty("--content-border-blend-light", border_color);
document.querySelector('body').style.setProperty("--content-border-blend", bordercolor1);
} else {
var bordercolor1 = chroma(border_color).darken(-1);
var bordercolor2 = 'white';
document.querySelector('body').style.setProperty("--content-border-blend-light", bordercolor1);
document.querySelector('body').style.setProperty("--content-border-blend", border_color);
}

/* Legibility */
if ((chroma(border_color).luminance()) > .275) {
var bordercolor2 = 'black';
} else {
var bordercolor2 = 'white';
}


/* Set Values */
document.querySelector('body').style.setProperty("--content-border-dark", bordercolor1);
document.querySelector('body').style.setProperty("--content-border-text", bordercolor2);

/* Emphasis Themes */
var emphasiscolor = chroma.mix(content_color, link_color, 0.7);
var emphasiscolor2 = chroma.mix(border_color, button_color, 0.7);
document.querySelector('body').style.setProperty("--emphasis-bg", emphasiscolor);
document.querySelector('body').style.setProperty("--accent-bg", emphasiscolor2);

CheckAdapt()


/* Cursor Theme */
if (window.MW18auto === true) {
CursorT('auto');
}
	if ($("body.options").length) {
		UpdateSet()
	}

}

function CheckAdapt() {
	if ($("body.options").length) {
		if ((getComputedStyle(document.querySelector('html')).getPropertyValue("--adaptive-content-bg") === 'true') && !($("html.contrast.win10").length)  ) {
				document.querySelector('input#ThmAdpt').checked = true;
				$(".adapt-off").attr('disabled', 'true');
		} else {
				document.querySelector('input#ThmAdpt').checked = false;
				$(".adapt-off").removeAttr('disabled');
		}
	}
}

function ToggleAdapt() {
var x = document.querySelector('input#ThmAdpt');
	if (x.checked) {

	if ($("html.theme-A").length) {
		$("style.designer-style.theme-A").append(
		'.theme-A:not(.win10) {' +
		'--adaptive-content-bg:true!important;' +
		'}'
		);	
	}

	if ($("html.theme-B").length) {
		$("style.designer-style.theme-B").append(
		'.theme-B:not(.win10) {' +
		'--adaptive-content-bg:true!important;' +
		'}'
		);	
	}

	if ($("html.theme-C").length) {
		$("style.designer-style.theme-C").append(
		'.theme-C:not(.win10) {' +
		'--adaptive-content-bg:true!important;' +
		'}'
		);	
	}

	if ($("html.theme-D").length) {
		$("style.designer-style.theme-D").append(
		'.theme-D:not(.win10) {' +
		'--adaptive-content-bg:true!important;' +
		'}'
		);	
	}
	console.log('Adaptive theme enabled. Content border and Content Color theming are now automatically calculated.');
	} else {

	if ($("html.theme-A").length) {
		$("style.designer-style.theme-A").append(
		'.theme-A:not(.win10) {' +
		'--adaptive-content-bg:false!important;' +
		'}'
		);	
	}

	if ($("html.theme-B").length) {
		$("style.designer-style.theme-B").append(
		'.theme-B:not(.win10) {' +
		'--adaptive-content-bg:false!important;' +
		'}'
		);	
	}

	if ($("html.theme-C").length) {
		$("style.designer-style.theme-C").append(
		'.theme-C:not(.win10) {' +
		'--adaptive-content-bg:false!important;' +
		'}'
		);	
	}

	if ($("html.theme-D").length) {
		$("style.designer-style.theme-D").append(
		'.theme-D:not(.win10) {' +
		'--adaptive-content-bg:false!important;' +
		'}'
		);	
	}
	console.log('Adaptive theme disabled. Content border and Content Color theming are now manually chosen.');
	}	
	ColorUpdate();
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
		if ($("body.options").length) {
			$(".win10-off").removeAttr('disabled');
		}

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
		if ($("body.options").length) {
			$(".win10-off").attr('disabled', 'true');
		}
}

function HCcustom() {
    var x = document.querySelector('html');
    if (x.className.indexOf("contrast") == -1) {
        x.className += " contrast";
    }
        x.className = x.className.replace(" win10", "");
        x.className = x.className.replace(" basic", "");
		ColorUpdate();
		if ($("body.options").length) {
			$(".win10-off").removeAttr('disabled');
		}

}

function HCcustom2() {
    var x = document.querySelector('html');
    if (x.className.indexOf("basic") == -1) {
        x.className += " basic";
    }
        x.className = x.className.replace(" contrast", "");
        x.className = x.className.replace(" win10", "");
		ColorUpdate();
		if ($("body.options").length) {
			$(".win10-off").removeAttr('disabled');
		}
}

function UpdateContrast() {
var x = $('input[type="range"][name="contrasts"].big').val();
	if (x==0) {
		HCclear();
	}
	if (x==1) {
		HCcustom2();
	}
	if (x==2) {
		HCcustom();
	}
	if (x==3) {
		HCcustom0();
	}
}

function UpdateFont() {
var x = $('input.font_2nd').val();
	if (x=="") {
		$("style.designer-style.theme-Miscellaneous").append(
		'html {' +
		'--secondary-font:"Arimo", "Liberation Sans", "Mitr", "M PLUS Rounded 1c", "Namum Gothic", "Mada", "Pavanam", "NTR"!important;' +
		'}'
		);	
		
	} else {
		$("style.designer-style.theme-Miscellaneous").append(
		'html {' +
		'--secondary-font:' + x + ', "Arimo", "Liberation Sans", "Mitr", "M PLUS Rounded 1c", "Namum Gothic", "Mada", "Pavanam", "NTR"!important;' +
		'}'
		);	
	}
}

function UpdateButtonRadi() {
var x = $('input.button_radi').val();
	if (x=="0") {
		$("style.designer-style.theme-Miscellaneous").append(
		'html {' +
		'--button-radius:0!important;' +
		'}'
		);	
		
	} else {
		$("style.designer-style.theme-Miscellaneous").append(
		'html {' +
		'--button-radius:' + x + 'px!important;' +
		'}'
		);	
	}
}

function UpdateFilter1() {
var x = $('input.filter1').val();
	if (x=="") {
		$("style.designer-style.theme-Miscellaneous").append(
		'html {' +
		'--wordmark-filter:initial!important;' +
		'}'
		);	
		
	} else {
		$("style.designer-style.theme-Miscellaneous").append(
		'html {' +
		'--wordmark-filter:' + x +'!important;' +
		'}'
		);	
	}
}

function UpdateFilter2() {
var x = $('input.filter2').val();
	if (x=="") {
		$("style.designer-style.theme-Miscellaneous").append(
		'html {' +
		'--wordmark-filter2:initial!important;' +
		'}'
		);	
		
	} else {
		$("style.designer-style.theme-Miscellaneous").append(
		'html {' +
		'--wordmark-filter2:' + x +'!important;' +
		'}'
		);	
	}
}

function UpdateFilter3() {
var x = $('input.filter_duration').val();
	if (x=="0") {
		$("style.designer-style.theme-Miscellaneous").append(
		'html {' +
		'--wordmark-filter-duration:0!important;' +
		'}'
		);	
		
	} else {
		$("style.designer-style.theme-Miscellaneous").append(
		'html {' +
		'--wordmark-filter-duration:' + x +'ms!important;' +
		'}'
		);	
	}
}

function UpdateFilter4() {
var x = $('input.filter_delay').val();
	if (x=="0") {
		$("style.designer-style.theme-Miscellaneous").append(
		'html {' +
		'--wordmark-filter-delay:0!important;' +
		'}'
		);	
		
	} else {
		$("style.designer-style.theme-Miscellaneous").append(
		'html {' +
		'--wordmark-filter-delay:' + x +'ms!important;' +
		'}'
		);	
	}
}