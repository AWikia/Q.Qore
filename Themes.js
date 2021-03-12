window.MW18auto = true;
window.MW18autoDark = false;
window.MW18darkmode = false;
window.MW18LightThreshold = 50;
window.MW18HoverThreshold = 0.25;

(function () {
document.querySelector('html').className += " theme-A"; // We begin with the first theme selected
ColorUpdate(true);
	if ( ($("body.mpisto-2018").length) || ($("body.mpisto-2018-mobile").length)) {
		$("head").append(
		'<meta name="theme-color" content="' + chroma(getComputedStyle(document.querySelector('html')).getPropertyValue("--emphasis-bg")) + '">' +
		'<meta name="color-scheme" content="light dark">' +
		'<link rel="manifest" href="manifest.json" crossorigin="use-credentials">' +
		'<link rel="shortcut icon href="favicon.ico">' +
		'<link rel="icon href="favicon.ico">' +
		'<link rel="favicon href="favicon.ico">'
		);	
	}
	if ($("body.options").length) {
		UpdateSet()
		CompileRecColors();
	}
		$("head").append(
		'<meta name="theme-color" content="' + chroma(getComputedStyle(document.querySelector('html')).getPropertyValue("--emphasis-bg")) + '">' +
		'<meta name="color-scheme" content="light dark">' +
		'<link rel="manifest" href="manifest.json" crossorigin="use-credentials">' +
		'<link rel="shortcut icon href="Icons/favicon.ico">' +
		'<link rel="shortcut icon href="Icons/favicon.ico">'
		);	
		$('body').attr("cursor", "mpisto");
		CursorT('auto');
		colortheme('system-a');
		SocialCompile();
		ManagerRows(); // For Task Manager Only
		
		
})();


function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

/* Changes Sitename */
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
	Called on body element only */
