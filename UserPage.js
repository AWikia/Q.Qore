function SaveUserContent() {
/* Info */
var x = $('#modal1 .cpe-input.summary.ef_name').val();
$('.mpisto-userpages-header h2.aka_name').html( x );
var x = $('#modal1 .cpe-input.summary.ef_reside').val();
$('.mpisto-userpages-header span.living').html( x );
var x = $('#modal1 .cpe-input.summary.ef_birthday1 .cpe-select__value').attr('value') + " " + $('#modal1 .cpe-input.summary.ef_birthday2 .cpe-select__value').attr('value');
$('.mpisto-userpages-header span.date').html( x );
var x = $('#modal1 .cpe-input.summary.ef_hobby').val();
$('.mpisto-userpages-header span.hobby').html( x );
var x = $('#modal1 .cpe-input.summary.ef_gender').val();
$('.mpisto-userpages-header span.gender').html( x );
/* Sites */
// Site
var x = $('#modal1 .cpe-input.summary.ef_site').val();
if (x === "") {
	$('.mpisto-userpages-header .cpe-button.site').removeAttr("href");
} else {
	$('.mpisto-userpages-header .cpe-button.site').attr("href", "https://" + x)
}
// Facebook
var x = $('#modal1 .cpe-input.summary.ef_facebook').val();
if (x === "") {
	$('.mpisto-userpages-header .cpe-button.facebook').removeAttr("href");
} else {
	$('.mpisto-userpages-header .cpe-button.facebook').attr("href", "https://www.facebook.com/" + x)
}
// Twitter
var x = $('#modal1 .cpe-input.summary.ef_twitter').val();
if (x === "") {
	$('.mpisto-userpages-header .cpe-button.twitter').removeAttr("href");
} else {
	$('.mpisto-userpages-header .cpe-button.twitter').attr("href", "https://www.twitter.com/" + x)
}
// Reddit
var x = $('#modal1 .cpe-input.summary.ef_reddit').val();
if (x === "") {
	$('.mpisto-userpages-header .cpe-button.reddit').removeAttr("href");
} else {
	$('.mpisto-userpages-header .cpe-button.reddit').attr("href", "https://www.reddit.com/user" + x)
}
// Fandom
var x = $('#modal1 .cpe-input.summary.ef_fandom').val();
if (x === "") {
	$('.mpisto-userpages-header .cpe-button.fandom').removeAttr("href");
} else {
	$('.mpisto-userpages-header .cpe-button.fandom').attr("href", "https://community.fandom.com/User:" + x)
}
// YouTube
var x = $('#modal1 .cpe-input.summary.ef_youtube').val();
if (x === "") {
	$('.mpisto-userpages-header .cpe-button.youtube').removeAttr("href");
} else {
	$('.mpisto-userpages-header .cpe-button.youtube').attr("href", "https://www.youtube.com/user/" + x)
}
// Tumblr
var x = $('#modal1 .cpe-input.summary.ef_tumblr').val();
if (x === "") {
	$('.mpisto-userpages-header .cpe-button.tumblr').removeAttr("href");
} else {
	$('.mpisto-userpages-header .cpe-button.tumblr').attr("href", "https://" + x + ".tumblr.com" )
}
// Steam
var x = $('#modal1 .cpe-input.summary.ef_steam').val();
if (x === "") {
	$('.mpisto-userpages-header .cpe-button.steam').removeAttr("href");
} else {
	$('.mpisto-userpages-header .cpe-button.steam').attr("href", "https://steamcommunity.com/id/" + x)
}
// Spotify
var x = $('#modal1 .cpe-input.summary.ef_spotify').val();
if (x === "") {
	$('.mpisto-userpages-header .cpe-button.spotify').removeAttr("href");
} else {
	$('.mpisto-userpages-header .cpe-button.spotify').attr("href", "https://open.spotify.com/user/" + x)
}
// Twitch
var x = $('#modal1 .cpe-input.summary.ef_twitch').val();
if (x === "") {
	$('.mpisto-userpages-header .cpe-button.twitch').removeAttr("href");
} else {
	$('.mpisto-userpages-header .cpe-button.twitch').attr("href", "https://twitch.tv/" + x)
}

/* Rest of script */
$('#modal1 .lightbox .UP_editor').prepend ( 
      '<div class="cpe-banner-notification__container" id="floatingbanner" style="top:auto; position:relative;">' +
        '<div class="cpe-banner-notification cpe-success cpe-is-transparent" style="transform:none;" id="BannerSave">' +
          '<div class="cpe-banner-notification__icon">' +
            '<svg xmlns="http://www.w3.org/2000/svg" class="cpe-icon cpe-icon-small">' +
              '<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#cpe-icons-checkmark-small" />' +
            '</svg>' +
          '</div>' +
          '<span class="cpe-banner-notification__text">	Profile edited sucessfully!</span>' +
          '<svg onclick="RemoveBannerUP1()" xmlns="http://www.w3.org/2000/svg" class="cpe-banner-notification__close cpe-icon cpe-icon-tiny">' +
            '<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#cpe-icons-cross-tiny" />' +
          '</svg>' +
        '</div>' +
      '</div>'

);

setTimeout(RemoveBannerUP2, 10)
setTimeout(RemoveBannerUP, 2500);

}

function RemoveBannerUP() {
	$('#modaEl10 .lightbox .save-page-wrapper #BannerSave').attr("style", "");
    var x = document.getElementById("BannerSave");
        x.className += " cpe-is-transparent";
	    setTimeout(RemoveBannerUP1, 405) 
}

function RemoveBannerUP2() {
    var x = document.getElementById("BannerSave");
       x.className = x.className.replace (" cpe-is-transparent", "");
}

function RemoveBannerUP1() {
    var x = document.getElementById("BannerSave");
	document.getElementById("floatingbanner").removeChild(x);
	document.querySelector("#modal1 .lightbox .UP_editor").removeChild(document.getElementById("floatingbanner"));
}
