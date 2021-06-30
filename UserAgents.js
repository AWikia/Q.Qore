/* Make SmartTVs recognize cursors */
if (navigator.userAgent.match("SmartTV")) {
document.getElementById("Handler").className += " smart"
}

if (navigator.userAgent.match("Macintosh")) {
document.getElementById("Handler").className += " osx"
}

if (navigator.userAgent.match("Linux")) {
document.getElementById("Handler").className += " xubuntu"
}

/* (navigator.userAgent.match("Trident")) {
document.getElementById("Handler").className += " explorer"
}
*/
//if (navigator.userAgent.match("Edge")) {
//document.getElementById("Handler").className += " edge"
//}

/* Mobile Only CSS */
if (navigator.userAgent.match("Mobile")) {
document.getElementById("Handler").className += " phone"
}

/* CSS for App */
if (navigator.userAgent.match("MW18")) {
document.getElementById("Handler").className += " mpisto-servers"
}

// Some old Fox Versions
window.disco=false
window.oldSafari=false
window.disco=false

if ( (navigator.userAgent.match("Safari/")) && !( (navigator.userAgent.match("Chrome/")) || (navigator.userAgent.match("YNGT")) ) ) {
// window.disco= (window.disco || (navigator.userAgent.match("Version/1\\.")) || (navigator.userAgent.match("Version/2\\.")) || (navigator.userAgent.match("Version/3\\.")) || (navigator.userAgent.match("Version/4\\.")) || (navigator.userAgent.match("Version/5\\.")) || (navigator.userAgent.match("Version/6\\.")) || (navigator.userAgent.match("Version/7\\.")) || (navigator.userAgent.match("Version/8\\.")) || (navigator.userAgent.match("Version/9\\.")) || (navigator.userAgent.match("Version/10\\.")) )
window.oldSafari=( (navigator.userAgent.match("Version/1\\.")) || (navigator.userAgent.match("Version/2\\.")) || (navigator.userAgent.match("Version/3\\.")) || (navigator.userAgent.match("Version/4\\.")) || (navigator.userAgent.match("Version/5\\.")) || (navigator.userAgent.match("Version/6\\.")) || (navigator.userAgent.match("Version/7\\.")) || (navigator.userAgent.match("Version/8\\.")) || (navigator.userAgent.match("Version/9\\.")) || (navigator.userAgent.match("Version/10\\.")) )
}

window.oldfox = ( (navigator.userAgent.match("Firefox/21\\.")) || (navigator.userAgent.match("Firefox/20\\.")) || (navigator.userAgent.match("Firefox/19\\.")) || (navigator.userAgent.match("Firefox/18\\.")) || (navigator.userAgent.match("Firefox/17\\.")) || (navigator.userAgent.match("Firefox/16\\.")) || (navigator.userAgent.match("Firefox/15\\.")) || (navigator.userAgent.match("Firefox/14\\.")) || (navigator.userAgent.match("Firefox/13\\.")) || (navigator.userAgent.match("Firefox/12\\.")) || (navigator.userAgent.match("Firefox/11\\.")) || (navigator.userAgent.match("Firefox/10\\.")) || (navigator.userAgent.match("Firefox/9\\.")) || (navigator.userAgent.match("Firefox/8\\.")) || (navigator.userAgent.match("Firefox/7\\.")) || (navigator.userAgent.match("Firefox/6\\.")) || (navigator.userAgent.match("Firefox/5\\.")) || (navigator.userAgent.match("Firefox/4\\.")) || (navigator.userAgent.match("Firefox/3\\.")) || (navigator.userAgent.match("Firefox/2\\.")) || (navigator.userAgent.match("Firefox/1\\.")) || (navigator.userAgent.match("Firefox/31\\.")) || (navigator.userAgent.match("Firefox/32\\.")) || (navigator.userAgent.match("Firefox/33\\.")) || (navigator.userAgent.match("Firefox/34\\.")) || (navigator.userAgent.match("Firefox/35\\.")) || (navigator.userAgent.match("Firefox/36\\.")) || (navigator.userAgent.match("Firefox/37\\.")) || (navigator.userAgent.match("Firefox/38\\.")) || (navigator.userAgent.match("Firefox/39\\.")) || (navigator.userAgent.match("Firefox/40\\.")) || (navigator.userAgent.match("Firefox/41\\.")) || (navigator.userAgent.match("Firefox/42\\.")) || (navigator.userAgent.match("Firefox/43\\.")) || (navigator.userAgent.match("Firefox/44\\.")) || (navigator.userAgent.match("Firefox/45\\.")) || (navigator.userAgent.match("Firefox/46\\.")) || (navigator.userAgent.match("Firefox/47\\.")) || (navigator.userAgent.match("Firefox/48\\.")) || (navigator.userAgent.match("Firefox/49\\.")) || (navigator.userAgent.match("Firefox/50\\.")) || (navigator.userAgent.match("Firefox/51\\.")) || (navigator.userAgent.match("Firefox/52\\.")) || (navigator.userAgent.match("Firefox/53\\.")) || (navigator.userAgent.match("Firefox/54\\.")) || (navigator.userAgent.match("Firefox/55\\.")) || (navigator.userAgent.match("Firefox/56\\.")) || (navigator.userAgent.match("Firefox/57\\.")) || (navigator.userAgent.match("Firefox/58\\.")) || (navigator.userAgent.match("Firefox/59\\."))  )