function CheckTheme() {
/* Wiki theme */
 if (window.matchMedia('(prefers-color-scheme: dark)'))  {
	if ($('body').attr("wikitheme") === 'system-a')  {
		colortheme('system-a')
	}
	if ($('body').attr("wikitheme") === 'system-ar')  {
		colortheme('system-ar')
	}
	if ($('body').attr("wikitheme") === 'system')  {
		colortheme('system')
	}
	if ($('body').attr("wikitheme") === 'system-r')  {
		colortheme('system-r')
	}
 }

/* Top bar for Mobile Devices */
if ($("html.contrast").length) {
	$('meta[name*="theme-color"]').attr("content", chroma(getComputedStyle(document.querySelector('html')).getPropertyValue("--dropdown-bg")));
} else if ($("html.basic").length) {
	$('meta[name*="theme-color"]').attr("content", chroma('rgb(' + getComputedStyle(document.querySelector('html')).getPropertyValue("--community-header-bg") + ')'));

} else {
	$('meta[name*="theme-color"]').attr("content", chroma(getComputedStyle(document.querySelector('html')).getPropertyValue("--emphasis-bg")));
/*
	if ($(".headroom--not-top").length) {
		$('meta[name*="theme-color"]').attr("content", chroma(getComputedStyle(document.querySelector('body')).getPropertyValue("--accent-bg")));
	} else {
		$('meta[name*="theme-color"]').attr("content", chroma(getComputedStyle(document.querySelector('body')).getPropertyValue("--emphasis-bg")));
	}
*/
}

ManagerRows();

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


/* Changes Wiki theme style
   Supported values: auto, auto-r, light, dark, system-a, system-ar, system, system-r */
function colortheme(theme) {
    var body_bg =	getComputedStyle(document.querySelector('html')).getPropertyValue("--content-bg");
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
	ColorUpdate(false);

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
/* Changes body background image with input */
function UploadPicture1B(image="") {
	if (image==="") {
		img=prompt("Set Background Image (Leave empty for imageless)", "");
	} else {
		img=image;
	}
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
// var x = chroma.random()
	var Colors = ['000000','3a3a3a','bfbfbf','e6e6e6','ffffff','ff0000','00ff00','0000ff','ffff00','ff00ff','00ffff']
 var x = '#' + Colors[getRandomInt(Colors.length)]
$('input[type="range"][name="contentcolor"].red').val(chroma(x).get('rgb.r') );
$('input[type="range"][name="contentcolor"].green').val(chroma(x).get('rgb.g') );
$('input[type="range"][name="contentcolor"].blue').val(chroma(x).get('rgb.b') );

UpdateValue()
}

function RandomColor5() {
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
	checkon = document.querySelector('input#ThmAdpt').checked
	document.querySelector('input#ThmAdpt').checked = (getRandomInt(2) === 0)
	if (checkon != document.querySelector('input#ThmAdpt').checked) {
	ToggleAdapt();
	}
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
		var theme2= $('select.preset_theme').val();
	} else {
		var theme2= theme;
	}
	var body_bg=[
				'BACDD8', // Oasis
				'2B54B5', // Sapphire
				'003816', // Jade
				'000000', // Babygirl
				'BDEAFD', // Sky
				'1A1A1A', // Carbon
				'000000', // Moonlight
				'525833', // Rockgarden
				'AD3479', // Oppulence
				'303641', // Bluesteel
				'191919', // Obeession
				'F8E9AE', // Creamsicle
				'060606', // Plated
				'97E4FE', // Beach
				'000000', // Police
				'353637', // Dragonstrip
				'484534', // Aliencrate
				][theme2];
	var body_image=[
				'Empty.png',				 // Oasis
				'Preset Themes/Theme01.png', // Sapphire
				'Empty.png',				 // Jade
				'Preset Themes/Theme03.jpg', // Babygirl
				'Preset Themes/Theme04.png', // Sky
				'Preset Themes/Theme05.png', // Carbon
				'Preset Themes/Theme06.jpg', // Moonlight
				'Preset Themes/Theme07.jpg', // Rockgarden
				'Preset Themes/Theme08.png', // Oppulence
				'Preset Themes/Theme09.jpg', // Bluesteel
				'Preset Themes/Theme10.jpg', // Obeession
				'Preset Themes/Theme11.jpg', // Creamsicle
				'Preset Themes/Theme12.jpg', // Plated
				'Empty.png', 				 // Beach
				'Preset Themes/Theme14.jpg', // Police
				'Preset Themes/Theme15.jpg', // Dragonstrip
				'Preset Themes/Theme16.jpg', // Aliencrate
				][theme2];
	var page_bg=[
				'FFFFFF', // Oasis
				'FFFFFF', // Sapphire
				'FFFFFF', // Jade
				'FFFFFF', // Babygirl
				'DEF4FE', // Sky
				'474646', // Carbon
				'CCD9F9', // Moonlight
				'DFDBC3', // Rockgarden
				'FFFFFF', // Oppulence
				'FFFFFF', // Bluesteel
				'1C0400', // Obeession
				'FBE7B5', // Creamsicle
				'474646', // Plated
				'FFFFFF', // Beach
				'0F142F', // Police
				'0C0C0C', // Dragonstrip
				'DAD5CB', // Aliencrate
				][theme2];
	var button_bg=[
				'006CB0', // Oasis
				'0038D8', // Sapphire
				'25883D', // Jade
				'6F027C', // Babygirl
				'F9CE3A', // Sky
				'012E59', // Carbon
				'6F027C', // Moonlight
				'1F5D04', // Rockgarden
				'DE1C4E', // Oppulence
				'0A3073', // Bluesteel
				'891100', // Obeession
				'FE7E03', // Creamsicle
				'092F71', // Plated
				'C2D04D', // Beach
				'1A52AC', // Police
				'30A900', // Dragonstrip
				'653F03', // Aliencrate
				][theme2];
	var link_bg=[
				'006CB0', // Oasis
				'0148C2', // Sapphire
				'2B54B5', // Jade
				'6F027C', // Babygirl
				'285BAF', // Sky
				'70B8FF', // Carbon
				'6F027C', // Moonlight
				'1F5D04', // Rockgarden
				'810484', // Oppulence
				'0A3073', // Bluesteel
				'F97EC4', // Obeession
				'AF4200', // Creamsicle
				'FFD500', // Plated
				'FE7801', // Beach
				'1A52AC', // Police
				'FFF000', // Dragonstrip
				'02899D', // Aliencrate
				][theme2];
	/* Change Colors */
	PickColor1(body_bg);
	PickColor8(body_bg);
	UploadPicture1B(body_image);
	PickColor2(button_bg);
	PickColor3(page_bg);
	PickColor6(link_bg);
	PickColor7(button_bg);
	/* Make theme adaptive, if it isn't */
	checkon = document.querySelector('input#ThmAdpt').checked
	document.querySelector('input#ThmAdpt').checked = true;
	if (checkon != document.querySelector('input#ThmAdpt').checked) {
	ToggleAdapt();
	}

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
	var x= prompt("Header Background Color", chroma('rgb(' + getComputedStyle(document.querySelector('html')).getPropertyValue("--community-header-bg") + ')'));
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
	var x= prompt("Page Text Color", chroma(getComputedStyle(document.querySelector('html')).getPropertyValue("--content-color")));
} else {
	var x=color;
}

$('input[type="range"][name="contentcolor"].red').val(chroma(x).get('rgb.r') );
$('input[type="range"][name="contentcolor"].green').val(chroma(x).get('rgb.g') );
$('input[type="range"][name="contentcolor"].blue').val(chroma(x).get('rgb.b') );

UpdateValue()
}

