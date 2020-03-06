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

if ((navigator.userAgent.match("Trident")) || (navigator.userAgent.match("Presto")) || (navigator.userAgent.match("Tessera")) || (navigator.userAgent.match("MINERVOULA")) || (navigator.userAgent.match("Silk")) || (navigator.userAgent.match("PLAYSTATION 3")) || (navigator.userAgent.match("Nintendo DSi")) || (navigator.userAgent.match("Nintendo 3DS")) || (navigator.userAgent.match("PLAYSTATION PORTABLE")) ) {
window.location.replace("https://hm100.github.io/UnsupportedBanners/Mpisto.html");window.location.href = "https://hm100.github.io/UnsupportedBanners/Mpisto.html";
}

// Some old Fox Versions
window.oldfox = ((navigator.userAgent.match("Firefox/31\\.")) || (navigator.userAgent.match("Firefox/32\\.")) || (navigator.userAgent.match("Firefox/33\\.")) || (navigator.userAgent.match("Firefox/34\\.")) || (navigator.userAgent.match("Firefox/35\\.")) || (navigator.userAgent.match("Firefox/36\\.")) || (navigator.userAgent.match("Firefox/37\\.")) || (navigator.userAgent.match("Firefox/38\\.")) || (navigator.userAgent.match("Firefox/39\\.")) || (navigator.userAgent.match("Firefox/40\\.")) || (navigator.userAgent.match("Firefox/41\\.")) || (navigator.userAgent.match("Firefox/42\\.")) || (navigator.userAgent.match("Firefox/43\\.")) || (navigator.userAgent.match("Firefox/44\\.")) || (navigator.userAgent.match("Firefox/45\\.")) || (navigator.userAgent.match("Firefox/46\\.")) || (navigator.userAgent.match("Firefox/47\\.")) || (navigator.userAgent.match("Firefox/48\\.")) || (navigator.userAgent.match("Firefox/49\\.")) || (navigator.userAgent.match("Firefox/50\\.")) || (navigator.userAgent.match("Firefox/51\\.")) || (navigator.userAgent.match("Firefox/52\\.")) || (navigator.userAgent.match("Firefox/53\\.")) || (navigator.userAgent.match("Firefox/54\\.")) || (navigator.userAgent.match("Firefox/55\\.")) || (navigator.userAgent.match("Firefox/56\\.")) || (navigator.userAgent.match("Firefox/21\\.")) || (navigator.userAgent.match("Firefox/20\\.")) || (navigator.userAgent.match("Firefox/19\\.")) || (navigator.userAgent.match("Firefox/18\\.")) || (navigator.userAgent.match("Firefox/17\\.")) || (navigator.userAgent.match("Firefox/16\\.")) || (navigator.userAgent.match("Firefox/15\\.")) || (navigator.userAgent.match("Firefox/14\\.")) || (navigator.userAgent.match("Firefox/13\\.")) || (navigator.userAgent.match("Firefox/12\\.")) || (navigator.userAgent.match("Firefox/11\\.")) || (navigator.userAgent.match("Firefox/10\\.")) || (navigator.userAgent.match("Firefox/9\\.")) || (navigator.userAgent.match("Firefox/8\\.")) || (navigator.userAgent.match("Firefox/7\\.")) || (navigator.userAgent.match("Firefox/6\\.")) || (navigator.userAgent.match("Firefox/5\\.")) || (navigator.userAgent.match("Firefox/4\\.")) || (navigator.userAgent.match("Firefox/3\\.")) || (navigator.userAgent.match("Firefox/2\\.")) || (navigator.userAgent.match("Firefox/1\\.")) )

// Some old Google Versions
window.oldchrome =  ((navigator.userAgent.match("Chrome/48\\.")) || (navigator.userAgent.match("Chrome/49\\.")) || (navigator.userAgent.match("Chrome/50\\.")) || (navigator.userAgent.match("Chrome/51\\.")) || (navigator.userAgent.match("Chrome/52\\.")) || (navigator.userAgent.match("Chrome/53\\.")) || (navigator.userAgent.match("Chrome/54\\.")) || (navigator.userAgent.match("Chrome/55\\.")) || (navigator.userAgent.match("Chrome/56\\.")) || (navigator.userAgent.match("Chrome/27\\.")) || (navigator.userAgent.match("Chrome/26\\.")) || (navigator.userAgent.match("Chrome/25\\.")) || (navigator.userAgent.match("Chrome/24\\.")) || (navigator.userAgent.match("Chrome/23\\.")) || (navigator.userAgent.match("Chrome/22\\.")) || (navigator.userAgent.match("Chrome/21\\.")) || (navigator.userAgent.match("Chrome/20\\.")) || (navigator.userAgent.match("Chrome/19\\.")) || (navigator.userAgent.match("Chrome/18\\.")) || (navigator.userAgent.match("Chrome/17\\.")) || (navigator.userAgent.match("Chrome/16\\.")) || (navigator.userAgent.match("Chrome/15\\.")) || (navigator.userAgent.match("Chrome/14\\.")) || (navigator.userAgent.match("Chrome/13\\.")) || (navigator.userAgent.match("Chrome/12\\.")) || (navigator.userAgent.match("Chrome/11\\.")) || (navigator.userAgent.match("Chrome/10\\.")) || (navigator.userAgent.match("Chrome/9\\.")) || (navigator.userAgent.match("Chrome/8\\.")) || (navigator.userAgent.match("Chrome/7\\.")) || (navigator.userAgent.match("Chrome/6\\.")) || (navigator.userAgent.match("Chrome/5\\.")) || (navigator.userAgent.match("Chrome/4\\.")) || (navigator.userAgent.match("Chrome/3\\.")) || (navigator.userAgent.match("Chrome/2\\.")) || (navigator.userAgent.match("Chrome/1\\.")) )

