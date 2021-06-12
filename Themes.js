﻿window.MW18auto = true;
window.MW18autoDark = false;
window.MW18darkmode = false;
window.MW18LightThreshold = 50;
window.MW18HoverThreshold = 0.25;
window.MW18ContrastNotice = false;

/* Visual Themes */
var visualThemes = ['basic','contrast','contrast','basic','simple'];
var visualColors = ['standard','standard','forcedcolors','lunacolors','standard'];
var visualThemeNames = ['Basic','High Contrast','High Contrast (Forced Colors)','Basic (XP Luna Colors)','Simple'];
var contrastVisual = 1;

(function () {
document.querySelector('html').className += " theme-A"; // We begin with the first theme selected
ColorUpdate(true);
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
	}
	if ( ($(".mpisto-gnav").length) ) {
		$("head").append(
		'<meta name="theme-color" content="' + chroma( 'rgb(' + getComputedStyle(document.querySelector('.mpisto-gnav')).getPropertyValue("--global-nav-color") + ')' ) + '">'
		);	
	} else {
		$("head").append(
		'<meta name="theme-color" content="' + chroma( $('body').css('background-color') ) + '">'
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
		if ( ( window.matchMedia('(forced-colors: active)').matches ) ) {
			VisualStyle(contrastVisual);
		} else {
			VisualStyle(-1); // We start without any visual style
		}
		ContrastBanner(); // Notice
		VisualStyleCompile(); // Compiles the Contrast Options
		
})();


function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}


/* Visual Styles */
function VisualStyle(style) {
	var oldvisual = $('html').attr("visualcolors");
	if (style === -1) { // Standard Style
		$('html').attr("visualtheme", "standard");
		$('html').attr("visualcolors", "standard");
	} else {
		$('html').attr("visualtheme", visualThemes[style]);
		$('html').attr("visualcolors", visualColors[style]);
	}
	if (oldvisual !==	$('html').attr("visualcolors")) { // If Visual Colors get changed, update automated variables
		ColorUpdate(true);
	}
		ThemeColorMetaTag();
}