function PickColor5(color="") {
if (color==="") {
	var x= prompt("Page Border Color", chroma(getComputedStyle(document.querySelector('html')).getPropertyValue("--content-border")));
} else {
	var x=color;
}

$('input[type="range"][name="border"].red').val(chroma(x).get('rgb.r') );
$('input[type="range"][name="border"].green').val(chroma(x).get('rgb.g') );
$('input[type="range"][name="border"].blue').val(chroma(x).get('rgb.b') );

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
	var x= prompt("Body Overlay Color", chroma(getComputedStyle(document.querySelector('html')).getPropertyValue("--background-overlay")));
} else {
	var x=color;
}

$('input[type="range"][name="bgo"].red').val(chroma(x).get('rgb.r'));
$('input[type="range"][name="bgo"].green').val( chroma(x).get('rgb.g'));
$('input[type="range"][name="bgo"].blue').val( chroma(x).get('rgb.b'));

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
		/* Background Overlay */
		$('input[type="range"][name="bgo"].red').val(chroma(getComputedStyle(document.querySelector('html')).getPropertyValue("--background-overlay")).get('rgb.r') );
		$('input[type="range"][name="bgo"].green').val( chroma(getComputedStyle(document.querySelector('html')).getPropertyValue("--background-overlay")).get('rgb.g') );
		$('input[type="range"][name="bgo"].blue').val( chroma(getComputedStyle(document.querySelector('html')).getPropertyValue("--background-overlay")).get('rgb.b') );
	}
}



