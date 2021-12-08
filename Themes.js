﻿window.MW18auto = true;
window.MW18autoDark = false;
window.MW18darkmode = false;
window.MW18LightThreshold = 50;
window.MW18HoverThreshold = 0.25;
window.MW18ContrastNotice = false;

/* Visual Themes */
var visualThemes = ['basic', 'contrast', 'simple','classic']
var visualThemeNames = ['Basic','High Contrast','Simple','Classic'];
var contrastVisual = 1;
/* Visual Colors */
var visualColors = ['factorycolors','lunacolors','classicforced','campbellforced','forced','tangoforced','rgbcolors','retro','retro2','retro3','retro4','retro5','retro6','retro7'];
var visualColorNames = ['Factory', 'XP Luna', 'Windows Forced', 'Campbell Forced', 'Mpisto OSX Forced', 'Tango Forced','RGB Celebration','Retro','Retro II','Retro III','Retro IV','Retro V','Retro VI','Retro VII'];

(function () {
document.querySelector('html').className += " theme-A"; // We begin with the first theme selected
$("head").prepend(
'<style class="theming"></style>'
);	
ColorUpdate(true);
UpdateMisc();
	SheShe = 'auto'; // Allowed Values ('auto', true, false)
	if (SheShe == 'auto') {
		SheShe = ($("body.server").length != 0);
	}
	$('html').attr("she-she", SheShe);
	if ( ($("body.mpisto-2018").length) || ($("body.mpisto-2018-mobile").length)) {
		$("head").append(
		'<link rel="manifest" href="manifest.json" crossorigin="use-credentials">' +
		'<link rel="shortcut icon" href="favicon.ico">' +
		'<link rel="icon" href="favicon.ico">' +
		'<link rel="favicon" href="favicon.ico">'
		);	
	}
	if ($("body.options").length) {
		UpdateSet()
		CompileRecColors();
		CompileChosenThems();
	}
	if ( ($(".mpisto-global-sidebar").length) ) {
		$("head").append(
		'<meta name="theme-color" content="' + chroma( 'rgb(' + getComputedStyle(document.querySelector('.mpisto-global-sidebar')).getPropertyValue("--global-nav-color") + ')' ) + '">'
		);	
	} else {
		$("head").append(
		'<meta name="theme-color" content="' + chroma( $('container').css('background-color') ) + '">'
		);	
	}
		$("head").append(
		'<meta name="color-scheme" content="light dark">'
		);	
		$('body').attr("cursor", "mpisto");
		CursorT('auto');
		colortheme('system-a');
		$("head").append('<style class="social-colors"></style>');
		SocialCompile();
		ManagerRows(); // For Task Manager Only
		VisualStyleCompile(); // Compiles the Contrast Options
		if ( ( window.matchMedia('(forced-colors: active)').matches ) ) {
			VisualStyle(contrastVisual);
		} else {
			VisualStyle(-1); // We start without any visual style
		}
		VisualColor(-1); // We start without any visual style
		ContrastBanner(); // Notice
		ColorFilter('standard');
		
})();


function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}


function SupportsColorMix() {
	return CSS.supports("color","color-mix(in srgb, #34c9eb 70%, white)") || CSS.supports("color:color-mix(in srgb, #34c9eb 70%, white)") 
}

/* Color Filter */
function ColorFilter(filt) {
		$('body').attr("colorfilter", filt);
}


/* Visual Styles */
function VisualStyle(style) {
	if (style === -1) { // Standard Style
		$('html').attr("visualtheme", "standard");
	} else {
		$('html').attr("visualtheme", visualThemes[style]);
	}
	if ($("body.options").length) {
		$("input[class*='CPEVisual']").removeAttr('checked');
		document.querySelector('input#CPEVisual_' + style ).checked = true;
	}
		ThemeColorMetaTag();
}

function VisualColor(style) {
	if (style === -1) { // Standard Style
		$('html').attr("visualcolors", "standard");
		if ($('.preview-theme-wrapper.selection-theme').length) {
			$('.preview-theme-wrapper.selection-theme').attr("visualcolors", "standard");
		}
	} else {
		$('html').attr("visualcolors", visualColors[style]);
		if ($('.preview-theme-wrapper.selection-theme').length) {
			$('.preview-theme-wrapper.selection-theme').attr("visualcolors", visualColors[style]);
		}
	}
		ColorUpdate(true);
		ThemeColorMetaTag();
}


function VisualStyleCompile() {
// Puts new options
// In the Visual Styles Dropdown
/* Visual Styles */
	for (let i = 0; i < visualThemes.length; i++) {
		if ($("body.options").length) {
			str = '<br><input type="radio" name="CPEVisual" id="CPEVisual_' + i + '" onclick="VisualStyle(' + i + ')"></input> <label for="CPEVisual_' + i + '">' + visualThemeNames[i] + '</label>'
			$(".highcontrastmodes.cpe-visual-styles").append(str);

		}
		str = '<li><a onclick="VisualStyle(' + i + ')">' + visualThemeNames[i] + '</a></li>'
		$(".cpe-dropdown .cpe-dropdown__content .cpe-list.cpe-visual-styles").append(str);
	}
/* Visual Colors */
	for (let i = 0; i < visualColors.length; i++) {
		if ($("body.options").length) {
//			str = '<br><input type="radio" name="CPEVisualColor" id="CPEVisualColor_' + i + '" onclick="VisualColor(' + i + ')"></input> <label for="CPEVisualColor_' + i + '">' + visualColorNames[i] + '</label>'
			str = '		<div class="fieldset store-theme-card">' +
'			<fieldset>' +
'			<h2> ' +
'			<svg xmlns="http://www.w3.org/2000/svg" class="cpe-icon" enable-background="new 0 0 24 24" height="28px" viewBox="0 0 24 24" width="28px" fill="currentColor"><g><rect fill="none" height="24" width="24"/></g><g><g><g><g><path d="M12,22C6.49,22,2,17.51,2,12S6.49,2,12,2s10,4.04,10,9c0,3.31-2.69,6-6,6h-1.77c-0.28,0-0.5,0.22-0.5,0.5 c0,0.12,0.05,0.23,0.13,0.33c0.41,0.47,0.64,1.06,0.64,1.67C14.5,20.88,13.38,22,12,22z M12,4c-4.41,0-8,3.59-8,8s3.59,8,8,8 c0.28,0,0.5-0.22,0.5-0.5c0-0.16-0.08-0.28-0.14-0.35c-0.41-0.46-0.63-1.05-0.63-1.65c0-1.38,1.12-2.5,2.5-2.5H16 c2.21,0,4-1.79,4-4C20,7.14,16.41,4,12,4z"/><circle cx="6.5" cy="11.5" r="1.5"/><circle cx="9.5" cy="7.5" r="1.5"/><circle cx="14.5" cy="7.5" r="1.5"/><circle cx="17.5" cy="11.5" r="1.5"/></g></g></g></g></svg>' +
			visualColorNames[i] + 
'			</h2>' +
'			<div class="cpe-floating-button-group">' +
'				<a class="cpe-floating-button" onclick="VisualColor(' + i + ')" title="Apply ' + visualColorNames[i] + ' Colors to all Wikis">' +
'                  <svg xmlns="http://www.w3.org/2000/svg" class="cpe-icon cpe-icon-small">' +
'                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#cpe-icons-checkmark" />' +
'                  </svg>' +
'				</a>' +
'			</div>' +
'			<section class="preview-theme-section">' +
'				<div class="preview-theme-wrapper visual-theme theme-A" visualcolors="' + visualColors[i] + '">' +
'					<div class="background"></div>' +
'					<div class="window">' +
'						<div class="header">' +
'							<text></text>' +
'						</div>' +
'						<text></text>' +
'					</div>' +
'				</div>' +
'				<div class="preview-theme-wrapper visual-theme theme-B" visualcolors="' + visualColors[i] + '">' +
'					<div class="background"></div>' +
'					<div class="window">' +
'						<div class="header">' +
'							<text></text>' +
'						</div>' +
'						<text></text>' +
'					</div>' +
'				</div>' +
'				<div class="preview-theme-wrapper visual-theme theme-C" visualcolors="' + visualColors[i] + '">' +
'					<div class="background"></div>' +
'					<div class="window">' +
'						<div class="header">' +
'							<text></text>' +
'						</div>' +
'						<text></text>' +
'					</div>' +
'				</div>' +
'				<div class="preview-theme-wrapper visual-theme theme-D" visualcolors="' + visualColors[i] + '">' +
'					<div class="background"></div>' +
'					<div class="window">' +
'						<div class="header">' +
'							<text></text>' +
'						</div>' +
'						<text></text>' +
'					</div>' +
'				</div>' +
'			</section>' +			
'			</fieldset>' +
'			</div>'

			$(".highcontrastmodes.cpe-visual-colors").append(str);

		}
		str = '<li><a onclick="VisualColor(' + i + ')">' + visualColorNames[i] + '</a></li>'
		$(".cpe-dropdown .cpe-dropdown__content .cpe-list.cpe-visual-colors").append(str);
	}


// In the Visual Styles Options
}

/* Changes Sitename */
function UpdateSitename() {
    var x = document.getElementById("311");
    var y = $(".cpe-input.sitename").val();
    if (y === '') {
		var y = 'Untitled';
		console.log('No Sitename is used. Untitled will be used as a fallback')
    }
    if (x.checked) {
	$(".mpisto-sticky-header-container .title a").text(y + ' Wiki');
	$(".color-header .title a").text(y + ' Wiki');
	$(".mobile-header .title a").text(y + ' Wiki');
	} else {
	$(".mpisto-sticky-header-container .title a").text(y);
	$(".color-header .title a").text(y);
	$(".mobile-header .title a").text(y);
	}
}

/* Changes Cursor Theme */
function CursorT(theme) {
	if (theme === 'auto') {
		window.MW18auto = true;
		window.MW18autoDark = false
	} 	else if (theme === 'auto-r') {
		window.MW18autoDark = true
		window.MW18auto = false
	}	else {
			$('body').attr("curtheme", theme);
			window.MW18auto = false;
			window.MW18autoDark = false;
	}
   if (window.MW18auto === true) {
		var body_bg =	getComputedStyle(document.querySelector('body')).getPropertyValue("--content-bg");
		if (isLightColor(body_bg)) {
			$('body').attr("curtheme", "light")
		} else {
			$('body').attr("curtheme", "dark")
		}
	}


   if (window.MW18autoDark === true) {
		var body_bg =	getComputedStyle(document.querySelector('body')).getPropertyValue("--content-bg");
		if (isLightColor(body_bg)) {
			$('body').attr("curtheme", "dark")
		} else {
			$('body').attr("curtheme", "light")
		}
	}


}

/* Used for some wiki theme modes 
	Also used for some notifications
	Called on body element only */
function CheckTheme() {
	/* Wiki theme */
	ColorUpdate(true);
	ThemeColorMetaTag();
ManagerRows();
ContrastBanner();
}


function ThemeColorMetaTag() {
	/* Top bar for Mobile Devices */
	if ( ($(".mpisto-global-sidebar").length) ) {
		$('meta[name*="theme-color"]').attr("content", chroma( 'rgb(' + getComputedStyle(document.querySelector('.mpisto-global-sidebar')).getPropertyValue("--global-nav-color") + ')' ) );
	} else {
		$('meta[name*="theme-color"]').attr("content", chroma( $('container').css('background-color') ) );
	}
	CheckColorSuitability()
}

/* Used only on Task Manager, ignored elsewhere */
function ManagerRows() {

/* For Task Manager */
if ($("body.tskmngr").length) {
	if ( ($("cpu").length) < 4) {
		document.querySelector('aside.heatmap').style.setProperty("--heatmap-rows", $("cpu").length);
	} else if ( ($("cpu").length) < 6 ) {
		document.querySelector('aside.heatmap').style.setProperty("--heatmap-rows", 2);
	} else if ( ($("cpu").length) < 13 ) {
		document.querySelector('aside.heatmap').style.setProperty("--heatmap-rows", 3);
	} else if ( ($("cpu").length) < 30 ) {
		document.querySelector('aside.heatmap').style.setProperty("--heatmap-rows", 4);
	} else if ( ($("cpu").length) < 64 ) {
		document.querySelector('aside.heatmap').style.setProperty("--heatmap-rows", 6);
	} else if ( ($("cpu").length) < 99 ) {
		document.querySelector('aside.heatmap').style.setProperty("--heatmap-rows", 8);
	} else {
		document.querySelector('aside.heatmap').style.setProperty("--heatmap-rows", 10);
	}
}


}

function ContrastBanner() {

/* For Task Manager */
if  ($("body.mpisto-2018").length) {
	if ( ( window.matchMedia('(forced-colors: active)').matches ) && (window.MW18ContrastNotice === false)  && ($('html').attr("visualtheme") !== 'contrast'  ) ) {
		window.MW18ContrastNotice = true;
		AddFloatingBanner("You're currently using a high contrast theme on your device. You may want to use the High Contrast visual style found in the <b>Visual Styles</b> dropdown in the page header so as to have a consistent high contrast experience.",'message','contrastbanner')  
	} else {
		if ( (!($(".top-gap #contrastbanner").length)) && ($('html').attr("visualtheme") !== 'contrast'  )) {
			window.MW18ContrastNotice = false;
		}
	}
}


}



/* Changes Wiki theme style
   Supported values: auto, auto-r, light, dark, system-a, system-ar, system, system-r */
function colortheme(theme) {
    var body_bg =	getComputedStyle(document.querySelector('html')).getPropertyValue("--content-bg");
    var old_dark = window.MW18darkmode
	if (theme === 'auto') { // Auto
		window.MW18darkmode = false;
	} 	else if (theme === 'auto-r') { // Auto-Dark
		window.MW18darkmode = true;
	} 	else if (theme === 'light') { // Light
		if (isLightColor(body_bg)) {
		window.MW18darkmode = false;
		} else {
		window.MW18darkmode = true;
		}
	} 	else if (theme === 'dark') { // Dark
		if (isLightColor(body_bg)) {
		window.MW18darkmode = true;
		} else {
		window.MW18darkmode = false;
		}
	} 	else if (theme === 'system-a') { // Auto-System
		if ( window.matchMedia('(prefers-color-scheme: dark)').matches ) {
		window.MW18darkmode = true;
		} else {
		window.MW18darkmode = false;
		}
	} 	else if (theme === 'system-ar') { // Auto-System-Dark
		if ( window.matchMedia('(prefers-color-scheme: dark)').matches ) {
		window.MW18darkmode = false;
		} else {
		window.MW18darkmode = true;
		}
	} 	else if (theme === 'system') { // System
		if (isLightColor(body_bg)) {
			if ( window.matchMedia('(prefers-color-scheme: dark)').matches ) {
			window.MW18darkmode = true;
			} else {
			window.MW18darkmode = false;
			}
		} else {
			if ( window.matchMedia('(prefers-color-scheme: dark)').matches ) {
			window.MW18darkmode = false;
			} else {
			window.MW18darkmode = true;
			}
		}
	} 	else if (theme === 'system-r') { // System-Dark
		if (isLightColor(body_bg)) {
			if ( window.matchMedia('(prefers-color-scheme: dark)').matches ) {
			window.MW18darkmode = false;
			} else {
			window.MW18darkmode = true;
			}
		} else {
			if ( window.matchMedia('(prefers-color-scheme: dark)').matches ) {
			window.MW18darkmode = true;
			} else {
			window.MW18darkmode = false;
			}
		}
	} else {
		window.MW18darkmode = false;
	}
	$('body').attr("wikitheme", theme);
	if (window.MW18darkmode === true) {
		if ($("body.options").length) {
			document.querySelector('.rvbg1').style.setProperty("background-color", 'var(--content-color)');
			document.querySelector('.rvbg2').style.setProperty("background-color", 'var(--content-bg)');
		}
	} else {
		if ($("body.options").length) {
			document.querySelector('.rvbg2').style.setProperty("background-color", 'var(--content-color)');
			document.querySelector('.rvbg1').style.setProperty("background-color", 'var(--content-bg)');
		}
	}
	if ($("body.options").length) {
		$("input[id*='theme-'][name='themechooser']").removeAttr('checked');
		$("input[name='themechooser']#theme-" + theme ).attr('checked',true);
	}
	if (old_dark != window.MW18darkmode) {
		ColorUpdate(false);
	}
}

