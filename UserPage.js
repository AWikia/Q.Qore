function SaveUserContent() {
/* Info */
var x = $('#modal1 .mpisto-input.summary.ef_name').val();
$('.mpisto-userpages-header h2.aka_name').html( x );
var x = $('#modal1 .mpisto-input.summary.ef_reside').val();
$('.mpisto-userpages-header span.living').html( x );
var x = $('#modal1 .mpisto-input.summary.ef_birthday1').val() + " " + $('#modal1 .mpisto-input.summary.ef_birthday2').val();
$('.mpisto-userpages-header span.date').html( x );
var x = $('#modal1 .mpisto-input.summary.ef_hobby').val();
$('.mpisto-userpages-header span.hobby').html( x );
var x = $('#modal1 .mpisto-input.summary.ef_gender').val();
$('.mpisto-userpages-header span.gender').html( x );
/* Sites */
// Site
var x = $('#modal1 .mpisto-input.summary.ef_site').val();
if (x === "") {
	$('.mpisto-userpages-header .wds-button.site').removeAttr("href");
} else {
	$('.mpisto-userpages-header .wds-button.site').attr("href", "https://" + x)
}
// Facebook
var x = $('#modal1 .mpisto-input.summary.ef_facebook').val();
if (x === "") {
	$('.mpisto-userpages-header .wds-button.facebook').removeAttr("href");
} else {
	$('.mpisto-userpages-header .wds-button.facebook').attr("href", "https://www.facebook.com/" + x)
}
// Twitter
var x = $('#modal1 .mpisto-input.summary.ef_twitter').val();
if (x === "") {
	$('.mpisto-userpages-header .wds-button.twitter').removeAttr("href");
} else {
	$('.mpisto-userpages-header .wds-button.twitter').attr("href", "https://www.twitter.com/" + x)
}
// Reddit
var x = $('#modal1 .mpisto-input.summary.ef_reddit').val();
if (x === "") {
	$('.mpisto-userpages-header .wds-button.reddit').removeAttr("href");
} else {
	$('.mpisto-userpages-header .wds-button.reddit').attr("href", "https://www.reddit.com/user" + x)
}
// Fandom
var x = $('#modal1 .mpisto-input.summary.ef_fandom').val();
if (x === "") {
	$('.mpisto-userpages-header .wds-button.fandom').removeAttr("href");
} else {
	$('.mpisto-userpages-header .wds-button.fandom').attr("href", "https://community.fandom.com/User:" + x)
}
// YouTube
var x = $('#modal1 .mpisto-input.summary.ef_youtube').val();
if (x === "") {
	$('.mpisto-userpages-header .wds-button.youtube').removeAttr("href");
} else {
	$('.mpisto-userpages-header .wds-button.youtube').attr("href", "https://www.youtube.com/user/" + x)
}
// Tumblr
var x = $('#modal1 .mpisto-input.summary.ef_tumblr').val();
if (x === "") {
	$('.mpisto-userpages-header .wds-button.tumblr').removeAttr("href");
} else {
	$('.mpisto-userpages-header .wds-button.tumblr').attr("href", "https://" + x + ".tumblr.com" )
}
// Steam
var x = $('#modal1 .mpisto-input.summary.ef_steam').val();
if (x === "") {
	$('.mpisto-userpages-header .wds-button.steam').removeAttr("href");
} else {
	$('.mpisto-userpages-header .wds-button.steam').attr("href", "https://steamcommunity.com/id/" + x)
}
// Spotify
var x = $('#modal1 .mpisto-input.summary.ef_spotify').val();
if (x === "") {
	$('.mpisto-userpages-header .wds-button.spotify').removeAttr("href");
} else {
	$('.mpisto-userpages-header .wds-button.spotify').attr("href", "https://open.spotify.com/user/" + x)
}
// Twitch
var x = $('#modal1 .mpisto-input.summary.ef_twitch').val();
if (x === "") {
	$('.mpisto-userpages-header .wds-button.twitch').removeAttr("href");
} else {
	$('.mpisto-userpages-header .wds-button.twitch').attr("href", "https://twitch.tv/" + x)
}

/* Rest of script */
$('#modal1 .lightbox .UP_editor').prepend ( 
      '<div class="wds-banner-notification__container" id="floatingbanner" style="top:auto; position:relative;">' +
        '<div class="wds-banner-notification wds-success wds-is-transparent" style="transform:none;" id="BannerSave">' +
          '<div class="wds-banner-notification__icon">' +
            '<svg xmlns="http://www.w3.org/2000/svg" class="wds-icon wds-icon-small">' +
              '<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#wds-icons-checkmark-small" />' +
            '</svg>' +
          '</div>' +
          '<span class="wds-banner-notification__text">	Profile edited sucessfully!</span>' +
          '<svg onclick="RemoveBannerSave()" xmlns="http://www.w3.org/2000/svg" class="wds-banner-notification__close wds-icon wds-icon-tiny">' +
            '<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#wds-icons-cross-tiny" />' +
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
        x.className += " wds-is-transparent";
	    setTimeout(RemoveBannerUP1, 405) 
}

function RemoveBannerUP2() {
    var x = document.getElementById("BannerSave");
       x.className = x.className.replace (" wds-is-transparent", "");
}

function RemoveBannerUP1() {
    var x = document.getElementById("BannerSave");
	document.getElementById("floatingbanner").removeChild(x);
	document.querySelector("#modal1 .lightbox .UP_editor").removeChild(document.getElementById("floatingbanner"));
}
