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

if (navigator.userAgent.match("Trident")) {
document.getElementById("Handler").className += " explorer"
}

if (navigator.userAgent.match("Edge")) {
document.getElementById("Handler").className += " edge"
}

/* Mobile Only CSS */
if (navigator.userAgent.match("Mobile")) {
document.getElementById("Handler").className += " phone"
}