function CheckDarkMode() {
    var body_bg =	getComputedStyle(document.querySelector('html')).getPropertyValue("--content-bg");
	if (window.MW18darkmode) {
		$('body').attr("dark-mode", isLightColor(body_bg) );
	} else {
		$('body').attr("dark-mode", !(isLightColor(body_bg)) );
	}
}

function ToggleMode() {
	var theme = $('body').attr("wikitheme");
	if (theme === 'auto') {
		colortheme('auto-r');
	} else 	if (theme === 'auto-r') {
		colortheme('auto');
	} else 	if (theme === 'system-a') {
		colortheme('system-ar');
	} else 	if (theme === 'system-ar') {
		colortheme('system-a');
	} else 	if (theme === 'light') {
		colortheme('dark');
	} else 	if (theme === 'dark') {
		colortheme('light');
	} else 	if (theme === 'system') {
		colortheme('system-r');
	} else 	if (theme === 'system-r') {
		colortheme('system');
	}







}

/* Changes body background image */
function UploadPicture1(files) {
window.URL = window.URL || window.webkitURL;
const img = document.createElement("img");
img.src = window.URL.createObjectURL(files[0]);

if (files[0].size > 1024000) {
	console.error("Image is too big. Please pick another one.");
	alert("Image is too big. Please pick another one.");
	return
}

	if ($("html.theme-A").length) {
		$("style.designer-style.theme-A").append(
		'.theme-A[visualcolors="standard"] {' +
		'--background-image:url("' + img.src + '")!important;' +
		'}'
		);	
	}

	if ($("html.theme-B").length) {
		$("style.designer-style.theme-B").append(
		'.theme-B[visualcolors="standard"] {' +
		'--background-image:url("' + img.src + '")!important;' +
		'}'
		);	
	}

	if ($("html.theme-C").length) {
		$("style.designer-style.theme-C").append(
		'.theme-C[visualcolors="standard"] {' +
		'--background-image:url("' + img.src + '")!important;' +
		'}'
		);	
	}

	if ($("html.theme-D").length) {
		$("style.designer-style.theme-D").append(
		'.theme-D[visualcolors="standard"] {' +
		'--background-image:url("' + img.src + '")!important;' +
		'}'
		);	
	}

}
/* Changes body background image with input */
function UploadPicture1B(image="") {
	if (image==="") {
		img=prompt("Set Background Image (Leave empty for imageless)", "");
	} else {
		img=image;
	}
	if ($("html.theme-A").length) {
		$("style.designer-style.theme-A").append(
		'.theme-A[visualcolors="standard"] {' +
		'--background-image:url("' + img + '")!important;' +
		'}'
		);	
	}

	if ($("html.theme-B").length) {
		$("style.designer-style.theme-B").append(
		'.theme-B[visualcolors="standard"] {' +
		'--background-image:url("' + img + '")!important;' +
		'}'
		);	
	}

	if ($("html.theme-C").length) {
		$("style.designer-style.theme-C").append(
		'.theme-C[visualcolors="standard"] {' +
		'--background-image:url("' + img + '")!important;' +
		'}'
		);	
	}

	if ($("html.theme-D").length) {
		$("style.designer-style.theme-D").append(
		'.theme-D[visualcolors="standard"] {' +
		'--background-image:url("' + img + '")!important;' +
		'}'
		);	
	}

}


/* Changes avatar image */
function UploadPicture2(files) {
window.URL = window.URL || window.webkitURL;
const img = document.createElement("img");
img.src = window.URL.createObjectURL(files[0]);


if (files[0].size > 1024000) {
	console.error("Image is too big. Please pick another one.");
	alert("Image is too big. Please pick another one.");
	return
}

$("img[alt='HM100']").attr("src", img.src);

}

/* Changes avatar image with input */
function UploadPicture2B() {
img=prompt("Set Avatar Image (Leave empty for default)", "");

if (img=='') {
	$("img[alt='HM100']").attr("src", "QoreVatar/Avatar0.png");
} else {
	$("img[alt='HM100']").attr("src", img);
}

}

/* Removes avatar image */
function RemovePicture2() {
if (confirm('Are you sure you want to reset your account\'s avatar to default? This action cannot be undone') === true) {
	SetAvatar("0");
}
}


