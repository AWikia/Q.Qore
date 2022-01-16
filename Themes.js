﻿window.MW18auto = true;
window.MW18autoDark = false;
window.MW18darkmode = false;
window.MW18ContrastNotice = false;

/* Visual Themes */
var visualThemes = ['lite','basic', 'contrast', 'simple','classic']
var visualThemeNames = ['Lite','Basic','High Contrast','Simple','Classic'];
var contrastVisual = 1;
/* Visual Colors */
var visualColors = ['factorycolors','lunacolors','classicforced','campbellforced','forced','tangoforced','rgbcolors','retro','retro2','retro3','retro4','retro5','retro6','retro7'];
var visualColorNames = ['Factory', 'XP Luna', 'Windows Forced', 'Campbell Forced', 'Mpisto OSX Forced', 'Tango Forced','RGB Celebration','Retro','Retro II','Retro III','Retro IV','Retro V','Retro VI','Retro VII'];

(function () {
document.querySelector('html').className += " theme-A"; // We begin with the first theme selected
$("head").prepend(
'<style class="theming"></style>'
);	
colortheme('auto');
ColorUpdate(true);
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
		UpdateMisc();
		
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
		UpdateMisc();
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
		var body_bg =	getComputedStyle(document.querySelector('container')).getPropertyValue("--page-background-color");
		if (isLightColor(body_bg)) {
			$('body').attr("curtheme", "light")
		} else {
			$('body').attr("curtheme", "dark")
		}
	}


   if (window.MW18autoDark === true) {
		var body_bg =	getComputedStyle(document.querySelector('container')).getPropertyValue("--page-background-color");
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
//	CheckColorSuitability()
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

/* For MpistoSkin2 (Obsolete) or Evelution */
if  ( ($("body.mpisto-2018").length) || ($("body.skin-Evelution").length) ) {
	if ( ( window.matchMedia('(forced-colors: active)').matches ) && (window.MW18ContrastNotice === false)  && ($('html').attr("visualtheme") !== 'contrast'  ) ) {
		window.MW18ContrastNotice = true;
		AddFloatingBanner("You're currently using a high contrast theme on your device. You may want to use the <a onclick='RemoveBanner(); VisualStyle(" + contrastVisual + ")'>High Contrast</a> visual style so as to have a consistent high contrast experience.",'message','contrastbanner')  
	} else {
		if ( (!($(".top-gap #contrastbanner").length)) && ($('html').attr("visualtheme") !== 'contrast'  )) {
			window.MW18ContrastNotice = false;
		}
	}
}


}



/* Changes Wiki theme style
   Supported values: auto, auto-r, light, dark */
function colortheme(theme) {
    var body_bg =	getComputedStyle(document.querySelector('html')).getPropertyValue("--page-background-color");
    var old_dark = window.MW18darkmode
	if (theme === 'auto') { // Auto
			if ( window.matchMedia('(prefers-color-scheme: dark)').matches ) {
				window.MW18darkmode = true;
			} else {
				window.MW18darkmode = false;
			}
	} 	else if (theme === 'auto-r') { // Auto-Dark
			if ( window.matchMedia('(prefers-color-scheme: dark)').matches ) {
				window.MW18darkmode = false;
			} else {
				window.MW18darkmode = true;
			}
	} 	else if (theme === 'light') { // Light
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
	} 	else if (theme === 'dark') { // Dark
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
	if ( window.matchMedia('(prefers-color-scheme: light)').matches ) {
		if ( (theme === 'light') || (theme === 'auto') ) {
			$('body').attr("inverted-colors", 'false' );
		} else {
			$('body').attr("inverted-colors", 'true' );
		}
	} else {
		if ( (theme === 'light') || (theme === 'auto') ) {
			$('body').attr("inverted-colors", 'true' );
		} else {
			$('body').attr("inverted-colors", 'false' );
		}
	}
			$('body').attr("liatch", window.MW18darkmode);
	$(".mpisto-page-header .color-modes li").removeClass('selected');
	$(".mpisto-page-header .color-modes li." + theme).addClass('selected');
	if (window.MW18darkmode === true) {
		if ($("body.options").length) {
		}
	} else {
		if ($("body.options").length) {
		}
	}
	if ($("body.options").length) {
		$("input[id*='theme-'][name='themechooser']").removeAttr('checked');
		$("input[name='themechooser']#theme-" + theme ).attr('checked',true);
	}
	if (old_dark != window.MW18darkmode) {
		ColorUpdate(false);
	}
	if (window.MW18darkmode) {
		$('body').attr("dark-mode", isLightColor(getComputedStyle(document.querySelector('container')).getPropertyValue("--page-text-background-color")) );
	} else {
		$('body').attr("dark-mode", !(isLightColor(getComputedStyle(document.querySelector('container')).getPropertyValue("--page-background-color"))) );
	}
}

/*
function CheckDarkMode() {
    var body_bg =	getComputedStyle(document.querySelector('html')).getPropertyValue("--page-background-color");
	if (window.MW18darkmode) {
		$('body').attr("dark-mode", isLightColor(body_bg) );
	} else {
		$('body').attr("dark-mode", !(isLightColor(body_bg)) );
	}
}
*/

function ToggleMode() {
	var theme = $('body').attr("wikitheme");
	if (theme === 'auto') {
		colortheme('auto-r');
	} else 	if (theme === 'auto-r') {
		colortheme('auto');
	} else 	if (theme === 'light') {
		colortheme('dark');
	} else 	if (theme === 'dark') {
		colortheme('light');
	}
}

function ColorMode(m1='auto', m2='auto-r') {
	var theme = $('body').attr("wikitheme");
	if (theme === 'auto') {
		colortheme(m1);
	} else 	if (theme === 'auto-r') {
		colortheme(m2);
	} else 	if (theme === 'light') {
		colortheme(m1);
	} else 	if (theme === 'dark') {
		colortheme(m2);
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
		'--community-background-image:url("' + img.src + '")!important;' +
		'}'
		);	
	}

	if ($("html.theme-B").length) {
		$("style.designer-style.theme-B").append(
		'.theme-B[visualcolors="standard"] {' +
		'--community-background-image:url("' + img.src + '")!important;' +
		'}'
		);	
	}

	if ($("html.theme-C").length) {
		$("style.designer-style.theme-C").append(
		'.theme-C[visualcolors="standard"] {' +
		'--community-background-image:url("' + img.src + '")!important;' +
		'}'
		);	
	}

	if ($("html.theme-D").length) {
		$("style.designer-style.theme-D").append(
		'.theme-D[visualcolors="standard"] {' +
		'--community-background-image:url("' + img.src + '")!important;' +
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
		'--community-background-image:url("' + img + '")!important;' +
		'}'
		);	
	}

	if ($("html.theme-B").length) {
		$("style.designer-style.theme-B").append(
		'.theme-B[visualcolors="standard"] {' +
		'--community-background-image:url("' + img + '")!important;' +
		'}'
		);	
	}

	if ($("html.theme-C").length) {
		$("style.designer-style.theme-C").append(
		'.theme-C[visualcolors="standard"] {' +
		'--community-background-image:url("' + img + '")!important;' +
		'}'
		);	
	}

	if ($("html.theme-D").length) {
		$("style.designer-style.theme-D").append(
		'.theme-D[visualcolors="standard"] {' +
		'--community-background-image:url("' + img + '")!important;' +
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
		'--logo:url("' + img.src + '")!important;' +
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
	$("body").attr('page-text-background-color-auto', 'false');
// var x = chroma.random()
	var Colors = ['000000','3a3a3a','bfbfbf','e6e6e6','ffffff','ff0000','00ff00','0000ff','ffff00','ff00ff','00ffff']
 var x = '#' + Colors[getRandomInt(Colors.length)]
	while ( !(isSuitableColor(x, chroma(getComputedStyle(document.querySelector('html')).getPropertyValue("--page-background-color"))))  ) {
		var x = '#' + Colors[getRandomInt(Colors.length)]
	}
$('input[type="range"][name="contentcolor"].red').val(chroma(x).get('rgb.r') );
$('input[type="range"][name="contentcolor"].green').val(chroma(x).get('rgb.g') );
$('input[type="range"][name="contentcolor"].blue').val(chroma(x).get('rgb.b') );

if (refresh) {
UpdateValue()
}
}

function RandomColor5(refresh=true) {
$("body").attr('page-border-background-color-auto', 'false');
// var x = chroma.random()
	  var Colors = ['808080','cccccc','6e6e6e','3c3c3c','a3a3a3','800000','008000','000080','808000','800080','008080']
 var x = '#' + Colors[getRandomInt(Colors.length)]
	while ( !(isSuitableColor(x, chroma(getComputedStyle(document.querySelector('html')).getPropertyValue("--page-background-color"))))  ) {
		var x = '#' + Colors[getRandomInt(Colors.length)]
	}

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
	while ( !(isSuitableColor(x, chroma(getComputedStyle(document.querySelector('html')).getPropertyValue("--page-background-color"))))  ) {
		var x = '#' + Colors[getRandomInt(Colors.length)]
	}
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
	while ( !(isSuitableColor(x, chroma(getComputedStyle(document.querySelector('html')).getPropertyValue("--page-background-color"))))  ) {
		var x = '#' + Colors[getRandomInt(Colors.length)]
	}
$('input[type="range"][name="buttoncolor"].red').val(chroma(x).get('rgb.r') );
$('input[type="range"][name="buttoncolor"].green').val(chroma(x).get('rgb.g') );
$('input[type="range"][name="buttoncolor"].blue').val(chroma(x).get('rgb.b') );


if (refresh) {
UpdateValue()
}
}


function RandomColor8(refresh=true) {
$("body").attr('community-header-text-color-auto', 'false');
// var x = chroma.random()
var Colors = ['1d1d1d','8d0017','ac0000','d34500','eb9900','ffb317','7d9b34','5ea200','417800','1d5100','003c00','44a177','008d8f','00a8a9','009bf0','0068b7','003981','091a45','180052','490090','711993','8d37af','8c005a','ab0064','ea0098','5e5e5e','be0021','f73400','ff892b','ffc12c','ffc91a','8acb00','6db000','169900','58cc7d','00d1d2','41c3ff','008ee1','00baff','0075c6','4617b4','6800b3','a13bc9','bd56e5','c02883','f900a5','ff5fdc','e2e2e2']
 var x = '#' + Colors[getRandomInt(Colors.length)]
$('input[type="range"][name="bgt"].red').val(chroma(x).get('rgb.r'));
$('input[type="range"][name="bgt"].green').val( chroma(x).get('rgb.g'));
$('input[type="range"][name="bgt"].blue').val( chroma(x).get('rgb.b'));


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
	RandomColor8(false);
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
	PickColor8('auto',false);
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
	var x= prompt("Body Background Color", chroma(getComputedStyle(document.querySelector('html')).getPropertyValue("--community-background-color")));
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

function PickColor8(color="",refresh=true) {
if (color==="") {
	if ( $("body").attr('community-header-text-color-auto') === 'true' ) {
		var x= prompt("Community Header Text Color", 'auto');
	} else {
		var x= prompt("Community Header Text Color", chroma(getComputedStyle(document.querySelector('html')).getPropertyValue("--community-header-text-color")));
	}
} else {
	var x=color;
}

if (x !=='auto') {
	$("body").attr('community-header-text-color-auto', 'false');
	$('input[type="range"][name="bgt"].red').val(chroma(x).get('rgb.r'));
	$('input[type="range"][name="bgt"].green').val( chroma(x).get('rgb.g'));
	$('input[type="range"][name="bgt"].blue').val( chroma(x).get('rgb.b'));
} else {
	$("body").attr('community-header-text-color-auto', 'true');
}


if (refresh) {
UpdateValue()
}
}


function PickColor2(color="",refresh=true) {
if (color==="") {
	var x= prompt("Header Background Color", chroma(getComputedStyle(document.querySelector('html')).getPropertyValue("--sticky-header-background-color")));
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
	var x= prompt("Page Background Color", chroma(getComputedStyle(document.querySelector('html')).getPropertyValue("--page-background-color")));
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
	if ( $("body").attr('page-text-background-color-auto') === 'true' ) {
		var x= prompt("Page Text Color", 'auto');
	} else {
		var x= prompt("Page Text Color", chroma(getComputedStyle(document.querySelector('html')).getPropertyValue("--page-text-background-color")));
	}
} else {
	var x=color;
}
if (x !=='auto') {
	$("body").attr('page-text-background-color-auto', 'false');
	$('input[type="range"][name="contentcolor"].red').val(chroma(x).get('rgb.r') );
	$('input[type="range"][name="contentcolor"].green').val(chroma(x).get('rgb.g') );
	$('input[type="range"][name="contentcolor"].blue').val(chroma(x).get('rgb.b') );
} else {
	$("body").attr('page-text-background-color-auto', 'true');
}
if (refresh) {
UpdateValue()
}
}

function PickColor5(color="",refresh=true) {
if (color==="") {
	if ( $("body").attr('page-border-background-color-auto') === 'true' ) {
		var x= prompt("Page Border Color", 'auto');
	} else {
		var x= prompt("Page Border Color", chroma(getComputedStyle(document.querySelector('html')).getPropertyValue("--page-border-background-color")));
	}
} else {
	var x=color;
}
if (x !=='auto') {
	$("body").attr('page-border-background-color-auto', 'false');
	$('input[type="range"][name="border"].red').val(chroma(x).get('rgb.r') );
	$('input[type="range"][name="border"].green').val(chroma(x).get('rgb.g') );
	$('input[type="range"][name="border"].blue').val(chroma(x).get('rgb.b') );
} else {
	$("body").attr('page-border-background-color-auto', 'true');
}
if (refresh) {
UpdateValue()
}
}

function PickColor6(color="",refresh=true) {
if (color==="") {
	var x= prompt("Page Link Color", chroma(getComputedStyle(document.querySelector('html')).getPropertyValue("--anchor-background-color")));
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
	var x= prompt("Page Button Color", chroma(getComputedStyle(document.querySelector('html')).getPropertyValue("--accent-background-color")));
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
	if ( $("body").attr('toolbar-background-color-auto') === 'true' ) {
		var x= prompt("Floating Header Background Color", 'auto');
	} else {
	var x= prompt("Floating Header Background Color", chroma(getComputedStyle(document.querySelector('html')).getPropertyValue("--toolbar-background-color")));
	}
} else {
	var x=color;
}
if (x !=='auto') {
	$("body").attr('toolbar-background-color-auto', 'false');
	$('input[type="range"][name="headerf"].red').val(chroma(x).get('rgb.r'));
	$('input[type="range"][name="headerf"].green').val( chroma(x).get('rgb.g'));
	$('input[type="range"][name="headerf"].blue').val( chroma(x).get('rgb.b'));
} else {
	$("body").attr('toolbar-background-color-auto', 'true');
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
		$('input[type="range"][name="bg"].red').val(chroma(getComputedStyle(document.querySelector('html')).getPropertyValue("--community-background-color")).get('rgb.r') );
		$('input[type="range"][name="bg"].green').val( chroma(getComputedStyle(document.querySelector('html')).getPropertyValue("--community-background-color")).get('rgb.g') );
		$('input[type="range"][name="bg"].blue').val( chroma(getComputedStyle(document.querySelector('html')).getPropertyValue("--community-background-color")).get('rgb.b') );

		if (getComputedStyle(document.querySelector('html')).getPropertyValue("--community-header-text-color") != 'auto') {
			/* Community Header Text */
			$('input[type="range"][name="bgt"].red').val(chroma(getComputedStyle(document.querySelector('html')).getPropertyValue("--community-header-text-color")).get('rgb.r') );
			$('input[type="range"][name="bgt"].green').val( chroma(getComputedStyle(document.querySelector('html')).getPropertyValue("--community-header-text-color")).get('rgb.g') );
			$('input[type="range"][name="bgt"].blue').val( chroma(getComputedStyle(document.querySelector('html')).getPropertyValue("--community-header-text-color")).get('rgb.b') );
		}


		/* Header (A.K.A. Active Title Bar) */
		var header_color =	getComputedStyle(document.querySelector('html')).getPropertyValue("--sticky-header-background-color");
		$('input[type="range"][name="header"].red').val(chroma(header_color).get('rgb.r') );
		$('input[type="range"][name="header"].green').val( chroma(header_color).get('rgb.g') );
		$('input[type="range"][name="header"].blue').val( chroma(header_color).get('rgb.b') );


		/* Page Background */
		$('input[type="range"][name="contentbg"].red').val(chroma(getComputedStyle(document.querySelector('html')).getPropertyValue("--page-background-color")).get('rgb.r') );
		$('input[type="range"][name="contentbg"].green').val( chroma(getComputedStyle(document.querySelector('html')).getPropertyValue("--page-background-color")).get('rgb.g') );
		$('input[type="range"][name="contentbg"].blue').val( chroma(getComputedStyle(document.querySelector('html')).getPropertyValue("--page-background-color")).get('rgb.b') );

		if (getComputedStyle(document.querySelector('html')).getPropertyValue("--page-text-background-color") != 'auto') {
			/* Page Text */
			$('input[type="range"][name="contentcolor"].red').val(chroma(getComputedStyle(document.querySelector('html')).getPropertyValue("--page-text-background-color")).get('rgb.r') );
			$('input[type="range"][name="contentcolor"].green').val( chroma(getComputedStyle(document.querySelector('html')).getPropertyValue("--page-text-background-color")).get('rgb.g') );
			$('input[type="range"][name="contentcolor"].blue').val( chroma(getComputedStyle(document.querySelector('html')).getPropertyValue("--page-text-background-color")).get('rgb.b') );
}
		if (getComputedStyle(document.querySelector('html')).getPropertyValue("--page-border-background-color") != 'auto') {
			/* Page Border */
			$('input[type="range"][name="border"].red').val(chroma(getComputedStyle(document.querySelector('html')).getPropertyValue("--page-border-background-color")).get('rgb.r') );
			$('input[type="range"][name="border"].green').val( chroma(getComputedStyle(document.querySelector('html')).getPropertyValue("--page-border-background-color")).get('rgb.g') );
			$('input[type="range"][name="border"].blue').val( chroma(getComputedStyle(document.querySelector('html')).getPropertyValue("--page-border-background-color")).get('rgb.b') );
		}

		/* Page Link */
		var link_color =	getComputedStyle(document.querySelector('html')).getPropertyValue("--anchor-background-color");
		$('input[type="range"][name="linkcolor"].red').val(chroma(link_color).get('rgb.r') );
		$('input[type="range"][name="linkcolor"].green').val( chroma(link_color).get('rgb.g') );
		$('input[type="range"][name="linkcolor"].blue').val( chroma(link_color).get('rgb.b') );


		/* Page Button */
		$('input[type="range"][name="buttoncolor"].red').val(chroma(getComputedStyle(document.querySelector('html')).getPropertyValue("--accent-background-color")).get('rgb.r') );
		$('input[type="range"][name="buttoncolor"].green').val( chroma(getComputedStyle(document.querySelector('html')).getPropertyValue("--accent-background-color")).get('rgb.g') );
		$('input[type="range"][name="buttoncolor"].blue').val( chroma(getComputedStyle(document.querySelector('html')).getPropertyValue("--accent-background-color")).get('rgb.b') );
		if (getComputedStyle(document.querySelector('html')).getPropertyValue("--toolbar-background-color") != 'auto') {
			/* Floating Header (A.K.A. Inactive Title Bar) */
			$('input[type="range"][name="headerf"].red').val(chroma(getComputedStyle(document.querySelector('html')).getPropertyValue("--toolbar-background-color")).get('rgb.r') );
			$('input[type="range"][name="headerf"].green').val( chroma(getComputedStyle(document.querySelector('html')).getPropertyValue("--toolbar-background-color")).get('rgb.g') );
			$('input[type="range"][name="headerf"].blue').val( chroma(getComputedStyle(document.querySelector('html')).getPropertyValue("--toolbar-background-color")).get('rgb.b') );
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
	if ( $("body").attr('community-header-text-color-auto') === 'true' ) {
		var communityheadercolorfinal = 'auto' ;
	} else {
		var communityheadercolorfinal = chroma('rgb(' + $('input[type="range"][name="bgt"].red').val() + ',' + $('input[type="range"][name="bgt"].green').val() + ',' + $('input[type="range"][name="bgt"].blue').val() + ')') ;
	}

	var linkcolor1final = chroma('rgb(' + $('input[type="range"][name="linkcolor"].red').val() + ',' + $('input[type="range"][name="linkcolor"].green').val() + ',' + $('input[type="range"][name="linkcolor"].blue').val() + ')') ;
	var headercolorfinal = chroma('rgb(' + $('input[type="range"][name="header"].red').val() + ',' + $('input[type="range"][name="header"].green').val() + ',' + $('input[type="range"][name="header"].blue').val() + ')') ;
	if ( $("body").attr('page-border-background-color-auto') === 'true' ) {
		var contentborderfinal = 'auto' ;
	} else {
		var contentborderfinal = chroma('rgb(' + $('input[type="range"][name="border"].red').val() + ',' + $('input[type="range"][name="border"].green').val() + ',' + $('input[type="range"][name="border"].blue').val() + ')') ;
	}

	if ( $("body").attr('page-text-background-color-auto') === 'true' ) {
		var contentcolorfinal = 'auto' ;
	} else {
		var contentcolorfinal = chroma('rgb(' + $('input[type="range"][name="contentcolor"].red').val() + ',' + $('input[type="range"][name="contentcolor"].green').val() + ',' + $('input[type="range"][name="contentcolor"].blue').val() + ')') ;
	}

	if ( $("body").attr('toolbar-background-color-auto') === 'true' ) {
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
		'--community-background-color:' + chroma('rgb(' + $('input[type="range"][name="bg"].red').val() + ',' + $('input[type="range"][name="bg"].green').val() + ',' + $('input[type="range"][name="bg"].blue').val() + ')') + '!important;' +
		'--community-header-text-color:' + communityheadercolorfinal + '!important;' +
		'--anchor-background-color:' + linkcolor1final + '!important;' +
		'--page-background-color:' + chroma('rgb(' + $('input[type="range"][name="contentbg"].red').val() + ',' + $('input[type="range"][name="contentbg"].green').val() + ',' + $('input[type="range"][name="contentbg"].blue').val() + ')') + '!important;' +
		'--page-border-background-color:' + contentborderfinal + '!important;' +
		'--page-text-background-color:' + contentcolorfinal + '!important;' +
		'--accent-background-color:' + chroma('rgb(' + $('input[type="range"][name="buttoncolor"].red').val() + ',' + $('input[type="range"][name="buttoncolor"].green').val() + ',' + $('input[type="range"][name="buttoncolor"].blue').val() + ')') + '!important;' +
		'--sticky-header-background-color:' + headercolorfinal + '!important;' +
		'--toolbar-background-color:' + floatingheadercolorfinal + '!important;' +
		'--caret-color:' + caretcolorfinal + '!important;' +
		'}'
		);	
	}

	if ($("html.theme-B").length) {
		$("style.designer-style.theme-B").append(
		'.theme-B[visualcolors="standard"] {' +
		'--community-background-color:' + chroma('rgb(' + $('input[type="range"][name="bg"].red').val() + ',' + $('input[type="range"][name="bg"].green').val() + ',' + $('input[type="range"][name="bg"].blue').val() + ')') + '!important;' +
		'--community-header-text-color:' + communityheadercolorfinal + '!important;' +
		'--anchor-background-color:' + linkcolor1final + '!important;' +
		'--page-background-color:' + chroma('rgb(' + $('input[type="range"][name="contentbg"].red').val() + ',' + $('input[type="range"][name="contentbg"].green').val() + ',' + $('input[type="range"][name="contentbg"].blue').val() + ')') + '!important;' +
		'--page-border-background-color:' + contentborderfinal + '!important;' +
		'--page-text-background-color:' + contentcolorfinal + '!important;' +
		'--accent-background-color:' + chroma('rgb(' + $('input[type="range"][name="buttoncolor"].red').val() + ',' + $('input[type="range"][name="buttoncolor"].green').val() + ',' + $('input[type="range"][name="buttoncolor"].blue').val() + ')') + '!important;' +
		'--sticky-header-background-color:' + headercolorfinal + '!important;' +
		'--toolbar-background-color:' + floatingheadercolorfinal + '!important;' +
		'--caret-color:' + caretcolorfinal + '!important;' +
		'}'
		);	
	}

	if ($("html.theme-C").length) {
		$("style.designer-style.theme-C").append(
		'.theme-C[visualcolors="standard"] {' +
		'--community-background-color:' + chroma('rgb(' + $('input[type="range"][name="bg"].red').val() + ',' + $('input[type="range"][name="bg"].green').val() + ',' + 
$('input[type="range"][name="bg"].blue').val() + ')') + '!important;' +
		'--community-header-text-color:' + communityheadercolorfinal + '!important;' +
		'--anchor-background-color:' + linkcolor1final + '!important;' +
		'--page-background-color:' + chroma('rgb(' + $('input[type="range"][name="contentbg"].red').val() + ',' + $('input[type="range"][name="contentbg"].green').val() + ',' + $('input[type="range"][name="contentbg"].blue').val() + ')') + '!important;' +
		'--page-border-background-color:' + contentborderfinal + '!important;' +
		'--page-text-background-color:' + contentcolorfinal + '!important;' +
		'--accent-background-color:' + chroma('rgb(' + $('input[type="range"][name="buttoncolor"].red').val() + ',' + $('input[type="range"][name="buttoncolor"].green').val() + ',' + $('input[type="range"][name="buttoncolor"].blue').val() + ')') + '!important;' +
		'--sticky-header-background-color:' + headercolorfinal + '!important;' +
		'--toolbar-background-color:' + floatingheadercolorfinal + '!important;' +
		'--caret-color:' + caretcolorfinal + '!important;' +
		'}'
		);	
	}

	if ($("html.theme-D").length) {
		$("style.designer-style.theme-D").append(
		'.theme-D[visualcolors="standard"] {' +
		'--community-background-color:' + chroma('rgb(' + $('input[type="range"][name="bg"].red').val() + ',' + $('input[type="range"][name="bg"].green').val() + ',' + $('input[type="range"][name="bg"].blue').val() + ')') + '!important;' +
		'--community-header-text-color:' + communityheadercolorfinal + '!important;' +
		'--anchor-background-color:' + linkcolor1final + '!important;' +
		'--page-background-color:' + chroma('rgb(' + $('input[type="range"][name="contentbg"].red').val() + ',' + $('input[type="range"][name="contentbg"].green').val() + ',' + $('input[type="range"][name="contentbg"].blue').val() + ')') + '!important;' +
		'--page-border-background-color:' + contentborderfinal + '!important;' +
		'--page-text-background-color:' + contentcolorfinal + '!important;' +
		'--accent-background-color:' + chroma('rgb(' + $('input[type="range"][name="buttoncolor"].red').val() + ',' + $('input[type="range"][name="buttoncolor"].green').val() + ',' + $('input[type="range"][name="buttoncolor"].blue').val() + ')') + '!important;' +
		'--sticky-header-background-color:' + headercolorfinal + '!important;' +
		'--toolbar-background-color:' + floatingheadercolorfinal + '!important;' +
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
function DownloadTheme(full=false) {
	wordfilter2 = getComputedStyle(document.querySelector('html')).getPropertyValue("--logo-filter-hover")
	if ( wordfilter2 == "" ) {
		wordfilter2 == 'initial'
	}
	if (full) { // For use without Theme Management
		result = '.theme-A[visualcolors="standard"] {\n' + // Beginning
				// Community BG
				 '--community-background-image:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--community-background-image")  + ';\n' +
				 '--community-background-image-opacity:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--community-background-image-opacity")  + ';\n' +
				// Community Color
				 '--community-background-color:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--community-background-color")  + ';\n' +
				 '--community-background-color-hover:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--community-background-color-hover")  + ';\n' +
				 '--community-background-color-active:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--community-background-color-active")  + ';\n' +
				 '--community-gradient-color:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--community-gradient-color")  + ';\n' +
				 '--community-gradient-color-hover:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--community-gradient-color-hover")  + ';\n' +
				 '--community-foreground-color:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--community-foreground-color")  + ';\n' +
				 '--community-foreground-color-hover:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--community-foreground-color-hover")  + ';\n' +
				 '--community-foreground-color-inverted:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--community-foreground-color-inverted")  + ';\n' +
				 '--community-foreground-color-hover-inverted:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--community-foreground-color-hover-inverted")  + ';\n' +

				 '--community-background-color-page-background-color-mix-light:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--community-background-color-page-background-color-mix-light")  + ';\n' +
				 '--community-background-color-page-background-color-mix:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--community-background-color-page-background-color-mix")  + ';\n' +
				 '--community-background-color-rgb:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--community-background-color-rgb")  + ';\n' +
				 '--community-background-color-hover-rgb:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--community-background-color-hover-rgb")  + ';\n' +
				 '--community-background-color-active-rgb:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--community-background-color-active-rgb")  + ';\n' +
				 '--community-gradient-color-rgb:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--community-gradient-color-rgb")  + ';\n' +
				 '--community-gradient-color-hover-rgb:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--community-gradient-color-hover-rgb")  + ';\n' +
				 '--community-foreground-color-rgb:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--community-foreground-color-rgb")  + ';\n' +
				 '--community-foreground-color-hover-rgb:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--community-foreground-color-hover-rgb")  + ';\n' +
				 '--community-foreground-color-inverted-rgb:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--community-foreground-color-inverted-rgb")  + ';\n' +
				 '--community-foreground-color-hover-inverted-rgb:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--community-foreground-color-hover-inverted-rgb")  + ';\n' +
				// Community Text Color
				 '--community-background-text-color:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--community-background-text-color")  + ';\n' +
				 '--community-background-text-color-hover:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--community-background-text-color-hover")  + ';\n' +
				 '--community-background-text-color-rgb:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--community-background-text-color-rgb")  + ';\n' +
				 '--community-background-text-color-hover-rgb:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--community-background-text-color-hover-rgb")  + ';\n' +
				// Community BG Settings
				 '--community-background-mode:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--community-background-mode")  + ';\n' +
				 '--community-background-horizontal-alignment:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--community-background-horizontal-alignment")  + ';\n' +
				 '--community-background-vertical-alignment:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--community-background-vertical-alignment")  + ';\n' +
				 '--community-background-size:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--community-background-size")  + ';\n' +
				 '--community-background-no-tiling:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--community-background-no-tiling")  + ';\n' +
				 // Anchor Color
				 '--anchor-background-color:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--anchor-background-color")  + ';\n' +
				 '--anchor-background-color-hover:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--anchor-background-color-hover")  + ';\n' +
				 '--anchor-background-color-active:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--anchor-background-color-active")  + ';\n' +
				 '--anchor-gradient-color:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--anchor-gradient-color")  + ';\n' +
				 '--anchor-gradient-color-hover:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--anchor-gradient-color-hover")  + ';\n' +
				 '--anchor-foreground-color:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--anchor-foreground-color")  + ';\n' +
				 '--anchor-foreground-color-hover:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--anchor-foreground-color-hover")  + ';\n' +
				 '--anchor-foreground-color-inverted:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--anchor-foreground-color-inverted")  + ';\n' +
				 '--anchor-foreground-color-hover-inverted:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--anchor-foreground-color-hover-inverted")  + ';\n' +
				 '--anchor-background-color-page-background-color-mix-light:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--anchor-background-color-page-background-color-mix-light")  + ';\n' +
				 '--anchor-background-color-page-background-color-mix:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--anchor-background-color-page-background-color-mix")  + ';\n' +
				 '--anchor-background-color-rgb:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--anchor-background-color-rgb")  + ';\n' +
				 '--anchor-background-color-hover-rgb:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--anchor-background-color-hover-rgb")  + ';\n' +
				 '--anchor-background-color-active-rgb:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--anchor-background-color-active-rgb")  + ';\n' +
				 '--anchor-gradient-color-rgb:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--anchor-gradient-color-rgb")  + ';\n' +
				 '--anchor-gradient-color-hover-rgb:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--anchor-gradient-color-hover-rgb")  + ';\n' +
				 '--anchor-foreground-color-rgb:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--anchor-foreground-color-rgb")  + ';\n' +
				 '--anchor-foreground-color-hover-rgb:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--anchor-foreground-color-hover-rgb")  + ';\n' +
				 '--anchor-foreground-color-inverted-rgb:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--anchor-foreground-color-inverted-rgb")  + ';\n' +
				 '--anchor-foreground-color-hover-inverted-rgb:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--anchor-foreground-color-hover-inverted-rgb")  + ';\n' +
				 // Page Color
				 '--page-background-color:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--page-background-color")  + ';\n' +
				 '--page-background-color-hover:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--page-background-color-hover")  + ';\n' +
				 '--page-background-color-active:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--page-background-color-active")  + ';\n' +
				 '--page-secondary-background-color:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--page-secondary-background-color")  + ';\n' +
				 '--page-secondary-background-color-hover:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--page-secondary-background-color-hover")  + ';\n' +
				 '--page-secondary-background-color-active:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--page-secondary-background-color-active")  + ';\n' +
				 // Page Border Color
				 '--page-border-background-color:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--page-border-background-color")  + ';\n' +
				 '--page-border-background-color-hover:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--page-border-background-color-hover")  + ';\n' +
				 '--page-border-background-color-active:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--page-border-background-color-active")  + ';\n' +
				 '--page-border-gradient-color:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--page-border-gradient-color")  + ';\n' +
				 '--page-border-gradient-color-hover:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--page-border-gradient-color-hover")  + ';\n' +
				 '--page-border-foreground-color:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--page-border-foreground-color")  + ';\n' +
				 '--page-border-foreground-color-inverted:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--page-border-foreground-color-inverted")  + ';\n' +
				 '--page-border-foreground-color-hover:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--page-border-foreground-color-hover")  + ';\n' +
				 '--page-border-background-color-page-background-color-mix-light:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--page-border-background-color-page-background-color-mix-light")  + ';\n' +
				 '--page-border-background-color-page-background-color-mix:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--page-border-background-color-page-background-color-mix")  + ';\n' +
				 '--page-border-background-color-rgb:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--page-border-background-color-rgb")  + ';\n' +
				 '--page-border-background-color-hover-rgb:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--page-border-background-color-hover-rgb")  + ';\n' +
				 '--page-border-background-color-active-rgb:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--page-border-background-color-active-rgb")  + ';\n' +
				 '--page-border-gradient-color-rgb:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--page-border-gradient-color-rgb")  + ';\n' +
				 '--page-border-gradient-color-hover-rgb:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--page-border-gradient-color-hover-rgb")  + ';\n' +
				 '--page-border-foreground-color-rgb:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--page-border-foreground-color-rgb")  + ';\n' +
				 '--page-border-foreground-color-inverted-rgb:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--page-border-foreground-color-inverted-rgb")  + ';\n' +
				 '--page-border-foreground-color-hover-rgb:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--page-border-foreground-color-hover-rgb")  + ';\n' +
				 // Page Text Color
				 '--page-text-background-color:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--page-text-background-color")  + ';\n' +
				 '--page-text-background-color-hover:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--page-text-background-color-hover")  + ';\n' +
				 '--page-text-background-color-active:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--page-text-background-color-active")  + ';\n' +
				 '--page-text-gradient-color:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--page-text-gradient-color")  + ';\n' +
				 '--page-text-gradient-color-hover:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--page-text-gradient-color-hover")  + ';\n' +
				 '--page-text-foreground-color:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--page-text-foreground-color")  + ';\n' +
				 '--page-text-foreground-color-hover:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--page-text-foreground-color-hover")  + ';\n' +
				 '--page-text-foreground-color-inverted:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--page-text-foreground-color-inverted")  + ';\n' +
				 '--page-text-foreground-hover-color-inverted:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--page-text-foreground-color-hover-inverted")  + ';\n' +
				 '--page-text-background-color-page-background-color-mix-light:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--page-text-background-color-page-background-color-mix-light")  + ';\n' +
				 '--page-text-background-color-page-background-color-mix:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--page-text-background-color-page-background-color-mix")  + ';\n' +
				 '--page-text-background-color-rgb:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--page-text-background-color-rgb")  + ';\n' +
				 '--page-text-background-color-hover-rgb:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--page-text-background-color-hover-rgb")  + ';\n' +
				 '--page-text-background-color-active-rgb:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--page-text-background-color-active-rgb")  + ';\n' +
				 '--page-text-gradient-color-rgb:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--page-text-gradient-color-rgb")  + ';\n' +
				 '--page-text-gradient-color-hover-rgb:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--page-text-gradient-color-hover-rgb")  + ';\n' +
				 '--page-text-foreground-color-rgb:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--page-text-foreground-color-rgb")  + ';\n' +
				 '--page-text-foreground-color-hover-rgb:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--page-text-foreground-color-hover-rgb")  + ';\n' +
				 '--page-text-foreground-color-inverted-rgb:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--page-text-foreground-color-inverted-rgb")  + ';\n' +
				 '--page-text-foreground-hover-color-inverted-rgb:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--page-text-foreground-color-hover-inverted-rgb")  + ';\n' +
				 // Accent Color
				 '--accent-background-color:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--accent-background-color")  + ';\n' +
				 '--accent-background-color-hover:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--accent-background-color-hover")  + ';\n' +
				 '--accent-background-color-active:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--accent-background-color-active")  + ';\n' +
				 '--accent-gradient-color:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--accent-gradient-color")  + ';\n' +
				 '--accent-gradient-color-hover:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--accent-gradient-color-hover")  + ';\n' +
				 '--accent-foreground-color:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--accent-foreground-color")  + ';\n' +
				 '--accent-foreground-color-hover:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--accent-foreground-color-hover")  + ';\n' +
				 '--accent-foreground-color-inverted:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--accent-foreground-color-inverted")  + ';\n' +
				 '--accent-foreground-color-hover-inverted:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--accent-foreground-color-hover-inverted")  + ';\n' +
				 '--accent-background-color-page-background-color-mix-light:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--accent-background-color-page-background-color-mix-light")  + ';\n' +
				 '--accent-background-color-page-background-color-mix:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--accent-background-color-page-background-color-mix")  + ';\n' +
				 '--accent-background-color-rgb:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--accent-background-color-rgb")  + ';\n' +
				 '--accent-background-color-hover-rgb:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--accent-background-color-hover-rgb")  + ';\n' +
				 '--accent-background-color-active-rgb:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--accent-background-color-active-rgb")  + ';\n' +
				 '--accent-gradient-color-rgb:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--accent-gradient-color-rgb")  + ';\n' +
				 '--accent-gradient-color-hover-rgb:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--accent-gradient-color-hover-rgb")  + ';\n' +
				 '--accent-foreground-color-rgb:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--accent-foreground-color-rgb")  + ';\n' +
				 '--accent-foreground-color-hover-rgb:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--accent-foreground-color-hover-rgb")  + ';\n' +
				 '--accent-foreground-color-inverted-rgb:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--accent-foreground-color-inverted-rgb")  + ';\n' +
				 '--accent-foreground-color-hover-inverted-rgb:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--accent-foreground-color-hover-inverted-rgb")  + ';\n' +
				 // Sticky Header Color
				 '--sticky-header-background-color:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--sticky-header-background-color")  + ';\n' +
				 '--sticky-header-background-color-hover:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--sticky-header-background-color-hover")  + ';\n' +
				 '--sticky-header-background-color-active:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--sticky-header-background-color-active")  + ';\n' +
				 '--sticky-header-gradient-color:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--sticky-header-gradient-color")  + ';\n' +
				 '--sticky-header-gradient-color-hover:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--sticky-header-gradient-color-hover")  + ';\n' +
				 '--sticky-header-foreground-color:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--sticky-header-foreground-color")  + ';\n' +
				 '--sticky-header-foreground-color-hover:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--sticky-header-foreground-color-hover")  + ';\n' +
				 '--sticky-header-foreground-color-inverted:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--sticky-header-foreground-color-inverted")  + ';\n' +
				 '--sticky-header-foreground-color-hover-inverted:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--sticky-header-foreground-color-hover-inverted")  + ';\n' +

				 '--sticky-header-background-color-page-background-color-mix-light:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--sticky-header-background-color-page-background-color-mix-light")  + ';\n' +
				 '--sticky-header-background-color-page-background-color-mix:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--sticky-header-background-color-page-background-color-mix")  + ';\n' +
				 '--sticky-header-background-color-rgb:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--sticky-header-background-color-rgb")  + ';\n' +
				 '--sticky-header-background-color-hover-rgb:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--sticky-header-background-color-hover-rgb")  + ';\n' +
				 '--sticky-header-background-color-active-rgb:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--sticky-header-background-color-active-rgb")  + ';\n' +
				 '--sticky-header-gradient-color-rgb:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--sticky-header-gradient-color-rgb")  + ';\n' +
				 '--sticky-header-gradient-color-hover-rgb:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--sticky-header-gradient-color-hover-rgb")  + ';\n' +
				 '--sticky-header-foreground-color-rgb:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--sticky-header-foreground-color-rgb")  + ';\n' +
				 '--sticky-header-foreground-color-hover-rgb:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--sticky-header-foreground-color-hover-rgb")  + ';\n' +
				 '--sticky-header-foreground-color-inverted-rgb:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--sticky-header-foreground-color-inverted-rgb")  + ';\n' +
				 '--sticky-header-foreground-color-hover-inverted-rgb:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--sticky-header-foreground-color-hover-inverted-rgb")  + ';\n' +
				 // Τoolbar Color
				 '--toolbar-background-color:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--toolbar-background-color")  + ';\n' +
				 '--toolbar-background-color-hover:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--toolbar-background-color-hover")  + ';\n' +
				 '--toolbar-background-color-active:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--toolbar-background-color-active")  + ';\n' +
				 '--toolbar-gradient-color:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--toolbar-gradient-color")  + ';\n' +
				 '--toolbar-gradient-color-hover:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--toolbar-gradient-color-hover")  + ';\n' +
				 '--toolbar-foreground-color:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--toolbar-foreground-color")  + ';\n' +
				 '--toolbar-foreground-color-hover:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--toolbar-foreground-color-hover")  + ';\n' +
				 '--toolbar-foreground-color-inverted:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--toolbar-foreground-color-inverted")  + ';\n' +
				 '--toolbar-foreground-color-hover-inverted:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--toolbar-foreground-color-hover-inverted")  + ';\n' +
				 '--toolbar-background-color-page-background-color-mix-light:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--toolbar-background-color-page-background-color-mix-light")  + ';\n' +
				 '--toolbar-background-color-page-background-color-mix:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--toolbar-background-color-page-background-color-mix")  + ';\n' +
				 '--toolbar-background-color-rgb:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--toolbar-background-color-rgb")  + ';\n' +
				 '--toolbar-background-color-hover-rgb:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--toolbar-background-color-hover-rgb")  + ';\n' +
				 '--toolbar-background-color-active-rgb:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--toolbar-background-color-active-rgb")  + ';\n' +
				 '--toolbar-gradient-color-rgb:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--toolbar-gradient-color-rgb")  + ';\n' +
				 '--toolbar-gradient-color-hover-rgb:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--toolbar-gradient-color-hover-rgb")  + ';\n' +
				 '--toolbar-foreground-color-rgb:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--toolbar-foreground-color-rgb")  + ';\n' +
				 '--toolbar-foreground-color-hover-rgb:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--toolbar-foreground-color-hover-rgb")  + ';\n' +
				 '--toolbar-foreground-color-inverted-rgb:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--toolbar-foreground-color-inverted-rgb")  + ';\n' +
				 '--toolbar-foreground-color-hover-inverted-rgb:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--toolbar-foreground-color-hover-inverted-rgb")  + ';\n' +
				 // Alert
				 '--alert-background-color:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--alert-background-color")  + ';\n' +
				 '--alert-background-color-hover:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--alert-background-color-hover")  + ';\n' +
				 '--alert-background-color-active:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--alert-background-color-active")  + ';\n' +
				 '--alert-gradient-color:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--alert-gradient-color")  + ';\n' +
				 '--alert-gradient-color-hover:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--alert-gradient-color-hover")  + ';\n' +
				 '--alert-foreground-color:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--alert-foreground-color")  + ';\n' +
				 '--alert-foreground-color-hover:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--alert-foreground-color-hover")  + ';\n' +
				 '--alert-foreground-color-inverted:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--alert-foreground-color-inverted")  + ';\n' +
				 '--alert-foreground-color-hover-inverted:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--alert-foreground-color-hover-inverted")  + ';\n' +
				 '--alert-background-color-page-background-color-mix-light:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--alert-background-color-page-background-color-mix-light")  + ';\n' +
				 '--alert-background-color-page-background-color-mix:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--alert-background-color-page-background-color-mix")  + ';\n' +
				 '--alert-background-color-rgb:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--alert-background-color-rgb")  + ';\n' +
				 '--alert-background-color-hover-rgb:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--alert-background-color-hover-rgb")  + ';\n' +
				 '--alert-background-color-active-rgb:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--alert-background-color-active-rgb")  + ';\n' +
				 '--alert-gradient-color-rgb:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--alert-gradient-color-rgb")  + ';\n' +
				 '--alert-gradient-color-hover-rgb:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--alert-gradient-color-hover-rgb")  + ';\n' +
				 '--alert-foreground-color-rgb:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--alert-foreground-color-rgb")  + ';\n' +
				 '--alert-foreground-color-hover-rgb:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--alert-foreground-color-hover-rgb")  + ';\n' +
				 '--alert-foreground-color-inverted-rgb:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--alert-foreground-color-inverted-rgb")  + ';\n' +
				 '--alert-foreground-color-hover-inverted-rgb:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--alert-foreground-color-hover-inverted-rgb")  + ';\n' +
				 // Warning
				 '--warning-background-color:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--warning-background-color")  + ';\n' +
				 '--warning-background-color-hover:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--warning-background-color-hover")  + ';\n' +
				 '--warning-background-color-active:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--warning-background-color-active")  + ';\n' +
				 '--warning-gradient-color:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--warning-gradient-color")  + ';\n' +
				 '--warning-gradient-color-hover:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--warning-gradient-color-hover")  + ';\n' +
				 '--warning-foreground-color:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--warning-foreground-color")  + ';\n' +
				 '--warning-foreground-color-hover:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--warning-foreground-color-hover")  + ';\n' +
				 '--warning-foreground-color-inverted:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--warning-foreground-color-inverted")  + ';\n' +
				 '--warning-foreground-color-hover-inverted:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--warning-foreground-color-hover-inverted")  + ';\n' +
				 '--warning-background-color-page-background-color-mix-light:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--warning-background-color-page-background-color-mix-light")  + ';\n' +
				 '--warning-background-color-page-background-color-mix:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--warning-background-color-page-background-color-mix")  + ';\n' +
				 '--warning-background-color-rgb:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--warning-background-color-rgb")  + ';\n' +
				 '--warning-background-color-hover-rgb:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--warning-background-color-hover-rgb")  + ';\n' +
				 '--warning-background-color-active-rgb:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--warning-background-color-active-rgb")  + ';\n' +
				 '--warning-gradient-color-rgb:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--warning-gradient-color-rgb")  + ';\n' +
				 '--warning-gradient-color-hover-rgb:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--warning-gradient-color-hover-rgb")  + ';\n' +
				 '--warning-foreground-color-rgb:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--warning-foreground-color-rgb")  + ';\n' +
				 '--warning-foreground-color-hover-rgb:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--warning-foreground-color-hover-rgb")  + ';\n' +
				 '--warning-foreground-color-inverted-rgb:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--warning-foreground-color-inverted-rgb")  + ';\n' +
				 '--warning-foreground-color-hover-inverted-rgb:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--warning-foreground-color-hover-inverted-rgb")  + ';\n' +				 
				 // Success
				 '--success-background-color:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--success-background-color")  + ';\n' +
				 '--success-background-color-hover:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--success-background-color-hover")  + ';\n' +
				 '--success-background-color-active:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--success-background-color-active")  + ';\n' +
				 '--success-gradient-color:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--success-gradient-color")  + ';\n' +
				 '--success-gradient-color-hover:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--success-gradient-color-hover")  + ';\n' +
				 '--success-foreground-color:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--success-foreground-color")  + ';\n' +
				 '--success-foreground-color-hover:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--success-foreground-color-hover")  + ';\n' +
				 '--success-foreground-color-inverted:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--success-foreground-color-inverted")  + ';\n' +
				 '--success-foreground-color-hover-inverted:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--success-foreground-color-hover-inverted")  + ';\n' +
				 '--success-background-color-page-background-color-mix-light:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--success-background-color-page-background-color-mix-light")  + ';\n' +
				 '--success-background-color-page-background-color-mix:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--success-background-color-page-background-color-mix")  + ';\n' +
				 '--success-background-color-rgb:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--success-background-color-rgb")  + ';\n' +
				 '--success-background-color-hover-rgb:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--success-background-color-hover-rgb")  + ';\n' +
				 '--success-background-color-active-rgb:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--success-background-color-active-rgb")  + ';\n' +
				 '--success-gradient-color-rgb:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--success-gradient-color-rgb")  + ';\n' +
				 '--success-gradient-color-hover-rgb:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--success-gradient-color-hover-rgb")  + ';\n' +
				 '--success-foreground-color-rgb:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--success-foreground-color-rgb")  + ';\n' +
				 '--success-foreground-color-hover-rgb:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--success-foreground-color-hover-rgb")  + ';\n' +
				 '--success-foreground-color-inverted-rgb:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--success-foreground-color-inverted-rgb")  + ';\n' +
				 '--success-foreground-color-hover-inverted-rgb:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--success-foreground-color-hover-inverted-rgb")  + ';\n' +
				 // Message
				 '--message-background-color:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--message-background-color")  + ';\n' +
				 '--message-background-color-hover:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--message-background-color-hover")  + ';\n' +
				 '--message-background-color-active:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--message-background-color-active")  + ';\n' +
				 '--message-gradient-color:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--message-gradient-color")  + ';\n' +
				 '--message-gradient-color-hover:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--message-gradient-color-hover")  + ';\n' +
				 '--message-foreground-color:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--message-foreground-color")  + ';\n' +
				 '--message-foreground-color-hover:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--message-foreground-color-hover")  + ';\n' +
				 '--message-foreground-color-inverted:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--message-foreground-color-inverted")  + ';\n' +
				 '--message-foreground-color-hover-inverted:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--message-foreground-color-hover-inverted")  + ';\n' +
				 '--message-background-color-page-background-color-mix-light:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--message-background-color-page-background-color-mix-light")  + ';\n' +
				 '--message-background-color-page-background-color-mix:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--message-background-color-page-background-color-mix")  + ';\n' +
				 '--message-background-color-rgb:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--message-background-color-rgb")  + ';\n' +
				 '--message-background-color-hover-rgb:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--message-background-color-hover-rgb")  + ';\n' +
				 '--message-background-color-active-rgb:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--message-background-color-active-rgb")  + ';\n' +
				 '--message-gradient-color-rgb:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--message-gradient-color-rgb")  + ';\n' +
				 '--message-gradient-color-hover-rgb:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--message-gradient-color-hover-rgb")  + ';\n' +
				 '--message-foreground-color-rgb:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--message-foreground-color-rgb")  + ';\n' +
				 '--message-foreground-color-hover-rgb:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--message-foreground-color-hover-rgb")  + ';\n' +
				 '--message-foreground-color-inverted-rgb:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--message-foreground-color-inverted-rgb")  + ';\n' +
				 '--message-foreground-color-hover-inverted-rgb:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--message-foreground-color-hover-inverted-rgb")  + ';\n' +
				 // Miscs
				 '--caret-color:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--caret-color")  + ';\n' +
				 '--custom-secondary-font:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--custom-secondary-font")  + ';\n' +
				 '--border-radius:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--border-radius")  + ';\n' +
				 '--logo-filter:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--logo-filter")  + ';\n' +
				 '--logo-filter-hover:' + wordfilter2  + ';\n' +
				 '--logo-filter-duration:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--logo-filter-duration")  + ';\n' +
				 '--logo-filter-delay:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--logo-filter-delay")  + ';\n' +
				 '--article-link-background-color-hover:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--article-secondary-link-background-color-hover")  + ';\n' +
				 '--article-secondary-link-background-color-hover:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--article-link-background-color-hover")  + ';\n' +
				 '--article-new-link-background-color-hover:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--article-new-link-background-color-hover")  + ';\n' +
				 '}' // Ending
	} else { // For use with Theme Management
		result = '.theme-A[visualcolors="standard"] {\n' + // Beginning
				 '--community-background-image:' + getComputedStyle(document.querySelector('html')).getPropertyValue("--community-background-image")  + ';\n' +
				 '--community-background-image-opacity:' + getComputedStyle(document.querySelector('html')).getPropertyValue("--community-background-image-opacity")  + ';\n' +
				 '--community-background-color:' + getComputedStyle(document.querySelector('html')).getPropertyValue("--community-background-color")  + ';\n' +
				 '--community-background-text-color:' + getComputedStyle(document.querySelector('html')).getPropertyValue("--community-background-text-color")  + ';\n' +
				 '--community-background-mode:' + getComputedStyle(document.querySelector('html')).getPropertyValue("--community-background-mode")  + ';\n' +
				 '--community-background-horizontal-alignment:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--community-background-horizontal-alignment")  + ';\n' +
				 '--community-background-vertical-alignment:' + getComputedStyle(document.querySelector('html')).getPropertyValue("--community-background-vertical-alignment")  + ';\n' +
				 '--community-background-size:' + getComputedStyle(document.querySelector('html')).getPropertyValue("--community-background-size")  + ';\n' +
				 '--community-background-no-tiling:' + getComputedStyle(document.querySelector('html')).getPropertyValue("--community-background-no-tiling")  + ';\n' +
				 '--anchor-background-color:' + getComputedStyle(document.querySelector('html')).getPropertyValue("--anchor-background-color")  + ';\n' +
				 '--page-background-color:' + getComputedStyle(document.querySelector('html')).getPropertyValue("--page-background-color")  + ';\n' +
				 '--page-border-background-color:' + getComputedStyle(document.querySelector('html')).getPropertyValue("--page-border-background-color")  + ';\n' +
				 '--page-text-background-color:' + getComputedStyle(document.querySelector('html')).getPropertyValue("--page-text-background-color")  + ';\n' +
				 '--accent-background-color:' + getComputedStyle(document.querySelector('html')).getPropertyValue("--accent-background-color")  + ';\n' +
				 '--sticky-header-background-color:' + getComputedStyle(document.querySelector('html')).getPropertyValue("--sticky-header-background-color")  + ';\n' +
				 '--toolbar-background-color:' + getComputedStyle(document.querySelector('html')).getPropertyValue("--toolbar-background-color")  + ';\n' +
				 '--caret-color:' + getComputedStyle(document.querySelector('html')).getPropertyValue("--caret-color")  + ';\n' +
				 '--custom-secondary-font:' + getComputedStyle(document.querySelector('html')).getPropertyValue("--custom-secondary-font")  + ';\n' +
				 '--border-radius:' + getComputedStyle(document.querySelector('html')).getPropertyValue("--border-radius")  + ';\n' +
				 '--logo-filter:' + getComputedStyle(document.querySelector('html')).getPropertyValue("--logo-filter")  + ';\n' +
				 '--logo-filter-hover:' + wordfilter2  + ';\n' +
				 '--logo-filter-duration:' + getComputedStyle(document.querySelector('html')).getPropertyValue("--logo-filter-duration")  + ';\n' +
				 '--logo-filter-delay:' + getComputedStyle(document.querySelector('html')).getPropertyValue("--logo-filter-delay")  + ';\n' +
				 '}' // Ending
	}
	alert('Once you save the file, put the stylesheet contents to MediaWiki:Common.css for use in the wiki or upload it to any website.');
	DownloadData(result,'MyTheme','css');
}

function DownloadTheme2() {
	wordfilter2 = getComputedStyle(document.querySelector('html')).getPropertyValue("--logo-filter-hover")
	if ( wordfilter2 == "" ) {
		wordfilter2 == 'initial'
	}
	result = '.theme-A.visualcolors-standard {\n' + // Beginning
			 '--desktop-background-image:' + getComputedStyle(document.querySelector('html')).getPropertyValue("--community-background-image")  + ';\n' +
			 '--desktop-background-image-opacity:' + getComputedStyle(document.querySelector('html')).getPropertyValue("--community-background-image-opacity")  + ';\n' +
			 '--desktop-background-color:' + getComputedStyle(document.querySelector('html')).getPropertyValue("--community-background-color")  + ';\n' +
			 '--desktop-text-background-color:' + getComputedStyle(document.querySelector('html')).getPropertyValue("--community-header-text-color")  + ';\n' +
			 '--desktop-background-mode:' + getComputedStyle(document.querySelector('html')).getPropertyValue("--community-background-mode")  + ';\n' +
			 '--desktop-background-size:' + getComputedStyle(document.querySelector('html')).getPropertyValue("--community-background-size")  + ';\n' +
			 '--desktop-background-horizontal-alignment:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--community-background-horizontal-alignment")  + ';\n' +
			 '--desktop-background-vertical-alignment:' + getComputedStyle(document.querySelector('html')).getPropertyValue("--community-background-vertical-alignment")  + ';\n' +
			 '--desktop-background-no-horizontal-tiling:' + getComputedStyle(document.querySelector('html')).getPropertyValue("--community-background-no-tiling")  + ';\n' +
			 '--desktop-background-no-vertical-tiling:' + getComputedStyle(document.querySelector('html')).getPropertyValue("--community-background-no-tiling")  + ';\n' +
			 '--canvas-background-color:' + getComputedStyle(document.querySelector('html')).getPropertyValue("--page-background-color")  + ';\n' +
			 '--inactive-text-background-color:' + getComputedStyle(document.querySelector('html')).getPropertyValue("--page-border-background-color")  + ';\n' +
			 '--canvas-text-background-color:' + getComputedStyle(document.querySelector('html')).getPropertyValue("--page-text-background-color")  + ';\n' +
			 '--highlight-background-color:' + getComputedStyle(document.querySelector('html')).getPropertyValue("--accent-background-color")  + ';\n' +
			 '--hyperlink-background-color:' + getComputedStyle(document.querySelector('html')).getPropertyValue("--anchor-background-color")  + ';\n' +
			 '--active-title-background-color:' + getComputedStyle(document.querySelector('html')).getPropertyValue("--sticky-header-background-color")  + ';\n' +
			 '--inactive-title-background-color:' + getComputedStyle(document.querySelector('html')).getPropertyValue("--toolbar-background-color")  + ';\n' +
			 '--custom-secondary-font:' + getComputedStyle(document.querySelector('html')).getPropertyValue("--custom-secondary-font")  + ';\n' +
			 '--border-radius:' + getComputedStyle(document.querySelector('html')).getPropertyValue("--border-radius")  + ';\n' +
			 '--icon-filter:' + getComputedStyle(document.querySelector('html')).getPropertyValue("--logo-filter")  + ';\n' +
			 '--icon-filter-hover:' + wordfilter2  + ';\n' +
			 '--icon-filter-duration:' + getComputedStyle(document.querySelector('html')).getPropertyValue("--logo-filter-duration")  + ';\n' +
			 '--icon-filter-delay:' + getComputedStyle(document.querySelector('html')).getPropertyValue("--logo-filter-delay")  + ';\n' +
			 '}' // Ending
	DownloadData(result,'MyTheme','css');
	alert('Once you save the file, put the stylesheet contents to MediaWiki:Common.css for use in any MediaWiki wiki with Evelution Installed or upload it to any website.');
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

		var wfilter = getComputedStyle(document.querySelector('html')).getPropertyValue("--logo-filter");
		if (wfilter == 'initial') {
			var wfilter = '';
		}
		var wfilter2 = getComputedStyle(document.querySelector('html')).getPropertyValue("--logo-filter-hover");
		if (wfilter2 == 'initial') {
			var wfilter2 = '';
		}

		$('input.font_2nd').val( sfont );
		$('input.image_opacity').val( parseInt( getComputedStyle(document.querySelector('html')).getPropertyValue("--community-background-image-opacity") ) );
		$('input.button_radi').val( parseInt( getComputedStyle(document.querySelector('html')).getPropertyValue("--border-radius") ) );
		$('input.filter1').val( wfilter );
		$('input.filter2').val( wfilter2 );
		var x = $('input.filter_duration').val( parseInt( getComputedStyle(document.querySelector('html')).getPropertyValue("--logo-filter-duration") ) );
		var x = $('input.filter_delay').val( parseInt( getComputedStyle(document.querySelector('html')).getPropertyValue("--logo-filter-delay") ) );
	}
}


/* Begin Color Parsers */
function ColorTestTwin(color,color2,intensity=1,inter='hsl') {
	return chroma.mix(color,color2,0.3*intensity, inter);
}

function GetHoverColor(color1='#ffffff',color2='#000000',inter='hsl',steps=4) {
	colors = chroma.scale([color1, color2]).mode(inter).colors(steps);
	return colors[1];
}

function GetActiveColor(color1='#ffffff',color2='#000000',inter='hsl',steps=4) {
	colors = chroma.scale([GetHoverColor(color1,color2,inter,steps), color2]).mode(inter).colors(steps);
	return colors[1];
}


function ColorTest(color,text=false,inv=false,dledlen=false) { // Regular Colors
	var color2 = color;
	if (isLightColor(color2)) {
		if (text === true) {
			if (inv === false) {
				return getComputedStyle(document.querySelector('html')).getPropertyValue("--light-theme-foreground-color"); // Was #000000 and 0e191a
			} else {
				return getComputedStyle(document.querySelector('html')).getPropertyValue("--dark-theme-foreground-color");
			}
		} else {
			if (inv === false) {
				return GetHoverColor(color, '#000000');
			} else {
				return GetHoverColor(color, '#ffffff');
			}
		}
	} else {
		if (text === true) {
			if (inv === true) {
				return getComputedStyle(document.querySelector('html')).getPropertyValue("--light-theme-foreground-color"); // Was #000000 and 0e191a
			} else {
				return getComputedStyle(document.querySelector('html')).getPropertyValue("--dark-theme-foreground-color");
			}
		} else {
			if (inv === true) {
				return GetHoverColor(color, '#000000');
			} else {
				return GetHoverColor(color, '#ffffff');
			}
		}
	}


}

function SuperColorTest(color) { // Double Amount
	if (isLightColor(color)) {
		return GetActiveColor(color, '#000000');
	} else {
		return GetActiveColor(color, '#ffffff');
	}
}


function ColorInvert(color) {
	var r = 255 - chroma(color).get('rgb.r');
	var g = 255 - chroma(color).get('rgb.g');
	var b = 255 - chroma(color).get('rgb.b');
	var h = chroma(color).get('hsl.h');	
	return chroma.rgb(r,g,b).set('hsl.h', h);
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

// Conversion for Hex (Unused)
function Color3(r=0,g=0,b=0) {
	return chroma('rgb(' + r + ',' + g + ',' + b + ')' ).get('hex');
}


function isLightColor(color) {
	return ((chroma.contrast(getComputedStyle(document.querySelector('html')).getPropertyValue("--light-theme-foreground-color"), color)) > 5);
}

function isSuperLightColor(color) {
	return ((chroma.contrast(getComputedStyle(document.querySelector('html')).getPropertyValue("--light-theme-foreground-color"), color)) > 6);
}


function isSuitableColor(color,color2) {
return ((chroma.contrast(color, color2)) > 3)
}

function isSuitableColor2(color,color2) {
return ((chroma.contrast(color, color2)) > 1.5) // For Border Color
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
	  var data = '<button class="cpe-button is-square color-button" onclick="PickColor1(' + "'#" + color + "'" + ')"> <div style="border:1px solid; width:inherit; height:inherit; pointer-events:none; border-radius:50%; background-color:' + "#" +  color + ';"></div> </button>'
	  str = str + data;
	}

	$(".rec-colors-body").append(str);

// Header Text Color
	str = '';

	var Colors = ['1d1d1d','8d0017','ac0000','d34500','eb9900','ffb317','7d9b34','5ea200','417800','1d5100','003c00','44a177','008d8f','00a8a9','009bf0','0068b7','003981','091a45','180052','490090','711993','8d37af','8c005a','ab0064','ea0098','5e5e5e','be0021','f73400','ff892b','ffc12c','ffc91a','8acb00','6db000','169900','58cc7d','00d1d2','41c3ff','008ee1','00baff','0075c6','4617b4','6800b3','a13bc9','bd56e5','c02883','f900a5','ff5fdc','e2e2e2']
	var socialAM = Colors.length

	for (let i = 0; i < socialAM; i++) {
	  var color = Colors[i];
	  var data = '<button class="cpe-button is-square color-button" onclick="PickColor8(' + "'#" + color + "'" + ')"> <div style="border:1px solid; width:inherit; height:inherit; pointer-events:none; border-radius:50%; background-color:' + "#" +  color + ';"></div> </button>'
	  str = str + data;
	}

	$(".rec-colors-body-text").append(str);



// Header Color
	str = '';
//	var Colors = ['fec356','6699ff','6c93b1','a47719','846d35','786c42','f14800','337800','006cb0','dd360a','a34112','474646','7b3b0a','4f4341','0038d8','2d2c18','611e03','003816','891100','012e59','721410','6f027c','7a0146'] 
	var Colors = ['ffb900','ff8c00','f7630c','ca5010','da3b01','ef6950','d13438','ff4343','e74856','e81023','ea005e','c30052','c30052','bf0077','c239b3','9a0089','0078d7','0063b1','8e8cd8','6b69d6','8764b8','744da9','b146c2','881798','0099bc','2d7d9a','00b7c3','028387','00b294','018574','00cc6a','10893e','7a7574','5d5a58','68768a','515c6b','567c73','486860','498205','107c10','767676','4c4a48','69797e','4a5459','647c64','525e54','847545','7e735f'] 

	var socialAM = Colors.length

	for (let i = 0; i < socialAM; i++) {
	  var color = Colors[i];
	  var data = '<button class="cpe-button is-square color-button" onclick="PickColor2(' + "'#" + color + "'" + ')"> <div style="border:1px solid; width:inherit; height:inherit; pointer-events:none; border-radius:50%; background-color:' + "#" +  color + ';"></div> </button>'
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
	  var data = '<button class="cpe-button is-square color-button" onclick="PickColor9(' + "'#" + color + "'" + ')"> <div style="border:1px solid; width:inherit; height:inherit; pointer-events:none; border-radius:50%; background-color:' + "#" +  color + ';"></div> </button>'
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
	  var data = '<button class="cpe-button is-square color-button" onclick="PickColor3(' + "'#" + color + "'" + ')"> <div style="border:1px solid; width:inherit; height:inherit; pointer-events:none; border-radius:50%; background-color:' + "#" +  color + ';"></div> </button>'
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
	  var data = '<button class="cpe-button is-square color-button" onclick="PickColor4(' + "'#" + color + "'" + ')"> <div style="border:1px solid; width:inherit; height:inherit; pointer-events:none; border-radius:50%; background-color:' + "#" +  color + ';"></div> </button>'
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
	  var data = '<button class="cpe-button is-square color-button" onclick="PickColor5(' + "'#" + color + "'" + ')"> <div style="border:1px solid; width:inherit; height:inherit; pointer-events:none; border-radius:50%; background-color:' + "#" +  color + ';"></div> </button>'
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
	  var data = '<button class="cpe-button is-square color-button" onclick="PickColor6(' + "'#" + color + "'" + ')"> <div style="border:1px solid; width:inherit; height:inherit; pointer-events:none; border-radius:50%; background-color:' + "#" +  color + ';"></div> </button>'
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
	  var data = '<button class="cpe-button is-square color-button" onclick="PickColor7(' + "'#" + color + "'" + ')"> <div style="border:1px solid; width:inherit; height:inherit; pointer-events:none; border-radius:50%; background-color:' + "#" +  color + ';"></div> </button>'
	  str = str + data;
	}

	$(".rec-colors-button").append(str);


// Caret Color
	str = '';
	var Colors = ['bfff00','fafa00','ffbf00','ff00bf','00bfff','00ffbf','bf00ff']
	var socialAM = Colors.length

	for (let i = 0; i < socialAM; i++) {
	  var color = Colors[i];
	  var data = '<button class="cpe-button is-square color-button" onclick="PickColorCc(' + "'#" + color + "'" + ')"> <div style="border:1px solid; width:inherit; height:inherit; pointer-events:none; border-radius:50%; background-color:' + "#" +  color + ';"></div> </button>'
	  str = str + data;
	}

	$(".rec-colors-caret").append(str);


}

function CompileChosenThems() {
// Selection Themes
	var highlightedItems = document.querySelectorAll(".preview-theme-wrapper.selection-theme, .preview-theme-wrapper.visual-theme");
	highlightedItems.forEach(function(x) {
	var text_color2 =	getComputedStyle(x).getPropertyValue("--window-color");
	var text_color =	getComputedStyle(x).getPropertyValue("--page-text-background-color"); // --window_text for non selection
	var header_color =	getComputedStyle(x).getPropertyValue("--header-color");
	x.style.setProperty("--bg-border", getComputedStyle(document.querySelector('container')).getPropertyValue("--page-border-background-color") );
	x.style.setProperty("--header-color-hover", ColorTest(header_color));
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
	x.style.setProperty("--bg-border", getComputedStyle(document.querySelector('container')).getPropertyValue("--page-border-background-color") );
	x.style.setProperty("--header-color-hover", ColorTest(header_color));
	x.style.setProperty("--header-text", ColorTest(header_color,true));
	if (text_color === 'auto') {
		x.style.setProperty("--window-text", ColorTest(text_color2,true));
	}
	});
}

function SocialCompile() {
	$("head .social-colors").text('');	
	let str = '';
	var socialV = ['facebook','googleplus','line','linkedin','instagram','meneame','nk','odnoklassniki','reddit','tumblr','twitter','vkontakte','wykop','weibo','youtube','discord','fandom','asecure','steam','spotify','twitch','qore','mpisto','splashhol','gamepedia','github','xbox']
	var socialC = ['#3b5998','#dd4b39','#00c300','#0077b5','#e02d69','#ff6400','#4077a7','#f96900','#ff4500','#34465d','#1da1f2','#587ca3','#fb803f','#ff8140','#cd201f','#5865f2','#00acac','#0009FF','#000','#1ed760','#563194','#ff4500','#18bbc5','#61448d','#f4801f','#191717','#5dc21e']
	var socialAM = socialC.length
// Start Content BG
		if ( (window.MW18darkmode === true) ) {
		// Adaptive
			var content_color =	getComputedStyle(document.querySelector('container')).getPropertyValue("--page-background-color");
		//End Adaptive
		} else {
			var content_color =	getComputedStyle(document.querySelector('html')).getPropertyValue("--page-background-color");
		}
// End Content BG

	for (let i = 0; i < socialAM; i++) {
	  var color = socialC[i];
	  var colormixl = ColorTestTwin(content_color,color,0.8,'rgb');
      var colormix = ColorTestTwin(content_color,color,1.6,'rgb');
	  var name = socialV[i];
	  var data = '.cpe-button.is-' + name + '-color{' +'--accent-background-color:' + color + '!important;' + '--accent-background-color-hover:' + ColorTest(color,false) + '!important;' + '--accent-background-color-active:' + SuperColorTest(color,false) + '!important;' + '--accent-foreground-color:' + ColorTest(color,true) + '!important;' + '--accent-foreground-color-inverted:' + ColorTest(color,true,true) + '!important;' + '--accent-foreground-color-hover:' + ColorTest(ColorTest(color,true),false) + '!important;' + '--accent-background-color-page-background-color-mix-light:' + colormixl + '!important;' + '--accent-background-color-page-background-color-mix:' + colormix + '!important;' + '}'
	  str = str + data;
	}

	$("head .social-colors").append(str);

}

/* End Color Parsers */


/* Used to udpate all dynamical variables */
function ColorUpdate(refresh=true,suitcheck=false) {
if (refresh === true) {
	colortheme($('body').attr("wikitheme"), false,false)
}
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
	var content_text =	getComputedStyle(document.querySelector('html')).getPropertyValue("--page-background-color");
// Adaptive
	if (getComputedStyle(document.querySelector('html')).getPropertyValue("--page-text-background-color") === 'auto') {
		if (isLightColor(content_text)) {
			var content_color = getComputedStyle(document.querySelector('html')).getPropertyValue("--light-theme-text-background-color")
		} else {
			var content_color = getComputedStyle(document.querySelector('html')).getPropertyValue("--dark-theme-text-background-color")
		}

	} else {
		var content_color =	getComputedStyle(document.querySelector('html')).getPropertyValue("--page-text-background-color");
	}
//End Adaptive
} else {
	var content_color =	getComputedStyle(document.querySelector('html')).getPropertyValue("--page-background-color");
	var content_text =	getComputedStyle(document.querySelector('html')).getPropertyValue("--page-text-background-color");
}

var content_color2 = ColorTest(content_color);
var content_color3 = SuperColorTest(content_color); // Scrollbar


if ((getComputedStyle(document.querySelector('html')).getPropertyValue("--page-text-background-color") === 'auto') && (window.MW18darkmode === false) ) {
	if (isLightColor(content_color)) {
		var dropdowncolor3 = getComputedStyle(document.querySelector('html')).getPropertyValue("--light-theme-text-background-color")
	} else {
		var dropdowncolor3 = getComputedStyle(document.querySelector('html')).getPropertyValue("--dark-theme-text-background-color")
	}
} else {
	var dropdowncolor3 = getComputedStyle(document.querySelector('html')).getPropertyValue("--page-text-background-color");
}

if (isLightColor(content_color)) {
	var dropdowncolor = chroma.mix(content_color,getComputedStyle(document.querySelector('html')).getPropertyValue("--light-theme-text-background-color"),0.15, 'hsv');
	if ((getComputedStyle(document.querySelector('html')).getPropertyValue("--page-border-background-color") === 'auto')  ) {
		var dropdowncolor2 = chroma.mix(content_color,getComputedStyle(document.querySelector('html')).getPropertyValue("--light-theme-text-background-color"),7.5, 'hsv');
	} else {
		var dropdowncolor2 = getComputedStyle(document.querySelector('html')).getPropertyValue("--page-border-background-color");
	}

} else {
	var dropdowncolor = chroma.mix(content_color,getComputedStyle(document.querySelector('html')).getPropertyValue("--dark-theme-text-background-color"),0.15, 'hsv');
	if ((getComputedStyle(document.querySelector('html')).getPropertyValue("--page-border-background-color") === 'auto')  ) {
		var dropdowncolor2 = chroma.mix(content_color,getComputedStyle(document.querySelector('html')).getPropertyValue("--dark-theme-text-background-color"),7.5, 'hsv');
	} else {
		var dropdowncolor2 = getComputedStyle(document.querySelector('html')).getPropertyValue("--page-border-background-color");
	}

}

if ((getComputedStyle(document.querySelector('html')).getPropertyValue("--page-text-background-color") != 'auto') || (window.MW18darkmode === true) ) {
	var content_text2 = ColorTest(content_text);
	var content_text3 = SuperColorTest(content_text); // Scrollbar
	var content_text4 = ColorTest(content_text,true);
	var content_text4I = ColorTest(content_text,true,true);
	colormixl = GetHoverColor(content_color,content_text,'rgb',5);
	colormix = GetActiveColor(content_color,content_text,'rgb',5);
} else {
	var content_text2 = ColorTest(dropdowncolor3);
	var content_text3 = SuperColorTest(dropdowncolor3); // Scrollbar
	var content_text4 = ColorTest(dropdowncolor3,true);
	var content_text4I = ColorTest(dropdowncolor3,true,true);
	colormixl = GetHoverColor(content_color,dropdowncolor3,'rgb',5);
	colormix = GetActiveColor(content_color,dropdowncolor3,'rgb',5);
}
	var content_text5 = ColorTest(content_text4,false);
	var content_text5I = ColorTest(content_text4I,false);

var dropdowncolorH = ColorTest(dropdowncolor);
var dropdowncolorA = SuperColorTest(dropdowncolor); // Scrollbar


if (window.MW18darkmode === true) {
	contentcolorB = content_text
	contentbgB = content_color
} else {
	contentcolorB = dropdowncolor3
	contentbgB = getComputedStyle(document.querySelector('html')).getPropertyValue("--page-background-color");
}

	var contentbgFG = ColorTest(contentbgB,true);
	var contentbgFG2 = ColorTest(contentbgFG);

if (isLightColor( contentcolorB )) {
var color_blend = contentcolorB
var color_blend2 = content_text2
} else {
var color_blend = content_text2
var color_blend2 = contentcolorB
}


/** Button Color **/
/* Set Vars */
// Liatch Quirk
if ( (window.MW18darkmode === true) ) {
	button_colorB = ColorInvert(getComputedStyle(document.querySelector('html')).getPropertyValue("--accent-background-color"));

	if ( !(isSuitableColor2(button_colorB, contentbgB) ) )  { // If still not legible
		button_colorB =ColorTest(button_colorB,false,false,true);
	}
	if ( !(isSuitableColor2(button_colorB, contentbgB) ) )  { // If still not legible
		button_colorB =ColorTest(button_colorB,false,false,true);
	}
	if ( !(isSuitableColor2(button_colorB, contentbgB) ) )  { // If still not legible
		button_colorB =ColorTest(button_colorB,false,false,true);
	}
	if ( !(isSuitableColor2(button_colorB, contentbgB) ) )  { // If still not legible
		button_colorB =ColorTest(button_colorB,false,false,true);
	}
} else {
	button_colorB = getComputedStyle(document.querySelector('html')).getPropertyValue("--accent-background-color");
}


var button_color = button_colorB;
var buttoncolor1 = ColorTest(button_color,false);
var buttoncolor2 = ColorTest(button_color,true);
var buttoncolor2I = ColorTest(button_color,true,true);
var buttoncolor2t = ColorTest(buttoncolor2,false);
var buttoncolor2tI = ColorTest(buttoncolor2I,false);
var buttoncolor3 = SuperColorTest(button_color); // Scrollbar


if (isLightColor(button_color)) {
var button_blend = button_color
var button_blend2 = buttoncolor1
} else {
var button_blend = buttoncolor1
var button_blend2 = button_color
}

buttonmixl = GetHoverColor(content_color,button_color,'rgb',5);
buttonmix = GetActiveColor(content_color,button_color,'rgb',5);



/** Header Color **/
/* Set Vars */
// Liatch Quirk
if ( (window.MW18darkmode === true) ) {
	header_colorB = ColorInvert(getComputedStyle(document.querySelector('html')).getPropertyValue("--sticky-header-background-color"));
} else {
	header_colorB = getComputedStyle(document.querySelector('html')).getPropertyValue("--sticky-header-background-color");
}

var header_color = header_colorB
var headercolor1 = ColorTest(header_color,false);
var headercolor2 = ColorTest(header_color,true);
var headercolor2I = ColorTest(header_color,true,true);
var headercolor2t = ColorTest(headercolor2,false);
var headercolor2tI = ColorTest(headercolor2I,false);
var headercolor3 = SuperColorTest(header_color); // Scrollbar

if (isLightColor(header_color)) {
var header_blend = header_color
var header_blend2 = headercolor1
} else {
var header_blend = headercolor1
var header_blend2 = header_color
}

headermixl = GetHoverColor(content_color,header_color,'rgb',5);
headermix = GetActiveColor(content_color,header_color,'rgb',5);




/** Link Color **/
/* Set Vars */
// Liatch Quirk
if ( (window.MW18darkmode === true) ) {
	var link_colorB = ColorInvert(getComputedStyle(document.querySelector('html')).getPropertyValue("--anchor-background-color"));

	if ( !(isSuitableColor(link_colorB, contentbgB) ) )  { // If still not legible
		link_colorB =ColorTest(link_colorB,false,false,true);
	}
	if ( !(isSuitableColor(link_colorB, contentbgB) ) )  { // If still not legible
		link_colorB =ColorTest(link_colorB,false,false,true);
	}
	if ( !(isSuitableColor(link_colorB, contentbgB) ) )  { // If still not legible
		link_colorB =ColorTest(link_colorB,false,false,true);
	}
	if ( !(isSuitableColor(link_colorB, contentbgB) ) )  { // If still not legible
		link_colorB =ColorTest(link_colorB,false,false,true);
	}

} else {
	var link_colorB = getComputedStyle(document.querySelector('html')).getPropertyValue("--anchor-background-color");
}

var link_color = link_colorB;
var linkcolor1 = ColorTest(link_color,false);
var linkcolor2 = ColorTest(link_color,true);
var linkcolor2I = ColorTest(link_color,true,true);
var linkcolor2t = ColorTest(linkcolor2,false);
var linkcolor2tI = ColorTest(linkcolor2I,false);
var linkcolor3 = SuperColorTest(link_color); // Scrollbar



if (isLightColor(link_color)) {
var link_blend = link_color
var link_blend2 = linkcolor1
} else {
var link_blend = linkcolor1
var link_blend2 = link_color
}

linkmixl = GetHoverColor(content_color,link_color,'rgb',5);
linkmix = GetActiveColor(content_color,link_color,'rgb',5);


/** Content Border **/
/* Set Vars */


if ((getComputedStyle(document.querySelector('html')).getPropertyValue("--page-border-background-color") != 'auto') ) { // Only run Liatch quirk if not in autocolorization
	// Liatch Quirk

	if ( (window.MW18darkmode === true) ) {
		var border_colorB = ColorInvert(dropdowncolor2);

		if ( !(isSuitableColor2(border_colorB, contentbgB) ) )  { // If still not legible
			border_colorB =ColorTest(border_colorB,false,false,true);
		}
		if ( !(isSuitableColor2(border_colorB, contentbgB) ) )  { // If still not legible
			border_colorB =ColorTest(border_colorB,false,false,true);
		}
		if ( !(isSuitableColor2(border_colorB, contentbgB) ) )  { // If still not legible
			border_colorB =ColorTest(border_colorB,false,false,true);
		}
		if ( !(isSuitableColor2(border_colorB, contentbgB) ) )  { // If still not legible
			border_colorB =ColorTest(border_colorB,false,false,true);
		}

	} else {
		var border_colorB = dropdowncolor2
	}
} else {
		var border_colorB = dropdowncolor2
}

var border_color =	border_colorB;

var bordercolor1 = ColorTest(border_color,false);
var bordercolor3 = SuperColorTest(border_color); // Scrollbar
var bordercolor2 = ColorTest(border_color,true);
var bordercolor2I = ColorTest(border_color,true,true);
var bordercolor2t = ColorTest(bordercolor2,false);
var bordercolor2tI = ColorTest(bordercolor2I,false);

if (isLightColor(border_color)) {
var border_blend = border_color
var border_blend2 = bordercolor1
} else {
var border_blend = bordercolor1
var border_blend2 = border_color

}

bordermixl = GetHoverColor(content_color,border_color,'rgb',5);
bordermix = GetActiveColor(content_color,border_color,'rgb',5);



/** Body Bg **/
/* Set Vars */
// Liatch Quirk
if ( (window.MW18darkmode === true) ) {
	head_colorB = ColorInvert(getComputedStyle(document.querySelector('html')).getPropertyValue("--community-background-color"));
} else {
	head_colorB = getComputedStyle(document.querySelector('html')).getPropertyValue("--community-background-color");
}

var head_color =	head_colorB;
var headcolor1 = ColorTest(head_color,false);
var headcolor3 = SuperColorTest(head_color); // Scrollbar
var headcolor2 = ColorTest(head_color,true);
var headcolor2I = ColorTest(head_color,true,true);
var headcolor2t = ColorTest(headcolor2,false);
var headcolor2tI = ColorTest(headcolor2I,false);

if (isLightColor(head_color)) {
var head_blend = head_color
var head_blend2 = headcolor1
} else {
var head_blend = headcolor1
var head_blend2 = head_color
}

headmixl = GetHoverColor(content_color,head_color,'rgb',5);
headmix = GetActiveColor(content_color,head_color,'rgb',5);


/** Community Header text color **/
if ((getComputedStyle(document.querySelector('html')).getPropertyValue("--community-header-text-color") !== 'auto')  ) {
	// Liatch Quirk
	if ( (window.MW18darkmode === true) ) {
		headertext_color = ColorInvert(getComputedStyle(document.querySelector('html')).getPropertyValue("--community-header-text-color"));
	} else {
		headertext_color = getComputedStyle(document.querySelector('html')).getPropertyValue("--community-header-text-color");
	}

} else {
	if (isLightColor(head_color)) {
		var headertext_color = getComputedStyle(document.querySelector('html')).getPropertyValue("--light-theme-foreground-color");
	} else {
		var headertext_color = getComputedStyle(document.querySelector('html')).getPropertyValue("--dark-theme-foreground-color");
	}
}

var headertextcolor1 = ColorTest(headertext_color,false,false,true);

/* Floating Header Bg */
if ((getComputedStyle(document.querySelector('html')).getPropertyValue("--toolbar-background-color") !== 'auto')  ) {
	// Liatch Quirk
	if ( (window.MW18darkmode === true) ) {
		floating_header = ColorInvert(getComputedStyle(document.querySelector('html')).getPropertyValue("--toolbar-background-color"));
	} else {
		floating_header = getComputedStyle(document.querySelector('html')).getPropertyValue("--toolbar-background-color");
	}


} else {
	var floating_header = ColorTestTwin(content_color,ColorTestTwin(header_color,button_color,1,'rgb'),2.5,'rgb');
}

var floating_color = floating_header;


var floatingcolor1 = ColorTest(floating_color,false);
var floatingcolor3 = SuperColorTest(floating_color); // Scrollbar
var floatingcolor2 = ColorTest(floating_color,true);
var floatingcolor2I = ColorTest(floating_color,true,true);
var floatingcolor2t = ColorTest(floatingcolor2,false);
var floatingcolor2tI = ColorTest(floatingcolor2I,false);

if (isLightColor(floating_color)) {
var floating_blend = floating_color
var floating_blend2 = floatingcolor1
} else {
var floating_blend = floatingcolor1
var floating_blend2 = floating_color
}

floatmixl = GetHoverColor(content_color,floating_color,'rgb',5);
floatmix = GetActiveColor(content_color,floating_color,'rgb',5);



/* This goes before compiling Generic Colors or else they will think the theme is light */
if (window.MW18darkmode) {
	$('body').attr("dark-mode", isLightColor(getComputedStyle(document.querySelector('html')).getPropertyValue("--page-background-color")) );
} else {
	$('body').attr("dark-mode", !(isLightColor(getComputedStyle(document.querySelector('html')).getPropertyValue("--page-background-color"))) );
}


/** Alert Color **/
/* Set Vars */
var alert_color = getComputedStyle(document.querySelector('body')).getPropertyValue("--alert-background-color");
var alertcolor1 = ColorTest(alert_color,false);
var alertcolor2 = ColorTest(alert_color,true);
var alertcolor2I = ColorTest(alert_color,true,true);
var alertcolor2t = ColorTest(alertcolor2,false);
var alertcolor2tI = ColorTest(alertcolor2I,false);
var alertcolor3 = SuperColorTest(alert_color); // Scrollbar


if (isLightColor(alert_color)) {
var alert_blend = alert_color
var alert_blend2 = alertcolor1
} else {
var alert_blend = alertcolor1
var alert_blend2 = alert_color
}

alertmixl = GetHoverColor(content_color,alert_color,'rgb',5);
alertmix = GetActiveColor(content_color,alert_color,'rgb',5);


/** Warning Color **/
/* Set Vars */
var warning_color = getComputedStyle(document.querySelector('body')).getPropertyValue("--warning-background-color");
var warningcolor1 = ColorTest(warning_color,false);
var warningcolor2 = ColorTest(warning_color,true);
var warningcolor2I = ColorTest(warning_color,true,true);
var warningcolor2t = ColorTest(warningcolor2,false);
var warningcolor2tI = ColorTest(warningcolor2I,false);
var warningcolor3 = SuperColorTest(warning_color); // Scrollbar


if (isLightColor(warning_color)) {
var warning_blend = warning_color
var warning_blend2 = warningcolor1
} else {
var warning_blend = warningcolor1
var warning_blend2 = warning_color
}

warningmixl = GetHoverColor(content_color,warning_color,'rgb',5);
warningmix = GetActiveColor(content_color,warning_color,'rgb',5);


/** Success Color **/
/* Set Vars */
var success_color = getComputedStyle(document.querySelector('body')).getPropertyValue("--success-background-color");
var successcolor1 = ColorTest(success_color,false);
var successcolor2 = ColorTest(success_color,true);
var successcolor2I = ColorTest(success_color,true,true);
var successcolor2t = ColorTest(successcolor2,false);
var successcolor2tI = ColorTest(successcolor2I,false);
var successcolor3 = SuperColorTest(success_color); // Scrollbar


if (isLightColor(success_color)) {
var success_blend = success_color
var success_blend2 = successcolor1
} else {
var success_blend = successcolor1
var success_blend2 = success_color
}

successmixl = GetHoverColor(content_color,success_color,'rgb',5);
successmix = GetActiveColor(content_color,success_color,'rgb',5);



/** Message Color **/
/* Set Vars */
var message_color = getComputedStyle(document.querySelector('body')).getPropertyValue("--message-background-color");
var messagecolor1 = ColorTest(message_color,false);
var messagecolor2 = ColorTest(message_color,true);
var messagecolor2I = ColorTest(message_color,true,true);
var messagecolor2t = ColorTest(messagecolor2,false);
var messagecolor2tI = ColorTest(messagecolor2I,false);
var messagecolor3 = SuperColorTest(message_color); // Scrollbar


if (isLightColor(message_color)) {
var message_blend = message_color
var message_blend2 = messagecolor1
} else {
var message_blend = messagecolor1
var message_blend2 = message_color
}

messagemixl = GetHoverColor(content_color,message_color,'rgb',5);
messagemix = GetActiveColor(content_color,message_color,'rgb',5);


/* Writing */
var result = ':root {\n' + 
			'--page-secondary-background-color:' + dropdowncolor + ';\n' +
			'--page-secondary-background-color-hover:' + dropdowncolorH + ';\n' +
			'--page-secondary-background-color-active:' + dropdowncolorA + ';\n' +
			'--page-background-color-hover:' + content_color2 + ';\n' +
			'--page-background-color-active:' + content_color3 + ';\n' +
			'--page-foreground-color:' + contentbgFG + ';\n' +
			'--page-foreground-color-hover:' + contentbgFG2 + ';\n' +
			'--page-text-background-color-hover:' + content_text2 + ';\n' +
			'--page-text-background-color-active:' + content_text3 + ';\n' +
			'--page-text-foreground-color:' + content_text4 + ';\n' +
			'--page-text-foreground-color-hover:' + content_text5 + ';\n' +
			'--page-text-foreground-color-inverted:' + content_text4I + ';\n' +
			'--page-text-foreground-color-hover-inverted:' + content_text5I + ';\n' +
			'--page-text-background-color-page-background-color-mix-light:' + colormixl + ';\n' +
			'--page-text-background-color-page-background-color-mix:' + colormix + ';\n' +
			'--page-text-gradient-color:' + color_blend + ';\n' +
			'--page-text-gradient-color-hover:' + color_blend2 + ';\n' +
			'--page-secondary-background-color-rgb:' + Color2(dropdowncolor) + ';\n' +
			'--page-secondary-background-color-hover-rgb:' + Color2(dropdowncolorH) + ';\n' +
			'--page-secondary-background-color-hover-rgb:' + Color2(dropdowncolorA) + ';\n' +
			'--page-background-color-rgb:' + Color2(contentbgB) + ';\n' +
			'--page-background-color-hover-rgb:' + Color2(content_color2) + ';\n' +
			'--page-background-color-active-rgb:' + Color2(content_color3) + ';\n' +
			'--page-foreground-color-rgb:' + Color2(contentbgFG) + ';\n' +
			'--page-foreground-color-hover-rgb:' + Color2(contentbgFG2) + ';\n' +
			'--page-text-background-color-rgb:' + Color2(contentcolorB) + ';\n' +
			'--page-text-background-color-hover-rgb:' + Color2(content_text2) + ';\n' +
			'--page-text-background-color-active-rgb:' + Color2(content_text3) + ';\n' +
			'--page-text-foreground-color-rgb:' + Color2(content_text4) + ';\n' +
			'--page-text-foreground-color-hover-rgb:' + Color2(content_text5) + ';\n' +
			'--page-text-foreground-color-inverted-rgb:' + Color2(content_text4I) + ';\n' +
			'--page-text-foreground-color-hover-inverted-rgb:' + Color2(content_text5I) + ';\n' +
			'--page-text-gradient-color-rgb:' + Color2(color_blend) + ';\n' +
			'--page-text-gradient-color-hover-rgb:' + Color2(color_blend2) + ';\n' +
			'--accent-background-color-hover:' + buttoncolor1 + ';\n' +
			'--accent-background-color-active:' + buttoncolor3 + ';\n' +
			'--accent-foreground-color:' + buttoncolor2 + ';\n' +
			'--accent-foreground-color-hover:' + buttoncolor2t + ';\n' +
			'--accent-foreground-color-inverted:' + buttoncolor2I + ';\n' +
			'--accent-foreground-color-hover-inverted:' + buttoncolor2tI + ';\n' +
			'--accent-background-color-page-background-color-mix-light:' + buttonmixl + ';\n' +
			'--accent-background-color-page-background-color-mix:' + buttonmix + ';\n' +
			'--accent-gradient-color:' + button_blend + ';\n' +
			'--accent-gradient-color-hover:' + button_blend2 + ';\n' +
			'--accent-background-color-rgb:' + Color2(button_color) + ';\n' +
			'--accent-background-color-hover-rgb:' + Color2(buttoncolor1) + ';\n' +
			'--accent-background-color-active-rgb:' + Color2(buttoncolor3) + ';\n' +
			'--accent-foreground-color-rgb:' + Color2(buttoncolor2) + ';\n' +
			'--accent-foreground-color-hover-rgb:' + Color2(buttoncolor2t) + ';\n' +
			'--accent-foreground-color-inverted-rgb:' + Color2(buttoncolor2I) + ';\n' +
			'--accent-foreground-color-hover-inverted-rgb:' + Color2(buttoncolor2tI) + ';\n' +
			'--accent-gradient-color-rgb:' + Color2(button_blend) + ';\n' +
			'--accent-gradient-color-hover-rgb:' + Color2(button_blend2) + ';\n' +
			'--sticky-header-background-color-hover:' + headercolor1 + ';\n' +
			'--sticky-header-background-color-active:' + headercolor3 + ';\n' +
			'--sticky-header-foreground-color:' + headercolor2 + ';\n' +
			'--sticky-header-foreground-color-hover:' + headercolor2t + ';\n' +
			'--sticky-header-foreground-color-inverted:' + headercolor2I + ';\n' +
			'--sticky-header-foreground-color-hover-inverted:' + headercolor2tI + ';\n' +
			'--sticky-header-background-color-page-background-color-mix-light:' + headermixl + ';\n' +
			'--sticky-header-background-color-page-background-color-mix:' + headermix + ';\n' +
			'--sticky-header-gradient-color:' + header_blend + ';\n' +
			'--sticky-header-gradient-color-hover:' + header_blend2 + ';\n' +
			'--sticky-header-background-color-rgb:' + Color2(header_color) + ';\n' +
			'--sticky-header-background-color-hover-rgb:' + Color2(headercolor1) + ';\n' +
			'--sticky-header-background-color-active-rgb:' + Color2(headercolor3) + ';\n' +
			'--sticky-header-foreground-color-rgb:' + Color2(headercolor2) + ';\n' +
			'--sticky-header-foreground-color-hover-rgb:' + Color2(headercolor2t) + ';\n' +
			'--sticky-header-foreground-color-inverted-rgb:' + Color2(headercolor2I) + ';\n' +
			'--sticky-header-foreground-color-hover-inverted-rgb:' + Color2(headercolor2tI) + ';\n' +
			'--sticky-header-gradient-color-rgb:' + Color2(header_blend) + ';\n' +
			'--sticky-header-gradient-color-hover-rgb:' + Color2(header_blend2) + ';\n' +
			'--anchor-background-color-hover:' + linkcolor1 + ';\n' +
			'--anchor-background-color-active:' + linkcolor3 + ';\n' +
			'--anchor-foreground-color:' + linkcolor2 + ';\n' +
			'--anchor-foreground-color-hover:' + linkcolor2t + ';\n' +
			'--anchor-foreground-color-inverted:' + linkcolor2I + ';\n' +
			'--anchor-foreground-color-hover-inverted:' + linkcolor2tI + ';\n' +
			'--anchor-background-color-page-background-color-mix-light:' + linkmixl + ';\n' +
			'--anchor-background-color-page-background-color-mix:' + linkmix + ';\n' +
			'--anchor-gradient-color:' + link_blend + ';\n' +
			'--anchor-gradient-color-hover:' + link_blend2 + ';\n' +
			'--anchor-background-color-rgb:' + Color2(link_color) + ';\n' +
			'--anchor-background-color-hover-rgb:' + Color2(linkcolor1) + ';\n' +
			'--anchor-background-color-active-rgb:' + Color2(linkcolor3) + ';\n' +
			'--anchor-foreground-color-rgb:' + Color2(linkcolor2) + ';\n' +
			'--anchor-foreground-color-hover-rgb:' + Color2(linkcolor2t) + ';\n' +
			'--anchor-foreground-color-inverted-rgb:' + Color2(linkcolor2I) + ';\n' +
			'--anchor-foreground-color-hover-inverted-rgb:' + Color2(linkcolor2tI) + ';\n' +
			'--anchor-gradient-color-rgb:' + Color2(link_blend) + ';\n' +
			'--anchor-gradient-color-hover-rgb:' + Color2(link_blend2) + ';\n' +
			'--page-border-background-color-hover:' + bordercolor1 + ';\n' +
			'--page-border-background-color-active:' + bordercolor3 + ';\n' +
			'--page-border-foreground-color:' + bordercolor2 + ';\n' +
			'--page-border-foreground-color-hover:' + bordercolor2t + ';\n' +
			'--page-border-foreground-color-inverted:' + bordercolor2I + ';\n' +
			'--page-border-foreground-color-hover-inverted:' + bordercolor2tI + ';\n' +
			'--page-border-background-color-page-background-color-mix-light:' + bordermixl + ';\n' +
			'--page-border-background-color-page-background-color-mix:' + bordermix + ';\n' +
			'--page-border-gradient-color:' + border_blend + ';\n' +
			'--page-border-gradient-color-hover:' + border_blend2 + ';\n' +
			'--page-border-background-color-rgb:' + Color2(border_color) + ';\n' +
			'--page-border-background-color-hover-rgb:' + Color2(bordercolor1) + ';\n' +
			'--page-border-background-color-active-rgb:' + Color2(bordercolor3) + ';\n' +
			'--page-border-foreground-color-rgb:' + Color2(bordercolor2) + ';\n' +
			'--page-border-foreground-color-hover-rgb:' + Color2(bordercolor2t) + ';\n' +
			'--page-border-foreground-color-inverted-rgb:' + Color2(bordercolor2I) + ';\n' +
			'--page-border-foreground-color-hover-inverted-rgb:' + Color2(bordercolor2tI) + ';\n' +
			'--page-border-gradient-color-rgb:' + Color2(border_blend) + ';\n' +
			'--page-border-gradient-color-hover-rgb:' + Color2(border_blend2) + ';\n' +
			'--community-background-color-hover:' + headcolor1 + ';\n' +
			'--community-background-color-active:' + headcolor3 + ';\n' +
			'--community-foreground-color:' + headcolor2 + ';\n' +
			'--community-foreground-color-hover:' + headcolor2t + ';\n' +
			'--community-foreground-color-inverted:' + headcolor2I + ';\n' +
			'--community-foreground-color-hover-inverted:' + headcolor2tI + ';\n' +
			'--community-background-color-page-background-color-mix-light:' + headmixl + ';\n' +
			'--community-background-color-page-background-color-mix:' + headmix + ';\n' +
			'--community-gradient-color:' + head_blend + ';\n' +
			'--community-gradient-color-hover:' + head_blend2 + ';\n' +
			'--community-background-color-rgb:' + Color2(head_color) + ';\n' +
			'--community-background-color-hover-rgb:' + Color2(headcolor1) + ';\n' +
			'--community-background-color-active-rgb:' + Color2(headcolor3) + ';\n' +
			'--community-foreground-color-rgb:' + Color2(headcolor2) + ';\n' +
			'--community-foreground-color-hover-rgb:' + Color2(headcolor2t) + ';\n' +
			'--community-foreground-color-inverted-rgb:' + Color2(headcolor2I) + ';\n' +
			'--community-foreground-color-hover-inverted-rgb:' + Color2(headcolor2tI) + ';\n' +
			'--community-gradient-color-rgb:' + Color2(head_blend) + ';\n' +
			'--community-gradient-color-hover-rgb:' + Color2(head_blend2) + ';\n' +
			'--community-header-text-color-hover:' + headertextcolor1 + ';\n' +
			'--community-header-text-color-rgb:' + Color2(headertext_color) + ';\n' +
			'--community-header-text-color-hover-rgb:' + Color2(headertextcolor1) + ';\n' +
			'--toolbar-background-color-hover:' + floatingcolor1 + ';\n' +
			'--toolbar-background-color-active:' + floatingcolor3 + ';\n' +
			'--toolbar-foreground-color:' + floatingcolor2 + ';\n' +
			'--toolbar-foreground-color-hover:' + floatingcolor2t + ';\n' +
			'--toolbar-foreground-color-inverted:' + floatingcolor2I + ';\n' +
			'--toolbar-foreground-color-hover-inverted:' + floatingcolor2tI + ';\n' +
			'--toolbar-background-color-page-background-color-mix-light:' + floatmixl + ';\n' +
			'--toolbar-background-color-page-background-color-mix:' + floatmix + ';\n' +
			'--toolbar-gradient-color:' + floating_blend + ';\n' +
			'--toolbar-gradient-color-hover:' + floating_blend2 + ';\n' +
			'--toolbar-background-color-rgb:' + Color2(floating_color) + ';\n' +
			'--toolbar-background-color-hover-rgb:' + Color2(floatingcolor1) + ';\n' +
			'--toolbar-background-color-active-rgb:' + Color2(floatingcolor3) + ';\n' +
			'--toolbar-foreground-color-rgb:' + Color2(floatingcolor2) + ';\n' +
			'--toolbar-foreground-color-hover-rgb:' + Color2(floatingcolor2t) + ';\n' +
			'--toolbar-foreground-color-inverted-rgb:' + Color2(floatingcolor2I) + ';\n' +
			'--toolbar-foreground-color-hover-inverted-rgb:' + Color2(floatingcolor2tI) + ';\n' +
			'--toolbar-gradient-color-rgb:' + Color2(floating_blend) + ';\n' +
			'--toolbar-gradient-color-hover-rgb:' + Color2(floating_blend2) + ';\n' +
			'--alert-background-color-hover:' + alertcolor1 + ';\n' +
			'--alert-background-color-active:' + alertcolor3 + ';\n' +
			'--alert-foreground-color:' + alertcolor2 + ';\n' +
			'--alert-foreground-color-hover:' + alertcolor2t + ';\n' +
			'--alert-foreground-color-inverted:' + alertcolor2I + ';\n' +
			'--alert-foreground-color-hover-inverted:' + alertcolor2tI + ';\n' +
			'--alert-background-color-page-background-color-mix-light:' + floatmixl + ';\n' +
			'--alert-background-color-page-background-color-mix:' + floatmix + ';\n' +
			'--alert-gradient-color:' + alert_blend + ';\n' +
			'--alert-gradient-color-hover:' + alert_blend2 + ';\n' +
			'--alert-background-color-rgb:' + Color2(alert_color) + ';\n' +
			'--alert-background-color-hover-rgb:' + Color2(alertcolor1) + ';\n' +
			'--alert-background-color-active-rgb:' + Color2(alertcolor3) + ';\n' +
			'--alert-foreground-color-rgb:' + Color2(alertcolor2) + ';\n' +
			'--alert-foreground-color-hover-rgb:' + Color2(alertcolor2t) + ';\n' +
			'--alert-foreground-color-inverted-rgb:' + Color2(alertcolor2I) + ';\n' +
			'--alert-foreground-color-hover-inverted-rgb:' + Color2(alertcolor2tI) + ';\n' +
			'--alert-gradient-color-rgb:' + Color2(alert_blend) + ';\n' +
			'--alert-gradient-color-hover-rgb:' + Color2(alert_blend2) + ';\n' +
			'--warning-background-color-hover:' + warningcolor1 + ';\n' +
			'--warning-background-color-active:' + warningcolor3 + ';\n' +
			'--warning-foreground-color:' + warningcolor2 + ';\n' +
			'--warning-foreground-color-hover:' + warningcolor2t + ';\n' +
			'--warning-foreground-color-inverted:' + warningcolor2I + ';\n' +
			'--warning-foreground-color-hover-inverted:' + warningcolor2tI + ';\n' +
			'--warning-background-color-page-background-color-mix-light:' + floatmixl + ';\n' +
			'--warning-background-color-page-background-color-mix:' + floatmix + ';\n' +
			'--warning-gradient-color:' + warning_blend + ';\n' +
			'--warning-gradient-color-hover:' + warning_blend2 + ';\n' +
			'--warning-background-color-rgb:' + Color2(warning_color) + ';\n' +
			'--warning-background-color-hover-rgb:' + Color2(warningcolor1) + ';\n' +
			'--warning-background-color-active-rgb:' + Color2(warningcolor3) + ';\n' +
			'--warning-foreground-color-rgb:' + Color2(warningcolor2) + ';\n' +
			'--warning-foreground-color-hover-rgb:' + Color2(warningcolor2t) + ';\n' +
			'--warning-foreground-color-inverted-rgb:' + Color2(warningcolor2I) + ';\n' +
			'--warning-foreground-color-hover-inverted-rgb:' + Color2(warningcolor2tI) + ';\n' +
			'--warning-gradient-color-rgb:' + Color2(warning_blend) + ';\n' +
			'--warning-gradient-color-hover-rgb:' + Color2(warning_blend2) + ';\n' +
			'--success-background-color-hover:' + successcolor1 + ';\n' +
			'--success-background-color-active:' + successcolor3 + ';\n' +
			'--success-foreground-color:' + successcolor2 + ';\n' +
			'--success-foreground-color-hover:' + successcolor2t + ';\n' +
			'--success-foreground-color-inverted:' + successcolor2I + ';\n' +
			'--success-foreground-color-hover-inverted:' + successcolor2tI + ';\n' +
			'--success-background-color-page-background-color-mix-light:' + floatmixl + ';\n' +
			'--success-background-color-page-background-color-mix:' + floatmix + ';\n' +
			'--success-gradient-color:' + success_blend + ';\n' +
			'--success-gradient-color-hover:' + success_blend2 + ';\n' +
			'--success-background-color-rgb:' + Color2(success_color) + ';\n' +
			'--success-background-color-hover-rgb:' + Color2(successcolor1) + ';\n' +
			'--success-background-color-active-rgb:' + Color2(successcolor3) + ';\n' +
			'--success-foreground-color-rgb:' + Color2(successcolor2) + ';\n' +
			'--success-foreground-color-hover-rgb:' + Color2(successcolor2t) + ';\n' +
			'--success-foreground-color-inverted-rgb:' + Color2(successcolor2I) + ';\n' +
			'--success-foreground-color-hover-inverted-rgb:' + Color2(successcolor2tI) + ';\n' +
			'--success-gradient-color-rgb:' + Color2(success_blend) + ';\n' +
			'--success-gradient-color-hover-rgb:' + Color2(success_blend2) + ';\n' +
			'--message-background-color-hover:' + messagecolor1 + ';\n' +
			'--message-background-color-active:' + messagecolor3 + ';\n' +
			'--message-foreground-color:' + messagecolor2 + ';\n' +
			'--message-foreground-color-hover:' + messagecolor2t + ';\n' +
			'--message-foreground-color-inverted:' + messagecolor2I + ';\n' +
			'--message-foreground-color-hover-inverted:' + messagecolor2tI + ';\n' +
			'--message-background-color-page-background-color-mix-light:' + floatmixl + ';\n' +
			'--message-background-color-page-background-color-mix:' + floatmix + ';\n' +
			'--message-gradient-color:' + message_blend + ';\n' +
			'--message-gradient-color-hover:' + message_blend2 + ';\n' +
			'--message-background-color-rgb:' + Color2(message_color) + ';\n' +
			'--message-background-color-hover-rgb:' + Color2(messagecolor1) + ';\n' +
			'--message-background-color-active-rgb:' + Color2(messagecolor3) + ';\n' +
			'--message-foreground-color-rgb:' + Color2(messagecolor2) + ';\n' +
			'--message-foreground-color-hover-rgb:' + Color2(messagecolor2t) + ';\n' +
			'--message-foreground-color-inverted-rgb:' + Color2(messagecolor2I) + ';\n' +
			'--message-foreground-color-hover-inverted-rgb:' + Color2(messagecolor2tI) + ';\n' +
			'--message-gradient-color-rgb:' + Color2(message_blend) + ';\n' +
			'--message-gradient-color-hover-rgb:' + Color2(message_blend2) + ';\n' +
			'--article-link-background-color-hover:' + ColorTest(link_color,false,false,true) + ';\n' +
			'--article-secondary-link-background-color-hover:' + ColorTest(button_color,false,false,true) + ';\n' +
			'--article-new-link-background-color-hover:' + ColorTest(alert_color,false,false,true) + ';\n' +
			'}' + '\n' +
			'body {' +

			'--td-community-background-color:' + getComputedStyle(document.querySelector('html')).getPropertyValue("--community-background-color") + ';\n' +
			'--td-community-header-text-color:' + getComputedStyle(document.querySelector('html')).getPropertyValue("--community-header-text-color") + ';\n' +
			'--td-page-background-color:' + getComputedStyle(document.querySelector('html')).getPropertyValue("--page-background-color") + ';\n' +
			'--td-page-border-background-color:' + getComputedStyle(document.querySelector('html')).getPropertyValue("--page-border-background-color") + ';\n' +
			'--td-page-text-background-color:' + getComputedStyle(document.querySelector('html')).getPropertyValue("--page-text-background-color") + ';\n' +
			'--td-accent-background-color:' + getComputedStyle(document.querySelector('html')).getPropertyValue("--accent-background-color") + ';\n' +
			'--td-anchor-background-color:' + getComputedStyle(document.querySelector('html')).getPropertyValue("--anchor-background-color") + ';\n' +
			'--td-sticky-header-background-color:' + getComputedStyle(document.querySelector('html')).getPropertyValue("--sticky-header-background-color") + ';\n' +
			'--td-toolbar-background-color:' + getComputedStyle(document.querySelector('html')).getPropertyValue("--toolbar-background-color") + ';\n' +
			'--td-selected-theme-background-color:' + button_color + ';\n' +

			'--community-background-color:' + head_color + ';\n' +
			'--community-header-text-color:' + headertext_color + ';\n' +
			'--page-background-color:' + contentbgB + ';\n' +
			'--page-border-background-color:' + border_color + ';\n' +
			'--page-text-background-color:' + contentcolorB + ';\n' +
			'--accent-background-color:' + button_color + ';\n' +
			'--anchor-background-color:' + link_color + ';\n' +
			'--sticky-header-background-color:' + header_color + ';\n' +
			'--toolbar-background-color:' + floating_color + ';\n' +
			'}'

/* Write them to the stylesheet */
document.querySelector("head .theming").innerHTML =  result ;


ThemeColorMetaTag();

/* Cursor Theme */
if (refresh === true) {
	CheckBG()
	CheckAdapt()
	if ($("body.options").length) {
		UpdateSet();
	}
}
if ($("body.options").length) {
	CompileChosenThems()
}
// SocialCompile();

/*
if (window.MW18auto === true) {
CursorT('auto');
}
if (window.MW18autoDark === true) {
CursorT('auto-r');
}
*/

if (suitcheck === true) {
//	CheckColorSuitability();
}

}

function CheckColorSuitability(refresh) {
	/* Check Contrast Colors */
	var color1a = getComputedStyle(document.querySelector('container')).getPropertyValue("--page-text-background-color");
	var color2  = getComputedStyle(document.querySelector('container')).getPropertyValue("--page-background-color");
	var color1b = getComputedStyle(document.querySelector('container')).getPropertyValue("--anchor-background-color");
	var color1c = getComputedStyle(document.querySelector('container')).getPropertyValue("--page-border-background-color");
	var color1d = getComputedStyle(document.querySelector('container')).getPropertyValue("--accent-background-color");
	if ($("body.options").length) { // MpistoSkin2's Preferences Page
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
	} else { // Everything else
		var colornames = ['Page Text', 'Anchor', 'Page Border', 'Accent']; // List of the four color values that can become unsuitable
		var uns = false; // Becomes true if an unsuitable color found
		var suit0 = false;
		var suit1 = false;
		var suit2 = false;
		var suit3 = false;
		/* Variables that will attain to one of the values found in the colornames variable */
		issue0 = "";
		issue1 = "";
		issue2 = "";
		issue3 = "";
		// Content Color
		if ( !(isSuitableColor(color1a,color2) )) {
			var uns = true;
			var suit0 = true;
		}
		// Link Color
		if ( !(isSuitableColor(color1b, color2)) ) {
			var uns = true;
			var suit1 = true;
		}
		// Border Color
		if ( !(isSuitableColor2(color1c, color2)) ) {
			var uns = true;
			var suit2 = true;
		}
		// Button Color
		if ( !(isSuitableColor2(color1d, color2)) ) {
			var uns = true;
			var suit3 = true;
		}
		var issues = [suit0, suit1, suit2, suit3]; // Individual items can become true if one usuitable color is found
		if (uns) { // At least one color not suited found
			amount = 0;
			for (let i = 0; i < issues.length; i++) {
				if (issues[i]) {
					if (issue0 == "") {
						issue0 = colornames[i];
					} else if (issue1 == "") {
						issue1 = colornames[i];
					} else if (issue2 == "") {
						issue2 = colornames[i];
					} else if (issue3 == "") {
						issue3= colornames[i];
					}
					amount= amount + 1;
				}
			}
			if (amount == 1) {
				result = issue0 + " Background Color. Please replace it with a compatible ones.";
			} else 	if (amount == 2) {
				result = issue0 + " and " + issue1 + " Background Colors. Please replace them with compatible ones.";
			} else 	if (amount == 3) {
				result = issue0 + ", " + issue1 + " and " + issue2 + " Background Colors. Please replace them with compatible ones.";
			} else 	if (amount == 4) {
				result = issue0 + ", " + issue1 + ", " + issue2 + " and " + issue3 + " Background Colors. Please replace them with compatible ones.";
			}
			AddFloatingBanner("This theme currently uses incompatible " + result ,'warning','unsuitablethemebanner'); // Message to be put (Warning Banner)
		}
	}
}


function CheckAdapt() {
		if ((getComputedStyle(document.querySelector('html')).getPropertyValue("--community-header-text-color") === 'auto')  ) {
				$("body").attr('community-header-text-color-auto', 'true');
		} else {
				$("body").attr('community-header-text-color-auto', 'false');
		}
		if ((getComputedStyle(document.querySelector('html')).getPropertyValue("--toolbar-background-color") === 'auto')  ) {
				$("body").attr('toolbar-background-color-auto', 'true');
		} else {
				$("body").attr('toolbar-background-color-auto', 'false');
		}
		if ((getComputedStyle(document.querySelector('html')).getPropertyValue("--page-border-background-color") === 'auto')  ) {
				$("body").attr('page-border-background-color-auto', 'true');
		} else {
				$("body").attr('page-border-background-color-auto', 'false');
		}
		if ((getComputedStyle(document.querySelector('html')).getPropertyValue("--page-text-background-color") === 'auto')  ) {
				$("body").attr('page-text-background-color-auto', 'true');
		} else {
				$("body").attr('page-text-background-color-auto', 'false');
		}
		if ((getComputedStyle(document.querySelector('html')).getPropertyValue("--caret-color") === 'auto')  ) {
				$("body").attr('caret-color-auto', 'true');
		} else {
				$("body").attr('caret-color-auto', 'false');
		}
//	ColorUpdate(false);
}

/* Different with the ToggleBG function, only one is present for all three */
function CheckBG() {
	var	background_mode = "standard";
	if ((getComputedStyle(document.querySelector('html')).getPropertyValue("--community-background-mode") === 'full') || (getComputedStyle(document.querySelector('html')).getPropertyValue("--community-background-mode") === 'legacy')  ) {
		var background_mode = "full";
	} else if ((getComputedStyle(document.querySelector('html')).getPropertyValue("--community-background-mode") === 'blended') || (getComputedStyle(document.querySelector('html')).getPropertyValue("--community-background-mode") === 'modern') ) {
		var background_mode = "standard";
	} else {
		var background_mode = "standard";
	}
		
	if ($("body.options").length ) { // Don't run if not on Preferences Page
	/* BG */ // Background Style
		if ((getComputedStyle(document.querySelector('html')).getPropertyValue("--community-background-mode") === 'full') || (getComputedStyle(document.querySelector('html')).getPropertyValue("--community-background-mode") === 'legacy')  ) {
				document.querySelector('input#BG_2').checked = true;
				document.querySelector('input#BG_1').checked = false;
		} else if ((getComputedStyle(document.querySelector('html')).getPropertyValue("--community-background-mode") === 'blended') || (getComputedStyle(document.querySelector('html')).getPropertyValue("--community-background-mode") === 'modern') ) {
				document.querySelector('input#BG_1').checked = true;
				document.querySelector('input#BG_2').checked = false;
		} else {
				document.querySelector('input#BG_1').checked = true;
				document.querySelector('input#BG_2').checked = false;
		}
	/* BG1 */ // Background Vertical Alingment
		if ((getComputedStyle(document.querySelector('html')).getPropertyValue("--community-background-vertical-alignment") === 'center')   ) {
				document.querySelector('input#BG1_2').checked = true;
				document.querySelector('input#BG1_1').checked = false;
				document.querySelector('input#BG1_3').checked = false;
		} else if ((getComputedStyle(document.querySelector('html')).getPropertyValue("--community-background-vertical-alignment") === 'bottom')  ) {
				document.querySelector('input#BG1_3').checked = true;
				document.querySelector('input#BG1_1').checked = false;
				document.querySelector('input#BG1_2').checked = false;
		} else {
				document.querySelector('input#BG1_1').checked = true;
				document.querySelector('input#BG1_2').checked = false;
				document.querySelector('input#BG1_3').checked = false;
		}
	/* BG2 */ // Background Tiling
		if ((getComputedStyle(document.querySelector('html')).getPropertyValue("--community-background-no-tiling") === 'true') && !($("html.contrast.win10").length)  ) {
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
		if ((getComputedStyle(document.querySelector('html')).getPropertyValue("--community-background-size") === 'contain')  ) {
				document.querySelector('input#BG3_2').checked = true;
				document.querySelector('input#BG3_1').checked = false;
				document.querySelector('input#BG3_3').checked = false;
				document.querySelector('input#BG3_4').checked = false;
				$(".cover-off").removeAttr('disabled');
				$(".stretch-off").removeAttr('disabled');
				$(".noncover-off").attr('disabled', 'true');
		} else if ((getComputedStyle(document.querySelector('html')).getPropertyValue("--community-background-size") === 'stretched')  ) {
				document.querySelector('input#BG3_3').checked = true;
				document.querySelector('input#BG3_1').checked = false;
				document.querySelector('input#BG3_2').checked = false;
				document.querySelector('input#BG3_4').checked = false;
				$(".cover-off").removeAttr('disabled');
				$(".stretch-off").attr('disabled', 'true');
				$(".noncover-off").attr('disabled', 'true');
		} else if ((getComputedStyle(document.querySelector('html')).getPropertyValue("--community-background-size") === 'full') ) {
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
	/* BG4 */ // Background Vertical Alingment
		if ((getComputedStyle(document.querySelector('html')).getPropertyValue("--community-background-horizontal-alignment") === 'center')   ) {
				document.querySelector('input#BG4_2').checked = true;
				document.querySelector('input#BG4_1').checked = false;
				document.querySelector('input#BG4_3').checked = false;
		} else if ((getComputedStyle(document.querySelector('html')).getPropertyValue("--community-background-horizontal-alignment") === 'right')  ) {
				document.querySelector('input#BG4_3').checked = true;
				document.querySelector('input#BG4_1').checked = false;
				document.querySelector('input#BG4_2').checked = false;
		} else {
				document.querySelector('input#BG4_1').checked = true;
				document.querySelector('input#BG4_2').checked = false;
				document.querySelector('input#BG4_3').checked = false;
		}
	}

	$("body").attr('community-background-mode', background_mode); // getComputedStyle(document.querySelector('html')).getPropertyValue("--community-background-mode");
	$("body").attr('community-background-size', getComputedStyle(document.querySelector('html')).getPropertyValue("--community-background-size") );
	$("body").attr('community-background-horizontal-alignment', getComputedStyle(document.querySelector('html')).getPropertyValue("--community-background-horizontal-alignment") );
	$("body").attr('community-background-vertical-alignment', getComputedStyle(document.querySelector('html')).getPropertyValue("--community-background-vertical-alignment") );
	$("body").attr('community-background-no-tiling', getComputedStyle(document.querySelector('html')).getPropertyValue("--community-background-no-tiling") );
}

/* 
** BG  = Backgkround Body Display - community-background-mode attribute is ued
** BG1 = Background Vertial Position - community-background-vertical-alignment attribute is ued
** BG2 = Background Tiling (Except on Blended Legacy Background Display with Full or Contain sizing) - community-background-no-tiling attribute is used
** BG3 = Background Size (Except on Blended Background Display) - community-background-size attribute is used
** BG4 = Background Horizontal Position - community-background-horizontal-alignment attribute is ued
*/

function ToggleBG() {
var modern = document.querySelector('input#BG_1');
var legacy = document.querySelector('input#BG_2');
	if (legacy.checked) {

	if ($("html.theme-A").length) {
		$("style.designer-style.theme-A").append(
		'.theme-A[visualcolors="standard"] {' +
		'--community-background-mode:full!important;' +
		'}'
		);	
	}

	if ($("html.theme-B").length) {
		$("style.designer-style.theme-B").append(
		'.theme-B[visualcolors="standard"] {' +
		'--community-background-mode:full!important;' +
		'}'
		);	
	}

	if ($("html.theme-C").length) {
		$("style.designer-style.theme-C").append(
		'.theme-C[visualcolors="standard"] {' +
		'--community-background-mode:full!important;' +
		'}'
		);	
	}

	if ($("html.theme-D").length) {
		$("style.designer-style.theme-D").append(
		'.theme-D[visualcolors="standard"] {' +
		'--community-background-mode:full!important;' +
		'}'
		);	
	}
	} else if (modern.checked) {

	if ($("html.theme-A").length) {
		$("style.designer-style.theme-A").append(
		'.theme-A[visualcolors="standard"] {' +
		'--community-background-mode:standard!important;' +
		'}'
		);	
	}

	if ($("html.theme-B").length) {
		$("style.designer-style.theme-B").append(
		'.theme-B[visualcolors="standard"] {' +
		'--community-background-mode:standard!important;' +
		'}'
		);	
	}

	if ($("html.theme-C").length) {
		$("style.designer-style.theme-C").append(
		'.theme-C[visualcolors="standard"] {' +
		'--community-background-mode:standard!important;' +
		'}'
		);	
	}

	if ($("html.theme-D").length) {
		$("style.designer-style.theme-D").append(
		'.theme-D[visualcolors="standard"] {' +
		'--community-background-mode:standard!important;' +
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
		'--community-background-vertical-alignment:' + str + '!important;' +
		'}'
		);	
	}

	if ($("html.theme-B").length) {
		$("style.designer-style.theme-B").append(
		'.theme-B[visualcolors="standard"] {' +
		'--community-background-vertical-alignment:' + str + '!important;' +
		'}'
		);	
	}

	if ($("html.theme-C").length) {
		$("style.designer-style.theme-C").append(
		'.theme-C[visualcolors="standard"] {' +
		'--community-background-vertical-alignment:' + str + '!important;' +
		'}'
		);	
	}

	if ($("html.theme-D").length) {
		$("style.designer-style.theme-D").append(
		'.theme-D[visualcolors="standard"] {' +
		'--community-background-vertical-alignment:' + str + '!important;' +
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
		'--community-background-no-tiling:true!important;' +
		'}'
		);	
	}

	if ($("html.theme-B").length) {
		$("style.designer-style.theme-B").append(
		'.theme-B[visualcolors="standard"] {' +
		'--community-background-no-tiling:true!important;' +
		'}'
		);	
	}

	if ($("html.theme-C").length) {
		$("style.designer-style.theme-C").append(
		'.theme-C[visualcolors="standard"] {' +
		'--community-background-no-tiling:true!important;' +
		'}'
		);	
	}

	if ($("html.theme-D").length) {
		$("style.designer-style.theme-D").append(
		'.theme-D[visualcolors="standard"] {' +
		'--community-background-no-tiling:true!important;' +
		'}'
		);	
	}
	} else {

	if ($("html.theme-A").length) {
		$("style.designer-style.theme-A").append(
		'.theme-A[visualcolors="standard"] {' +
		'--community-background-no-tiling:false!important;' +
		'}'
		);	
	}

	if ($("html.theme-B").length) {
		$("style.designer-style.theme-B").append(
		'.theme-B[visualcolors="standard"] {' +
		'--community-background-no-tiling:false!important;' +
		'}'
		);	
	}

	if ($("html.theme-C").length) {
		$("style.designer-style.theme-C").append(
		'.theme-C[visualcolors="standard"] {' +
		'--community-background-no-tiling:false!important;' +
		'}'
		);	
	}

	if ($("html.theme-D").length) {
		$("style.designer-style.theme-D").append(
		'.theme-D[visualcolors="standard"] {' +
		'--community-background-no-tiling:false!important;' +
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
		'--community-background-size:' + str + '!important;' +
		'}'
		);	
	}

	if ($("html.theme-B").length) {
		$("style.designer-style.theme-B").append(
		'.theme-B[visualcolors="standard"] {' +
		'--community-background-size:' + str + '!important;' +
		'}'
		);	
	}

	if ($("html.theme-C").length) {
		$("style.designer-style.theme-C").append(
		'.theme-C[visualcolors="standard"] {' +
		'--community-background-size:' + str + '!important;' +
		'}'
		);	
	}

	if ($("html.theme-D").length) {
		$("style.designer-style.theme-D").append(
		'.theme-D[visualcolors="standard"] {' +
		'--community-background-size:' + str + '!important;' +
		'}'
		);	
	}
	CheckBG();
}


function ToggleBG4() {
var left = document.querySelector('input#BG4_1');
var middle = document.querySelector('input#BG4_2');
var right = document.querySelector('input#BG4_3');
let str = "";
if (left.checked) {
	str = "left";
} else if (middle.checked) {
	str = "center";
} else if (right.checked) {
	str = "right";
}
	if ($("html.theme-A").length) {
		$("style.designer-style.theme-A").append(
		'.theme-A[visualcolors="standard"] {' +
		'--community-background-horizontal-alignment:' + str + '!important;' +
		'}'
		);	
	}

	if ($("html.theme-B").length) {
		$("style.designer-style.theme-B").append(
		'.theme-B[visualcolors="standard"] {' +
		'--community-background-horizontal-alignment:' + str + '!important;' +
		'}'
		);	
	}

	if ($("html.theme-C").length) {
		$("style.designer-style.theme-C").append(
		'.theme-C[visualcolors="standard"] {' +
		'--community-background-horizontal-alignment:' + str + '!important;' +
		'}'
		);	
	}

	if ($("html.theme-D").length) {
		$("style.designer-style.theme-D").append(
		'.theme-D[visualcolors="standard"] {' +
		'--community-background-horizontal-alignment:' + str + '!important;' +
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

function UpdateImageOpacity() {
var x = $('input.image_opacity').val();
		if ($("html.theme-A").length) {
			$("style.designer-style.theme-A").append(
			'.theme-A[visualcolors="standard"] {' +
			'--community-background-image-opacity:' + x + '%!important;' +
			'}'
			);	
		}

		if ($("html.theme-B").length) {
			$("style.designer-style.theme-B").append(
			'.theme-B[visualcolors="standard"] {' +
			'--community-background-image-opacity:' + x + '%!important;' +
			'}'
			);	
		}

		if ($("html.theme-C").length) {
			$("style.designer-style.theme-C").append(
			'.theme-C[visualcolors="standard"] {' +
			'--community-background-image-opacity:' + x + '%!important;' +
			'}'
			);	
		}

		if ($("html.theme-D").length) {
			$("style.designer-style.theme-D").append(
			'.theme-D[visualcolors="standard"] {' +
			'--community-background-image-opacity:' + x + '%!important;' +
			'}'
			);	
		}
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
			'--logo-filter:initial!important;' +
			'}'
			);	
		}

		if ($("html.theme-B").length) {
			$("style.designer-style.theme-B").append(
			'.theme-B[visualcolors="standard"] {' +
			'--logo-filter:initial!important;' +
			'}'
			);	
		}

		if ($("html.theme-C").length) {
			$("style.designer-style.theme-C").append(
			'.theme-C[visualcolors="standard"] {' +
			'--logo-filter:initial!important;' +
			'}'
			);	
		}

		if ($("html.theme-D").length) {
			$("style.designer-style.theme-D").append(
			'.theme-D[visualcolors="standard"] {' +
			'--logo-filter:initial!important;' +
			'}'
			);	
		}
		
	} else {
		if ($("html.theme-A").length) {
			$("style.designer-style.theme-A").append(
			'.theme-A[visualcolors="standard"] {' +
			'--logo-filter:' + x + '!important;' +
			'}'
			);	
		}

		if ($("html.theme-B").length) {
			$("style.designer-style.theme-B").append(
			'.theme-B[visualcolors="standard"] {' +
			'--logo-filter:' + x + '!important;' +
			'}'
			);	
		}

		if ($("html.theme-C").length) {
			$("style.designer-style.theme-C").append(
			'.theme-C[visualcolors="standard"] {' +
			'--logo-filter:' + x + '!important;' +
			'}'
			);	
		}

		if ($("html.theme-D").length) {
			$("style.designer-style.theme-D").append(
			'.theme-D[visualcolors="standard"] {' +
			'--logo-filter:' + x + '!important;' +
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
			'--logo-filter-hover:initial!important;' +
			'}'
			);	
		}

		if ($("html.theme-B").length) {
			$("style.designer-style.theme-B").append(
			'.theme-B[visualcolors="standard"] {' +
			'--logo-filter-hover:initial!important;' +
			'}'
			);	
		}

		if ($("html.theme-C").length) {
			$("style.designer-style.theme-C").append(
			'.theme-C[visualcolors="standard"] {' +
			'--logo-filter-hover:initial!important;' +
			'}'
			);	
		}

		if ($("html.theme-D").length) {
			$("style.designer-style.theme-D").append(
			'.theme-D[visualcolors="standard"] {' +
			'--logo-filter-hover:initial!important;' +
			'}'
			);	
		}
		
	} else {
		if ($("html.theme-A").length) {
			$("style.designer-style.theme-A").append(
			'.theme-A[visualcolors="standard"] {' +
			'--logo-filter-hover:' + x + '!important;' +
			'}'
			);	
		}

		if ($("html.theme-B").length) {
			$("style.designer-style.theme-B").append(
			'.theme-B[visualcolors="standard"] {' +
			'--logo-filter-hover:' + x + '!important;' +
			'}'
			);	
		}

		if ($("html.theme-C").length) {
			$("style.designer-style.theme-C").append(
			'.theme-C[visualcolors="standard"] {' +
			'--logo-filter-hover:' + x + '!important;' +
			'}'
			);	
		}

		if ($("html.theme-D").length) {
			$("style.designer-style.theme-D").append(
			'.theme-D[visualcolors="standard"] {' +
			'--logo-filter-hover:' + x + '!important;' +
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
			'--logo-filter-duration:0!important;' +
			'}'
			);	
		}

		if ($("html.theme-B").length) {
			$("style.designer-style.theme-B").append(
			'.theme-B[visualcolors="standard"] {' +
			'--logo-filter-duration:0!important;' +
			'}'
			);	
		}

		if ($("html.theme-C").length) {
			$("style.designer-style.theme-C").append(
			'.theme-C[visualcolors="standard"] {' +
			'--logo-filter-duration:0!important;' +
			'}'
			);	
		}

		if ($("html.theme-D").length) {
			$("style.designer-style.theme-D").append(
			'.theme-D[visualcolors="standard"] {' +
			'--logo-filter-duration:0!important;' +
			'}'
			);	
		}
		
	} else {
		if ($("html.theme-A").length) {
			$("style.designer-style.theme-A").append(
			'.theme-A[visualcolors="standard"] {' +
			'--logo-filter-duration:' + x +'ms!important;' +
			'}'
			);	
		}

		if ($("html.theme-B").length) {
			$("style.designer-style.theme-B").append(
			'.theme-B[visualcolors="standard"] {' +
			'--logo-filter-duration:' + x +'ms!important;' +
			'}'
			);	
		}

		if ($("html.theme-C").length) {
			$("style.designer-style.theme-C").append(
			'.theme-C[visualcolors="standard"] {' +
			'--logo-filter-duration:' + x +'ms!important;' +
			'}'
			);	
		}

		if ($("html.theme-D").length) {
			$("style.designer-style.theme-D").append(
			'.theme-D[visualcolors="standard"] {' +
			'--logo-filter-duration:' + x +'ms!important;' +
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
			'--logo-filter-delay:0!important;' +
			'}'
			);	
		}

		if ($("html.theme-B").length) {
			$("style.designer-style.theme-B").append(
			'.theme-B[visualcolors="standard"] {' +
			'--logo-filter-delay:0!important;' +
			'}'
			);	
		}

		if ($("html.theme-C").length) {
			$("style.designer-style.theme-C").append(
			'.theme-C[visualcolors="standard"] {' +
			'--logo-filter-delay:0!important;' +
			'}'
			);	
		}

		if ($("html.theme-D").length) {
			$("style.designer-style.theme-D").append(
			'.theme-D[visualcolors="standard"] {' +
			'--logo-filter-delay:0!important;' +
			'}'
			);	
		}
		
	} else {
		if ($("html.theme-A").length) {
			$("style.designer-style.theme-A").append(
			'.theme-A[visualcolors="standard"] {' +
			'--logo-filter-delay:' + x +'ms!important;' +
			'}'
			);	
		}

		if ($("html.theme-B").length) {
			$("style.designer-style.theme-B").append(
			'.theme-B[visualcolors="standard"] {' +
			'--logo-filter-delay:' + x +'ms!important;' +
			'}'
			);	
		}

		if ($("html.theme-C").length) {
			$("style.designer-style.theme-C").append(
			'.theme-C[visualcolors="standard"] {' +
			'--logo-filter-delay:' + x +'ms!important;' +
			'}'
			);	
		}

		if ($("html.theme-D").length) {
			$("style.designer-style.theme-D").append(
			'.theme-D[visualcolors="standard"] {' +
			'--logo-filter-delay:' + x +'ms!important;' +
			'}'
			);	
		}
	}
}