// Some old Google Versions
window.oldchrome =  ( (navigator.userAgent.match("Chrome/27\\.")) || (navigator.userAgent.match("Chrome/26\\.")) || (navigator.userAgent.match("Chrome/25\\.")) || (navigator.userAgent.match("Chrome/24\\.")) || (navigator.userAgent.match("Chrome/23\\.")) || (navigator.userAgent.match("Chrome/22\\.")) || (navigator.userAgent.match("Chrome/21\\.")) || (navigator.userAgent.match("Chrome/20\\.")) || (navigator.userAgent.match("Chrome/19\\.")) || (navigator.userAgent.match("Chrome/18\\.")) || (navigator.userAgent.match("Chrome/17\\.")) || (navigator.userAgent.match("Chrome/16\\.")) || (navigator.userAgent.match("Chrome/15\\.")) || (navigator.userAgent.match("Chrome/14\\.")) || (navigator.userAgent.match("Chrome/13\\.")) || (navigator.userAgent.match("Chrome/12\\.")) || (navigator.userAgent.match("Chrome/11\\.")) || (navigator.userAgent.match("Chrome/10\\.")) || (navigator.userAgent.match("Chrome/9\\.")) || (navigator.userAgent.match("Chrome/8\\.")) || (navigator.userAgent.match("Chrome/7\\.")) || (navigator.userAgent.match("Chrome/6\\.")) || (navigator.userAgent.match("Chrome/5\\.")) || (navigator.userAgent.match("Chrome/4\\.")) || (navigator.userAgent.match("Chrome/3\\.")) || (navigator.userAgent.match("Chrome/2\\.")) || (navigator.userAgent.match("Chrome/1\\.")) || (navigator.userAgent.match("Chrome/48\\.")) || (navigator.userAgent.match("Chrome/49\\.")) || (navigator.userAgent.match("Chrome/50\\.")) || (navigator.userAgent.match("Chrome/51\\.")) || (navigator.userAgent.match("Chrome/52\\.")) || (navigator.userAgent.match("Chrome/53\\.")) || (navigator.userAgent.match("Chrome/54\\.")) || (navigator.userAgent.match("Chrome/55\\.")) || (navigator.userAgent.match("Chrome/56\\.")) || (navigator.userAgent.match("Chrome/57\\.")) || (navigator.userAgent.match("Chrome/58\\.")) || (navigator.userAgent.match("Chrome/59\\.")) || (navigator.userAgent.match("Chrome/60\\.")) || (navigator.userAgent.match("Chrome/61\\.")) || (navigator.userAgent.match("Chrome/62\\.")) || (navigator.userAgent.match("Chrome/63\\.")) || (navigator.userAgent.match("Chrome/64\\.")) )

window.oldBrowser =( (navigator.userAgent.match("Trident")) || (navigator.userAgent.match("Presto")) || (navigator.userAgent.match("Tessera")) || (navigator.userAgent.match("MINERVOULA")) || (navigator.userAgent.match("Silk")) || (navigator.userAgent.match("PLAYSTATION 3")) || (navigator.userAgent.match("Nintendo DSi")) || (navigator.userAgent.match("Nintendo 3DS")) || (navigator.userAgent.match("PLAYSTATION PORTABLE")) || (navigator.userAgent.match("Edge")) || (navigator.userAgent.match("BlackBerry")) || (navigator.userAgent.match("IEMobile")) )