/* Changes header background image */
function UploadPicture3(files) {
window.URL = window.URL || window.webkitURL;
const img = document.createElement("img");
img.src = window.URL.createObjectURL(files[0]);
img.width = 471;
img.height = 115;


if (files[0].size > 1024000) {
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

/* Changes header background image with input */
function UploadPicture3B() {
img=prompt("Set Header Graphic Image (Leave empty for imageless)", "");

		$("style.designer-style.theme-Global").append(
		'html {' +
		'--graphic:url("' + img + '")!important;' +
		'}'
		);	

}


/* Changes wiki wordmark image */
function UploadPicture4(files) {
window.URL = window.URL || window.webkitURL;
const img = document.createElement("img");
img.src = window.URL.createObjectURL(files[0]);


if (files[0].size > 1024000) {
	console.error("Image is too big. Please pick another one.");
	alert("Image is too big. Please pick another one.");
	return
}

		$("style.designer-style.theme-Global").append(
		'html {' +
		'--wordmark:url("' + img.src + '")!important;' +
		'}'
		);
//		$(".mpisto-header-container .wordmark img").attr("src", img.src);

}

/* Changes alt avatar image */
function UploadPicture5(files) {
window.URL = window.URL || window.webkitURL;
const img = document.createElement("img");
img.src = window.URL.createObjectURL(files[0]);


if (files[0].size > 1024000) {
	console.error("Image is too big. Please pick another one.");
	alert("Image is too big. Please pick another one.");
	return
}

$("img[alt='altavatar']").attr("src", img.src);

}

/* Changes alt avatar image with input */
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


/* These functions set random color 
** Used in Preferences only
** Possible Variations of RandomColor() 1 = Body Color | 2 = Header Color | 3 = Content Color | 4 = Content Text Color | 5 = Content Border Color | 6 = Link Color | 7 = Button Color
*/
function RandomColor1(refresh=true) {
// var x = chroma.random()
var Colors = ['1d1d1d','8d0017','ac0000','d34500','eb9900','ffb317','7d9b34','5ea200','417800','1d5100','003c00','44a177','008d8f','00a8a9','009bf0','0068b7','003981','091a45','180052','490090','711993','8d37af','8c005a','ab0064','ea0098','5e5e5e','be0021','f73400','ff892b','ffc12c','ffc91a','8acb00','6db000','169900','58cc7d','00d1d2','41c3ff','008ee1','00baff','0075c6','4617b4','6800b3','a13bc9','bd56e5','c02883','f900a5','ff5fdc','e2e2e2']
 var x = '#' + Colors[getRandomInt(Colors.length)]
$('input[type="range"][name="bg"].red').val(chroma(x).get('rgb.r'));
$('input[type="range"][name="bg"].green').val( chroma(x).get('rgb.g'));
$('input[type="range"][name="bg"].blue').val( chroma(x).get('rgb.b'));


if (refresh) {
UpdateValue()
}
}

function RandomColor2(refresh=true) {
// var x = chroma.random()
	var Colors = ['ffb900','ff8c00','f7630c','ca5010','da3b01','ef6950','d13438','ff4343','e74856','e81023','ea005e','c30052','c30052','bf0077','c239b3','9a0089','0078d7','0063b1','8e8cd8','6b69d6','8764b8','744da9','b146c2','881798','0099bc','2d7d9a','00b7c3','028387','00b294','018574','00cc6a','10893e','7a7574','5d5a58','68768a','515c6b','567c73','486860','498205','107c10','767676','4c4a48','69797e','4a5459','647c64','525e54','847545','7e735f']
 var x = '#' + Colors[getRandomInt(Colors.length)]
$('input[type="range"][name="header"].red').val(chroma(x).get('rgb.r') );
$('input[type="range"][name="header"].green').val( chroma(x).get('rgb.g') );
$('input[type="range"][name="header"].blue').val( chroma(x).get('rgb.b') );

if (refresh) {
UpdateValue()
}
}

function RandomColor3(refresh=true) {
// var x = chroma.random()
	var Colors = ['000000','ffffff','dcdcdc','787878','464646','0a3b76','4395d1','99d9ea','0076a3','0d686b','00a99d','00a99d','7accc8','82ca9c','74a402','c4df9b','84871c','d9d56f','fff468','fff799','ffc20e','eb6119','fbaf5d','e57300','c14000','9e6b52','8c6239','c7b299','b82832','d85171','fedfec','563f7f','a186be','d9cfe5']
 var x = '#' + Colors[getRandomInt(Colors.length)]
$('input[type="range"][name="contentbg"].red').val(chroma(x).get('rgb.r') );
$('input[type="range"][name="contentbg"].green').val( chroma(x).get('rgb.g') );
$('input[type="range"][name="contentbg"].blue').val( chroma(x).get('rgb.b') );

if (refresh) {
UpdateValue()
}
}

function RandomColor4(refresh=true) {
	$("body").attr('content-color-auto', 'false');
// var x = chroma.random()
	var Colors = ['000000','3a3a3a','bfbfbf','e6e6e6','ffffff','ff0000','00ff00','0000ff','ffff00','ff00ff','00ffff']
 var x = '#' + Colors[getRandomInt(Colors.length)]
$('input[type="range"][name="contentcolor"].red').val(chroma(x).get('rgb.r') );
$('input[type="range"][name="contentcolor"].green').val(chroma(x).get('rgb.g') );
$('input[type="range"][name="contentcolor"].blue').val(chroma(x).get('rgb.b') );

if (refresh) {
UpdateValue()
}
}

function RandomColor5(refresh=true) {
$("body").attr('content-border-auto', 'false');
// var x = chroma.random()
	  var Colors = ['808080','cccccc','6e6e6e','3c3c3c','a3a3a3','800000','008000','000080','808000','800080','008080']
 var x = '#' + Colors[getRandomInt(Colors.length)]
$('input[type="range"][name="border"].red').val(chroma(x).get('rgb.r') );
$('input[type="range"][name="border"].green').val(chroma(x).get('rgb.g') );
$('input[type="range"][name="border"].blue').val(chroma(x).get('rgb.b') );

if (refresh) {
UpdateValue()
}
}

function RandomColor6(refresh=true) {
// var x = chroma.random()
	var Colors = ['00ff00','8080ff','c0c0c0','000000','ffffff','ffff00','77ffff','00007f','600000','ff0000','952aab','ff0066','fa6d6d','00ffff','ccffff','c056a2','ff6ec7','ff7f00','8e236b','7f500d','0366cc','fbf305','ff6403','dd0907','f20884','4700a5','0000d3','02abea','1fb714','006412','562c05','90713a','404040','117dbb','8b12ae','4da60c','a74f01'] 
 var x = '#' + Colors[getRandomInt(Colors.length)]
$('input[type="range"][name="linkcolor"].red').val(chroma(x).get('rgb.r') );
$('input[type="range"][name="linkcolor"].green').val(chroma(x).get('rgb.g') );
$('input[type="range"][name="linkcolor"].blue').val(chroma(x).get('rgb.b') );


if (refresh) {
UpdateValue()
}
}

function RandomColor7(refresh=true) {
// var x = chroma.random()
	var Colors = ['ff8c00','e81123','d13438','c30052','bf0077','9a0089','881798','744da9','10893e','107c10','018574','2d7d9a','0063b1','6b69d6','8e8cd8','8764b8','038387','486860','525e54','7e735f','4c4a48','515c6b','4a5459','000000','ffffff']
 var x = '#' + Colors[getRandomInt(Colors.length)]
$('input[type="range"][name="buttoncolor"].red').val(chroma(x).get('rgb.r') );
$('input[type="range"][name="buttoncolor"].green').val(chroma(x).get('rgb.g') );
$('input[type="range"][name="buttoncolor"].blue').val(chroma(x).get('rgb.b') );


if (refresh) {
UpdateValue()
}
}


function RandomColor9(refresh=true) {
	$("body").attr('floating-header-bg-auto', 'false');
// var x = chroma.random()
	var Colors = ['ababab','8acfff','f598d6','f3d240','add85f','78d9d9','ffaf51','ff6f6f','f359a8','47cf74','c48aff','58b1fc','9898ff','c3b5a8','ffffff','576dcd','4074ff','4099e1','40b2cc','40c5ae','40c280','9bcc3f','fce840','f98a48','e1676a','ed4c5a','ef4086','bc3b8c','7e73a5','879289'] 
 var x = '#' + Colors[getRandomInt(Colors.length)]
$('input[type="range"][name="headerf"].red').val(chroma(x).get('rgb.r'));
$('input[type="range"][name="headerf"].green').val( chroma(x).get('rgb.g'));
$('input[type="range"][name="headerf"].blue').val( chroma(x).get('rgb.b'));


if (refresh) {
UpdateValue()
}
}


function RandomColorCc(refresh=true) {
	$("body").attr('caret-color-auto', 'false');
// var x = chroma.random()
	var Colors = ['bfff00','fafa00','ffbf00','ff00bf','00bfff','00ffbf','bf00ff'] 
	var x = '#' + Colors[getRandomInt(Colors.length)]
$('input[type="range"][name="caret"].red').val(chroma(x).get('rgb.r'));
$('input[type="range"][name="caret"].green').val( chroma(x).get('rgb.g'));
$('input[type="range"][name="caret"].blue').val( chroma(x).get('rgb.b'));

if (refresh) {
UpdateValue()
}
}



function RandomColor() {
	RandomColor1(false);
	RandomColor2(false);
	RandomColor3(false);
	RandomColor4(false);
	RandomColor5(false);
	RandomColor6(false);
	RandomColor7(false);
//	RandomColor8(false);
	RandomColor9(false);
	RandomColorCc(false);
	UpdateValue()
}


/* Preset Themes 
** Themes:
**			0  = Oasis
**			1  = Sapphire
**			2  = Jade
**			3  = Babygirl
**			4  = Sky
**			5  = Carbon
**			6  = Moonlight
**			7  = Rockgarden
**			8  = Oppulence
**			9 = Bluesteel
**			10 = Obession
**			11 = Creamsicle
**			12 = Plated
**			13 = Beach
**			14 = Police
**			15 = Dragstrip
**			16 = Aliencrate
*/
function PresetTheme(theme="") {
	if (theme==="") {
	//	var theme2= $('select.preset_theme').val();
		var theme2= $('.cpe-select .preset_theme .cpe-select__value').attr("value");
	} else {
		var theme2= theme;
	}
	var body_bg=[ 		  // --background-color
				'ffffff', // Fandom Light
				'000000', // Fandom Dark
				'f6f6f6', // CC
				'2c343d', // Fansun
				'1f1f1f', // Dark
				'cccccc', // A Secure Light
				'333333', // A Secure Dark
				'7f8afe', // A Wikia
				'ffffff', // Gamepedia Light
				'000000', // Gamepedia Dark
				'3D3527', // Can I Use... Light
				'17140e', // Can I Use... Dark
				'ffffff', // Wikimedia Colors
				'0b284f', // Zelda Blue
				'441177', // CPE Default
				'BACDD8', // Oasis
				'000000', // Windows 10
				'017683', // FandomDesktop Light
				'000000'  // FandomDesktop Dark
				][theme2];
	var body_image=[					 // --backgrounud-image
				'Empty.png',			 // Fandom Light
				'Empty.png',			 // Fandom Dark
				'Empty.png',			 // CC
				'Empty.png',			 // Fansun
				'Empty.png',			 // Dark
				'Empty.png',			 // A Secure Light
				'Empty.png',			 // A Secure Dark
				'AWikia.png',			 // A Wikia
				'Empty.png',			 // Gamepedia Light
				'Empty.png',			 // Gamepedia Dark
				'Empty.png',			 // Can I Use... Light
				'Empty.png',			 // Can I Use... Dark
				'Empty.png',			 // Wikimedia Colors
				'Empty.png',			 // Zelda Blue
				'loadbg_dev.png',		 // CPE Default
				'Empty.png',			 // Oasis
				'Empty.png',			 // Windows 10
				'FD Light.jfif',		 // FandomDesktop Light
				'FD Dark.jfif'			 // FandomDesktop Dark
				][theme2];
	var page_bg=[		  // --content-bg (--content-color on reversed colors)
				'f3f5f4', // Fandom Light
				'0e191a', // Fandom Dark
				'ffffff', // CC
				'39424d', // Fansun
				'111111', // Dark
				'f1f1f1', // A Secure Light
				'0e0e0e', // A Secure Dark
				'9ea4f2', // A Wikia
				'ffffff', // Gamepedia Light
				'0e191a', // Gamepedia Dark
				'f2e8d5', // Can I Use... Light
				'252017', // Can I Use... Dark
				'ffffff', // Wikimedia Colors
				'17456e', // Zelda Blue
				'f1f2f3', // CPE Default
				'FFFFFF', // Oasis
				'ffffff', // Windows 10
				'ffffff', // FandomDesktop Light
				'0e191a'  // FandomDesktop Dark
				][theme2];
	var button_bg=[		  // --button-color
				'01cdd1', // Fandom Light
				'01cdd1', // Fandom Dark
				'404a57', // CC
				'00b7e0', // Fansun
				'343434', // Dark
				'0009ff', // A Secure Light
				'0009ff', // A Secure Dark
				'848888', // A Wikia
				'f5811f', // Gamepedia Light
				'f5811f', // Gamepedia Dark
				'ba2f00', // Can I Use... Light
				'654600', // Can I Use... Dark
				'3366cc', // Wikimedia Colors
				'001339', // Zelda Blue
				'dd8300', // CPE Default
				'006CB0', // Oasis
				'0066cc', // Windows 10
				'005c62', // FandomDesktop Light
				'005c62'  // FandomDesktop Dark
				][theme2];
	var header_bg=[		  // --community-header-bg
				'01cdd1', // Fandom Light
				'01cdd1', // Fandom Dark
				'dee7e5', // CC
				'404a57', // Fansun
				'232323', // Dark
				'003fff', // A Secure Light
				'003fff', // A Secure Dark
				'6871e6', // A Wikia
				'f5811f', // Gamepedia Light
				'f5811f', // Gamepedia Dark
				'AD6500', // Can I Use... Light
				'654600', // Can I Use... Dark
				'2a4b8d', // Wikimedia Colors
				'1d578b', // Zelda Blue
				'b88300', // CPE Default
				'006CB0', // Oasis
				'96b4d1', // Windows 10
				'005558', // FandomDesktop Light
				'058d9d'  // FandomDesktop Dark
				][theme2];
	var link_bg=[		  // --link-color
				'088488', // Fandom Light
				'01cdd1', // Fandom Dark
				'009bbe', // CC
				'00c8e0', // Fansun
				'4a90e2', // Dark
				'0009ff', // A Secure Light
				'cdd6ff', // A Secure Dark
				'0038ff', // A Wikia
				'd9721b', // Gamepedia Light
				'f5811f', // Gamepedia Dark
				'bf6f00', // Can I Use... Light
				'D4943A', // Can I Use... Dark
				'3366cc', // Wikimedia Colors
				'f4f26b', // Zelda Blue
				'dd2300', // CPE Default
				'006CB0', // Oasis
				'0066cc', // Windows 10
				'088488', // FandomDesktop Light
				'00cdd0'  // FandomDesktop Dark
				][theme2];
	/* Change Colors */
	PickColor1(body_bg,false);
	UploadPicture1B(body_image);
	PickColor2(header_bg,false);
	PickColor3(page_bg,false);
	PickColor6(link_bg,false);
	PickColor7(button_bg,false);
	/* Make theme adaptive, if it isn't */
	PickColor4('auto',false);
	PickColor5('auto',false);
	PickColor9('auto',false);
	UpdateValue();
	colortheme($('body').attr("wikitheme"))
}

/* These functions asks about what color should the user use if no value is set and sets it to an individual component such as Body Background color (The current color is used as initial answer in case of accidental use)
** If a value is set directly in the function, it instead uses that color instead of asking the user to write a color
** Used in Preferences only
** Possible Variations of PickColor() 1 = Body Color | 2 = Header Color | 3 = Content Color | 4 = Content Text Color | 5 = Content Border Color | 6 = Link Color | 7 = Button Color | 9 = Floating Header Color | Cc = Caret Color
*/
function PickColor1(color="",refresh=true) {
if (color==="") {
	var x= prompt("Body Background Color", chroma(getComputedStyle(document.querySelector('html')).getPropertyValue("--background-color")));
} else {
	var x=color;
}

$('input[type="range"][name="bg"].red').val(chroma(x).get('rgb.r'));
$('input[type="range"][name="bg"].green').val( chroma(x).get('rgb.g'));
$('input[type="range"][name="bg"].blue').val( chroma(x).get('rgb.b'));

if (refresh) {
UpdateValue()
}
}

function PickColor2(color="",refresh=true) {
if (color==="") {
	var x= prompt("Header Background Color", chroma(getComputedStyle(document.querySelector('html')).getPropertyValue("--community-header-bg")));
} else {
	var x=color;
}
$('input[type="range"][name="header"].red').val(chroma(x).get('rgb.r') );
$('input[type="range"][name="header"].green').val( chroma(x).get('rgb.g') );
$('input[type="range"][name="header"].blue').val( chroma(x).get('rgb.b') );

if (refresh) {
UpdateValue()
}
}

function PickColor3(color="",refresh=true) {
if (color==="") {
	var x= prompt("Page Background Color", chroma(getComputedStyle(document.querySelector('html')).getPropertyValue("--content-bg")));
} else {
	var x=color;
}

$('input[type="range"][name="contentbg"].red').val(chroma(x).get('rgb.r') );
$('input[type="range"][name="contentbg"].green').val( chroma(x).get('rgb.g') );
$('input[type="range"][name="contentbg"].blue').val( chroma(x).get('rgb.b') );

if (refresh) {
UpdateValue()
}
}

function PickColor4(color="",refresh=true) {
if (color==="") {
	if ( $("body").attr('content-color-auto') === 'true' ) {
		var x= prompt("Page Text Color", 'auto');
	} else {
		var x= prompt("Page Text Color", chroma(getComputedStyle(document.querySelector('html')).getPropertyValue("--content-color")));
	}
} else {
	var x=color;
}
if (x !=='auto') {
	$("body").attr('content-color-auto', 'false');
	$('input[type="range"][name="contentcolor"].red').val(chroma(x).get('rgb.r') );
	$('input[type="range"][name="contentcolor"].green').val(chroma(x).get('rgb.g') );
	$('input[type="range"][name="contentcolor"].blue').val(chroma(x).get('rgb.b') );
} else {
	$("body").attr('content-color-auto', 'true');
}
if (refresh) {
UpdateValue()
}
}

function PickColor5(color="",refresh=true) {
if (color==="") {
	if ( $("body").attr('content-border-auto') === 'true' ) {
		var x= prompt("Page Border Color", 'auto');
	} else {
		var x= prompt("Page Border Color", chroma(getComputedStyle(document.querySelector('html')).getPropertyValue("--content-border")));
	}
} else {
	var x=color;
}
if (x !=='auto') {
	$("body").attr('content-border-auto', 'false');
	$('input[type="range"][name="border"].red').val(chroma(x).get('rgb.r') );
	$('input[type="range"][name="border"].green').val(chroma(x).get('rgb.g') );
	$('input[type="range"][name="border"].blue').val(chroma(x).get('rgb.b') );
} else {
	$("body").attr('content-border-auto', 'true');
}
if (refresh) {
UpdateValue()
}
}

function PickColor6(color="",refresh=true) {
if (color==="") {
	var x= prompt("Page Link Color", chroma(getComputedStyle(document.querySelector('html')).getPropertyValue("--link-color")));
} else {
	var x=color;
}

$('input[type="range"][name="linkcolor"].red').val(chroma(x).get('rgb.r') );
$('input[type="range"][name="linkcolor"].green').val(chroma(x).get('rgb.g') );
$('input[type="range"][name="linkcolor"].blue').val(chroma(x).get('rgb.b') );
UpdateValue()
}

function PickColor7(color="",refresh=true) {
if (color==="") {
	var x= prompt("Page Button Color", chroma(getComputedStyle(document.querySelector('html')).getPropertyValue("--button-color")));
} else {
	var x=color;
}

$('input[type="range"][name="buttoncolor"].red').val(chroma(x).get('rgb.r') );
$('input[type="range"][name="buttoncolor"].green').val(chroma(x).get('rgb.g') );
$('input[type="range"][name="buttoncolor"].blue').val(chroma(x).get('rgb.b') );
if (refresh) {
UpdateValue()
}
}

function PickColor9(color="",refresh=true) {
if (color==="") {
	if ( $("body").attr('floating-header-bg-auto') === 'true' ) {
		var x= prompt("Floating Header Background Color", 'auto');
	} else {
	var x= prompt("Floating Header Background Color", chroma(getComputedStyle(document.querySelector('html')).getPropertyValue("--floating-header-bg")));
	}
} else {
	var x=color;
}
if (x !=='auto') {
	$("body").attr('floating-header-bg-auto', 'false');
	$('input[type="range"][name="headerf"].red').val(chroma(x).get('rgb.r'));
	$('input[type="range"][name="headerf"].green').val( chroma(x).get('rgb.g'));
	$('input[type="range"][name="headerf"].blue').val( chroma(x).get('rgb.b'));
} else {
	$("body").attr('floating-header-bg-auto', 'true');
}

if (refresh) {
UpdateValue()
}

}



function PickColorCc(color="",refresh=true) {
if (color==="") {
	if ( $("body").attr('caret-color-auto') === 'true' ) {
		var x= prompt("Insertation Caret Color", 'auto');
	} else {
	var x= prompt("Insertation Caret Color", chroma(getComputedStyle(document.querySelector('html')).getPropertyValue("--caret-color")));
	}
} else {
	var x=color;
}
if (x !=='auto') {
	$("body").attr('caret-color-auto', 'false');
	$('input[type="range"][name="caret"].red').val(chroma(x).get('rgb.r'));
	$('input[type="range"][name="caret"].green').val( chroma(x).get('rgb.g'));
	$('input[type="range"][name="caret"].blue').val( chroma(x).get('rgb.b'));
} else {
	$("body").attr('caret-color-auto', 'true');
}

if (refresh) {
UpdateValue()
}

}



/* Updates all Sliders values found in each theme designer color selection to the red, green and blue of each color (Each color editor menu in theme designer consists of 3 sliders) */
function UpdateSet() {
	if  (!($("html.contrast.win10").length)) {
		/* Background */
		$('input[type="range"][name="bg"].red').val(chroma(getComputedStyle(document.querySelector('html')).getPropertyValue("--background-color")).get('rgb.r') );
		$('input[type="range"][name="bg"].green').val( chroma(getComputedStyle(document.querySelector('html')).getPropertyValue("--background-color")).get('rgb.g') );
		$('input[type="range"][name="bg"].blue').val( chroma(getComputedStyle(document.querySelector('html')).getPropertyValue("--background-color")).get('rgb.b') );

		/* Header (A.K.A. Active Title Bar) */
		var header_color =	getComputedStyle(document.querySelector('html')).getPropertyValue("--community-header-bg");
		$('input[type="range"][name="header"].red').val(chroma(header_color).get('rgb.r') );
		$('input[type="range"][name="header"].green').val( chroma(header_color).get('rgb.g') );
		$('input[type="range"][name="header"].blue').val( chroma(header_color).get('rgb.b') );


		/* Page Background */
		$('input[type="range"][name="contentbg"].red').val(chroma(getComputedStyle(document.querySelector('html')).getPropertyValue("--content-bg")).get('rgb.r') );
		$('input[type="range"][name="contentbg"].green').val( chroma(getComputedStyle(document.querySelector('html')).getPropertyValue("--content-bg")).get('rgb.g') );
		$('input[type="range"][name="contentbg"].blue').val( chroma(getComputedStyle(document.querySelector('html')).getPropertyValue("--content-bg")).get('rgb.b') );

		if (getComputedStyle(document.querySelector('html')).getPropertyValue("--content-color") != 'auto') {
			/* Page Text */
			$('input[type="range"][name="contentcolor"].red').val(chroma(getComputedStyle(document.querySelector('html')).getPropertyValue("--content-color")).get('rgb.r') );
			$('input[type="range"][name="contentcolor"].green').val( chroma(getComputedStyle(document.querySelector('html')).getPropertyValue("--content-color")).get('rgb.g') );
			$('input[type="range"][name="contentcolor"].blue').val( chroma(getComputedStyle(document.querySelector('html')).getPropertyValue("--content-color")).get('rgb.b') );
}
		if (getComputedStyle(document.querySelector('html')).getPropertyValue("--content-border") != 'auto') {
			/* Page Border */
			$('input[type="range"][name="border"].red').val(chroma(getComputedStyle(document.querySelector('html')).getPropertyValue("--content-border")).get('rgb.r') );
			$('input[type="range"][name="border"].green').val( chroma(getComputedStyle(document.querySelector('html')).getPropertyValue("--content-border")).get('rgb.g') );
			$('input[type="range"][name="border"].blue').val( chroma(getComputedStyle(document.querySelector('html')).getPropertyValue("--content-border")).get('rgb.b') );
		}

		/* Page Link */
		var link_color =	getComputedStyle(document.querySelector('html')).getPropertyValue("--link-color");
		$('input[type="range"][name="linkcolor"].red').val(chroma(link_color).get('rgb.r') );
		$('input[type="range"][name="linkcolor"].green').val( chroma(link_color).get('rgb.g') );
		$('input[type="range"][name="linkcolor"].blue').val( chroma(link_color).get('rgb.b') );


		/* Page Button */
		$('input[type="range"][name="buttoncolor"].red').val(chroma(getComputedStyle(document.querySelector('html')).getPropertyValue("--button-color")).get('rgb.r') );
		$('input[type="range"][name="buttoncolor"].green').val( chroma(getComputedStyle(document.querySelector('html')).getPropertyValue("--button-color")).get('rgb.g') );
		$('input[type="range"][name="buttoncolor"].blue').val( chroma(getComputedStyle(document.querySelector('html')).getPropertyValue("--button-color")).get('rgb.b') );
		if (getComputedStyle(document.querySelector('html')).getPropertyValue("--floating-header-bg") != 'auto') {
			/* Floating Header (A.K.A. Inactive Title Bar) */
			$('input[type="range"][name="headerf"].red').val(chroma(getComputedStyle(document.querySelector('html')).getPropertyValue("--floating-header-bg")).get('rgb.r') );
			$('input[type="range"][name="headerf"].green').val( chroma(getComputedStyle(document.querySelector('html')).getPropertyValue("--floating-header-bg")).get('rgb.g') );
			$('input[type="range"][name="headerf"].blue').val( chroma(getComputedStyle(document.querySelector('html')).getPropertyValue("--floating-header-bg")).get('rgb.b') );
		}
		if (getComputedStyle(document.querySelector('html')).getPropertyValue("--caret-color") != 'auto') {
			/* Insertation Caret */
			$('input[type="range"][name="caret"].red').val(chroma(getComputedStyle(document.querySelector('html')).getPropertyValue("--caret-color")).get('rgb.r') );
			$('input[type="range"][name="caret"].green').val( chroma(getComputedStyle(document.querySelector('html')).getPropertyValue("--caret-color")).get('rgb.g') );
			$('input[type="range"][name="caret"].blue').val( chroma(getComputedStyle(document.querySelector('html')).getPropertyValue("--caret-color")).get('rgb.b') );
		}
	}
}



/* Updates all 8 required color variables for each theme to the values of the sliders */
function UpdateValue() {
	var linkcolor1final = chroma('rgb(' + $('input[type="range"][name="linkcolor"].red').val() + ',' + $('input[type="range"][name="linkcolor"].green').val() + ',' + $('input[type="range"][name="linkcolor"].blue').val() + ')') ;
	var headercolorfinal = chroma('rgb(' + $('input[type="range"][name="header"].red').val() + ',' + $('input[type="range"][name="header"].green').val() + ',' + $('input[type="range"][name="header"].blue').val() + ')') ;
	if ( $("body").attr('content-border-auto') === 'true' ) {
		var contentborderfinal = 'auto' ;
	} else {
		var contentborderfinal = chroma('rgb(' + $('input[type="range"][name="border"].red').val() + ',' + $('input[type="range"][name="border"].green').val() + ',' + $('input[type="range"][name="border"].blue').val() + ')') ;
	}

	if ( $("body").attr('content-color-auto') === 'true' ) {
		var contentcolorfinal = 'auto' ;
	} else {
		var contentcolorfinal = chroma('rgb(' + $('input[type="range"][name="contentcolor"].red').val() + ',' + $('input[type="range"][name="contentcolor"].green').val() + ',' + $('input[type="range"][name="contentcolor"].blue').val() + ')') ;
	}

	if ( $("body").attr('floating-header-bg-auto') === 'true' ) {
		var floatingheadercolorfinal = 'auto' ;
	} else {
		var floatingheadercolorfinal = chroma('rgb(' + $('input[type="range"][name="headerf"].red').val() + ',' + $('input[type="range"][name="headerf"].green').val() + ',' + $('input[type="range"][name="headerf"].blue').val() + ')') ;
	}
	if ( $("body").attr('caret-color-auto') === 'true' ) {
		var caretcolorfinal = 'auto' ;
	} else {
		var caretcolorfinal = chroma('rgb(' + $('input[type="range"][name="caret"].red').val() + ',' + $('input[type="range"][name="caret"].green').val() + ',' + $('input[type="range"][name="caret"].blue').val() + ')') ;
	}



/* Processing */
	if ($("html.theme-A").length) {
		$("style.designer-style.theme-A").append(
		'.theme-A[visualcolors="standard"] {' +
		'--background-color:' + chroma('rgb(' + $('input[type="range"][name="bg"].red').val() + ',' + $('input[type="range"][name="bg"].green').val() + ',' + $('input[type="range"][name="bg"].blue').val() + ')') + '!important;' +
		'--link-color:' + linkcolor1final + '!important;' +
		'--content-bg:' + chroma('rgb(' + $('input[type="range"][name="contentbg"].red').val() + ',' + $('input[type="range"][name="contentbg"].green').val() + ',' + $('input[type="range"][name="contentbg"].blue').val() + ')') + '!important;' +
		'--content-border:' + contentborderfinal + '!important;' +
		'--content-color:' + contentcolorfinal + '!important;' +
		'--button-color:' + chroma('rgb(' + $('input[type="range"][name="buttoncolor"].red').val() + ',' + $('input[type="range"][name="buttoncolor"].green').val() + ',' + $('input[type="range"][name="buttoncolor"].blue').val() + ')') + '!important;' +
		'--community-header-bg:' + headercolorfinal + '!important;' +
		'--floating-header-bg:' + floatingheadercolorfinal + '!important;' +
		'--caret-color:' + caretcolorfinal + '!important;' +
		'}'
		);	
	}

	if ($("html.theme-B").length) {
		$("style.designer-style.theme-B").append(
		'.theme-B[visualcolors="standard"] {' +
		'--background-color:' + chroma('rgb(' + $('input[type="range"][name="bg"].red').val() + ',' + $('input[type="range"][name="bg"].green').val() + ',' + $('input[type="range"][name="bg"].blue').val() + ')') + '!important;' +
		'--link-color:' + linkcolor1final + '!important;' +
		'--content-bg:' + chroma('rgb(' + $('input[type="range"][name="contentbg"].red').val() + ',' + $('input[type="range"][name="contentbg"].green').val() + ',' + $('input[type="range"][name="contentbg"].blue').val() + ')') + '!important;' +
		'--content-border:' + contentborderfinal + '!important;' +
		'--content-color:' + contentcolorfinal + '!important;' +
		'--button-color:' + chroma('rgb(' + $('input[type="range"][name="buttoncolor"].red').val() + ',' + $('input[type="range"][name="buttoncolor"].green').val() + ',' + $('input[type="range"][name="buttoncolor"].blue').val() + ')') + '!important;' +
		'--community-header-bg:' + headercolorfinal + '!important;' +
		'--floating-header-bg:' + floatingheadercolorfinal + '!important;' +
		'--caret-color:' + caretcolorfinal + '!important;' +
		'}'
		);	
	}

	if ($("html.theme-C").length) {
		$("style.designer-style.theme-C").append(
		'.theme-C[visualcolors="standard"] {' +
		'--background-color:' + chroma('rgb(' + $('input[type="range"][name="bg"].red').val() + ',' + $('input[type="range"][name="bg"].green').val() + ',' + $('input[type="range"][name="bg"].blue').val() + ')') + '!important;' +
		'--link-color:' + linkcolor1final + '!important;' +
		'--content-bg:' + chroma('rgb(' + $('input[type="range"][name="contentbg"].red').val() + ',' + $('input[type="range"][name="contentbg"].green').val() + ',' + $('input[type="range"][name="contentbg"].blue').val() + ')') + '!important;' +
		'--content-border:' + contentborderfinal + '!important;' +
		'--content-color:' + contentcolorfinal + '!important;' +
		'--button-color:' + chroma('rgb(' + $('input[type="range"][name="buttoncolor"].red').val() + ',' + $('input[type="range"][name="buttoncolor"].green').val() + ',' + $('input[type="range"][name="buttoncolor"].blue').val() + ')') + '!important;' +
		'--community-header-bg:' + headercolorfinal + '!important;' +
		'--floating-header-bg:' + floatingheadercolorfinal + '!important;' +
		'--caret-color:' + caretcolorfinal + '!important;' +
		'}'
		);	
	}

	if ($("html.theme-D").length) {
		$("style.designer-style.theme-D").append(
		'.theme-D[visualcolors="standard"] {' +
		'--background-color:' + chroma('rgb(' + $('input[type="range"][name="bg"].red').val() + ',' + $('input[type="range"][name="bg"].green').val() + ',' + $('input[type="range"][name="bg"].blue').val() + ')') + '!important;' +
		'--link-color:' + linkcolor1final + '!important;' +
		'--content-bg:' + chroma('rgb(' + $('input[type="range"][name="contentbg"].red').val() + ',' + $('input[type="range"][name="contentbg"].green').val() + ',' + $('input[type="range"][name="contentbg"].blue').val() + ')') + '!important;' +
		'--content-border:' + contentborderfinal + '!important;' +
		'--content-color:' + contentcolorfinal + '!important;' +
		'--button-color:' + chroma('rgb(' + $('input[type="range"][name="buttoncolor"].red').val() + ',' + $('input[type="range"][name="buttoncolor"].green').val() + ',' + $('input[type="range"][name="buttoncolor"].blue').val() + ')') + '!important;' +
		'--community-header-bg:' + headercolorfinal + '!important;' +
		'--floating-header-bg:' + floatingheadercolorfinal + '!important;' +
		'--caret-color:' + caretcolorfinal + '!important;' +
		'}'
		);	
	}
	/**/
	UpdateSet();
	/* Color Update */
	ColorUpdate(false);
}

/* Downloads all modificative values of the current selected theme to a file */
function DownloadTheme() {
	wordfilter2 = getComputedStyle(document.querySelector('html')).getPropertyValue("--wordmark-filter2")
	if ( wordfilter2 == "" ) {
		wordfilter2 == 'initial'
	}
	result = '.theme-A[visualcolors="standard"] {\n' + // Beginning
			 '--background-image:' + getComputedStyle(document.querySelector('html')).getPropertyValue("--background-image")  + ';\n' +
			 '--background-color:' + getComputedStyle(document.querySelector('html')).getPropertyValue("--background-color")  + ';\n' +
			 '--body-display:' + getComputedStyle(document.querySelector('html')).getPropertyValue("--body-display")  + ';\n' +
			 '--background-va:' + getComputedStyle(document.querySelector('html')).getPropertyValue("--background-va")  + ';\n' +
			 '--background-size:' + getComputedStyle(document.querySelector('html')).getPropertyValue("--background-size")  + ';\n' +
			 '--background-no-tiling:' + getComputedStyle(document.querySelector('html')).getPropertyValue("--background-no-tiling")  + ';\n' +
			 '--link-color:' + getComputedStyle(document.querySelector('html')).getPropertyValue("--link-color")  + ';\n' +
			 '--content-bg:' + getComputedStyle(document.querySelector('html')).getPropertyValue("--content-bg")  + ';\n' +
			 '--content-border:' + getComputedStyle(document.querySelector('html')).getPropertyValue("--content-border")  + ';\n' +
			 '--content-color:' + getComputedStyle(document.querySelector('html')).getPropertyValue("--content-color")  + ';\n' +
			 '--button-color:' + getComputedStyle(document.querySelector('html')).getPropertyValue("--button-color")  + ';\n' +
			 '--community-header-bg:' + getComputedStyle(document.querySelector('html')).getPropertyValue("--community-header-bg")  + ';\n' +
			 '--floating-header-bg:' + getComputedStyle(document.querySelector('html')).getPropertyValue("--floating-header-bg")  + ';\n' +
			 '--caret-color:' + getComputedStyle(document.querySelector('html')).getPropertyValue("--caret-color")  + ';\n' +
			 '--custom-secondary-font:' + getComputedStyle(document.querySelector('html')).getPropertyValue("--custom-secondary-font")  + ';\n' +
			 '--border-radius:' + getComputedStyle(document.querySelector('html')).getPropertyValue("--border-radius")  + ';\n' +
			 '--wordmark-filter:' + getComputedStyle(document.querySelector('html')).getPropertyValue("--wordmark-filter")  + ';\n' +
			 '--wordmark-filter2:' + wordfilter2  + ';\n' +
			 '--wordmark-filter-duration:' + getComputedStyle(document.querySelector('html')).getPropertyValue("--wordmark-filter-duration")  + ';\n' +
			 '--wordmark-filter-delay:' + getComputedStyle(document.querySelector('html')).getPropertyValue("--wordmark-filter-delay")  + ';\n' +
			 '}' // Ending
	DownloadData(result,'MyTheme','css');
	alert('Once you save the file, put the stylesheet contents to MpistoAgent.css for loading to other sessions or upload it to any website.');
}

/* Resets the Theme to defaults */
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

		ColorUpdate(true);
		UpdateMisc();
	}
}


