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
if (navigator.userAgent.match("Edge")) {
document.getElementById("Handler").className += " edge"
}

/* Mobile Only CSS */
if (navigator.userAgent.match("Mobile")) {
document.getElementById("Handler").className += " phone"
}

if ((navigator.userAgent.match("Trident")) || (navigator.userAgent.match("Presto")) || (navigator.userAgent.match("Tessera")) || (navigator.userAgent.match("MINERVOULA")) || (navigator.userAgent.match("Silk")) || (navigator.userAgent.match("PLAYSTATION 3")) || (navigator.userAgent.match("Nintendo DSi")) || (navigator.userAgent.match("Nintendo 3DS")) || (navigator.userAgent.match("PLAYSTATION PORTABLE")) ) {
window.location.replace("https://hm100.github.io/UnsupportedBanners/Mpisto.html");window.location.href = "https://hm100.github.io/UnsupportedBanners/Mpisto.html";
}


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


window.MW18newnavblock=false;
(function () {
	if (window.MW18newnavblock === true) {
		return
	}
	if ($("body.mpisto-2018").length || $("body.mpisto-discuss-2018").length) {
//		document.querySelector('.mpisto-gnav[style]').className += " newnav"; // We begin with the first theme selected
//		document.querySelector('.mpisto-gnav:not([style])').className += " newnav"; // We begin with the first theme selected
	}
})();


