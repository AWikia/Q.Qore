window.MW18oldtitle = document.querySelector(".mpisto-content .mpisto-title").innerHTML;
window.MW18oldcontent = document.querySelector(".mpisto-content .mpisto-article section").innerHTML;

function SourceSwitch() {
    var x = document.getElementById("EditorContent");
    if (x.className.indexOf("sourceon") == -1) {
        x.className += " sourceon";
    } else {
        x.className = x.className.replace(" sourceon", "");
    }
}

function SourceSwitchA() {
    var x = document.getElementById("EditorContent");
    if (x.className.indexOf("insource") == -1) {
        x.className += " insource";
    } else {
        x.className = x.className.replace(" insource", "");
    }
}

function ToggleModule1() {
    var x = document.getElementById("module1");
    if (x.className.indexOf("hidden-module") == -1) {
        x.className += " hidden-module";
    } else {
        x.className = x.className.replace(" hidden-module", "");
    }
}

function ToggleModule2() {
    var x = document.getElementById("module2");
    if (x.className.indexOf("hidden-module") == -1) {
        x.className += " hidden-module";
    } else {
        x.className = x.className.replace(" hidden-module", "");
    }
}


function ToggleModule3() {
    var x = document.getElementById("module3");
    if (x.className.indexOf("hidden-module") == -1) {
        x.className += " hidden-module";
    } else {
        x.className = x.className.replace(" hidden-module", "");
    }
}


function ToggleModule4() {
    var x = document.getElementById("module4");
    if (x.className.indexOf("hidden-module") == -1) {
        x.className += " hidden-module";
    } else {
        x.className = x.className.replace(" hidden-module", "");
    }
}


function EditSwitch() {
    var x = document.getElementById("Handler");
    if (x.className.indexOf("constructor") == -1) { // Opened Editor
        x.className += " constructor";
        x.className += " editor";
	var matches = document.getElementsByClassName('editor-edit');
	while (matches.length > 0) {
	  matches.item(0).setAttribute('contenteditable', 'true');
	  matches.item(0).classList.add('editor-editable');
	  matches[0].classList.remove('editor-edit');
	}
window.MW18oldtitle = document.querySelector(".mpisto-content .mpisto-title").innerHTML;
window.MW18oldcontent = document.querySelector(".mpisto-content .mpisto-article section").innerHTML;
    } else { // Used Discard Changes Button
        x.className = x.className.replace(" constructor", "");
        x.className = x.className.replace(" editor", "");
	var matches = document.getElementsByClassName('editor-editable');
	while (matches.length > 0) {
	  matches.item(0).removeAttribute('contenteditable');
	  matches.item(0).classList.add('editor-edit');
	  matches[0].classList.remove('editor-editable');
	}
	document.querySelector(".mpisto-content .mpisto-title").innerHTML = window.MW18oldtitle;
	document.querySelector(".mpisto-content .mpisto-article section").innerHTML = window.MW18oldcontent;
	  UpdateSource();
    }
}

function HTMLize() {
var x = $('.mpisto-content .mpisto-article section').text();
$('.mpisto-content .mpisto-article section').html( x );
UpdateSource();
}

function unHTMLize() {
var x = $('.mpisto-content .mpisto-article section').html();
$('.mpisto-content .mpisto-article section').text( x );
UpdateSource();
}


function UpdateVisual() {
var x = $('.mpisto-article.source').val();
$('.mpisto-content .mpisto-article section').html( x );
$('#modal12 .lightbox section').prepend ( 
      '<div class="wds-banner-notification__container" id="floatingbanner" style="top:auto; position:relative;">' +
        '<div class="wds-banner-notification wds-success wds-is-transparent" style="transform:none;" id="BannerSave">' +
          '<div class="wds-banner-notification__icon">' +
            '<svg xmlns="http://www.w3.org/2000/svg" class="wds-icon wds-icon-small">' +
              '<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#wds-icons-checkmark-small" />' +
            '</svg>' +
          '</div>' +
          '<span class="wds-banner-notification__text">	Changes Successfully Updated!</span>' +
          '<svg onclick="RemoveBannerSave()" xmlns="http://www.w3.org/2000/svg" class="wds-banner-notification__close wds-icon wds-icon-tiny">' +
            '<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#wds-icons-cross-tiny" />' +
          '</svg>' +
        '</div>' +
      '</div>'

);

setTimeout(RemoveBannerSave2, 10)
setTimeout(RemoveBannerSave, 2500);
}

function UpdateSource() {
var x = $('.mpisto-content .mpisto-article section').html();
$('.mpisto-article.source').val( x );
}

function SaveChanges() {
window.MW18oldcontent = document.querySelector(".mpisto-content .mpisto-article section").innerHTML;
$('#modal10 .lightbox .save-page-wrapper').prepend ( 
      '<div class="wds-banner-notification__container" id="floatingbanner" style="top:auto; position:relative;">' +
        '<div class="wds-banner-notification wds-success wds-is-transparent" style="transform:none;" id="BannerSave">' +
          '<div class="wds-banner-notification__icon">' +
            '<svg xmlns="http://www.w3.org/2000/svg" class="wds-icon wds-icon-small">' +
              '<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#wds-icons-checkmark-small" />' +
            '</svg>' +
          '</div>' +
          '<span class="wds-banner-notification__text">	Changes Successfully saved!</span>' +
          '<svg onclick="RemoveBannerSave()" xmlns="http://www.w3.org/2000/svg" class="wds-banner-notification__close wds-icon wds-icon-tiny">' +
            '<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#wds-icons-cross-tiny" />' +
          '</svg>' +
        '</div>' +
      '</div>'

);

setTimeout(RemoveBannerSave2, 10)
setTimeout(RemoveBannerSave, 2500);

}

function RemoveBannerSave() {
	$('#modal10 .lightbox .save-page-wrapper #BannerSave').attr("style", "");
    var x = document.getElementById("BannerSave");
        x.className += " wds-is-transparent";
	    setTimeout(RemoveBannerSave1, 405) 
}

function RemoveBannerSave2() {
    var x = document.getElementById("BannerSave");
       x.className = x.className.replace (" wds-is-transparent", "");
}

function RemoveBannerSave1() {
    var x = document.getElementById("BannerSave");
	document.getElementById("floatingbanner").removeChild(x);
	document.querySelector("#modal10 .lightbox .save-page-wrapper").removeChild(document.getElementById("floatingbanner"));
	document.querySelector("#modal12 .lightbox section").removeChild(document.getElementById("floatingbanner"));
}