function ResetThemeA() {
	if (confirm('Are you sure you want to reset theme A to the pre-set ones? This action cannot be undone') === true) {
			$("style.designer-style.theme-A").text('/* This CSS left intentionally blank */');	
		if ($("html.theme-A").length) {
			ColorUpdate(true);
			UpdateMisc();
		}
	}
}


function ResetThemeB() {
	if (confirm('Are you sure you want to reset theme B to the pre-set ones? This action cannot be undone') === true) {
			$("style.designer-style.theme-B").text('/* This CSS left intentionally blank */');	
		if ($("html.theme-B").length) {
			ColorUpdate(true);
			UpdateMisc();
		}
	}
}

function ResetThemeC() {
	if (confirm('Are you sure you want to reset theme C to the pre-set ones? This action cannot be undone') === true) {
			$("style.designer-style.theme-C").text('/* This CSS left intentionally blank */');	
		if ($("html.theme-C").length) {
			ColorUpdate(true);
			UpdateMisc();
		}
	}
}

function ResetThemeD() {
	if (confirm('Are you sure you want to reset theme D to the pre-set ones? This action cannot be undone') === true) {
			$("style.designer-style.theme-D").text('/* This CSS left intentionally blank */');	
		if ($("html.theme-D").length) {
			ColorUpdate(true);
			UpdateMisc();
		}
	}
}



function ResetThemes() {
	if (confirm('Are you sure you want to reset all themes to the pre-set ones? This action cannot be undone') === true) {
			$("style.designer-style.theme-A").text('/* This CSS left intentionally blank */');	
			$("style.designer-style.theme-B").text('/* This CSS left intentionally blank */');	
			$("style.designer-style.theme-C").text('/* This CSS left intentionally blank */');	
			$("style.designer-style.theme-D").text('/* This CSS left intentionally blank */');	

		ColorUpdate(true);
		UpdateMisc();
	}
}


function UpdateMisc() {
	if ($("body.options").length) {
		var sfont = getComputedStyle(document.querySelector('html')).getPropertyValue("--custom-secondary-font");
		if (sfont == '""') {
			var sfont = '';
		}

		var wfilter = getComputedStyle(document.querySelector('html')).getPropertyValue("--wordmark-filter");
		if (wfilter == 'initial') {
			var wfilter = '';
		}
		var wfilter2 = getComputedStyle(document.querySelector('html')).getPropertyValue("--wordmark-filter2");
		if (wfilter2 == 'initial') {
			var wfilter2 = '';
		}

		$('input.font_2nd').val( sfont );
		$('input.button_radi').val( parseInt( getComputedStyle(document.querySelector('html')).getPropertyValue("--border-radius") ) );
		$('input.filter1').val( wfilter );
		$('input.filter2').val( wfilter2 );
		var x = $('input.filter_duration').val( parseInt( getComputedStyle(document.querySelector('html')).getPropertyValue("--wordmark-filter-duration") ) );
		var x = $('input.filter_delay').val( parseInt( getComputedStyle(document.querySelector('html')).getPropertyValue("--wordmark-filter-delay") ) );
	}
}


/* Begin Color Parsers */
function ColorTestTwin(color,color2,intensity=1,inter='hsl') {
	return chroma.mix(color,color2,MW18HoverThreshold*intensity, inter);
}

function ColorTest(color,text=false) {

	if (isLightColor(color)) {
		if (text === true) {
			return '#0e191a'; // Was #000000
		} else {
			return ColorTestTwin(color,'#000000',0.6);
		}
	} else {
		if (text === true) {
			return '#ffffff';
		} else {
			return ColorTestTwin(color,'#ffffff');
		}
	}


}

function SuperColorTest(color) {
	if (isLightColor(color)) {
		var mix = ColorTestTwin(color,'#000000',0.6);
		return ColorTestTwin(mix,'#000000',0.6);
	} else {
		var mix = ColorTestTwin(color,'#ffffff');
		return ColorTestTwin(mix,'#ffffff');
	}
}




// Only used for link and header colors
function ColorTest2(color,text=false) {
	return Color2(ColorTest(color,text));
}


function SuperColorTest2(color) {
return Color2(SuperColorTest(color));
}


// Conversion for R,G,B syntax
function Color2(color) {
	return chroma(color).get('rgb.r') + ',' + chroma(color).get('rgb.g') + ',' + chroma(color).get('rgb.b');
}

// Conversion for Hex
function Color3(r=0,g=0,b=0) {
	return chroma('rgb(' + r + ',' + g + ',' + b + ')' ).get('hex');
}


function isLightColor(color) {
	return ((chroma.contrast('#0e191a', color)) > MW18LightThreshold*0.09);
}

function isSuperLightColor(color) {
	return ((chroma.contrast('#0e191a', color)) > window.MW18LightThreshold*0.126);
}


