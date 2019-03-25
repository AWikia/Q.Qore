﻿window.MW18oldcontent = document.querySelector(".mpisto-editors-content .mpisto-article.visualonly").innerHTML;

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


function DiscardChanges() {
	document.querySelector(".mpisto-editors-content .mpisto-article.visualonly").innerHTML = window.MW18oldcontent;
	  UpdateSource();
}

function HTMLize() {
var x = $('.mpisto-editors-content .mpisto-article.visualonly:not([readonly])').text();
$('.mpisto-editors-content .mpisto-article.visualonly').html( x );
UpdateSource();
}

function unHTMLize() {
var x = $('.mpisto-editors-content .mpisto-article.visualonly').html();
$('.mpisto-editors-content .mpisto-article.visualonly').text( x );
UpdateSource();
}


function UpdateVisual() {
var x = $('.mpisto-editors-content .mpisto-article.source.sourceonly').val();
$('.mpisto-editors-content .mpisto-article.visualonly').html( x );
$('.mpisto-editors-content .mpisto-article.source.visualonly').val( x );
}

function UpdateSource() {
var x = $('.mpisto-editors-content .mpisto-article.visualonly').html();
$('.mpisto-editors-content .mpisto-article.source.visualonly').val( x );
$('.mpisto-editors-content .mpisto-article.source.sourceonly').val( x );
}

function SaveChanges() {
window.MW18oldcontent = document.querySelector(".mpisto-editors-content .mpisto-article.visualonly").innerHTML;
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
}