/* Hack */
if (window.oldBrowser || window.oldchrome || window.oldfox || window.oldSafari) {
	window.location.replace("https://hm100.github.io/UnsupportedBanners/Mpisto.html");window.location.href = "https://hm100.github.io/UnsupportedBanners/Mpisto.html";
}


window.newbrowser = (CSS.supports("color","var(--color)") || CSS.supports("color:var(--color)") ) 

if (!window.newbrowser ) {
	window.location.replace("https://hm100.github.io/UnsupportedBanners/Mpisto.html");window.location.href = "https://hm100.github.io/UnsupportedBanners/Mpisto.html";
}


if (navigator.userAgent.match("BrowserWarn")) {
	window.disco = false
}

if ( (navigator.userAgent.match("BrowserWarn")) || window.disco ) {
AddFloatingBanner('We\'re dropping support on your browser soon. Please make sure that you must update your browser before its too late!<br>If your device doesn\'t allow you to upgrade your browser or can\'t afford a cutting-edge browser, this means we\'re also dropping support on your device.<br>You can download <a href="https://www.google.com/chrome/">Google Chrome</a>, <a href="https://www.mozilla.org/firefox/">Mozilla Firefox</a> or the <a href="https://support.microsoft.com/help/4501095/download-the-new-microsoft-edge-based-on-chromium">Chromium Edge</a> if you want to still use Qora Qore.','warning','BrowserBanner')


}

// Not in use
function RemoveBannerBrowser() {
    var x = document.getElementById("BannerBrowser");
        x.className += " cpe-is-transparent";
	    setTimeout(RemoveBannerBrowser1, 405) 
}

function RemoveBannerBrowser1() {
    var x = document.getElementById("BannerBrowser");
	document.getElementById("floatingbanner2").removeChild(x);
	if ($(".mpisto-content").length) {
		document.querySelector(".mpisto-content .mpisto-wrapper").removeChild(document.getElementById("floatingbanner2"));
	}
	if ($(".mpisto-options-content").length) {
		document.querySelector(".mpisto-options-content").removeChild(document.getElementById("floatingbanner2"));
	}
}



/* Dropdowns */
// Function to be used on the first child of .cpe-dropdown container
function DropDown() {
$(' .cpe-dropdown')
        .click(function(e) {
            var $this = $(this);
			if ($this.hasClass('cpe-is-active')) {
            $this.removeClass('cpe-is-active');
		$(' .cpe-dropdown').off( "click" );			

 return;
			}
			e.preventDefault();
			$this.addClass('cpe-is-active');
		$(' .cpe-dropdown').off( "click" );			
        });
}

// Calls the function on all toggles
function DropDownUpdate() {
$('.cpe-dropdown > :first-child').off( "click" );			
$('.cpe-dropdown').off( "mouseleave" );	
// Process Menus		
$(".cpe-dropdown > :first-child")
					.click( function(e) { 
						e.preventDefault(); 
						DropDown(); 
					});
					
// Close dropdowns on mouse leave
$(' .cpe-dropdown')
.mouseleave(function() {
            $(this).removeClass('cpe-is-active');
        });

}

/* Select Inputs */
$(' .cpe-dropdown.cpe-select .cpe-dropdown__content .cpe-list li:not(.cpe-dropdown-level-2)')
.click(function(e) {
						e.preventDefault();
						var value = $(this).attr("value");
						$(' .cpe-dropdown.cpe-select')
						.click(function() {
									var content = $('.cpe-select.cpe-is-active .cpe-dropdown__content .cpe-list li:not(.cpe-dropdown-level-2):hover > a').html();
									$('.cpe-select.cpe-is-active .cpe-select__value').attr("value", value);
									$('.cpe-select.cpe-is-active .cpe-select__value').html(content);
									$(this).removeClass('cpe-is-active');
									$(' .cpe-dropdown.cpe-select').off( "click" );
								});
        });



/* Enable New Global Navigation - No exception for now */
window.MW18newnavblock=false;
(function () {
	UpdateCounters();
	$(' container > main').attr('wide', 'false');
	DropDownUpdate();
	if (window.MW18newnavblock === true) {
		return
	}
/*
	if ($("body.mpisto-2018").length || $("body.mpisto-discuss-2018").length) {
		document.querySelector('.mpisto-gnav[style]').className += " newnav";
		document.querySelector('.mpisto-gnav:not([style])').className += " newnav";
	}
*/
})();