function isSuitableColor(color,color2) {
return ((chroma.contrast(color, color2)) > MW18LightThreshold*0.06)
}

function isSuitableColor2(color,color2) {
return ((chroma.contrast(color, color2)) > MW18LightThreshold*0.03) // For Border Color
}


/* # is added automatically so no need to be used. Only hex values please when editing this function */
function CompileRecColors() {
	let str = '';
// Body Background Color
	str = '';
//	var Colors = ['f9ebc3','ede5dd','f7e1d3','dfdbc3','fbe300','ffbf99','fdc355','cdbd89','d5a593','a37719','836d35','776b41','f14700','dd3509','a34111','7b3b09', '4f4341','454545','611d03','891100','71130f','ebfffb','ebf1f5','f5ebf5','e7f3d1','bde9fd','dfbddd','c3d167','a5b5c5','6599ff','6b93b1','978f33','53835d','7f6f9f','d335f7','337700','006baf','2b53b5','2d2b17','003715','012d59','6f017b','790145','ffffff','f1f1f1','ebebeb','000000']
	var Colors = ['1d1d1d','8d0017','ac0000','d34500','eb9900','ffb317','7d9b34','5ea200','417800','1d5100','003c00','44a177','008d8f','00a8a9','009bf0','0068b7','003981','091a45','180052','490090','711993','8d37af','8c005a','ab0064','ea0098','5e5e5e','be0021','f73400','ff892b','ffc12c','ffc91a','8acb00','6db000','169900','58cc7d','00d1d2','41c3ff','008ee1','00baff','0075c6','4617b4','6800b3','a13bc9','bd56e5','c02883','f900a5','ff5fdc','e2e2e2']
	var socialAM = Colors.length

	for (let i = 0; i < socialAM; i++) {
	  var color = Colors[i];
	  var data = '<button class="cpe-button cpe-is-square color-button" onclick="PickColor1(' + "'#" + color + "'" + ')"> <div style="border:1px solid; width:inherit; height:inherit; pointer-events:none; border-radius:50%; background-color:' + "#" +  color + ';"></div> </button>'
	  str = str + data;
	}

	$(".rec-colors-body").append(str);


// Header Color
	str = '';
//	var Colors = ['fec356','6699ff','6c93b1','a47719','846d35','786c42','f14800','337800','006cb0','dd360a','a34112','474646','7b3b0a','4f4341','0038d8','2d2c18','611e03','003816','891100','012e59','721410','6f027c','7a0146'] 
	var Colors = ['ffb900','ff8c00','f7630c','ca5010','da3b01','ef6950','d13438','ff4343','e74856','e81023','ea005e','c30052','c30052','bf0077','c239b3','9a0089','0078d7','0063b1','8e8cd8','6b69d6','8764b8','744da9','b146c2','881798','0099bc','2d7d9a','00b7c3','028387','00b294','018574','00cc6a','10893e','7a7574','5d5a58','68768a','515c6b','567c73','486860','498205','107c10','767676','4c4a48','69797e','4a5459','647c64','525e54','847545','7e735f'] 

	var socialAM = Colors.length

	for (let i = 0; i < socialAM; i++) {
	  var color = Colors[i];
	  var data = '<button class="cpe-button cpe-is-square color-button" onclick="PickColor2(' + "'#" + color + "'" + ')"> <div style="border:1px solid; width:inherit; height:inherit; pointer-events:none; border-radius:50%; background-color:' + "#" +  color + ';"></div> </button>'
	  str = str + data;
	}

	$(".rec-colors-header").append(str);

// Floating Header Color
	str = '';
//	var Colors = ['fec356','6699ff','6c93b1','a47719','846d35','786c42','f14800','337800','006cb0','dd360a','a34112','474646','7b3b0a','4f4341','0038d8','2d2c18','611e03','003816','891100','012e59','721410','6f027c','7a0146'] 
	var Colors = ['ababab','8acfff','f598d6','f3d240','add85f','78d9d9','ffaf51','ff6f6f','f359a8','47cf74','c48aff','58b1fc','9898ff','c3b5a8','ffffff','576dcd','4074ff','4099e1','40b2cc','40c5ae','40c280','9bcc3f','fce840','f98a48','e1676a','ed4c5a','ef4086','bc3b8c','7e73a5','879289'] 

	var socialAM = Colors.length

	for (let i = 0; i < socialAM; i++) {
	  var color = Colors[i];
	  var data = '<button class="cpe-button cpe-is-square color-button" onclick="PickColor9(' + "'#" + color + "'" + ')"> <div style="border:1px solid; width:inherit; height:inherit; pointer-events:none; border-radius:50%; background-color:' + "#" +  color + ';"></div> </button>'
	  str = str + data;
	}

	$(".rec-colors-floating-header").append(str);


// Page Background Color
	str = '';
//	var Colors = ['ebf2f5','e7f4d2','f5ebf5','f9ecc3','eee5de','f7e1d4','d4e6f7','dfdbc3','dfbddd','cebe8a','a5b5c6','474646','2d2c18','611e03','012e59','ffffff','f2f2f2','ebebeb','000000'] 
	var Colors = ['000000','ffffff','dcdcdc','787878','464646','0a3b76','4395d1','99d9ea','0076a3','0d686b','00a99d','00a99d','7accc8','82ca9c','74a402','c4df9b','84871c','d9d56f','fff468','fff799','ffc20e','eb6119','fbaf5d','e57300','c14000','9e6b52','8c6239','c7b299','b82832','d85171','fedfec','563f7f','a186be','d9cfe5']
	var socialAM = Colors.length

	for (let i = 0; i < socialAM; i++) {
	  var color = Colors[i];
	  var data = '<button class="cpe-button cpe-is-square color-button" onclick="PickColor3(' + "'#" + color + "'" + ')"> <div style="border:1px solid; width:inherit; height:inherit; pointer-events:none; border-radius:50%; background-color:' + "#" +  color + ';"></div> </button>'
	  str = str + data;
	}

	$(".rec-colors-cnbg").append(str);

// Page Background Text Color
	str = '';
//    var Colors = ['ffffff','8e8e8e','000000','e2e2e2','cccccc','2e2e2e','f2f5f5','bed1cf','0e191a','e6ecf2','c5ced9','39424d']
	var Colors = ['000000','3a3a3a','bfbfbf','e6e6e6','ffffff','ff0000','00ff00','0000ff','ffff00','ff00ff','00ffff']
	var socialAM = Colors.length

	for (let i = 0; i < socialAM; i++) {
	  var color = Colors[i];
	  var data = '<button class="cpe-button cpe-is-square color-button" onclick="PickColor4(' + "'#" + color + "'" + ')"> <div style="border:1px solid; width:inherit; height:inherit; pointer-events:none; border-radius:50%; background-color:' + "#" +  color + ';"></div> </button>'
	  str = str + data;
	}

	$(".rec-colors-cntxt").append(str);

// Page Background Border Color
	str = '';
//    var Colors = ['ffffff','8e8e8e','000000','e2e2e2','cccccc','2e2e2e','f2f5f5','bed1cf','0e191a','e6ecf2','c5ced9','39424d']
	  var Colors = ['808080','cccccc','6e6e6e','3c3c3c','a3a3a3','800000','008000','000080','808000','800080','008080']
	var socialAM = Colors.length

	for (let i = 0; i < socialAM; i++) {
	  var color = Colors[i];
	  var data = '<button class="cpe-button cpe-is-square color-button" onclick="PickColor5(' + "'#" + color + "'" + ')"> <div style="border:1px solid; width:inherit; height:inherit; pointer-events:none; border-radius:50%; background-color:' + "#" +  color + ';"></div> </button>'
	  str = str + data;
	}

	$(".rec-colors-cnbrd").append(str);



// Link Color
	str = '';
//	var Colors = ['fce300','fec356','c4d167','6699ff','6c93b1','a47719','54845e','337800','006cb0','0148c2','6f027c','ffffff'] 
	var Colors = ['00ff00','8080ff','c0c0c0','000000','ffffff','ffff00','77ffff','00007f','600000','ff0000','952aab','ff0066','fa6d6d','00ffff','ccffff','c056a2','ff6ec7','ff7f00','8e236b','7f500d','0366cc','fbf305','ff6403','dd0907','f20884','4700a5','0000d3','02abea','1fb714','006412','562c05','90713a','404040','117dbb','8b12ae','4da60c','a74f01'] 
	var socialAM = Colors.length

	for (let i = 0; i < socialAM; i++) {
	  var color = Colors[i];
	  var data = '<button class="cpe-button cpe-is-square color-button" onclick="PickColor6(' + "'#" + color + "'" + ')"> <div style="border:1px solid; width:inherit; height:inherit; pointer-events:none; border-radius:50%; background-color:' + "#" +  color + ';"></div> </button>'
	  str = str + data;
	}

	$(".rec-colors-link").append(str);


// Button Color
	str = '';
//	var Colors = ['fec356','6699ff','6c93b1','a47719','846d35','786c42','f14800','337800','006cb0','dd360a','a34112','474646','7b3b0a','4f4341','0038d8','2d2c18','611e03','003816','891100','012e59','721410','6f027c','7a0146'] 
	var Colors = ['ff8c00','e81123','d13438','c30052','bf0077','9a0089','881798','744da9','10893e','107c10','018574','2d7d9a','0063b1','6b69d6','8e8cd8','8764b8','038387','486860','525e54','7e735f','4c4a48','515c6b','4a5459','000000','ffffff']
	var socialAM = Colors.length

	for (let i = 0; i < socialAM; i++) {
	  var color = Colors[i];
	  var data = '<button class="cpe-button cpe-is-square color-button" onclick="PickColor7(' + "'#" + color + "'" + ')"> <div style="border:1px solid; width:inherit; height:inherit; pointer-events:none; border-radius:50%; background-color:' + "#" +  color + ';"></div> </button>'
	  str = str + data;
	}

	$(".rec-colors-button").append(str);


// Caret Color
	str = '';
	var Colors = ['bfff00','fafa00','ffbf00','ff00bf','00bfff','00ffbf','bf00ff']
	var socialAM = Colors.length

	for (let i = 0; i < socialAM; i++) {
	  var color = Colors[i];
	  var data = '<button class="cpe-button cpe-is-square color-button" onclick="PickColorCc(' + "'#" + color + "'" + ')"> <div style="border:1px solid; width:inherit; height:inherit; pointer-events:none; border-radius:50%; background-color:' + "#" +  color + ';"></div> </button>'
	  str = str + data;
	}

	$(".rec-colors-caret").append(str);


}

function CompileChosenThems() {
// Selection Themes
	var highlightedItems = document.querySelectorAll(".preview-theme-wrapper.selection-theme, .preview-theme-wrapper.visual-theme");
	highlightedItems.forEach(function(x) {
	var text_color2 =	getComputedStyle(x).getPropertyValue("--window-color");
	var text_color =	getComputedStyle(x).getPropertyValue("--content-color"); // --window_text for non selection
	var header_color =	getComputedStyle(x).getPropertyValue("--header-color");
	x.style.setProperty("--bg-border", getComputedStyle(document.querySelector('body')).getPropertyValue("--content-border") );
	x.style.setProperty("--header-color-dark", ColorTest(header_color));
	x.style.setProperty("--header-text", ColorTest(header_color,true));
	if (text_color == "auto") {
		x.style.setProperty("--window-text", ColorTest(text_color2,true));
	} else {
		x.style.removeProperty("--window-text");
	}
	});

// Other Themes
	var highlightedItems = document.querySelectorAll(".preview-theme-wrapper:not(.custom-theme):not(.selection-theme)");
	highlightedItems.forEach(function(x) {
	var text_color2 =	getComputedStyle(x).getPropertyValue("--window-color");
	var text_color =	getComputedStyle(x).getPropertyValue("--window_text");
	var header_color =	getComputedStyle(x).getPropertyValue("--header-color");
	x.style.setProperty("--bg-border", getComputedStyle(document.querySelector('body')).getPropertyValue("--content-border") );
	x.style.setProperty("--header-color-dark", ColorTest(header_color));
	x.style.setProperty("--header-text", ColorTest(header_color,true));
	if (text_color === 'auto') {
		x.style.setProperty("--window-text", ColorTest(text_color2,true));
	}
	});
}

function SocialCompile() {
	$("head .social-colors").text('');	
	let str = '';
	var socialV = ['facebook','googleplus','line','linkedin','instagram','meneame','nk','odnoklassniki','reddit','tumblr','twitter','vkontakte','wykop','weibo','youtube','discord','fandom','asecure','steam','spotify','twitch','qore','mpisto','splashhol','gamepedia','info','success','warning','alert','github','xbox']
	var socialC = ['#3b5998','#dd4b39','#00c300','#0077b5','#e02d69','#ff6400','#4077a7','#f96900','#ff4500','#34465d','#1da1f2','#587ca3','#fb803f','#ff8140','#cd201f','#5865f2','#00acac','#0009FF','#000','#1ed760','#563194','#ff4500','#18bbc5','#61448d','#f4801f','#575859','#14866d','#ffcc33','#dd3333','#191717','#5dc21e']
	var socialAM = socialC.length
// Start Content BG
		if ( (window.MW18darkmode === true) ) {
		// Adaptive
			var content_color =	getComputedStyle(document.querySelector('body')).getPropertyValue("--content-bg");
		//End Adaptive
		} else {
			var content_color =	getComputedStyle(document.querySelector('html')).getPropertyValue("--content-bg");
		}
// End Content BG

	for (let i = 0; i < socialAM; i++) {
	  var color = socialC[i];
	  var colormixl = ColorTestTwin(content_color,color,0.8,'rgb');
      var colormix = ColorTestTwin(content_color,color,1.6,'rgb');
	  var name = socialV[i];
	  var data = '.cpe-button.cpe-is-' + name + '-color{' +'--button-color:' + color + '!important;' + '--button-color-dark:' + ColorTest(color,false) + '!important;' + '--button-color-dark-super:' + SuperColorTest(color,false) + '!important;' + '--button-color-text:' + ColorTest(color,true) + '!important;' + '--button-color-text-dark:' + ColorTest(ColorTest(color,true),false) + '!important;' + '--button-color-content-bg-mix-light:' + colormixl + '!important;' + '--button-color-content-bg-mix:' + colormix + '!important;' + '}'
	  str = str + data;
	}

	$("head .social-colors").append(str);

}

/* End Color Parsers */