winodw.oldbrowser = (CSS.supports("color","var(--color)") || CSS.supports("color:var(--color)"))

//$(' .wds-dropdown__toggle').attr('onclick', 'DropdownSwitch()')

function DropdownSwitch() {
		$(' .wds-dropdown.wds-is-active')
				.click(function() {
					var $this = $(this);
					if ($this.hasClass('wds-is-active')) {
						$this.removeClass('wds-is-active');
							$(' .wds-dropdown.wds-is-active').click();
						return;
					}
				});
}

(function () {



$(' .wds-dropdown')
        .click(function(e) {
            var $this = $(this);
			if ($this.hasClass('wds-is-active')) {
				return;
			}
			e.preventDefault();
			$this.addClass('wds-is-active');
        }).mouseleave(function() {
            $(this).removeClass('wds-is-active');
        });

})();


/* Enable New Global Navigation - No exception for now */
window.MW18newnavblock=false;
(function () {
	if (window.MW18newnavblock === true) {
		return
	}
	if ($("body.mpisto-2018").length || $("body.mpisto-discuss-2018").length) {
		document.querySelector('.mpisto-gnav[style]').className += " newnav";
		document.querySelector('.mpisto-gnav:not([style])').className += " newnav";
	}
})();

if ( (navigator.userAgent.match("Edge")) || (navigator.userAgent.match("BlackBerry")) || (navigator.userAgent.match("IEMobile")) || window.oldchrome || window.oldfox || !window.oldbrowser  ) {
$('.mpisto-content .mpisto-wrapper').prepend ( 
      '<div class="wds-banner-notification__container browser-warning" id="floatingbanner2">' +
        '<div class="wds-banner-notification wds-warning" id="BannerBrowser">' +
          '<div class="wds-banner-notification__icon">' +
            '<svg xmlns="http://www.w3.org/2000/svg" class="wds-icon wds-icon-small">' +
              '<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#wds-icons-alert-small" />' +
            '</svg>' +
          '</div>' +
          '<span class="wds-banner-notification__text"> We\'re dropping support on your browser soon. Please make sure that you must update your browser before its too late!<br>If your device doesn\'t allow you to upgrade your browser or can\'t afford a cutting-edge browser, this means we\'re also dropping support on your device.<br>You can download <a href="https://www.google.com/chrome/">Google Chrome</a>, <a href="https://www.mozilla.org/firefox/">Mozilla Firefox</a> or the <a href="https://support.microsoft.com/help/4501095/download-the-new-microsoft-edge-based-on-chromium">Chromium Edge</a> if you want to still use Qora Qore.</span>' +
          '<svg onclick="RemoveBannerBrowser()" xmlns="http://www.w3.org/2000/svg" class="wds-banner-notification__close wds-icon wds-icon-tiny">' +
            '<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#wds-icons-cross-tiny" />' +
          '</svg>' +
        '</div>' +
      '</div>'

);

$('.mpisto-options-content').prepend ( 
      '<div class="wds-banner-notification__container browser-warning" id="floatingbanner2">' +
        '<div class="wds-banner-notification wds-warning" id="BannerBrowser">' +
          '<div class="wds-banner-notification__icon">' +
            '<svg xmlns="http://www.w3.org/2000/svg" class="wds-icon wds-icon-small">' +
              '<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#wds-icons-alert-small" />' +
            '</svg>' +
          '</div>' +
          '<span class="wds-banner-notification__text"> We\'re dropping support on your browser soon. Please make sure that you must update your browser before its too late!<br>If your device doesn\'t allow you to upgrade your browser or can\'t afford a cutting-edge browser, this means we\'re also dropping support on your device.<br>You can download <a href="https://www.google.com/chrome/">Google Chrome</a>, <a href="https://www.mozilla.org/firefox/">Mozilla Firefox</a> or the <a href="https://support.microsoft.com/help/4501095/download-the-new-microsoft-edge-based-on-chromium">Chromium Edge</a> if you want to still use Qora Qore.</span>' +
          '<svg onclick="RemoveBannerBrowser()" xmlns="http://www.w3.org/2000/svg" class="wds-banner-notification__close wds-icon wds-icon-tiny">' +
            '<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#wds-icons-cross-tiny" />' +
          '</svg>' +
        '</div>' +
      '</div>'

);


}

function RemoveBannerBrowser() {
    var x = document.getElementById("BannerBrowser");
        x.className += " wds-is-transparent";
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