function VisualStyleCompile() {
// Puts new options
// In the Visual Styles Dropdown
	for (let i = 0; i < visualThemes.length; i++) {
		if ($("body.options").length) {
			str = '<br><input type="radio" name="CPEVisual" id="CPEVisual_' + i + '" onclick="VisualStyle(' + i + ')"></input> <label for="CPEVisual_' + i + '">' + visualThemeNames[i] + '</label>'
			$(".highcontrastmodes.cpe-visual-styles").append(str);

		} else { // Non options page
			str = '<li><a onclick="VisualStyle(' + i + ')">' + visualThemeNames[i] + '</a></li>'
			$(".cpe-dropdown .cpe-dropdown__content .cpe-list.cpe-visual-styles").append(str);
		}
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
	$(".color-header .title a").text(y + ' Wiki');
	$(".mobile-header .title a").text(y + ' Wiki');
	} else {
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
	if ( ($(".mpisto-gnav").length) ) {
		$('meta[name*="theme-color"]').attr("content", chroma( 'rgb(' + getComputedStyle(document.querySelector('.mpisto-gnav')).getPropertyValue("--global-nav-color") + ')' ) );
	} else {
		$('meta[name*="theme-color"]').attr("content", chroma( $('body').css('background-color') ) );
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
	if (old_dark != window.MW18darkmode) {
		ColorUpdate(false);
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
		$(".mpisto-header-container .wordmark img").attr("src", img.src);

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
function RandomColor1() {
// var x = chroma.random()
var Colors = ['1d1d1d','8d0017','ac0000','d34500','eb9900','ffb317','7d9b34','5ea200','417800','1d5100','003c00','44a177','008d8f','00a8a9','009bf0','0068b7','003981','091a45','180052','490090','711993','8d37af','8c005a','ab0064','ea0098','5e5e5e','be0021','f73400','ff892b','ffc12c','ffc91a','8acb00','6db000','169900','58cc7d','00d1d2','41c3ff','008ee1','00baff','0075c6','4617b4','6800b3','a13bc9','bd56e5','c02883','f900a5','ff5fdc','e2e2e2']
 var x = '#' + Colors[getRandomInt(Colors.length)]
$('input[type="range"][name="bg"].red').val(chroma(x).get('rgb.r'));
$('input[type="range"][name="bg"].green').val( chroma(x).get('rgb.g'));
$('input[type="range"][name="bg"].blue').val( chroma(x).get('rgb.b'));


UpdateValue()
}

function RandomColor2() {
// var x = chroma.random()
	var Colors = ['ababab','8acfff','f598d6','f3d240','add85f','78d9d9','ffaf51','ff6f6f','f359a8','47cf74','c48aff','58b1fc','9898ff','c3b5a8','ffffff','576dcd','4074ff','4099e1','40b2cc','40c5ae','40c280','9bcc3f','fce840','f98a48','e1676a','ed4c5a','ef4086','bc3b8c','7e73a5','879289'] 
 var x = '#' + Colors[getRandomInt(Colors.length)]
$('input[type="range"][name="header"].red').val(chroma(x).get('rgb.r') );
$('input[type="range"][name="header"].green').val( chroma(x).get('rgb.g') );
$('input[type="range"][name="header"].blue').val( chroma(x).get('rgb.b') );

UpdateValue()
}

function RandomColor3() {
// var x = chroma.random()
	var Colors = ['000000','ffffff','dcdcdc','787878','464646','0a3b76','4395d1','99d9ea','0076a3','0d686b','00a99d','00a99d','7accc8','82ca9c','74a402','c4df9b','84871c','d9d56f','fff468','fff799','ffc20e','eb6119','fbaf5d','e57300','c14000','9e6b52','8c6239','c7b299','b82832','d85171','fedfec','563f7f','a186be','d9cfe5']
 var x = '#' + Colors[getRandomInt(Colors.length)]
$('input[type="range"][name="contentbg"].red').val(chroma(x).get('rgb.r') );
$('input[type="range"][name="contentbg"].green').val( chroma(x).get('rgb.g') );
$('input[type="range"][name="contentbg"].blue').val( chroma(x).get('rgb.b') );

UpdateValue()
}

function RandomColor4() {
	$("body").attr('content-color-auto', 'false');
// var x = chroma.random()
	var Colors = ['000000','3a3a3a','bfbfbf','e6e6e6','ffffff','ff0000','00ff00','0000ff','ffff00','ff00ff','00ffff']
 var x = '#' + Colors[getRandomInt(Colors.length)]
$('input[type="range"][name="contentcolor"].red').val(chroma(x).get('rgb.r') );
$('input[type="range"][name="contentcolor"].green').val(chroma(x).get('rgb.g') );
$('input[type="range"][name="contentcolor"].blue').val(chroma(x).get('rgb.b') );

UpdateValue()
}

function RandomColor5() {
$("body").attr('content-border-auto', 'false');
// var x = chroma.random()
	  var Colors = ['808080','cccccc','6e6e6e','3c3c3c','a3a3a3','800000','008000','000080','808000','800080','008080']
 var x = '#' + Colors[getRandomInt(Colors.length)]
$('input[type="range"][name="border"].red').val(chroma(x).get('rgb.r') );
$('input[type="range"][name="border"].green').val(chroma(x).get('rgb.g') );
$('input[type="range"][name="border"].blue').val(chroma(x).get('rgb.b') );

UpdateValue()
}

function RandomColor6() {
// var x = chroma.random()
	var Colors = ['00ff00','8080ff','c0c0c0','000000','ffffff','ffff00','77ffff','00007f','600000','ff0000','952aab','ff0066','fa6d6d','00ffff','ccffff','c056a2','ff6ec7','ff7f00','8e236b','7f500d','0366cc','fbf305','ff6403','dd0907','f20884','4700a5','0000d3','02abea','1fb714','006412','562c05','90713a','404040','117dbb','8b12ae','4da60c','a74f01'] 
 var x = '#' + Colors[getRandomInt(Colors.length)]
$('input[type="range"][name="linkcolor"].red').val(chroma(x).get('rgb.r') );
$('input[type="range"][name="linkcolor"].green').val(chroma(x).get('rgb.g') );
$('input[type="range"][name="linkcolor"].blue').val(chroma(x).get('rgb.b') );


UpdateValue()
}

function RandomColor7() {
// var x = chroma.random()
	var Colors = ['ff8c00','e81123','d13438','c30052','bf0077','9a0089','881798','744da9','10893e','107c10','018574','2d7d9a','0063b1','6b69d6','8e8cd8','8764b8','038387','486860','525e54','7e735f','4c4a48','515c6b','4a5459','000000','ffffff']
 var x = '#' + Colors[getRandomInt(Colors.length)]
$('input[type="range"][name="buttoncolor"].red').val(chroma(x).get('rgb.r') );
$('input[type="range"][name="buttoncolor"].green').val(chroma(x).get('rgb.g') );
$('input[type="range"][name="buttoncolor"].blue').val(chroma(x).get('rgb.b') );


UpdateValue()
}

function RandomColor8() {
	$("body").attr('background-overlay-auto', 'false');
// var x = chroma.random()
var Colors = ['1d1d1d','8d0017','ac0000','d34500','eb9900','ffb317','7d9b34','5ea200','417800','1d5100','003c00','44a177','008d8f','00a8a9','009bf0','0068b7','003981','091a45','180052','490090','711993','8d37af','8c005a','ab0064','ea0098','5e5e5e','be0021','f73400','ff892b','ffc12c','ffc91a','8acb00','6db000','169900','58cc7d','00d1d2','41c3ff','008ee1','00baff','0075c6','4617b4','6800b3','a13bc9','bd56e5','c02883','f900a5','ff5fdc','e2e2e2']
 var x = '#' + Colors[getRandomInt(Colors.length)]
$('input[type="range"][name="bgo"].red').val(chroma(x).get('rgb.r'));
$('input[type="range"][name="bgo"].green').val( chroma(x).get('rgb.g'));
$('input[type="range"][name="bgo"].blue').val( chroma(x).get('rgb.b'));


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
	RandomColor8();
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
	var body_bg=[
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
				'000000'  // Windows 10
				][theme2];
	var body_image=[
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
				'Empty.png'				 // Windows 10
				][theme2];
	var page_bg=[
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
				'ffffff'  // Windows 10
				][theme2];
	var button_bg=[
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
				'0066cc'  // Windows 10
				][theme2];
	var header_bg=[
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
				'96b4d1'  // Windows 10
				][theme2];
	var link_bg=[
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
				'0066cc'  // Windows 10
				][theme2];
	/* Change Colors */
	PickColor1(body_bg);
	UploadPicture1B(body_image);
	PickColor2(header_bg);
	PickColor3(page_bg);
	PickColor6(link_bg);
	PickColor7(button_bg);
	/* Make theme adaptive, if it isn't */
	PickColor4('auto');
	PickColor5('auto');
	PickColor8('auto');
	colortheme($('body').attr("wikitheme"))
}

/* These functions asks about what color should the user use if no value is set and sets it to an individual component such as Body Background color (The current color is used as initial answer in case of accidental use)
** If a value is set directly in the function, it instead uses that color instead of asking the user to write a color
** Used in Preferences only
** Possible Variations of PickColor() 1 = Body Color | 2 = Header Color | 3 = Content Color | 4 = Content Text Color | 5 = Content Border Color | 6 = Link Color | 7 = Button Color | 8 = Body Overlay Color
*/
function PickColor1(color="") {
if (color==="") {
	var x= prompt("Body Background Color", chroma(getComputedStyle(document.querySelector('html')).getPropertyValue("--background-color")));
} else {
	var x=color;
}

$('input[type="range"][name="bg"].red').val(chroma(x).get('rgb.r'));
$('input[type="range"][name="bg"].green').val( chroma(x).get('rgb.g'));
$('input[type="range"][name="bg"].blue').val( chroma(x).get('rgb.b'));

UpdateValue()
}

function PickColor2(color="") {
if (color==="") {
	var x= prompt("Header Background Color", chroma(getComputedStyle(document.querySelector('html')).getPropertyValue("--community-header-bg")));
} else {
	var x=color;
}
$('input[type="range"][name="header"].red').val(chroma(x).get('rgb.r') );
$('input[type="range"][name="header"].green').val( chroma(x).get('rgb.g') );
$('input[type="range"][name="header"].blue').val( chroma(x).get('rgb.b') );

UpdateValue()
}

function PickColor3(color="") {
if (color==="") {
	var x= prompt("Page Background Color", chroma(getComputedStyle(document.querySelector('html')).getPropertyValue("--content-bg")));
} else {
	var x=color;
}

$('input[type="range"][name="contentbg"].red').val(chroma(x).get('rgb.r') );
$('input[type="range"][name="contentbg"].green').val( chroma(x).get('rgb.g') );
$('input[type="range"][name="contentbg"].blue').val( chroma(x).get('rgb.b') );

UpdateValue()
}

function PickColor4(color="") {
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
UpdateValue()
}

function PickColor5(color="") {
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
UpdateValue()
}

function PickColor6(color="") {
if (color==="") {
	var x= prompt("Page Link Color", chroma('rgb(' + getComputedStyle(document.querySelector('html')).getPropertyValue("--link-color") + ')'));
} else {
	var x=color;
}

$('input[type="range"][name="linkcolor"].red').val(chroma(x).get('rgb.r') );
$('input[type="range"][name="linkcolor"].green').val(chroma(x).get('rgb.g') );
$('input[type="range"][name="linkcolor"].blue').val(chroma(x).get('rgb.b') );
UpdateValue()
}

function PickColor7(color="") {
if (color==="") {
	var x= prompt("Page Button Color", chroma(getComputedStyle(document.querySelector('html')).getPropertyValue("--button-color")));
} else {
	var x=color;
}

$('input[type="range"][name="buttoncolor"].red').val(chroma(x).get('rgb.r') );
$('input[type="range"][name="buttoncolor"].green').val(chroma(x).get('rgb.g') );
$('input[type="range"][name="buttoncolor"].blue').val(chroma(x).get('rgb.b') );
UpdateValue()
}

function PickColor8(color="") {
if (color==="") {
	if ( $("body").attr('background-overlay-auto') === 'true' ) {
		var x= prompt("Body Overlay Color", 'auto');
	} else {
	var x= prompt("Body Overlay Color", chroma(getComputedStyle(document.querySelector('html')).getPropertyValue("--background-overlay")));
	}
} else {
	var x=color;
}
if (x !=='auto') {
	$("body").attr('background-overlay-auto', 'false');
	$('input[type="range"][name="bgo"].red').val(chroma(x).get('rgb.r'));
	$('input[type="range"][name="bgo"].green').val( chroma(x).get('rgb.g'));
	$('input[type="range"][name="bgo"].blue').val( chroma(x).get('rgb.b'));
} else {
	$("body").attr('background-overlay-auto', 'true');
}

UpdateValue()

}


/* Updates all Sliders values found in each theme designer color selection to the red, green and blue of each color (Each color editor menu in theme designer consists of 3 sliders) */
function UpdateSet() {
	if  (!($("html.contrast.win10").length)) {
		/* Background */
		$('input[type="range"][name="bg"].red').val(chroma(getComputedStyle(document.querySelector('html')).getPropertyValue("--background-color")).get('rgb.r') );
		$('input[type="range"][name="bg"].green').val( chroma(getComputedStyle(document.querySelector('html')).getPropertyValue("--background-color")).get('rgb.g') );
		$('input[type="range"][name="bg"].blue').val( chroma(getComputedStyle(document.querySelector('html')).getPropertyValue("--background-color")).get('rgb.b') );

		/* Header */
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
		if (getComputedStyle(document.querySelector('html')).getPropertyValue("--background-overlay") != 'auto') {
			/* Background Overlay */
			$('input[type="range"][name="bgo"].red').val(chroma(getComputedStyle(document.querySelector('html')).getPropertyValue("--background-overlay")).get('rgb.r') );
			$('input[type="range"][name="bgo"].green').val( chroma(getComputedStyle(document.querySelector('html')).getPropertyValue("--background-overlay")).get('rgb.g') );
			$('input[type="range"][name="bgo"].blue').val( chroma(getComputedStyle(document.querySelector('html')).getPropertyValue("--background-overlay")).get('rgb.b') );
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

	if ( $("body").attr('background-overlay-auto') === 'true' ) {
		var overlaycolorfinal = 'auto' ;
	} else {
		var overlaycolorfinal = chroma('rgb(' + $('input[type="range"][name="bgo"].red').val() + ',' + $('input[type="range"][name="bgo"].green').val() + ',' + $('input[type="range"][name="bgo"].blue').val() + ')') ;
	}


/* Processing */
	if ($("html.theme-A").length) {
		$("style.designer-style.theme-A").append(
		'.theme-A[visualcolors="standard"] {' +
		'--background-color:' + chroma('rgb(' + $('input[type="range"][name="bg"].red').val() + ',' + $('input[type="range"][name="bg"].green').val() + ',' + $('input[type="range"][name="bg"].blue').val() + ')') + '!important;' +
		'--background-overlay:' + overlaycolorfinal + '!important;' +
		'--link-color:' + linkcolor1final + '!important;' +
		'--content-bg:' + chroma('rgb(' + $('input[type="range"][name="contentbg"].red').val() + ',' + $('input[type="range"][name="contentbg"].green').val() + ',' + $('input[type="range"][name="contentbg"].blue').val() + ')') + '!important;' +
		'--content-border:' + contentborderfinal + '!important;' +
		'--content-color:' + contentcolorfinal + '!important;' +
		'--button-color:' + chroma('rgb(' + $('input[type="range"][name="buttoncolor"].red').val() + ',' + $('input[type="range"][name="buttoncolor"].green').val() + ',' + $('input[type="range"][name="buttoncolor"].blue').val() + ')') + '!important;' +
		'--community-header-bg:' + headercolorfinal + '!important;' +
		'}'
		);	
	}

	if ($("html.theme-B").length) {
		$("style.designer-style.theme-B").append(
		'.theme-B[visualcolors="standard"] {' +
		'--background-color:' + chroma('rgb(' + $('input[type="range"][name="bg"].red').val() + ',' + $('input[type="range"][name="bg"].green').val() + ',' + $('input[type="range"][name="bg"].blue').val() + ')') + '!important;' +
		'--background-overlay:' + overlaycolorfinal + '!important;' +
		'--link-color:' + linkcolor1final + '!important;' +
		'--content-bg:' + chroma('rgb(' + $('input[type="range"][name="contentbg"].red').val() + ',' + $('input[type="range"][name="contentbg"].green').val() + ',' + $('input[type="range"][name="contentbg"].blue').val() + ')') + '!important;' +
		'--content-border:' + contentborderfinal + '!important;' +
		'--content-color:' + contentcolorfinal + '!important;' +
		'--button-color:' + chroma('rgb(' + $('input[type="range"][name="buttoncolor"].red').val() + ',' + $('input[type="range"][name="buttoncolor"].green').val() + ',' + $('input[type="range"][name="buttoncolor"].blue').val() + ')') + '!important;' +
		'--community-header-bg:' + headercolorfinal + '!important;' +
		'}'
		);	
	}

	if ($("html.theme-C").length) {
		$("style.designer-style.theme-C").append(
		'.theme-C[visualcolors="standard"] {' +
		'--background-color:' + chroma('rgb(' + $('input[type="range"][name="bg"].red').val() + ',' + $('input[type="range"][name="bg"].green').val() + ',' + $('input[type="range"][name="bg"].blue').val() + ')') + '!important;' +
		'--background-overlay:' + overlaycolorfinal + '!important;' +
		'--link-color:' + linkcolor1final + '!important;' +
		'--content-bg:' + chroma('rgb(' + $('input[type="range"][name="contentbg"].red').val() + ',' + $('input[type="range"][name="contentbg"].green').val() + ',' + $('input[type="range"][name="contentbg"].blue').val() + ')') + '!important;' +
		'--content-border:' + contentborderfinal + '!important;' +
		'--content-color:' + contentcolorfinal + '!important;' +
		'--button-color:' + chroma('rgb(' + $('input[type="range"][name="buttoncolor"].red').val() + ',' + $('input[type="range"][name="buttoncolor"].green').val() + ',' + $('input[type="range"][name="buttoncolor"].blue').val() + ')') + '!important;' +
		'--community-header-bg:' + headercolorfinal + '!important;' +
		'}'
		);	
	}

	if ($("html.theme-D").length) {
		$("style.designer-style.theme-D").append(
		'.theme-D[visualcolors="standard"] {' +
		'--background-color:' + chroma('rgb(' + $('input[type="range"][name="bg"].red').val() + ',' + $('input[type="range"][name="bg"].green').val() + ',' + $('input[type="range"][name="bg"].blue').val() + ')') + '!important;' +
		'--background-overlay:' + overlaycolorfinal + '!important;' +
		'--link-color:' + linkcolor1final + '!important;' +
		'--content-bg:' + chroma('rgb(' + $('input[type="range"][name="contentbg"].red').val() + ',' + $('input[type="range"][name="contentbg"].green').val() + ',' + $('input[type="range"][name="contentbg"].blue').val() + ')') + '!important;' +
		'--content-border:' + contentborderfinal + '!important;' +
		'--content-color:' + contentcolorfinal + '!important;' +
		'--button-color:' + chroma('rgb(' + $('input[type="range"][name="buttoncolor"].red').val() + ',' + $('input[type="range"][name="buttoncolor"].green').val() + ',' + $('input[type="range"][name="buttoncolor"].blue').val() + ')') + '!important;' +
		'--community-header-bg:' + headercolorfinal + '!important;' +
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
result = '.theme-A {\n' + // Beginning
		 '--background-image:' + getComputedStyle(document.querySelector('html')).getPropertyValue("--background-image")  + ';\n' +
		 '--background-color:' + getComputedStyle(document.querySelector('html')).getPropertyValue("--background-color")  + ';\n' +
		 '--background-overlay:' + getComputedStyle(document.querySelector('html')).getPropertyValue("--background-overlay")  + ';\n' +
		 '--link-color:' + getComputedStyle(document.querySelector('html')).getPropertyValue("--link-color")  + ';\n' +
		 '--content-bg:' + getComputedStyle(document.querySelector('html')).getPropertyValue("--content-bg")  + ';\n' +
		 '--content-border:' + getComputedStyle(document.querySelector('html')).getPropertyValue("--content-border")  + ';\n' +
		 '--content-color:' + getComputedStyle(document.querySelector('html')).getPropertyValue("--content-color")  + ';\n' +
		 '--button-color:' + getComputedStyle(document.querySelector('html')).getPropertyValue("--button-color")  + ';\n' +
		 '--community-header-bg:' + getComputedStyle(document.querySelector('html')).getPropertyValue("--community-header-bg")  + ';\n' +
		 '--body-display:' + getComputedStyle(document.querySelector('html')).getPropertyValue("--body-display")  + ';\n' +
		 '--background-va:' + getComputedStyle(document.querySelector('html')).getPropertyValue("--background-va")  + ';\n' +
		 '--background-size:' + getComputedStyle(document.querySelector('html')).getPropertyValue("--background-size")  + ';\n' +
		 '--background-no-tiling:' + getComputedStyle(document.querySelector('html')).getPropertyValue("--background-no-tiling")  + ';\n' +
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
}
}


function ResetThemeA() {
if (confirm('Are you sure you want to reset this theme to the pre-set ones? This action cannot be undone') === true) {
		$("style.designer-style.theme-A").text('/* This CSS left intentionally blank */');	
	if ($("html.theme-A").length) {
		ColorUpdate(true);
	}
}
}


function ResetThemeB() {
if (confirm('Are you sure you want to reset this theme to the pre-set ones? This action cannot be undone') === true) {
		$("style.designer-style.theme-B").text('/* This CSS left intentionally blank */');	
	if ($("html.theme-B").length) {
		ColorUpdate(true);
	}
}
}

function ResetThemeC() {
if (confirm('Are you sure you want to reset this theme to the pre-set ones? This action cannot be undone') === true) {
		$("style.designer-style.theme-C").text('/* This CSS left intentionally blank */');	
	if ($("html.theme-C").length) {
		ColorUpdate(true);
	}
}
}

function ResetThemeD() {
if (confirm('Are you sure you want to reset this theme to the pre-set ones? This action cannot be undone') === true) {
		$("style.designer-style.theme-D").text('/* This CSS left intentionally blank */');	
	if ($("html.theme-D").length) {
		ColorUpdate(true);
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
}
}

function ResetThemesB() {
if (confirm('Are you sure you want to reset everything to factory defaults? This action cannot be undone') === true) {
		$("style.designer-style.theme-A").text('/* This CSS left intentionally blank */');	
		$("style.designer-style.theme-B").text('/* This CSS left intentionally blank */');	
		$("style.designer-style.theme-C").text('/* This CSS left intentionally blank */');	
		$("style.designer-style.theme-D").text('/* This CSS left intentionally blank */');	
		$("style.designer-style.theme-Miscellaneous").text('/* This CSS left intentionally blank */');	

	ColorUpdate(true);
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

/* Begin Color Parsers */
function ColorTestTwin(color,color2,intensity=1,inter='hsl') {
	return chroma.mix(color,color2,MW18HoverThreshold*intensity, inter);
}


function ColorTest(color,text=false) {

	if (isLightColor(color)) {
		if (text === true) {
			return '#0a0a0a';
		} else {
			return ColorTestTwin(color,'#000000');
		}
	} else {
		if (text === true) {
			return '#fafafa';
		} else {
			return ColorTestTwin(color,'#ffffff');
		}
	}


}

function SuperColorTest(color) {
	if (isLightColor(color)) {
		var mix = ColorTestTwin(color,'#000000');
		return ColorTestTwin(mix,'#000000');
	} else {
		var mix = ColorTestTwin(color,'#ffffff');
		return ColorTestTwin(mix,'#ffffff');
	}
}




// Only used for link and header colors
function ColorTest2(color,text=false) {

	if (text === true) {
		if (isLightColor(color)) {
			return '10,10,10';
		} else {
			return '250,250,250';
		}
	} else {
		return Color2(ColorTest(color));
	}


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
	return ((chroma.contrast('#0A0A0A', color)) > MW18LightThreshold*0.09);
}

function isSuperLightColor(color) {
	return ((chroma.contrast('#0A0A0A', color)) > window.MW18LightThreshold*0.126);
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

// Overlay Color
	str = '';
//	var Colors = ['f9ebc3','ede5dd','f7e1d3','dfdbc3','fbe300','ffbf99','fdc355','cdbd89','d5a593','a37719','836d35','776b41','f14700','dd3509','a34111','7b3b09', '4f4341','454545','611d03','891100','71130f','ebfffb','ebf1f5','f5ebf5','e7f3d1','bde9fd','dfbddd','c3d167','a5b5c5','6599ff','6b93b1','978f33','53835d','7f6f9f','d335f7','337700','006baf','2b53b5','2d2b17','003715','012d59','6f017b','790145','ffffff','f1f1f1','ebebeb','000000']
	var Colors = ['1d1d1d','8d0017','ac0000','d34500','eb9900','ffb317','7d9b34','5ea200','417800','1d5100','003c00','44a177','008d8f','00a8a9','009bf0','0068b7','003981','091a45','180052','490090','711993','8d37af','8c005a','ab0064','ea0098','5e5e5e','be0021','f73400','ff892b','ffc12c','ffc91a','8acb00','6db000','169900','58cc7d','00d1d2','41c3ff','008ee1','00baff','0075c6','4617b4','6800b3','a13bc9','bd56e5','c02883','f900a5','ff5fdc','e2e2e2']

	var socialAM = Colors.length

	for (let i = 0; i < socialAM; i++) {
	  var color = Colors[i];
	  var data = '<button class="cpe-button cpe-is-square color-button" onclick="PickColor8(' + "'#" + color + "'" + ')"> <div style="border:1px solid; width:inherit; height:inherit; pointer-events:none; border-radius:50%; background-color:' + "#" +  color + ';"></div> </button>'
	  str = str + data;
	}

	$(".rec-colors-overlay").append(str);

// Header Color
	str = '';
//	var Colors = ['fec356','6699ff','6c93b1','a47719','846d35','786c42','f14800','337800','006cb0','dd360a','a34112','474646','7b3b0a','4f4341','0038d8','2d2c18','611e03','003816','891100','012e59','721410','6f027c','7a0146'] 
	var Colors = ['ababab','8acfff','f598d6','f3d240','add85f','78d9d9','ffaf51','ff6f6f','f359a8','47cf74','c48aff','58b1fc','9898ff','c3b5a8','ffffff','576dcd','4074ff','4099e1','40b2cc','40c5ae','40c280','9bcc3f','fce840','f98a48','e1676a','ed4c5a','ef4086','bc3b8c','7e73a5','879289'] 

	var socialAM = Colors.length

	for (let i = 0; i < socialAM; i++) {
	  var color = Colors[i];
	  var data = '<button class="cpe-button cpe-is-square color-button" onclick="PickColor2(' + "'#" + color + "'" + ')"> <div style="border:1px solid; width:inherit; height:inherit; pointer-events:none; border-radius:50%; background-color:' + "#" +  color + ';"></div> </button>'
	  str = str + data;
	}

	$(".rec-colors-header").append(str);

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


}


function SocialCompile() {
	$("head .social-colors").text('');	
	let str = '';
	var socialV = ['facebook','googleplus','line','linkedin','instagram','meneame','nk','odnoklassniki','reddit','tumblr','twitter','vkontakte','wykop','weibo','youtube','discord','fandom','asecure','steam','spotify','twitch','qore','mpisto','splashhol','gamepedia','info','success','warning','alert']
	var socialC = ['#3b5998','#dd4b39','#00c300','#0077b5','#e02d69','#ff6400','#4077a7','#f96900','#ff4500','#34465d','#1da1f2','#587ca3','#fb803f','#ff8140','#cd201f','#5865f2','#00acac','#0009FF','#000','#1ed760','#563194','#ff4500','#18bbc5','#61448d','#f4801f','#575859','#14866d','#ffcc33','#dd3333']
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
      var colormix = ColorTestTwin(colormixl,color,0.8,'rgb');
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
		if (isLightColor(content_text)) {
			var content_color = '#2e2e2e';	
		} else {
			var content_color = '#e2e2e2';
		}
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



if (isSuperLightColor(content_color) && (false)) {
	var dropdowncolor = '#fafafa';
	if ((getComputedStyle(document.querySelector('html')).getPropertyValue("--content-color") === 'auto') && !($("html.contrast.win10").length)  ) {
		var dropdowncolor3 = '#2e2e2e';	
	} else {
		var dropdowncolor3 = 'inherit';
	}

	if ((getComputedStyle(document.querySelector('html')).getPropertyValue("--content-border") === 'auto') && !($("html.contrast.win10").length)  ) {
		var dropdowncolor2 = chroma.mix(content_color,'#0a0a0a',MW18HoverThreshold*1.32, 'hsv');
	} else {
		var dropdowncolor2 = 'inherit';
	}

	
} else if (isLightColor(content_color)) {
var dropdowncolor = chroma.mix(content_color,'#0a0a0a',MW18HoverThreshold*0.4, 'hsv');
	if ((getComputedStyle(document.querySelector('html')).getPropertyValue("--content-color") === 'auto') && !($("html.contrast.win10").length)  ) {
		var dropdowncolor3 = '#0a0a0a';	
	} else {
		var dropdowncolor3 = 'inherit';
	}
	if ((getComputedStyle(document.querySelector('html')).getPropertyValue("--content-border") === 'auto') && !($("html.contrast.win10").length)  ) {
		var dropdowncolor2 = chroma.mix(content_color,'#0a0a0a',MW18HoverThreshold*2.4, 'hsv');
	} else {
		var dropdowncolor2 = 'inherit';
	}

} else {
var dropdowncolor = chroma.mix(content_color,'#fafafa',MW18HoverThreshold*0.4, 'hsv');
	if ((getComputedStyle(document.querySelector('html')).getPropertyValue("--content-color") === 'auto') && !($("html.contrast.win10").length)  ) {
		var dropdowncolor3 = '#fafafa';	
	} else {
		var dropdowncolor3 = 'inherit';
	}
	if ((getComputedStyle(document.querySelector('html')).getPropertyValue("--content-border") === 'auto') && !($("html.contrast.win10").length)  ) {
		var dropdowncolor2 = chroma.mix(content_color,'#fafafa',MW18HoverThreshold*2.4, 'hsv');
	} else {
		var dropdowncolor2 = 'inherit';
	}

}

if (getComputedStyle(document.querySelector('html')).getPropertyValue("--content-color") != 'auto') {
	var content_text2 = ColorTest(content_text);
	var content_text3 = SuperColorTest(content_text); // Scrollbar
	var content_text4 = ColorTest(content_text,true);
	var content_text5 = ColorTest(content_text4,false);
	colormixl = ColorTestTwin(content_color,content_text,0.8,'rgb');
	colormix = ColorTestTwin(colormixl,content_text,0.8,'rgb');
} else {
	var content_text2 = ColorTest(dropdowncolor3);
	var content_text3 = SuperColorTest(dropdowncolor3); // Scrollbar
	var content_text4 = ColorTest(dropdowncolor3,true);
	var content_text5 = ColorTest(content_text4,false);
	colormixl = ColorTestTwin(content_color,dropdowncolor3,0.8,'rgb');
	colormix = ColorTestTwin(colormixl,dropdowncolor3,0.8,'rgb');
}


document.querySelector('html').style.setProperty("--dropdown-bg", dropdowncolor);
document.querySelector('body').style.setProperty("--content-border", dropdowncolor2);
if (window.MW18darkmode === true) {
	document.querySelector('body').style.setProperty("--content-bg", content_color);
	document.querySelector('body').style.setProperty("--content-color", content_text);
} else {
	document.querySelector('body').style.setProperty("--content-bg", 'inherit');
	document.querySelector('body').style.setProperty("--content-color", dropdowncolor3);
}
document.querySelector('html').style.setProperty("--content-bg-dark", content_color2);
document.querySelector('html').style.setProperty("--content-bg-dark-super", content_color3); // Scrollbar
document.querySelector('html').style.setProperty("--content-color-dark", content_text2);
document.querySelector('html').style.setProperty("--content-color-dark-super", content_text3); // Scrollbar
document.querySelector('html').style.setProperty("--content-color-text", content_text4);
document.querySelector('html').style.setProperty("--content-color-text-dark", content_text5);
document.querySelector('html').style.setProperty("--content-color-content-bg-mix-light", colormixl);
document.querySelector('html').style.setProperty("--content-color-content-bg-mix", colormix);

// RGB
document.querySelector('html').style.setProperty("--dropdown-bg-rgb", Color2(dropdowncolor));
document.querySelector('html').style.setProperty("--content-bg-rgb", Color2( getComputedStyle(document.querySelector('body')).getPropertyValue("--content-bg") ));
document.querySelector('html').style.setProperty("--content-bg-dark-rgb", Color2(content_color2));
document.querySelector('html').style.setProperty("--content-bg-dark-super-rgb", Color2(content_color3));
document.querySelector('html').style.setProperty("--content-color-rgb", Color2( getComputedStyle(document.querySelector('body')).getPropertyValue("--content-color") ));
document.querySelector('html').style.setProperty("--content-color-dark-rgb", Color2(content_text2));
document.querySelector('html').style.setProperty("--content-color-dark-super-rgb", Color2(content_text3));
document.querySelector('html').style.setProperty("--content-color-text-rgb", Color2(content_text4));
document.querySelector('html').style.setProperty("--content-color-text-dark-rgb", Color2(content_text5));


/** Button Color **/
/* Set Vars */
var button_color = getComputedStyle(document.querySelector('html')).getPropertyValue("--button-color");
var buttoncolor1 = ColorTest(button_color,false);
var buttoncolor2 = ColorTest(button_color,true);
var buttoncolor2t = ColorTest(buttoncolor2,false);
var buttoncolor3 = SuperColorTest(button_color); // Scrollbar


if (isLightColor(button_color)) {
document.querySelector('html').style.setProperty("--button-color-blend-light", button_color);
document.querySelector('html').style.setProperty("--button-color-blend", buttoncolor1);
} else {
document.querySelector('html').style.setProperty("--button-color-blend-light", buttoncolor1);
document.querySelector('html').style.setProperty("--button-color-blend", button_color);
}

buttonmixl = ColorTestTwin(content_color,button_color,0.8,'rgb');
buttonmix = ColorTestTwin(buttonmixl,button_color,0.8,'rgb');


/* Set Values */
document.querySelector('html').style.setProperty("--button-color-dark", buttoncolor1);
document.querySelector('html').style.setProperty("--button-color-dark-super", buttoncolor3); // Scrollbar
document.querySelector('html').style.setProperty("--button-color-text", buttoncolor2);
document.querySelector('html').style.setProperty("--button-color-text-dark", buttoncolor2t);
document.querySelector('html').style.setProperty("--button-color-content-bg-mix-light", buttonmixl);
document.querySelector('html').style.setProperty("--button-color-content-bg-mix", buttonmix);
// RGB
document.querySelector('html').style.setProperty("--button-color-rgb", Color2(button_color));
document.querySelector('html').style.setProperty("--button-color-dark-rgb", Color2(buttoncolor1));
document.querySelector('html').style.setProperty("--button-color-dark-super-rgb", Color2(buttoncolor3));
document.querySelector('html').style.setProperty("--button-color-text-rgb", Color2(buttoncolor2));
document.querySelector('html').style.setProperty("--button-color-text-dark-rgb", Color2(buttoncolor2t));
document.querySelector('html').style.setProperty("--button-color-blend-light-rgb", Color2( getComputedStyle(document.querySelector('html')).getPropertyValue("--button-color-blend-light") ));
document.querySelector('html').style.setProperty("--button-color-blend-rgb", Color2( getComputedStyle(document.querySelector('html')).getPropertyValue("--button-color-blend") ));


/** Header Color **/
/* Set Vars */
var header_color = getComputedStyle(document.querySelector('html')).getPropertyValue("--community-header-bg");
var headercolor1 = ColorTest(header_color,false);
var headercolor2 = ColorTest(header_color,true);
var headercolor2t = ColorTest(headercolor2,false);
var headercolor3 = SuperColorTest(header_color); // Scrollbar

if (isLightColor(header_color)) {
document.querySelector('html').style.setProperty("--community-header-bg-blend-light", header_color);
document.querySelector('html').style.setProperty("--community-header-bg-blend", headercolor1);
} else {
document.querySelector('html').style.setProperty("--community-header-bg-blend-light", headercolor1);
document.querySelector('html').style.setProperty("--community-header-bg-blend", header_color);
}

headermixl = ColorTestTwin(content_color,header_color,0.8,'rgb');
headermix = ColorTestTwin(headermixl,header_color,0.8,'rgb');



/* Set Values */
document.querySelector('html').style.setProperty("--community-header-dark", headercolor1);
document.querySelector('html').style.setProperty("--community-header-dark-super", headercolor3); // Scrollbar
document.querySelector('html').style.setProperty("--community-header-text", headercolor2);
document.querySelector('html').style.setProperty("--community-header-text-dark", headercolor2t);
document.querySelector('html').style.setProperty("--community-header-bg-content-bg-mix-light", headermixl);
document.querySelector('html').style.setProperty("--community-header-bg-content-bg-mix", headermix);
// RGB
document.querySelector('html').style.setProperty("--community-header-bg-rgb", Color2(header_color));
document.querySelector('html').style.setProperty("--community-header-dark-rgb", Color2(headercolor1));
document.querySelector('html').style.setProperty("--community-header-dark-super-rgb", Color2(headercolor3));
document.querySelector('html').style.setProperty("--community-header-text-rgb", Color2(headercolor2));
document.querySelector('html').style.setProperty("--community-header-text-dark-rgb", Color2(headercolor2t));
document.querySelector('html').style.setProperty("--community-header-bg-blend-light-rgb", Color2( getComputedStyle(document.querySelector('html')).getPropertyValue("--community-header-bg-blend-light") ));
document.querySelector('html').style.setProperty("--community-header-bg-blend-rgb", Color2( getComputedStyle(document.querySelector('html')).getPropertyValue("--community-header-bg-blend") ));


/** Link Color **/
/* Set Vars */
var link_color = getComputedStyle(document.querySelector('html')).getPropertyValue("--link-color");
var linkcolor1 = ColorTest(link_color,false);
var linkcolor2 = ColorTest(link_color,true);
var linkcolor2t = ColorTest(linkcolor2,false);
var linkcolor3 = SuperColorTest(link_color); // Scrollbar



if (isLightColor(link_color)) {
document.querySelector('html').style.setProperty("--link-color-blend-light", link_color);
document.querySelector('html').style.setProperty("--link-color-blend", linkcolor1);
} else {
document.querySelector('html').style.setProperty("--link-color-blend-light", linkcolor1);
document.querySelector('html').style.setProperty("--link-color-blend", link_color);
}

linkmixl = ColorTestTwin(content_color,link_color,0.8,'rgb');
linkmix = ColorTestTwin(linkmixl,link_color,0.8,'rgb');


/* Set Values */
document.querySelector('html').style.setProperty("--link-color-dark", linkcolor1);
document.querySelector('html').style.setProperty("--link-color-dark-super", linkcolor3); // Scrollbar
document.querySelector('html').style.setProperty("--link-color-text", linkcolor2);
document.querySelector('html').style.setProperty("--link-color-text-dark", linkcolor2t);
document.querySelector('html').style.setProperty("--link-color-content-bg-mix-light", linkmixl);
document.querySelector('html').style.setProperty("--link-color-content-bg-mix", linkmix);
// RGB
document.querySelector('html').style.setProperty("--link-color-rgb", Color2(link_color));
document.querySelector('html').style.setProperty("--link-color-dark-rgb", Color2(linkcolor1));
document.querySelector('html').style.setProperty("--link-color-dark-super-rgb", Color2(linkcolor3));
document.querySelector('html').style.setProperty("--link-color-text-rgb", Color2(linkcolor2));
document.querySelector('html').style.setProperty("--link-color-text-dark-rgb", Color2(linkcolor2t));
document.querySelector('html').style.setProperty("--link-color-blend-light-rgb", Color2( getComputedStyle(document.querySelector('html')).getPropertyValue("--link-color-blend-light") ));
document.querySelector('html').style.setProperty("--link-color-blend-rgb", Color2( getComputedStyle(document.querySelector('html')).getPropertyValue("--link-color-blend") ));

/** Content Border **/
/* Set Vars */
if ((getComputedStyle(document.querySelector('html')).getPropertyValue("--content-border") === 'auto') && !($("html.contrast.win10").length)  ) {
	var border_color =	getComputedStyle(document.querySelector('body')).getPropertyValue("--content-border");
} else {
	var border_color =	getComputedStyle(document.querySelector('html')).getPropertyValue("--content-border");
}

var bordercolor1 = ColorTest(border_color,false);
var bordercolor3 = SuperColorTest(border_color); // Scrollbar
var bordercolor2 = ColorTest(border_color,true);
var bordercolor2t = ColorTest(bordercolor2,false);


if (isLightColor(border_color)) {
document.querySelector('html').style.setProperty("--content-border-blend-light", border_color);
document.querySelector('html').style.setProperty("--content-border-blend", bordercolor1);
} else {
document.querySelector('html').style.setProperty("--content-border-blend-light", bordercolor1);
document.querySelector('html').style.setProperty("--content-border-blend", border_color);
}

bordermixl = ColorTestTwin(content_color,border_color,0.8,'rgb');
bordermix = ColorTestTwin(bordermixl,border_color,0.8,'rgb');

/* Set Values */
document.querySelector('html').style.setProperty("--content-border-dark", bordercolor1);
document.querySelector('html').style.setProperty("--content-border-dark-super", bordercolor3); // Scrollbar
document.querySelector('html').style.setProperty("--content-border-text", bordercolor2);
document.querySelector('html').style.setProperty("--content-border-text-dark", bordercolor2t);
document.querySelector('html').style.setProperty("--content-border-content-bg-mix-light", bordermixl);
document.querySelector('html').style.setProperty("--content-border-content-bg-mix", bordermix);
// RGB
document.querySelector('html').style.setProperty("--content-border-rgb", Color2(border_color));
document.querySelector('html').style.setProperty("--content-border-dark-rgb", Color2(bordercolor1));
document.querySelector('html').style.setProperty("--content-border-dark-super-rgb", Color2(bordercolor3));
document.querySelector('html').style.setProperty("--content-border-text-rgb", Color2(bordercolor2));
document.querySelector('html').style.setProperty("--content-border-text-dark-rgb", Color2(bordercolor2t));
document.querySelector('html').style.setProperty("--content-border-blend-light-rgb", Color2( getComputedStyle(document.querySelector('html')).getPropertyValue("--content-border-blend-light") ));
document.querySelector('html').style.setProperty("--content-border-blend-rgb", Color2( getComputedStyle(document.querySelector('html')).getPropertyValue("--content-border-blend") ));


/** Body Bg **/
/* Set Vars */
var head_color =	getComputedStyle(document.querySelector('html')).getPropertyValue("--background-color");
var headcolor1 = ColorTest(head_color,false);
var headcolor3 = SuperColorTest(head_color); // Scrollbar
var headcolor2 = ColorTest(head_color,true);
var headcolor2t = ColorTest(headcolor2,false);

if (isLightColor(head_color)) {
document.querySelector('html').style.setProperty("--background-color-blend-light", head_color);
document.querySelector('html').style.setProperty("--background-color-blend", headcolor1);
} else {
document.querySelector('html').style.setProperty("--background-color-blend-light", headcolor1);
document.querySelector('html').style.setProperty("--background-color-blend", head_color);
}

headmixl = ColorTestTwin(content_color,head_color,0.8,'rgb');
headmix = ColorTestTwin(headmixl,head_color,0.8,'rgb');

/* Set Values */
document.querySelector('html').style.setProperty("--background-color-dark", headcolor1);
document.querySelector('html').style.setProperty("--background-color-dark-super", headcolor3); // Scrollbar
document.querySelector('html').style.setProperty("--background-color-text", headcolor2);
document.querySelector('html').style.setProperty("--background-color-text-dark", headcolor2t);
document.querySelector('html').style.setProperty("--background-color-content-bg-mix-light", headmixl);
document.querySelector('html').style.setProperty("--background-color-content-bg-mix", headmix);
// RGB
document.querySelector('html').style.setProperty("--background-color-rgb", Color2(head_color));
document.querySelector('html').style.setProperty("--background-color-dark-rgb", Color2(headcolor1));
document.querySelector('html').style.setProperty("--background-color-dark-super-rgb", Color2(headcolor3));
document.querySelector('html').style.setProperty("--background-color-text-rgb", Color2(headcolor2));
document.querySelector('html').style.setProperty("--background-color-text-dark-rgb", Color2(headcolor2t));
document.querySelector('html').style.setProperty("--background-color-blend-light-rgb", Color2( getComputedStyle(document.querySelector('html')).getPropertyValue("--background-color-blend-light") ));
document.querySelector('html').style.setProperty("--background-color-blend-rgb", Color2( getComputedStyle(document.querySelector('html')).getPropertyValue("--background-color-blend") ));

/* Overlay Bg (For Adatpive mode) */
if ((getComputedStyle(document.querySelector('html')).getPropertyValue("--background-overlay") !== 'auto') && !($("html.contrast.win10").length)  ) {
	var head_overlay =	'inherit' ;
} else {
	var head_overlay =	getComputedStyle(document.querySelector('html')).getPropertyValue("--background-color");
}

document.querySelector('body').style.setProperty("--background-overlay", head_overlay);
// RGB
document.querySelector('html').style.setProperty("--background-overlay-rgb", Color2( getComputedStyle(document.querySelector('body')).getPropertyValue("--background-overlay") ));

/* Info, Success, Warning and Alert color mixes */
// Info
infomixl = ColorTestTwin(content_color,'#575859',0.8,'rgb');
infomix = ColorTestTwin(infomixl,'#575859',0.8,'rgb');
document.querySelector('html').style.setProperty("--info-color-content-bg-mix-light", infomixl);
document.querySelector('html').style.setProperty("--info-color-content-bg-mix", infomix);
// Success
successmixl = ColorTestTwin(content_color,'#14866d',0.8,'rgb');
successmix = ColorTestTwin(successmixl,'#14866d',0.8,'rgb');
document.querySelector('html').style.setProperty("--success-color-content-bg-mix-light", successmixl);
document.querySelector('html').style.setProperty("--success-color-content-bg-mix", successmix);
// Wanring
warningmixl = ColorTestTwin(content_color,'#ffcc33',0.8,'rgb');
warningmix = ColorTestTwin(warningmixl,'#ffcc33',0.8,'rgb');
document.querySelector('html').style.setProperty("--warning-color-content-bg-mix-light", warningmixl);
document.querySelector('html').style.setProperty("--warning-color-content-bg-mix", warningmix);
// Alert
alertmixl = ColorTestTwin(content_color,'#dd3333',0.8,'rgb');
alertmix = ColorTestTwin(alertmixl,'#dd3333',0.8,'rgb');
document.querySelector('html').style.setProperty("--alert-color-content-bg-mix-light", alertmixl);
document.querySelector('html').style.setProperty("--alert-color-content-bg-mix", alertmix);




/* Emphasis Themes */
var emphasiscolor = chroma.mix(content_color, link_color, MW18HoverThreshold*2.5);
var emphasiscolor2 = chroma.mix(border_color, button_color, MW18HoverThreshold*2.5);
document.querySelector('html').style.setProperty("--emphasis-bg", emphasiscolor);
document.querySelector('html').style.setProperty("--accent-bg", emphasiscolor2);
// RGB
document.querySelector('html').style.setProperty("--emphasis-bg-rgb", Color2(emphasiscolor));
document.querySelector('html').style.setProperty("--accent-bg-rgb", Color2(emphasiscolor2));

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
		if ((getComputedStyle(document.querySelector('html')).getPropertyValue("--background-overlay") === 'auto') && !($("html.contrast.win10").length)  ) {
				$("body").attr('background-overlay-auto', 'true');
		} else {
				$("body").attr('background-overlay-auto', 'false');
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
	ColorUpdate(false);
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
	ColorUpdate(true);
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
	ColorUpdate(true);
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
	ColorUpdate(true);
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
	ColorUpdate(true);
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
}

function UpdateFont() {
var x = $('input.font_2nd').val();
	if (x=="") {
		$("style.designer-style.theme-Miscellaneous").append(
		'html {' +
		'--custom-secondary-font:""!important;' +
		'}'
		);	
		
	} else {
		$("style.designer-style.theme-Miscellaneous").append(
		'html {' +
		'--custom-secondary-font:' + x + '!important;' +
		'}'
		);	
	}
}

function UpdateButtonRadi() {
var x = $('input.button_radi').val();
	if (x=="0") {
		$("style.designer-style.theme-Miscellaneous").append(
		'html {' +
		'--border-radius:0!important;' +
		'}'
		);	
		
	} else {
		$("style.designer-style.theme-Miscellaneous").append(
		'html {' +
		'--border-radius:' + x + 'px!important;' +
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