/* Used to udpate all dynamical variables */
function ColorUpdate(refresh) {
/** Page BG **/
/* Set Vars */
// content_text is Content Color
// content_text4 is Text color of Content Color
// content_text5 is Dark text color of Content Color
// content_color is Content Bg
// dropdowncolor is Dropdown Bg
// dropdowncolor3 is Automatic Content Color
// dropdowncolor2 is Content Border
if ( (window.MW18darkmode === true) ) {
	var content_text =	getComputedStyle(document.querySelector('html')).getPropertyValue("--content-bg");
// Adaptive
	if (getComputedStyle(document.querySelector('html')).getPropertyValue("--content-color") === 'auto') {
		var content_color = ColorTest(content_text,true);
	} else {
		var content_color =	getComputedStyle(document.querySelector('html')).getPropertyValue("--content-color");
	}
//End Adaptive
} else {
	var content_color =	getComputedStyle(document.querySelector('html')).getPropertyValue("--content-bg");
	var content_text =	getComputedStyle(document.querySelector('html')).getPropertyValue("--content-color");
}

var content_color2 = ColorTest(content_color);
var content_color3 = SuperColorTest(content_color); // Scrollbar


if ((getComputedStyle(document.querySelector('html')).getPropertyValue("--content-color") === 'auto') && !($("html.contrast.win10").length)  ) {
	var dropdowncolor3 = ColorTest(content_color,true);;	
} else {
	var dropdowncolor3 = getComputedStyle(document.querySelector('html')).getPropertyValue("--content-color");
}
if (isSuperLightColor(content_color) && (false)) {
	var dropdowncolor = '#ffffff';
	if ((getComputedStyle(document.querySelector('html')).getPropertyValue("--content-border") === 'auto') && !($("html.contrast.win10").length)  ) {
		var dropdowncolor2 = chroma.mix(content_color,'#000000',MW18HoverThreshold*1.32, 'hsv');
	} else {
		var dropdowncolor2 = getComputedStyle(document.querySelector('html')).getPropertyValue("--content-border");
	}

	
} else if (isLightColor(content_color)) {
	var dropdowncolor = chroma.mix(content_color,'#000000',MW18HoverThreshold*0.4, 'hsv');
	if ((getComputedStyle(document.querySelector('html')).getPropertyValue("--content-border") === 'auto') && !($("html.contrast.win10").length)  ) {
		var dropdowncolor2 = chroma.mix(content_color,'#000000',MW18HoverThreshold*2.4, 'hsv');
	} else {
		var dropdowncolor2 = getComputedStyle(document.querySelector('html')).getPropertyValue("--content-border");
	}

} else {
	var dropdowncolor = chroma.mix(content_color,'#ffffff',MW18HoverThreshold*0.4, 'hsv');
	if ((getComputedStyle(document.querySelector('html')).getPropertyValue("--content-border") === 'auto') && !($("html.contrast.win10").length)  ) {
		var dropdowncolor2 = chroma.mix(content_color,'#ffffff',MW18HoverThreshold*2.4, 'hsv');
	} else {
		var dropdowncolor2 = getComputedStyle(document.querySelector('html')).getPropertyValue("--content-border");
	}

}

var dropdowncolorD = ColorTest(dropdowncolor);

if (getComputedStyle(document.querySelector('html')).getPropertyValue("--content-color") != 'auto') {
	var content_text2 = ColorTest(content_text);
	var content_text3 = SuperColorTest(content_text); // Scrollbar
	var content_text4 = ColorTest(content_text,true);
	var content_text5 = ColorTest(content_text4,false);
	colormixl = ColorTestTwin(content_color,content_text,0.8,'rgb');
	colormix = ColorTestTwin(content_color,content_text,1.6,'rgb');
} else {
	var content_text2 = ColorTest(dropdowncolor3);
	var content_text3 = SuperColorTest(dropdowncolor3); // Scrollbar
	var content_text4 = ColorTest(dropdowncolor3,true);
	var content_text5 = ColorTest(content_text4,false);
	colormixl = ColorTestTwin(content_color,dropdowncolor3,0.8,'rgb');
	colormix = ColorTestTwin(content_color,dropdowncolor3,1.6,'rgb');
}


if (window.MW18darkmode === true) {
	contentcolorB = content_text
	contentbgB = content_color
} else {
	contentcolorB = dropdowncolor3
	contentbgB = getComputedStyle(document.querySelector('html')).getPropertyValue("--content-bg");
}

if (isLightColor( contentcolorB )) {
var color_blend = contentcolorB
var color_blend2 = content_text2
} else {
var color_blend = content_text2
var color_blend2 = contentcolorB
}


/** Button Color **/
/* Set Vars */
var button_color = getComputedStyle(document.querySelector('html')).getPropertyValue("--button-color");
var buttoncolor1 = ColorTest(button_color,false);
var buttoncolor2 = ColorTest(button_color,true);
var buttoncolor2t = ColorTest(buttoncolor2,false);
var buttoncolor3 = SuperColorTest(button_color); // Scrollbar


if (isLightColor(button_color)) {
var button_blend = button_color
var button_blend2 = buttoncolor1
} else {
var button_blend = buttoncolor1
var button_blend2 = button_color
}

buttonmixl = ColorTestTwin(content_color,button_color,0.8,'rgb');
buttonmix = ColorTestTwin(content_color,button_color,1.6,'rgb');



/** Header Color **/
/* Set Vars */
var header_color = getComputedStyle(document.querySelector('html')).getPropertyValue("--community-header-bg");
var headercolor1 = ColorTest(header_color,false);
var headercolor2 = ColorTest(header_color,true);
var headercolor2t = ColorTest(headercolor2,false);
var headercolor3 = SuperColorTest(header_color); // Scrollbar

if (isLightColor(header_color)) {
var header_blend = header_color
var header_blend2 = headercolor1
} else {
var header_blend = headercolor1
var header_blend2 = header_color
}

headermixl = ColorTestTwin(content_color,header_color,0.8,'rgb');
headermix = ColorTestTwin(content_color,header_color,1.6,'rgb');


/** Link Color **/
/* Set Vars */
var link_color = getComputedStyle(document.querySelector('html')).getPropertyValue("--link-color");
var linkcolor1 = ColorTest(link_color,false);
var linkcolor2 = ColorTest(link_color,true);
var linkcolor2t = ColorTest(linkcolor2,false);
var linkcolor3 = SuperColorTest(link_color); // Scrollbar



if (isLightColor(link_color)) {
var link_blend = link_color
var link_blend2 = linkcolor1
} else {
var link_blend = linkcolor1
var link_blend2 = link_color
}

linkmixl = ColorTestTwin(content_color,link_color,0.8,'rgb');
linkmix = ColorTestTwin(content_color,link_color,1.6,'rgb');



/** Content Border **/
/* Set Vars */
if ((getComputedStyle(document.querySelector('html')).getPropertyValue("--content-border") === 'auto') && !($("html.contrast.win10").length)  ) {
	var border_color =	dropdowncolor2
} else {
	var border_color =	getComputedStyle(document.querySelector('html')).getPropertyValue("--content-border");
}

var bordercolor1 = ColorTest(border_color,false);
var bordercolor3 = SuperColorTest(border_color); // Scrollbar
var bordercolor2 = ColorTest(border_color,true);
var bordercolor2t = ColorTest(bordercolor2,false);


if (isLightColor(border_color)) {
var border_blend = border_color
var border_blend2 = bordercolor1
} else {
var border_blend = bordercolor1
var border_blend2 = border_color

}

bordermixl = ColorTestTwin(content_color,border_color,0.8,'rgb');
bordermix = ColorTestTwin(content_color,border_color,1.6,'rgb');


/** Body Bg **/
/* Set Vars */
var head_color =	getComputedStyle(document.querySelector('html')).getPropertyValue("--background-color");
var headcolor1 = ColorTest(head_color,false);
var headcolor3 = SuperColorTest(head_color); // Scrollbar
var headcolor2 = ColorTest(head_color,true);
var headcolor2t = ColorTest(headcolor2,false);

if (isLightColor(head_color)) {
var head_blend = head_color
var head_blend2 = headcolor1
} else {
var head_blend = headcolor1
var head_blend2 = head_color
}

headmixl = ColorTestTwin(content_color,head_color,0.8,'rgb');
headmix = ColorTestTwin(content_color,head_color,1.6,'rgb');


/* Floating Header Bg */
if ((getComputedStyle(document.querySelector('html')).getPropertyValue("--floating-header-bg") !== 'auto') && !($("html.contrast.win10").length)  ) {
	var floating_header =	getComputedStyle(document.querySelector('html')).getPropertyValue("--floating-header-bg");
} else {
	var floating_header = ColorTestTwin(content_color,ColorTestTwin(header_color,button_color,1,'rgb'),2.5,'rgb');
}

var floating_color =floating_header;


var floatingcolor1 = ColorTest(floating_color,false);
var floatingcolor3 = SuperColorTest(floating_color); // Scrollbar
var floatingcolor2 = ColorTest(floating_color,true);
var floatingcolor2t = ColorTest(floatingcolor2,false);

if (isLightColor(floating_color)) {
var floating_blend = floating_color
var floating_blend2 = floatingcolor1
} else {
var floating_blend = floatingcolor1
var floating_blend2 = floating_color
}

floatmixl = ColorTestTwin(content_color,floating_color,0.8,'rgb');
floatmix = ColorTestTwin(content_color,floating_color,1.6,'rgb');

/* Info, Success, Warning and Alert color mixes */
// Info
infomixl = ColorTestTwin(content_color,'#575859',0.8,'rgb');
infomix = ColorTestTwin(content_color,'#575859',1.6,'rgb');
// Success
successmixl = ColorTestTwin(content_color,'#14866d',0.8,'rgb');
successmix = ColorTestTwin(content_color,'#14866d',1.6,'rgb');
// Wanring
warningmixl = ColorTestTwin(content_color,'#ffcc33',0.8,'rgb');
warningmix = ColorTestTwin(content_color,'#ffcc33',1.6,'rgb');
// Alert
alertmixl = ColorTestTwin(content_color,'#dd3333',0.8,'rgb');
alertmix = ColorTestTwin(content_color,'#dd3333',1.6,'rgb');




/* Emphasis Themes */
var emphasiscolor = chroma.mix(content_color, chroma.mix(border_color, link_color, MW18HoverThreshold*2.5), MW18HoverThreshold*2.5);
var emphasiscolor2 = ColorTest(emphasiscolor,true);
var emphasiscolor2t = ColorTest(emphasiscolor2,false);
var accentcolor = chroma.mix(chroma.mix(content_color, border_color, MW18HoverThreshold*2.5), button_color, MW18HoverThreshold*2.5);
var accentcolor2 = ColorTest(accentcolor,true);
var accentcolor2t = ColorTest(accentcolor2,false);

/* Writing */
var result = ':root {\n' + 
			'--dropdown-bg:' + dropdowncolor + ';\n' +
			'--dropdown-bg-dark:' + dropdowncolorD + ';\n' +
			'--content-bg-dark:' + content_color2 + ';\n' +
			'--content-bg-dark-super:' + content_color3 + ';\n' +
			'--content-color-dark:' + content_text2 + ';\n' +
			'--content-color-dark-super:' + content_text3 + ';\n' +
			'--content-color-text:' + content_text4 + ';\n' +
			'--content-color-text-dark:' + content_text5 + ';\n' +
			'--content-color-content-bg-mix-light:' + colormixl + ';\n' +
			'--content-color-content-bg-mix:' + colormix + ';\n' +
			'--content-color-blend-light:' + color_blend + ';\n' +
			'--content-color-blend:' + color_blend2 + ';\n' +
			'--dropdown-bg-rgb:' + Color2(dropdowncolor) + ';\n' +
			'--content-bg-rgb:' + Color2(contentbgB) + ';\n' +
			'--content-bg-dark-rgb:' + Color2(content_color2) + ';\n' +
			'--content-bg-dark-super-rgb:' + Color2(content_color3) + ';\n' +
			'--content-color-rgb:' + Color2(contentcolorB) + ';\n' +
			'--content-color-dark-rgb:' + Color2(content_text2) + ';\n' +
			'--content-color-dark-super-rgb:' + Color2(content_text3) + ';\n' +
			'--content-color-text-rgb:' + Color2(content_text4) + ';\n' +
			'--content-color-text-dark-rgb:' + Color2(content_text5) + ';\n' +
			'--content-color-blend-light-rgb:' + Color2(color_blend) + ';\n' +
			'--content-color-blend-rgb:' + Color2(color_blend2) + ';\n' +
			'--button-color-dark:' + buttoncolor1 + ';\n' +
			'--button-color-dark-super:' + buttoncolor3 + ';\n' +
			'--button-color-text:' + buttoncolor2 + ';\n' +
			'--button-color-text-dark:' + buttoncolor2t + ';\n' +
			'--button-color-content-bg-mix-light:' + buttonmixl + ';\n' +
			'--button-color-content-bg-mix:' + buttonmix + ';\n' +
			'--button-color-blend-light:' + button_blend + ';\n' +
			'--button-color-blend:' + button_blend2 + ';\n' +
			'--button-color-rgb:' + Color2(button_color) + ';\n' +
			'--button-color-dark-rgb:' + Color2(buttoncolor1) + ';\n' +
			'--button-color-dark-super-rgb:' + Color2(buttoncolor3) + ';\n' +
			'--button-color-text-rgb:' + Color2(buttoncolor2) + ';\n' +
			'--button-color-text-dark-rgb:' + Color2(buttoncolor2t) + ';\n' +
			'--button-color-blend-light-rgb:' + Color2(button_blend) + ';\n' +
			'--button-color-blend-rgb:' + Color2(button_blend2) + ';\n' +
			'--community-header-dark:' + headercolor1 + ';\n' +
			'--community-header-dark-super:' + headercolor3 + ';\n' +
			'--community-header-text:' + headercolor2 + ';\n' +
			'--community-header-text-dark:' + headercolor2t + ';\n' +
			'--community-header-bg-content-bg-mix-light:' + headermixl + ';\n' +
			'--community-header-bg-content-bg-mix:' + headermix + ';\n' +
			'--community-header-bg-blend-light:' + header_blend + ';\n' +
			'--community-header-bg-blend:' + header_blend2 + ';\n' +
			'--community-header-bg-rgb:' + Color2(header_color) + ';\n' +
			'--community-header-dark-rgb:' + Color2(headercolor1) + ';\n' +
			'--community-header-dark-super-rgb:' + Color2(headercolor3) + ';\n' +
			'--community-header-text-rgb:' + Color2(headercolor2) + ';\n' +
			'--community-header-text-dark-rgb:' + Color2(headercolor2t) + ';\n' +
			'--community-header-bg-blend-light-rgb:' + Color2(header_blend) + ';\n' +
			'--community-header-bg-blend-rgb:' + Color2(header_blend2) + ';\n' +
			'--link-color-dark:' + linkcolor1 + ';\n' +
			'--link-color-dark-super:' + linkcolor3 + ';\n' +
			'--link-color-text:' + linkcolor2 + ';\n' +
			'--link-color-text-dark:' + linkcolor2t + ';\n' +
			'--link-color-content-bg-mix-light:' + linkmixl + ';\n' +
			'--link-color-content-bg-mix:' + linkmix + ';\n' +
			'--link-color-blend-light:' + link_blend + ';\n' +
			'--link-color-blend:' + link_blend2 + ';\n' +
			'--link-color-rgb:' + Color2(link_color) + ';\n' +
			'--link-color-dark-rgb:' + Color2(linkcolor1) + ';\n' +
			'--link-color-dark-super-rgb:' + Color2(linkcolor3) + ';\n' +
			'--link-color-text-rgb:' + Color2(linkcolor2) + ';\n' +
			'--link-color-text-dark-rgb:' + Color2(linkcolor2t) + ';\n' +
			'--link-color-blend-light-rgb:' + Color2(link_blend) + ';\n' +
			'--link-color-blend-rgb:' + Color2(link_blend2) + ';\n' +
			'--content-border-dark:' + bordercolor1 + ';\n' +
			'--content-border-dark-super:' + bordercolor3 + ';\n' +
			'--content-border-text:' + bordercolor2 + ';\n' +
			'--content-border-text-dark:' + bordercolor2t + ';\n' +
			'--content-border-content-bg-mix-light:' + bordermixl + ';\n' +
			'--content-border-content-bg-mix:' + bordermix + ';\n' +
			'--content-border-blend-light:' + border_blend + ';\n' +
			'--content-border-blend:' + border_blend2 + ';\n' +
			'--content-border-rgb:' + Color2(border_color) + ';\n' +
			'--content-border-dark-rgb:' + Color2(bordercolor1) + ';\n' +
			'--content-border-dark-super-rgb:' + Color2(bordercolor3) + ';\n' +
			'--content-border-text-rgb:' + Color2(bordercolor2) + ';\n' +
			'--content-border-text-dark-rgb:' + Color2(bordercolor2t) + ';\n' +
			'--content-border-blend-light-rgb:' + Color2(border_blend) + ';\n' +
			'--content-border-blend-rgb:' + Color2(border_blend2) + ';\n' +
			'--background-color-dark:' + headcolor1 + ';\n' +
			'--background-color-dark-super:' + headcolor3 + ';\n' +
			'--background-color-text:' + headcolor2 + ';\n' +
			'--background-color-text-dark:' + headcolor2t + ';\n' +
			'--background-color-content-bg-mix-light:' + headmixl + ';\n' +
			'--background-color-content-bg-mix:' + headmix + ';\n' +
			'--background-color-blend-light:' + head_blend + ';\n' +
			'--background-color-blend:' + head_blend2 + ';\n' +
			'--background-color-rgb:' + Color2(head_color) + ';\n' +
			'--background-color-dark-rgb:' + Color2(headcolor1) + ';\n' +
			'--background-color-dark-super-rgb:' + Color2(headcolor3) + ';\n' +
			'--background-color-text-rgb:' + Color2(headcolor2) + ';\n' +
			'--background-color-text-dark-rgb:' + Color2(headcolor2t) + ';\n' +
			'--background-color-blend-light-rgb:' + Color2(head_blend) + ';\n' +
			'--background-color-blend-rgb:' + Color2(head_blend2) + ';\n' +
			'--floating-header-dark:' + floatingcolor1 + ';\n' +
			'--floating-header-dark-super:' + floatingcolor3 + ';\n' +
			'--floating-header-text:' + floatingcolor2 + ';\n' +
			'--floating-header-text-dark:' + floatingcolor2t + ';\n' +
			'--floating-header-bg-content-bg-mix-light:' + floatmixl + ';\n' +
			'--floating-header-bg-content-bg-mix:' + floatmix + ';\n' +
			'--floating-header-bg-blend-light:' + floating_blend + ';\n' +
			'--floating-header-bg-blend:' + floating_blend2 + ';\n' +
			'--floating-header-bg-rgb:' + Color2(floating_color) + ';\n' +
			'--floating-header-dark-rgb:' + Color2(floatingcolor1) + ';\n' +
			'--floating-header-dark-super-rgb:' + Color2(floatingcolor3) + ';\n' +
			'--floating-header-text-rgb:' + Color2(floatingcolor2) + ';\n' +
			'--floating-header-text-dark-rgb:' + Color2(floatingcolor2t) + ';\n' +
			'--floating-header-bg-blend-light-rgb:' + Color2(floating_blend) + ';\n' +
			'--floating-header-bg-blend-rgb:' + Color2(floating_blend2) + ';\n' +
			'--info-color-content-bg-mix-light:' + infomixl + ';\n' +
			'--info-color-content-bg-mix:' + infomix + ';\n' +
			'--success-color-content-bg-mix-light:' + successmixl + ';\n' +
			'--success-color-content-bg-mix:' + successmix + ';\n' +
			'--warning-color-content-bg-mix-light:' + warningmixl + ';\n' +
			'--warning-color-content-bg-mix:' + warningmix + ';\n' +
			'--alert-color-content-bg-mix-light:' + alertmixl + ';\n' +
			'--alert-color-content-bg-mix:' + alertmix + ';\n' +
			'--emphasis-bg:' + emphasiscolor + ';\n' +
			'--emphasis-bg-text:' + emphasiscolor2 + ';\n' +
			'--emphasis-bg-text-dark:' + emphasiscolor2t + ';\n' +
			'--accent-bg:' + accentcolor + ';\n' +
			'--accent-bg-text:' + accentcolor2 + ';\n' +
			'--accent-bg-text-dark:' + accentcolor2t + ';\n' +
			'--emphasis-bg-rgb:' + Color2(emphasiscolor) + ';\n' +
			'--emphasis-bg-text-rgb' + Color2(emphasiscolor2) + ';\n' +
			'--emphasis-bg-text-dark-rgb:' + Color2(emphasiscolor2t) + ';\n' +
			'--accent-bg-rgb:' + Color2(accentcolor) + ';\n' +
			'--accent-bg-text-rgb:' + Color2(accentcolor2) + ';\n' +
			'--accent-bg-text-dark-rgb:' + Color2(accentcolor2t) + '\n' +
			'}' + '\n' +
			'body {' +
			'--content-bg:' + contentbgB + ';\n' +
			'--content-border:' + dropdowncolor2 + ';\n' +
			'--content-color:' + contentcolorB + ';\n' +
			'--floating-header-bg:' + floating_color + ';\n' +
			'}'

/* Write them to the stylesheet */
document.querySelector("head .theming").innerHTML =  result ;


ThemeColorMetaTag();

/* Cursor Theme */
if (refresh === true) {
	CheckBG()
	CheckAdapt()
	colortheme($('body').attr("wikitheme"))
	if ($("body.options").length) {
		UpdateSet();
	}
}
CheckDarkMode();
if ($("body.options").length) {
	CompileChosenThems()
}
SocialCompile();
if (window.MW18auto === true) {
CursorT('auto');
}
if (window.MW18autoDark === true) {
CursorT('auto-r');
}


}