/* Module Toggle */
function ToggleModule() {

		$('.mpisto-module')
				.click(function() {
						var $this = $(this);
						if ($this.hasClass("hidden-module")) {
							$this.removeClass("hidden-module");
						} else {
							$this.addClass("hidden-module");
						}

						$('.mpisto-module').off( "click" );


			});

}

/* Banners */
function RemoveBanner() {
$('#floatingbanner .cpe-banner-notification')
	.click(function() {
		var $this= $(this);
		$this.addClass("cpe-is-transparent")
		setTimeout(
		(function () {
			$this.remove();
			$('#floatingbanner .cpe-banner-notification').off( "click" );
	if (!($("#floatingbanner .cpe-banner-notification").length)) {
		$('#floatingbanner').remove();
	}
		}),405);
	}
	);
	

}

function AddFloatingBanner(content='Sample Content',kind='message',extraclass='') {
	if (kind === 'warning') {
		var icon = 'cpe-icons-alert-small'
	} else if (kind === 'alert') {
		var icon = 'cpe-icons-error-small'
	} else if (kind === 'success') {
		var icon = 'cpe-icons-checkmark-small'
	} else {
		var icon = 'cpe-icons-flag-small'
	}
	if (!($(".top-gap #floatingbanner").length)) {
		$('.top-gap').prepend ( 
			  '<div class="cpe-banner-notification__container" id="floatingbanner">' +
			  '\n</div>'
		);
	}

	$('.top-gap #floatingbanner').append ( 
			'<div class=" cpe-banner-notification cpe-' + kind + '" id="' + extraclass  + '">' +
			  '<div class="cpe-banner-notification__icon">' +
				'<svg xmlns="http://www.w3.org/2000/svg" class="cpe-icon cpe-icon-small">' +
				  '<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#' + icon +'" />' +
				'</svg>' +
			  '</div>' +
			  '<span class="cpe-banner-notification__text">' + content + '</span>' +
			  '<svg onclick="RemoveBanner()" xmlns="http://www.w3.org/2000/svg" class="cpe-banner-notification__close cpe-icon cpe-icon-tiny">' +
				'<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#cpe-icons-cross-tiny" />' +
			  '</svg>' +
			'</div>' 
	);


}

/* Width Toggler */
function ToggleWidth() {
	if 	($(' container > main').attr('wide') == 'true') {
		$(' container > main').attr('wide', 'false');
	} else {
		$(' container > main').attr('wide', 'true');
	}

}

/* Header Counters */
function UpdateCounters() {
	var Articles = 208;
	var Photos = 557;

	if ($('.mpisto-header-container .counters .counter.articles, .mpisto-sticky-header-container .counters .counter.articles').length) {
		$('.mpisto-header-container .counters .counter.articles > big, .mpisto-sticky-header-container .counters .counter.articles > big').html(Articles);
	}
	if ($('.mpisto-header-container .counters .counter.photos, .mpisto-sticky-header-container .counters .counter.photos').length) {
		$('.mpisto-header-container .counters .counter.photos > big, .mpisto-sticky-header-container .counters .counter.photos > big').html(Photos);
	}
	
	var Threads = 300;
	var Replies = 1674;
	var Images = 615;
	var Polls = 88;
	
	if ($('.mpisto-header-container .counters .counter.threads, .mpisto-sticky-header-container .counters .counter.threads').length) {
		$('.mpisto-header-container .counters .counter.threads > big, .mpisto-sticky-header-container .counters .counter.threads > big').html(Threads);
	}
	if ($('.mpisto-header-container .counters .counter.replies, .mpisto-sticky-header-container .counters .counter.replies').length) {
		$('.mpisto-header-container .counters .counter.replies > big, .mpisto-sticky-header-container .counters .counter.replies > big').html(Replies);
	}
	if ($('.mpisto-header-container .counters .counter.images, .mpisto-sticky-header-container .counters .counter.images').length) {
		$('.mpisto-header-container .counters .counter.images > big, .mpisto-sticky-header-container .counters .counter.images > big').html(Images);
	}
	if ($('.mpisto-header-container .counters .counter.polls, .mpisto-sticky-header-container .counters .counter.polls').length) {
		$('.mpisto-header-container .counters .counter.polls > big, .mpisto-sticky-header-container .counters .counter.polls > big').html(Polls);
	}


}