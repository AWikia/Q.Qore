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

/*if (navigator.userAgent.match("Trident")) {
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