function CheckColorSuitability() {
	if ($("body.options").length) {
		/* Check Contrast Colors */
		if (window.MW18darkmode === true) {
			var color2 = getComputedStyle(document.querySelector('body')).getPropertyValue("--content-color");
			var color1a  = getComputedStyle(document.querySelector('body')).getPropertyValue("--content-bg");
		} else {
			var color1a = getComputedStyle(document.querySelector('body')).getPropertyValue("--content-color");
			var color2  = getComputedStyle(document.querySelector('body')).getPropertyValue("--content-bg");
		}
		var color1b = getComputedStyle(document.querySelector('html')).getPropertyValue("--link-color");
		var color1c = getComputedStyle(document.querySelector('body')).getPropertyValue("--content-border");
		var color1d = getComputedStyle(document.querySelector('html')).getPropertyValue("--button-color");
		// Content Color
		if (isSuitableColor(color1a,color2)) {
			document.querySelector('label .color-warn').style.setProperty("--icon-display", "none");
		} else {
			document.querySelector('label .color-warn').style.setProperty("--icon-display", "inline");
		}
		// Link Color
		if (isSuitableColor(color1b, color2)) {
			document.querySelector('label .link-warn').style.setProperty("--icon-display", "none");
		} else {
			document.querySelector('label .link-warn').style.setProperty("--icon-display", "inline");
		}
		// Border Color
		if (isSuitableColor2(color1c, color2)) {
			document.querySelector('label .border-warn').style.setProperty("--icon-display", "none");
		} else {
			document.querySelector('label .border-warn').style.setProperty("--icon-display", "inline");
		}
		// Button Color
		if (isSuitableColor2(color1d, color2)) {
			document.querySelector('label .button-warn').style.setProperty("--icon-display", "none");
		} else {
			document.querySelector('label .button-warn').style.setProperty("--icon-display", "inline");
		}
	}
}


function CheckAdapt() {
		if ((getComputedStyle(document.querySelector('html')).getPropertyValue("--floating-header-bg") === 'auto') && !($("html.contrast.win10").length)  ) {
				$("body").attr('floating-header-bg-auto', 'true');
		} else {
				$("body").attr('floating-header-bg-auto', 'false');
		}
		if ((getComputedStyle(document.querySelector('html')).getPropertyValue("--content-border") === 'auto') && !($("html.contrast.win10").length)  ) {
				$("body").attr('content-border-auto', 'true');
		} else {
				$("body").attr('content-border-auto', 'false');
		}
		if ((getComputedStyle(document.querySelector('html')).getPropertyValue("--content-color") === 'auto') && !($("html.contrast.win10").length)  ) {
				$("body").attr('content-color-auto', 'true');
		} else {
				$("body").attr('content-color-auto', 'false');
		}
		if ((getComputedStyle(document.querySelector('html')).getPropertyValue("--caret-color") === 'auto') && !($("html.contrast.win10").length)  ) {
				$("body").attr('caret-color-auto', 'true');
		} else {
				$("body").attr('caret-color-auto', 'false');
		}
//	ColorUpdate(false);
}

/* Different with the ToggleBG function, only one is present for all three */
function CheckBG() {
	if ($("body.options").length   && !($("html.contrast.win10").length) ) { // Don't run if not on Preferences Page
	/* BG */ // Background Style
		if ((getComputedStyle(document.querySelector('html')).getPropertyValue("--body-display") === 'legacy') && !($("html.contrast.win10").length)  ) {
				document.querySelector('input#BG_2').checked = true;
				document.querySelector('input#BG_1').checked = false;
				$(".legacy-off").attr('disabled', 'true');
				$(".modern-off").removeAttr('disabled');
		} else {
				$(".legacy-off").removeAttr('disabled');
				$(".modern-off").attr('disabled', 'true');
				document.querySelector('input#BG_1').checked = true;
				document.querySelector('input#BG_2').checked = false;
		}
	/* BG1 */ // Background Vertical Alingment
		if ((getComputedStyle(document.querySelector('html')).getPropertyValue("--background-va") === 'center') && !($("html.contrast.win10").length)  ) {
				document.querySelector('input#BG1_2').checked = true;
				document.querySelector('input#BG1_1').checked = false;
				document.querySelector('input#BG1_3').checked = false;
		} else if ((getComputedStyle(document.querySelector('html')).getPropertyValue("--background-va") === 'bottom') && !($("html.contrast.win10").length)  ) {
				document.querySelector('input#BG1_3').checked = true;
				document.querySelector('input#BG1_1').checked = false;
				document.querySelector('input#BG1_2').checked = false;
		} else {
				document.querySelector('input#BG1_1').checked = true;
				document.querySelector('input#BG1_2').checked = false;
				document.querySelector('input#BG1_3').checked = false;
		}
	/* BG2 */ // Background Tiling
		if ((getComputedStyle(document.querySelector('html')).getPropertyValue("--background-no-tiling") === 'true') && !($("html.contrast.win10").length)  ) {
				document.querySelector('input#BG2').checked = true;
		} else {
				document.querySelector('input#BG2').checked = false;
		}
	/* BG3 */
	/*
	**
	cover-off items are disabled when background-size is on Cover
	stretch-off items are disabled when background-size is on Stretched
	noncover-off items are enabled only if background-size is on Cover
	noncover-off items are enabled only if background-size is on Cover
	**
	*/
		if ((getComputedStyle(document.querySelector('html')).getPropertyValue("--background-size") === 'contain') && !($("html.contrast.win10").length)  ) {
				document.querySelector('input#BG3_2').checked = true;
				document.querySelector('input#BG3_1').checked = false;
				document.querySelector('input#BG3_3').checked = false;
				document.querySelector('input#BG3_4').checked = false;
				$(".cover-off").removeAttr('disabled');
				$(".stretch-off").removeAttr('disabled');
				$(".noncover-off").attr('disabled', 'true');
		} else if ((getComputedStyle(document.querySelector('html')).getPropertyValue("--background-size") === 'stretched') && !($("html.contrast.win10").length)  ) {
				document.querySelector('input#BG3_3').checked = true;
				document.querySelector('input#BG3_1').checked = false;
				document.querySelector('input#BG3_2').checked = false;
				document.querySelector('input#BG3_4').checked = false;
				$(".cover-off").removeAttr('disabled');
				$(".stretch-off").attr('disabled', 'true');
				$(".noncover-off").attr('disabled', 'true');
		} else if ((getComputedStyle(document.querySelector('html')).getPropertyValue("--background-size") === 'full') && !($("html.contrast.win10").length)  ) {
				document.querySelector('input#BG3_4').checked = true;
				document.querySelector('input#BG3_1').checked = false;
				document.querySelector('input#BG3_2').checked = false;
				document.querySelector('input#BG3_3').checked = false;
				$(".cover-off").removeAttr('disabled');
				$(".stretch-off").removeAttr('disabled');
				$(".noncover-off").attr('disabled', 'true');
		} else { // Cover
				document.querySelector('input#BG3_1').checked = true;
				document.querySelector('input#BG3_2').checked = false;
				document.querySelector('input#BG3_3').checked = false;
				document.querySelector('input#BG3_4').checked = false;
				$(".noncover-off").removeAttr('disabled');
				$(".stretch-off").removeAttr('disabled');
				$(".cover-off").attr('disabled', 'true');
		}
	}

	$("body").attr('body-display', getComputedStyle(document.querySelector('html')).getPropertyValue("--body-display") );
	$("body").attr('background-size', getComputedStyle(document.querySelector('html')).getPropertyValue("--background-size") );
	$("body").attr('body-no-tiling', getComputedStyle(document.querySelector('html')).getPropertyValue("--background-no-tiling") );
}

/* 
** BG  = Backgkround Body Display - body-display attribute is ued
** BG1 = Background Position - No body attribute is used
** BG2 = Background Tiling (Only on Legacy Background Display with Full or Contain sizing) - background-no-tiling attribute is used
** BG3 = Background Size (Only on Legacy Background Display) - background-size attribute is used
*/

function ToggleBG() {
var modern = document.querySelector('input#BG_1');
var legacy = document.querySelector('input#BG_2');
	if (legacy.checked) {

	if ($("html.theme-A").length) {
		$("style.designer-style.theme-A").append(
		'.theme-A[visualcolors="standard"] {' +
		'--body-display:legacy!important;' +
		'}'
		);	
	}

	if ($("html.theme-B").length) {
		$("style.designer-style.theme-B").append(
		'.theme-B[visualcolors="standard"] {' +
		'--body-display:legacy!important;' +
		'}'
		);	
	}

	if ($("html.theme-C").length) {
		$("style.designer-style.theme-C").append(
		'.theme-C[visualcolors="standard"] {' +
		'--body-display:legacy!important;' +
		'}'
		);	
	}

	if ($("html.theme-D").length) {
		$("style.designer-style.theme-D").append(
		'.theme-D[visualcolors="standard"] {' +
		'--body-display:legacy!important;' +
		'}'
		);	
	}
	} else if (modern.checked) {

	if ($("html.theme-A").length) {
		$("style.designer-style.theme-A").append(
		'.theme-A[visualcolors="standard"] {' +
		'--body-display:modern!important;' +
		'}'
		);	
	}

	if ($("html.theme-B").length) {
		$("style.designer-style.theme-B").append(
		'.theme-B[visualcolors="standard"] {' +
		'--body-display:modern!important;' +
		'}'
		);	
	}

	if ($("html.theme-C").length) {
		$("style.designer-style.theme-C").append(
		'.theme-C[visualcolors="standard"] {' +
		'--body-display:modern!important;' +
		'}'
		);	
	}

	if ($("html.theme-D").length) {
		$("style.designer-style.theme-D").append(
		'.theme-D[visualcolors="standard"] {' +
		'--body-display:modern!important;' +
		'}'
		);	
	}
	}	
	CheckBG();
}

function ToggleBG1() {
var top = document.querySelector('input#BG1_1');
var middle = document.querySelector('input#BG1_2');
var bottom = document.querySelector('input#BG1_3');
let str = "";
if (top.checked) {
	str = "top";
} else if (middle.checked) {
	str = "center";
} else if (bottom.checked) {
	str = "bottom";
}
	if ($("html.theme-A").length) {
		$("style.designer-style.theme-A").append(
		'.theme-A[visualcolors="standard"] {' +
		'--background-va:' + str + '!important;' +
		'}'
		);	
	}

	if ($("html.theme-B").length) {
		$("style.designer-style.theme-B").append(
		'.theme-B[visualcolors="standard"] {' +
		'--background-va:' + str + '!important;' +
		'}'
		);	
	}

	if ($("html.theme-C").length) {
		$("style.designer-style.theme-C").append(
		'.theme-C[visualcolors="standard"] {' +
		'--background-va:' + str + '!important;' +
		'}'
		);	
	}

	if ($("html.theme-D").length) {
		$("style.designer-style.theme-D").append(
		'.theme-D[visualcolors="standard"] {' +
		'--background-va:' + str + '!important;' +
		'}'
		);	
	}
	CheckBG();
}