/* Updates all 8 required color variables for each theme to the values of the sliders */
function UpdateValue() {
	var linkcolor1final = $('input[type="range"][name="linkcolor"].red').val() + ',' + $('input[type="range"][name="linkcolor"].green').val() + ',' + $('input[type="range"][name="linkcolor"].blue').val(); ; 
	var headercolorfinal = $('input[type="range"][name="header"].red').val() + ',' + $('input[type="range"][name="header"].green').val() + ',' + $('input[type="range"][name="header"].blue').val(); 


/* Processing */
	if ($("html.theme-A").length) {
		$("style.designer-style.theme-A").append(
		'.theme-A:not(.win10) {' +
		'--background-color:' + chroma('rgb(' + $('input[type="range"][name="bg"].red').val() + ',' + $('input[type="range"][name="bg"].green').val() + ',' + $('input[type="range"][name="bg"].blue').val() + ')') + '!important;' +
		'--background-overlay:' + chroma('rgb(' + $('input[type="range"][name="bgo"].red').val() + ',' + $('input[type="range"][name="bgo"].green').val() + ',' + $('input[type="range"][name="bgo"].blue').val() + ')') + '!important;' +
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
		'--background-overlay:' + chroma('rgb(' + $('input[type="range"][name="bgo"].red').val() + ',' + $('input[type="range"][name="bgo"].green').val() + ',' + $('input[type="range"][name="bgo"].blue').val() + ')') + '!important;' +
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
		'--background-overlay:' + chroma('rgb(' + $('input[type="range"][name="bgo"].red').val() + ',' + $('input[type="range"][name="bgo"].green').val() + ',' + $('input[type="range"][name="bgo"].blue').val() + ')') + '!important;' +
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
		'--background-overlay:' + chroma('rgb(' + $('input[type="range"][name="bgo"].red').val() + ',' + $('input[type="range"][name="bgo"].green').val() + ',' + $('input[type="range"][name="bgo"].blue').val() + ')') + '!important;' +
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
	ColorUpdate(true);
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
	ColorUpdate(true);
}
}


function ResetThemeB() {
if (confirm('Are you sure you want to reset this theme to the pre-set ones? This action cannot be undone') === true) {
		$("style.designer-style.theme-B").text('/* This CSS left intentionally blank */');	
	ColorUpdate(true);
}
}

function ResetThemeC() {
if (confirm('Are you sure you want to reset this theme to the pre-set ones? This action cannot be undone') === true) {
		$("style.designer-style.theme-C").text('/* This CSS left intentionally blank */');	
	ColorUpdate(true);
}
}

function ResetThemeD() {
if (confirm('Are you sure you want to reset this theme to the pre-set ones? This action cannot be undone') === true) {
		$("style.designer-style.theme-D").text('/* This CSS left intentionally blank */');	
	ColorUpdate(true);
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
function ColorTest(color,text=false) {

	if (isLightColor(color)) {
		if (text === true) {
			return '#000000';
		} else {
			return chroma.mix(color,'black',MW18HoverThreshold, 'hsl');
		}
	} else {
		if (text === true) {
			return '#ffffff';
		} else {
			return chroma.mix(color,'white',MW18HoverThreshold, 'hsl');
		}
	}


}


function SuperColorTest(color) {
	if (isLightColor(color)) {
		var mix = chroma.mix(color,'black',MW18HoverThreshold, 'hsl');
		return chroma.mix(mix,'black',MW18HoverThreshold, 'hsl');
	} else {
		var mix = chroma.mix(color,'white',MW18HoverThreshold, 'hsl');
		return chroma.mix(mix,'white',MW18HoverThreshold, 'hsl');
	}
}


// Only used for link and header colors
function ColorTest2(color,text=false) {

	if (text === true) {
		if (isLightColor(color)) {
			return '0,0,0';
		} else {
			return '255,255,255';
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

function isLightColor(color) {
	return ((chroma(color).get('lab.l')) > window.MW18LightThreshold);
}

function isSuperLightColor(color) {
	return ((chroma(color).get('lab.l')) > window.MW18LightThreshold*1.4);
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
	  var data = '<button class="wds-button wds-is-square color-button" onclick="PickColor1(' + "'#" + color + "'" + ')"> <div style="border:1px solid; width:inherit; height:inherit; pointer-events:none; border-radius:50%; background-color:' + "#" +  color + ';"></div> </button>'
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
	  var data = '<button class="wds-button wds-is-square color-button" onclick="PickColor8(' + "'#" + color + "'" + ')"> <div style="border:1px solid; width:inherit; height:inherit; pointer-events:none; border-radius:50%; background-color:' + "#" +  color + ';"></div> </button>'
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
	  var data = '<button class="wds-button wds-is-square color-button" onclick="PickColor2(' + "'#" + color + "'" + ')"> <div style="border:1px solid; width:inherit; height:inherit; pointer-events:none; border-radius:50%; background-color:' + "#" +  color + ';"></div> </button>'
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
	  var data = '<button class="wds-button wds-is-square color-button" onclick="PickColor3(' + "'#" + color + "'" + ')"> <div style="border:1px solid; width:inherit; height:inherit; pointer-events:none; border-radius:50%; background-color:' + "#" +  color + ';"></div> </button>'
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
	  var data = '<button class="wds-button wds-is-square color-button" onclick="PickColor4(' + "'#" + color + "'" + ')"> <div style="border:1px solid; width:inherit; height:inherit; pointer-events:none; border-radius:50%; background-color:' + "#" +  color + ';"></div> </button>'
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
	  var data = '<button class="wds-button wds-is-square color-button" onclick="PickColor5(' + "'#" + color + "'" + ')"> <div style="border:1px solid; width:inherit; height:inherit; pointer-events:none; border-radius:50%; background-color:' + "#" +  color + ';"></div> </button>'
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
	  var data = '<button class="wds-button wds-is-square color-button" onclick="PickColor6(' + "'#" + color + "'" + ')"> <div style="border:1px solid; width:inherit; height:inherit; pointer-events:none; border-radius:50%; background-color:' + "#" +  color + ';"></div> </button>'
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
	  var data = '<button class="wds-button wds-is-square color-button" onclick="PickColor7(' + "'#" + color + "'" + ')"> <div style="border:1px solid; width:inherit; height:inherit; pointer-events:none; border-radius:50%; background-color:' + "#" +  color + ';"></div> </button>'
	  str = str + data;
	}

	$(".rec-colors-button").append(str);


}


function SocialCompile() {

	let str = '';
	var socialV = ['facebook','googleplus','line','linkedin','instagram','meneame','nk','odnoklassniki','reddit','tumblr','twitter','vkontakte','wykop','weibo','youtube','discord','fandom','asecure','steam','spotify','twitch','qore','mpisto','splashhol','gamepedia']
	var socialC = ['#3b5998','#dd4b39','#00c300','#0077b5','#e02d69','#ff6400','#4077a7','#f96900','#ff4500','#34465d','#1da1f2','#587ca3','#fb803f','#ff8140','#cd201f','#7289da','#00acac','#0009FF','#000','#1ed760','#563194','#ff4500','#18bbc5','#61448d','#f4801f']
	var socialAM = socialC.length

	for (let i = 0; i < socialAM; i++) {
	  var color = socialC[i];
	  var name = socialV[i];
	  var data = '.main .wds-button.wds-is-' + name + '-color{' +'--button-color:' + color + '!important;' + '--button-color-dark:' + ColorTest(color,false) + '!important;' + '--button-color-text:' + ColorTest(color,true) + '!important;' +'--content-border:' + color + '!important;' + '--content-border-dark:' + ColorTest(color,false) + '!important;' + '--content-border-text:' + ColorTest(color,true) + '!important;' +'--background-color:' + color + '!important;' + '--background-color-dark:' + ColorTest(color,false) + '!important;' + '--background-color-text:' + ColorTest(color,true) + '!important;' +'--link-color:' + Color2(color) + '!important;' + '--link-color-dark:' + ColorTest2(color,false) + '!important;' + '--link-color-text:' + ColorTest(color,true) + '!important;' + '}'
	  str = str + data;
	}

	$("head").append('<style>' + str + '</style>');

}

/* End Color Parsers */


/* Used to udpate all dynamical variables */
function ColorUpdate(refresh) {
/** Button Color **/
/* Set Vars */
var button_color = getComputedStyle(document.querySelector('html')).getPropertyValue("--button-color");
var buttoncolor1 = ColorTest(button_color,false);
var buttoncolor2 = ColorTest(button_color,true);
var buttoncolor3 = SuperColorTest(button_color); // Scrollbar


if (isLightColor(button_color)) {
document.querySelector('html').style.setProperty("--button-color-blend-light", button_color);
document.querySelector('html').style.setProperty("--button-color-blend", buttoncolor1);
} else {
document.querySelector('html').style.setProperty("--button-color-blend-light", buttoncolor1);
document.querySelector('html').style.setProperty("--button-color-blend", button_color);
}



/* Set Values */
document.querySelector('html').style.setProperty("--button-color-dark", buttoncolor1);
document.querySelector('html').style.setProperty("--button-color-dark-super", buttoncolor3); // Scrollbar
document.querySelector('html').style.setProperty("--button-color-text", buttoncolor2);


/** Header Color **/
/* Set Vars */
var header_color =	'rgb(' + getComputedStyle(document.querySelector('html')).getPropertyValue("--community-header-bg") + ')';
var headercolor1 = ColorTest2(header_color,false);
var headercolor2 = ColorTest2(header_color,true);
var headercolor3 = SuperColorTest2(header_color); // Scrollbar

if (isLightColor(header_color)) {
document.querySelector('html').style.setProperty("--community-header-bg-blend-light", getComputedStyle(document.querySelector('html')).getPropertyValue("--community-header-bg"));
document.querySelector('html').style.setProperty("--community-header-bg-blend", headercolor1);
} else {
document.querySelector('html').style.setProperty("--community-header-bg-blend-light", headercolor1);
document.querySelector('html').style.setProperty("--community-header-bg-blend", getComputedStyle(document.querySelector('html')).getPropertyValue("--community-header-bg"));
}



/* Set Values */
document.querySelector('html').style.setProperty("--community-header-dark", headercolor1);
document.querySelector('html').style.setProperty("--community-header-dark-super", headercolor3); // Scrollbar
document.querySelector('html').style.setProperty("--community-header-text", headercolor2);

/** Link Color **/
/* Set Vars */
var link_color = 'rgb(' + getComputedStyle(document.querySelector('html')).getPropertyValue("--link-color") + ')';
var linkcolor1 = ColorTest2(link_color,false);
var linkcolor2 = ColorTest(link_color,true);
var linkcolor3 = SuperColorTest2(link_color); // Scrollbar



if (isLightColor(link_color)) {
document.querySelector('html').style.setProperty("--link-color-blend-light", getComputedStyle(document.querySelector('html')).getPropertyValue("--link-color"));
document.querySelector('html').style.setProperty("--link-color-blend", linkcolor1);
} else {
document.querySelector('html').style.setProperty("--link-color-blend-light", linkcolor1);
document.querySelector('html').style.setProperty("--link-color-blend", getComputedStyle(document.querySelector('html')).getPropertyValue("--link-color"));
}



/* Set Values */
document.querySelector('html').style.setProperty("--link-color-dark", linkcolor1);
document.querySelector('html').style.setProperty("--link-color-dark-super", linkcolor3); // Scrollbar
document.querySelector('html').style.setProperty("--link-color-text", linkcolor2);


/** Page BG **/
/* Set Vars */
if ( (window.MW18darkmode === true) ) {
	var content_text =	getComputedStyle(document.querySelector('html')).getPropertyValue("--content-bg");
// Adaptive
	if (getComputedStyle(document.querySelector('html')).getPropertyValue("--adaptive-content-bg") === 'true') {
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

var content_text2 = ColorTest(content_text);
var content_text3 = SuperColorTest(content_text); // Scrollbar

if (isSuperLightColor(content_color)) {
	var dropdowncolor = 'white';
	if ((getComputedStyle(document.querySelector('html')).getPropertyValue("--adaptive-content-bg") === 'true') && !($("html.contrast.win10").length)  ) {
		var dropdowncolor2 = chroma.mix(content_color,'black',MW18HoverThreshold, 'hsl');
		var dropdowncolor3 = '#2e2e2e';	
	} else {
		var dropdowncolor2 = 'inherit';
		var dropdowncolor3 = 'inherit';
	}
	
} else if (isLightColor(content_color)) {
var dropdowncolor = chroma.mix(content_color,'black',MW18HoverThreshold, 'hsl');
	if ((getComputedStyle(document.querySelector('html')).getPropertyValue("--adaptive-content-bg") === 'true') && !($("html.contrast.win10").length)  ) {
		var dropdowncolor2 = chroma.mix(content_color,'black',MW18HoverThreshold*2, 'hsl');
		var dropdowncolor3 = '#2b2b2b';	
	} else {
		var dropdowncolor2 = 'inherit';
		var dropdowncolor3 = 'inherit';
	}

} else {
var dropdowncolor = chroma.mix(content_color,'white',MW18HoverThreshold, 'hsl');
	if ((getComputedStyle(document.querySelector('html')).getPropertyValue("--adaptive-content-bg") === 'true') && !($("html.contrast.win10").length)  ) {
		var dropdowncolor2 = chroma.mix(content_color,'white',MW18HoverThreshold*2, 'hsl');
		var dropdowncolor3 = '#e2e2e2';	
	} else {
		var dropdowncolor2 = 'inherit';
		var dropdowncolor3 = 'inherit';
	}

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


/** Content Border **/
/* Set Vars */
if ((getComputedStyle(document.querySelector('html')).getPropertyValue("--adaptive-content-bg") === 'true') && !($("html.contrast.win10").length)  ) {
	var border_color =	getComputedStyle(document.querySelector('body')).getPropertyValue("--content-border");
} else {
	var border_color =	getComputedStyle(document.querySelector('html')).getPropertyValue("--content-border");
}
var bordercolor1 = ColorTest(border_color,false);
var bordercolor3 = SuperColorTest(border_color); // Scrollbar
var bordercolor2 = ColorTest(border_color,true);

if (isLightColor(border_color)) {
document.querySelector('html').style.setProperty("--content-border-blend-light", border_color);
document.querySelector('html').style.setProperty("--content-border-blend", bordercolor1);
} else {
document.querySelector('html').style.setProperty("--content-border-blend-light", bordercolor1);
document.querySelector('html').style.setProperty("--content-border-blend", border_color);
}

/* Set Values */
document.querySelector('html').style.setProperty("--content-border-dark", bordercolor1);
document.querySelector('html').style.setProperty("--content-border-dark-super", bordercolor3); // Scrollbar
document.querySelector('html').style.setProperty("--content-border-text", bordercolor2);



/** Body Bg **/
/* Set Vars */
var head_color =	getComputedStyle(document.querySelector('html')).getPropertyValue("--background-color");
var headcolor1 = ColorTest(head_color,false);
var headcolor3 = SuperColorTest(head_color); // Scrollbar
var headcolor2 = ColorTest(head_color,true);

if (isLightColor(head_color)) {
document.querySelector('html').style.setProperty("--background-color-blend-light", head_color);
document.querySelector('html').style.setProperty("--background-color-blend", headcolor1);
} else {
document.querySelector('html').style.setProperty("--background-color-blend-light", headcolor1);
document.querySelector('html').style.setProperty("--background-color-blend", head_color);
}

/* Set Values */
document.querySelector('html').style.setProperty("--background-color-dark", headcolor1);
document.querySelector('html').style.setProperty("--background-color-dark-super", headcolor3); // Scrollbar
document.querySelector('html').style.setProperty("--background-color-text", headcolor2);


/* Emphasis Themes */
var emphasiscolor = chroma.mix(content_color, link_color, MW18HoverThreshold*2.5);
var emphasiscolor2 = chroma.mix(border_color, button_color, MW18HoverThreshold*2.5);
document.querySelector('html').style.setProperty("--emphasis-bg", emphasiscolor);
document.querySelector('html').style.setProperty("--accent-bg", emphasiscolor2);

if ($("html.contrast").length) {
	$('meta[name*="theme-color"]').attr("content", chroma(getComputedStyle(document.querySelector('html')).getPropertyValue("--dropdown-bg")));
} else {
	$('meta[name*="theme-color"]').attr("content", chroma(getComputedStyle(document.querySelector('html')).getPropertyValue("--emphasis-bg")));
/*
	if ($(".headroom--not-top").length) {
		$('meta[name*="theme-color"]').attr("content", chroma(getComputedStyle(document.querySelector('body')).getPropertyValue("--accent-bg")));
	} else {
		$('meta[name*="theme-color"]').attr("content", chroma(getComputedStyle(document.querySelector('body')).getPropertyValue("--emphasis-bg")));
	}
*/
}
CheckAdapt()
CheckBG()

/* Cursor Theme */
if (refresh === true) {
	colortheme($('body').attr("wikitheme"))
}
if (window.MW18auto === true) {
CursorT('auto');
}
if (window.MW18autoDark === true) {
CursorT('auto-r');
}
	if ($("body.options").length) {
		UpdateSet()
	}

}

function CheckAdapt() {
	if ($("body.options").length   && !($("html.contrast.win10").length) ) {
		if ((getComputedStyle(document.querySelector('html')).getPropertyValue("--adaptive-content-bg") === 'true') && !($("html.contrast.win10").length)  ) {
				document.querySelector('input#ThmAdpt').checked = true;
				$(".adapt-off").attr('disabled', 'true');
		} else {
				document.querySelector('input#ThmAdpt').checked = false;
				$(".adapt-off").removeAttr('disabled');
		}
	}
}

/* Different with the ToggleBG function, only one is present for all three */
function CheckBG() {
	if ($("body.options").length   && !($("html.contrast.win10").length) ) { // Don't run if not on Preferences Page
	/* BG */
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
	/* BG1 */
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
	/* BG2 */
		if ((getComputedStyle(document.querySelector('html')).getPropertyValue("--background-no-tiling") === 'true') && !($("html.contrast.win10").length)  ) {
				document.querySelector('input#BG2').checked = true;
		} else {
				document.querySelector('input#BG2').checked = false;
		}
	}
	$("body").attr('body-display', getComputedStyle(document.querySelector('html')).getPropertyValue("--body-display") );
	$("body").attr('body-no-tiling', getComputedStyle(document.querySelector('html')).getPropertyValue("--background-no-tiling") );
}

/* 
** BG  = Backgkround Body Display - body-display attribute is ued
** BG1 = Background Position - No body attribute is used
** BG2 = Background Tiling (Only on Legacy Background Display) - body-tiling attribute is used
*/

function ToggleBG() {
var modern = document.querySelector('input#BG_1');
var legacy = document.querySelector('input#BG_2');
	if (legacy.checked) {

	if ($("html.theme-A").length) {
		$("style.designer-style.theme-A").append(
		'.theme-A:not(.win10) {' +
		'--body-display:legacy!important;' +
		'}'
		);	
	}

	if ($("html.theme-B").length) {
		$("style.designer-style.theme-B").append(
		'.theme-B:not(.win10) {' +
		'--body-display:legacy!important;' +
		'}'
		);	
	}

	if ($("html.theme-C").length) {
		$("style.designer-style.theme-C").append(
		'.theme-C:not(.win10) {' +
		'--body-display:legacy!important;' +
		'}'
		);	
	}

	if ($("html.theme-D").length) {
		$("style.designer-style.theme-D").append(
		'.theme-D:not(.win10) {' +
		'--body-display:legacy!important;' +
		'}'
		);	
	}
//	console.log('Adaptive theme enabled. Content border and Content Color theming are now automatically calculated.');
	} else if (modern.checked) {

	if ($("html.theme-A").length) {
		$("style.designer-style.theme-A").append(
		'.theme-A:not(.win10) {' +
		'--body-display:modern!important;' +
		'}'
		);	
	}

	if ($("html.theme-B").length) {
		$("style.designer-style.theme-B").append(
		'.theme-B:not(.win10) {' +
		'--body-display:modern!important;' +
		'}'
		);	
	}

	if ($("html.theme-C").length) {
		$("style.designer-style.theme-C").append(
		'.theme-C:not(.win10) {' +
		'--body-display:modern!important;' +
		'}'
		);	
	}

	if ($("html.theme-D").length) {
		$("style.designer-style.theme-D").append(
		'.theme-D:not(.win10) {' +
		'--body-display:modern!important;' +
		'}'
		);	
	}
//	console.log('Adaptive theme disabled. Content border and Content Color theming are now manually chosen.');
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
		'.theme-A:not(.win10) {' +
		'--background-va:' + str + '!important;' +
		'}'
		);	
	}

	if ($("html.theme-B").length) {
		$("style.designer-style.theme-B").append(
		'.theme-B:not(.win10) {' +
		'--background-va:' + str + '!important;' +
		'}'
		);	
	}

	if ($("html.theme-C").length) {
		$("style.designer-style.theme-C").append(
		'.theme-C:not(.win10) {' +
		'--background-va:' + str + '!important;' +
		'}'
		);	
	}

	if ($("html.theme-D").length) {
		$("style.designer-style.theme-D").append(
		'.theme-D:not(.win10) {' +
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
		'.theme-A:not(.win10) {' +
		'--background-no-tiling:true!important;' +
		'}'
		);	
	}

	if ($("html.theme-B").length) {
		$("style.designer-style.theme-B").append(
		'.theme-B:not(.win10) {' +
		'--background-no-tiling:true!important;' +
		'}'
		);	
	}

	if ($("html.theme-C").length) {
		$("style.designer-style.theme-C").append(
		'.theme-C:not(.win10) {' +
		'--background-no-tiling:true!important;' +
		'}'
		);	
	}

	if ($("html.theme-D").length) {
		$("style.designer-style.theme-D").append(
		'.theme-D:not(.win10) {' +
		'--background-no-tiling:true!important;' +
		'}'
		);	
	}
	} else {

	if ($("html.theme-A").length) {
		$("style.designer-style.theme-A").append(
		'.theme-A:not(.win10) {' +
		'--background-no-tiling:false!important;' +
		'}'
		);	
	}

	if ($("html.theme-B").length) {
		$("style.designer-style.theme-B").append(
		'.theme-B:not(.win10) {' +
		'--background-no-tiling:false!important;' +
		'}'
		);	
	}

	if ($("html.theme-C").length) {
		$("style.designer-style.theme-C").append(
		'.theme-C:not(.win10) {' +
		'--background-no-tiling:false!important;' +
		'}'
		);	
	}

	if ($("html.theme-D").length) {
		$("style.designer-style.theme-D").append(
		'.theme-D:not(.win10) {' +
		'--background-no-tiling:false!important;' +
		'}'
		);	
	}
	}	
	ColorUpdate(true);
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

/* Remoes High Contrast */
function HCclear() {
    var x = document.querySelector('html');
        x.className = x.className.replace(" contrast", "");
        x.className = x.className.replace(" basic", "");
       
       
        x.className = x.className.replace(" win10", "");
		ColorUpdate(true);
		if ($("body.options").length) {
			$(".win10-off").removeAttr('disabled');
		}

}

/* Enables Super High Contrast */
function HCcustom0() {
    var x = document.querySelector('html');
    if (x.className.indexOf("contrast") == -1) {
        x.className += " contrast";
    }
    if (x.className.indexOf("win10") == -1) {
        x.className += " win10";
    }
        x.className = x.className.replace(" basic", "");
		ColorUpdate(true);
		if ($("body.options").length) {
			$(".win10-off").attr('disabled', 'true');
		}
}

/* Enables High Contrast */
function HCcustom() {
    var x = document.querySelector('html');
    if (x.className.indexOf("contrast") == -1) {
        x.className += " contrast";
    }
        x.className = x.className.replace(" win10", "");
        x.className = x.className.replace(" basic", "");
		ColorUpdate(true);
		if ($("body.options").length) {
			$(".win10-off").removeAttr('disabled');
		}

}

/* Enables Increased Contrast */
function HCcustom2() {
    var x = document.querySelector('html');
    if (x.className.indexOf("basic") == -1) {
        x.className += " basic";
    }
        x.className = x.className.replace(" contrast", "");
        x.className = x.className.replace(" win10", "");
		ColorUpdate(true);
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
		'--secondary-font:"Rubik", "Arimo", "Liberation Sans", var(--secondary-foreign-fonts)!important;' +
		'}'
		);	
		
	} else {
		$("style.designer-style.theme-Miscellaneous").append(
		'html {' +
		'--secondary-font:' + x + ', "Rubik", "Arimo", "Liberation Sans", var(--secondary-foreign-fonts)!important;' +
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

function UpdateColorThreshold() {
	var x = $('input.color_threshold').val();
	window.MW18LightThreshold = x;
	ColorUpdate(true);
	SocialCompile();
}

function UpdateHoverRation() {
	var x = $('input.hover_ration').val();
	window.MW18HoverThreshold = x * 0.005;
	ColorUpdate(true);
	SocialCompile();
}