function ToggleBG2() {
var x = document.querySelector('input#BG2');
	if (x.checked) {

	if ($("html.theme-A").length) {
		$("style.designer-style.theme-A").append(
		'.theme-A[visualcolors="standard"] {' +
		'--background-no-tiling:true!important;' +
		'}'
		);	
	}

	if ($("html.theme-B").length) {
		$("style.designer-style.theme-B").append(
		'.theme-B[visualcolors="standard"] {' +
		'--background-no-tiling:true!important;' +
		'}'
		);	
	}

	if ($("html.theme-C").length) {
		$("style.designer-style.theme-C").append(
		'.theme-C[visualcolors="standard"] {' +
		'--background-no-tiling:true!important;' +
		'}'
		);	
	}

	if ($("html.theme-D").length) {
		$("style.designer-style.theme-D").append(
		'.theme-D[visualcolors="standard"] {' +
		'--background-no-tiling:true!important;' +
		'}'
		);	
	}
	} else {

	if ($("html.theme-A").length) {
		$("style.designer-style.theme-A").append(
		'.theme-A[visualcolors="standard"] {' +
		'--background-no-tiling:false!important;' +
		'}'
		);	
	}

	if ($("html.theme-B").length) {
		$("style.designer-style.theme-B").append(
		'.theme-B[visualcolors="standard"] {' +
		'--background-no-tiling:false!important;' +
		'}'
		);	
	}

	if ($("html.theme-C").length) {
		$("style.designer-style.theme-C").append(
		'.theme-C[visualcolors="standard"] {' +
		'--background-no-tiling:false!important;' +
		'}'
		);	
	}

	if ($("html.theme-D").length) {
		$("style.designer-style.theme-D").append(
		'.theme-D[visualcolors="standard"] {' +
		'--background-no-tiling:false!important;' +
		'}'
		);	
	}
	}	
	CheckBG();
}



function ToggleBG3() {
var cover= document.querySelector('input#BG3_1');
var contain = document.querySelector('input#BG3_2');
var stretched = document.querySelector('input#BG3_3');
var full = document.querySelector('input#BG3_4');
let str = "";
if (cover.checked) {
	str = "cover";
} else if (contain.checked) {
	str = "contain";
} else if (stretched.checked) {
	str = "stretched";
} else if (full.checked) {
	str = "full";
}
	if ($("html.theme-A").length) {
		$("style.designer-style.theme-A").append(
		'.theme-A[visualcolors="standard"] {' +
		'--background-size:' + str + '!important;' +
		'}'
		);	
	}

	if ($("html.theme-B").length) {
		$("style.designer-style.theme-B").append(
		'.theme-B[visualcolors="standard"] {' +
		'--background-size:' + str + '!important;' +
		'}'
		);	
	}

	if ($("html.theme-C").length) {
		$("style.designer-style.theme-C").append(
		'.theme-C[visualcolors="standard"] {' +
		'--background-size:' + str + '!important;' +
		'}'
		);	
	}

	if ($("html.theme-D").length) {
		$("style.designer-style.theme-D").append(
		'.theme-D[visualcolors="standard"] {' +
		'--background-size:' + str + '!important;' +
		'}'
		);	
	}
	CheckBG();
}


/* Toggles Theme */
function HCa() {
    var x = document.querySelector('html');
    if (x.className.indexOf("theme-A") == -1) {
        x.className += " theme-A";
    }
        x.className = x.className.replace(" theme-B", "");
        x.className = x.className.replace(" theme-C", "");
        x.className = x.className.replace(" theme-D", "");
		ColorUpdate(true);
		UpdateMisc();
}

function HCb() {
    var x = document.querySelector('html');
    if (x.className.indexOf("theme-B") == -1) {
        x.className += " theme-B";
		}
        x.className = x.className.replace(" theme-A", "");
        x.className = x.className.replace(" theme-C", "");
        x.className = x.className.replace(" theme-D", "");
		ColorUpdate(true);
		UpdateMisc();
}

function HCc() {
    var x = document.querySelector('html');
    if (x.className.indexOf("theme-C") == -1) {
        x.className += " theme-C";
    }
        x.className = x.className.replace(" theme-A", "");
        x.className = x.className.replace(" theme-B", "");
        x.className = x.className.replace(" theme-D", "");
		ColorUpdate(true);
		UpdateMisc();
}

function HCd() {
    var x = document.querySelector('html');
    if (x.className.indexOf("theme-D") == -1) {
        x.className += " theme-D";
    }
        x.className = x.className.replace(" theme-A", "");
        x.className = x.className.replace(" theme-B", "");
        x.className = x.className.replace(" theme-C", "");
		ColorUpdate(true);
		UpdateMisc();
}

function UpdateFont() {
var x = $('input.font_2nd').val();
	if (x=="") {
		if ($("html.theme-A").length) {
			$("style.designer-style.theme-A").append(
			'.theme-A[visualcolors="standard"] {' +
			'--custom-secondary-font:""!important;' +
			'}'
			);	
		}

		if ($("html.theme-B").length) {
			$("style.designer-style.theme-B").append(
			'.theme-B[visualcolors="standard"] {' +
			'--custom-secondary-font:""!important;' +
			'}'
			);	
		}

		if ($("html.theme-C").length) {
			$("style.designer-style.theme-C").append(
			'.theme-C[visualcolors="standard"] {' +
			'--custom-secondary-font:""!important;' +
			'}'
			);	
		}

		if ($("html.theme-D").length) {
			$("style.designer-style.theme-D").append(
			'.theme-D[visualcolors="standard"] {' +
			'--custom-secondary-font:""!important;' +
			'}'
			);	
		}
		
	} else {
		if ($("html.theme-A").length) {
			$("style.designer-style.theme-A").append(
			'.theme-A[visualcolors="standard"] {' +
			'--custom-secondary-font:' + x + '!important;' +
			'}'
			);	
		}

		if ($("html.theme-B").length) {
			$("style.designer-style.theme-B").append(
			'.theme-B[visualcolors="standard"] {' +
			'--custom-secondary-font:' + x + '!important;' +
			'}'
			);	
		}

		if ($("html.theme-C").length) {
			$("style.designer-style.theme-C").append(
			'.theme-C[visualcolors="standard"] {' +
			'--custom-secondary-font:' + x + '!important;' +
			'}'
			);	
		}

		if ($("html.theme-D").length) {
			$("style.designer-style.theme-D").append(
			'.theme-D[visualcolors="standard"] {' +
			'--custom-secondary-font:' + x + '!important;' +
			'}'
			);	
		}
	}
}

function UpdateButtonRadi() {
var x = $('input.button_radi').val();
	if (x=="0") {
		if ($("html.theme-A").length) {
			$("style.designer-style.theme-A").append(
			'.theme-A[visualcolors="standard"] {' +
			'--border-radius:0!important;' +
			'}'
			);	
		}

		if ($("html.theme-B").length) {
			$("style.designer-style.theme-B").append(
			'.theme-B[visualcolors="standard"] {' +
			'--border-radius:0!important;' +
			'}'
			);	
		}

		if ($("html.theme-C").length) {
			$("style.designer-style.theme-C").append(
			'.theme-C[visualcolors="standard"] {' +
			'--border-radius:0!important;' +
			'}'
			);	
		}

		if ($("html.theme-D").length) {
			$("style.designer-style.theme-D").append(
			'.theme-D[visualcolors="standard"] {' +
			'--border-radius:0!important;' +
			'}'
			);	
		}
		
	} else {
		if ($("html.theme-A").length) {
			$("style.designer-style.theme-A").append(
			'.theme-A[visualcolors="standard"] {' +
			'--border-radius:' + x + 'px!important;' +
			'}'
			);	
		}

		if ($("html.theme-B").length) {
			$("style.designer-style.theme-B").append(
			'.theme-B[visualcolors="standard"] {' +
			'--border-radius:' + x + 'px!important;' +
			'}'
			);	
		}

		if ($("html.theme-C").length) {
			$("style.designer-style.theme-C").append(
			'.theme-C[visualcolors="standard"] {' +
			'--border-radius:' + x + 'px!important;' +
			'}'
			);	
		}

		if ($("html.theme-D").length) {
			$("style.designer-style.theme-D").append(
			'.theme-D[visualcolors="standard"] {' +
			'--border-radius:' + x + 'px!important;' +
			'}'
			);	
		}
	}
}

function UpdateFilter1() {
var x = $('input.filter1').val();
	if (x=="") {
		if ($("html.theme-A").length) {
			$("style.designer-style.theme-A").append(
			'.theme-A[visualcolors="standard"] {' +
			'--wordmark-filter:initial!important;' +
			'}'
			);	
		}

		if ($("html.theme-B").length) {
			$("style.designer-style.theme-B").append(
			'.theme-B[visualcolors="standard"] {' +
			'--wordmark-filter:initial!important;' +
			'}'
			);	
		}

		if ($("html.theme-C").length) {
			$("style.designer-style.theme-C").append(
			'.theme-C[visualcolors="standard"] {' +
			'--wordmark-filter:initial!important;' +
			'}'
			);	
		}

		if ($("html.theme-D").length) {
			$("style.designer-style.theme-D").append(
			'.theme-D[visualcolors="standard"] {' +
			'--wordmark-filter:initial!important;' +
			'}'
			);	
		}
		
	} else {
		if ($("html.theme-A").length) {
			$("style.designer-style.theme-A").append(
			'.theme-A[visualcolors="standard"] {' +
			'--wordmark-filter:' + x + '!important;' +
			'}'
			);	
		}

		if ($("html.theme-B").length) {
			$("style.designer-style.theme-B").append(
			'.theme-B[visualcolors="standard"] {' +
			'--wordmark-filter:' + x + '!important;' +
			'}'
			);	
		}

		if ($("html.theme-C").length) {
			$("style.designer-style.theme-C").append(
			'.theme-C[visualcolors="standard"] {' +
			'--wordmark-filter:' + x + '!important;' +
			'}'
			);	
		}

		if ($("html.theme-D").length) {
			$("style.designer-style.theme-D").append(
			'.theme-D[visualcolors="standard"] {' +
			'--wordmark-filter:' + x + '!important;' +
			'}'
			);	
		}
	}
}

function UpdateFilter2() {
var x = $('input.filter2').val();
	if (x=="") {
		if ($("html.theme-A").length) {
			$("style.designer-style.theme-A").append(
			'.theme-A[visualcolors="standard"] {' +
			'--wordmark-filter2:initial!important;' +
			'}'
			);	
		}

		if ($("html.theme-B").length) {
			$("style.designer-style.theme-B").append(
			'.theme-B[visualcolors="standard"] {' +
			'--wordmark-filter2:initial!important;' +
			'}'
			);	
		}

		if ($("html.theme-C").length) {
			$("style.designer-style.theme-C").append(
			'.theme-C[visualcolors="standard"] {' +
			'--wordmark-filter2:initial!important;' +
			'}'
			);	
		}

		if ($("html.theme-D").length) {
			$("style.designer-style.theme-D").append(
			'.theme-D[visualcolors="standard"] {' +
			'--wordmark-filter2:initial!important;' +
			'}'
			);	
		}
		
	} else {
		if ($("html.theme-A").length) {
			$("style.designer-style.theme-A").append(
			'.theme-A[visualcolors="standard"] {' +
			'--wordmark-filter2:' + x + '!important;' +
			'}'
			);	
		}

		if ($("html.theme-B").length) {
			$("style.designer-style.theme-B").append(
			'.theme-B[visualcolors="standard"] {' +
			'--wordmark-filter2:' + x + '!important;' +
			'}'
			);	
		}

		if ($("html.theme-C").length) {
			$("style.designer-style.theme-C").append(
			'.theme-C[visualcolors="standard"] {' +
			'--wordmark-filter2:' + x + '!important;' +
			'}'
			);	
		}

		if ($("html.theme-D").length) {
			$("style.designer-style.theme-D").append(
			'.theme-D[visualcolors="standard"] {' +
			'--wordmark-filter2:' + x + '!important;' +
			'}'
			);	
		}
	}
}

function UpdateFilter3() {
var x = $('input.filter_duration').val();
	if (x=="0") {
		if ($("html.theme-A").length) {
			$("style.designer-style.theme-A").append(
			'.theme-A[visualcolors="standard"] {' +
			'--wordmark-filter-duration:0!important;' +
			'}'
			);	
		}

		if ($("html.theme-B").length) {
			$("style.designer-style.theme-B").append(
			'.theme-B[visualcolors="standard"] {' +
			'--wordmark-filter-duration:0!important;' +
			'}'
			);	
		}

		if ($("html.theme-C").length) {
			$("style.designer-style.theme-C").append(
			'.theme-C[visualcolors="standard"] {' +
			'--wordmark-filter-duration:0!important;' +
			'}'
			);	
		}

		if ($("html.theme-D").length) {
			$("style.designer-style.theme-D").append(
			'.theme-D[visualcolors="standard"] {' +
			'--wordmark-filter-duration:0!important;' +
			'}'
			);	
		}
		
	} else {
		if ($("html.theme-A").length) {
			$("style.designer-style.theme-A").append(
			'.theme-A[visualcolors="standard"] {' +
			'--wordmark-filter-duration:' + x +'ms!important;' +
			'}'
			);	
		}

		if ($("html.theme-B").length) {
			$("style.designer-style.theme-B").append(
			'.theme-B[visualcolors="standard"] {' +
			'--wordmark-filter-duration:' + x +'ms!important;' +
			'}'
			);	
		}

		if ($("html.theme-C").length) {
			$("style.designer-style.theme-C").append(
			'.theme-C[visualcolors="standard"] {' +
			'--wordmark-filter-duration:' + x +'ms!important;' +
			'}'
			);	
		}

		if ($("html.theme-D").length) {
			$("style.designer-style.theme-D").append(
			'.theme-D[visualcolors="standard"] {' +
			'--wordmark-filter-duration:' + x +'ms!important;' +
			'}'
			);	
		}
	}
}

function UpdateFilter4() {
var x = $('input.filter_delay').val();
	if (x=="0") {
		if ($("html.theme-A").length) {
			$("style.designer-style.theme-A").append(
			'.theme-A[visualcolors="standard"] {' +
			'--wordmark-filter-delay:0!important;' +
			'}'
			);	
		}

		if ($("html.theme-B").length) {
			$("style.designer-style.theme-B").append(
			'.theme-B[visualcolors="standard"] {' +
			'--wordmark-filter-delay:0!important;' +
			'}'
			);	
		}

		if ($("html.theme-C").length) {
			$("style.designer-style.theme-C").append(
			'.theme-C[visualcolors="standard"] {' +
			'--wordmark-filter-delay:0!important;' +
			'}'
			);	
		}

		if ($("html.theme-D").length) {
			$("style.designer-style.theme-D").append(
			'.theme-D[visualcolors="standard"] {' +
			'--wordmark-filter-delay:0!important;' +
			'}'
			);	
		}
		
	} else {
		if ($("html.theme-A").length) {
			$("style.designer-style.theme-A").append(
			'.theme-A[visualcolors="standard"] {' +
			'--wordmark-filter-delay:' + x +'ms!important;' +
			'}'
			);	
		}

		if ($("html.theme-B").length) {
			$("style.designer-style.theme-B").append(
			'.theme-B[visualcolors="standard"] {' +
			'--wordmark-filter-delay:' + x +'ms!important;' +
			'}'
			);	
		}

		if ($("html.theme-C").length) {
			$("style.designer-style.theme-C").append(
			'.theme-C[visualcolors="standard"] {' +
			'--wordmark-filter-delay:' + x +'ms!important;' +
			'}'
			);	
		}

		if ($("html.theme-D").length) {
			$("style.designer-style.theme-D").append(
			'.theme-D[visualcolors="standard"] {' +
			'--wordmark-filter-delay:' + x +'ms!important;' +
			'}'
			);	
		}
	}
}

function UpdateColorThreshold() {
	var x = $('input.color_threshold').val();
	window.MW18LightThreshold = x;
	ColorUpdate(true);
}

function UpdateHoverRation() {
	var x = $('input.hover_ration').val();
	window.MW18HoverThreshold = x * 0.005;
	ColorUpdate(true);
}