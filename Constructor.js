﻿window.MW18oldtitle = document.querySelector(".mpisto-content .mpisto-title").innerHTML;
window.MW18oldcontent = document.querySelector(".mpisto-content .mpisto-article section").innerHTML;
window.MW18unsaved = false

function UnsaveWarn () {
	window.MW18unsaved = true;
    var title = document.querySelector(".mpisto-content .mpisto-title");
    if (title.className.indexOf("unsaved") == -1) {
        title.className += " unsaved";
    }
    /* Remove Unsaved Changes Warning if user reverts changes made in the article manualy */
    if ((window.MW18oldcontent === document.querySelector(".mpisto-content .mpisto-article section").innerHTML) & (window.MW18oldtitle === document.querySelector(".mpisto-content .mpisto-title").innerHTML)) {
		window.MW18unsaved = false
		title.className = title.className.replace (" unsaved", "");
   }
}

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
		if (window.MW18unsaved === true) {
			if (confirm("Discard changes to " + $('.mpisto-content .mpisto-title').text() +"?. If you do, any unsaved changes will be lost" ) === true) {
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
			window.MW18unsaved = false;
			var title = document.querySelector(".mpisto-content .mpisto-title");
			title.className = title.className.replace (" unsaved", "");
			}		
		} else {
				x.className = x.className.replace(" constructor", "");
				x.className = x.className.replace(" editor", "");
			var matches = document.getElementsByClassName('editor-editable');
			while (matches.length > 0) {
			  matches.item(0).removeAttribute('contenteditable');
			  matches.item(0).classList.add('editor-edit');
			  matches[0].classList.remove('editor-editable');
			}
		}
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
$('#modalE12 .lightbox section').prepend ( 
      '<div class="cpe-banner-notification__container" id="floatingbanner" style="top:auto; position:relative;">' +
        '<div class="cpe-banner-notification cpe-success cpe-is-transparent" style="transform:none;" id="BannerSave">' +
          '<div class="cpe-banner-notification__icon">' +
            '<svg xmlns="http://www.w3.org/2000/svg" class="cpe-icon cpe-icon-small">' +
              '<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#cpe-icons-checkmark-small" />' +
            '</svg>' +
          '</div>' +
          '<span class="cpe-banner-notification__text">	Changes Successfully Updated!</span>' +
          '<svg onclick="RemoveBannerSave()" xmlns="http://www.w3.org/2000/svg" class="cpe-banner-notification__close cpe-icon cpe-icon-tiny">' +
            '<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#cpe-icons-cross-tiny" />' +
          '</svg>' +
        '</div>' +
      '</div>'

);
UnsaveWarn();

setTimeout(RemoveBannerSave2, 10)
setTimeout(RemoveBannerSave, 2500);
}

function UpdateSource() {
var x = $('.mpisto-content .mpisto-article section').html();
$('.mpisto-article.source').val( x );
UnsaveWarn();
}

function SaveChanges() {
window.MW18oldcontent = document.querySelector(".mpisto-content .mpisto-article section").innerHTML;
window.MW18oldtitle = document.querySelector(".mpisto-content .mpisto-title").innerHTML;
window.MW18unsaved = false;
var title = document.querySelector(".mpisto-content .mpisto-title");
title.className = title.className.replace (" unsaved", "");
$('#modalE10 .lightbox .save-page-wrapper').prepend ( 
      '<div class="cpe-banner-notification__container" id="floatingbanner" style="top:auto; position:relative;">' +
        '<div class="cpe-banner-notification cpe-success cpe-is-transparent" style="transform:none;" id="BannerSave">' +
          '<div class="cpe-banner-notification__icon">' +
            '<svg xmlns="http://www.w3.org/2000/svg" class="cpe-icon cpe-icon-small">' +
              '<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#cpe-icons-checkmark-small" />' +
            '</svg>' +
          '</div>' +
          '<span class="cpe-banner-notification__text">	Changes Successfully saved!</span>' +
          '<svg onclick="RemoveBannerSave()" xmlns="http://www.w3.org/2000/svg" class="cpe-banner-notification__close cpe-icon cpe-icon-tiny">' +
            '<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#cpe-icons-cross-tiny" />' +
          '</svg>' +
        '</div>' +
      '</div>'

);

setTimeout(RemoveBannerSave2, 10)
setTimeout(RemoveBannerSave, 2500);

}

function RemoveBannerSave() {
	$('#modaEl10 .lightbox .save-page-wrapper #BannerSave').attr("style", "");
    var x = document.getElementById("BannerSave");
        x.className += " cpe-is-transparent";
	    setTimeout(RemoveBannerSave1, 405) 
}

function RemoveBannerSave2() {
    var x = document.getElementById("BannerSave");
       x.className = x.className.replace (" cpe-is-transparent", "");
}

function RemoveBannerSave1() {
    var x = document.getElementById("BannerSave");
	document.querySelector(".lightbox #floatingbanner").removeChild(x);
	if (document.getElementById("modalE10").length > 0) {
		document.querySelector("#modalE10 .lightbox .save-page-wrapper").removeChild(document.querySelector(".lightbox #floatingbanner"));
	}
	if (document.getElementById("modalE12").length > 0) {
		document.querySelector("#modalE12 .lightbox section").removeChild(document.querySelector(".lightbox #floatingbanner"));
	}
}

function BoldText() {
var x = $('.mpisto-article.source').val();
$('.mpisto-article.source').val( x + '<b>Bold Text</b>' );
UpdateVisual();
}


function ItalText() {
var x = $('.mpisto-article.source').val();
$('.mpisto-article.source').val( x + '<i>Italic Text</i>' );
UpdateVisual();
}

function UnderlText() {
var x = $('.mpisto-article.source').val();
$('.mpisto-article.source').val( x + '<u>Underlined Text</u>' );
UpdateVisual();
}

function LinedText() {
var x = $('.mpisto-article.source').val();
$('.mpisto-article.source').val( x + '<s>Striked Text</s>' );
UpdateVisual();
}


function ShadowOI() {
var x = $('.mpisto-article.source').val();
$('.mpisto-article.source').val( x + '<shadow class="small">Shadowed Text</shadoe>' );
UpdateVisual();
}

function ShadowBOI() {
var x = $('.mpisto-article.source').val();
$('.mpisto-article.source').val( x + '<shadow class="small blur">Shadowed Text</shadoe>' );
UpdateVisual();
}

function Shadow() {
var x = $('.mpisto-article.source').val();
$('.mpisto-article.source').val( x + '<shadow>Shadowed Text</shadoe>' );
UpdateVisual();
}

function ShadowB() {
var x = $('.mpisto-article.source').val();
$('.mpisto-article.source').val( x + '<shadow class="blur">Shadowed Text</shadoe>' );
UpdateVisual();
}

function ShadowI() {
var x = $('.mpisto-article.source').val();
$('.mpisto-article.source').val( x + '<shadow class="large">Shadowed Text</shadoe>' );
UpdateVisual();
}

function ShadowBI() {
var x = $('.mpisto-article.source').val();
$('.mpisto-article.source').val( x + '<shadow class="large blur">Shadowed Text</shadoe>' );
UpdateVisual();
}

function ShadowII() {
var x = $('.mpisto-article.source').val();
$('.mpisto-article.source').val( x + '<shadow class="extreme">Shadowed Text</shadoe>' );
UpdateVisual();
}

function ShadowBII() {
var x = $('.mpisto-article.source').val();
$('.mpisto-article.source').val( x + '<shadow class="extreme blur">Shadowed Text</shadoe>' );
UpdateVisual();
}


function StrokeOI() {
var x = $('.mpisto-article.source').val();
$('.mpisto-article.source').val( x + '<Stroke class="small">Stroked Text</stroke>' );
UpdateVisual();
}

function StrokeBOI() {
var x = $('.mpisto-article.source').val();
$('.mpisto-article.source').val( x + '<Stroke class="small blur">Stroked Text</stroke>' );
UpdateVisual();
}

function Stroke() {
var x = $('.mpisto-article.source').val();
$('.mpisto-article.source').val( x + '<Stroke>Stroked Text</stroke>' );
UpdateVisual();
}

function StrokeB() {
var x = $('.mpisto-article.source').val();
$('.mpisto-article.source').val( x + '<Stroke class="blur">Stroked Text</stroke>' );
UpdateVisual();
}

function StrokeI() {
var x = $('.mpisto-article.source').val();
$('.mpisto-article.source').val( x + '<Stroke class="large">Stroked Text</stroke>' );
UpdateVisual();
}

function StrokeBI() {
var x = $('.mpisto-article.source').val();
$('.mpisto-article.source').val( x + '<Stroke class="large blur">Stroked Text</stroke>' );
UpdateVisual();
}

function StrokeII() {
var x = $('.mpisto-article.source').val();
$('.mpisto-article.source').val( x + '<Stroke class="extreme">Stroked Text</stroke>' );
UpdateVisual();
}

function StrokeBII() {
var x = $('.mpisto-article.source').val();
$('.mpisto-article.source').val( x + '<Stroke class="extreme blur">Stroked Text</stroke>' );
UpdateVisual();
}

function DivAdd() {
var x = $('.mpisto-article.source').val();
$('.mpisto-article.source').val( x + '<div>Place your content here...</div>' );
UpdateVisual();
}


function DivAdd1() {
var x = $('.mpisto-article.source').val();
$('.mpisto-article.source').val( x + '<section>Place your content here...</section>' );
UpdateVisual();
}

function DivAdd2() {
var x = $('.mpisto-article.source').val();
$('.mpisto-article.source').val( x + '<article>Place your content here...</article>' );
UpdateVisual();
}

function DivAdd3() {
var x = $('.mpisto-article.source').val();
$('.mpisto-article.source').val( x + '<header>Place your content here...</header>' );
UpdateVisual();
}

function DivAdd4() {
var x = $('.mpisto-article.source').val();
$('.mpisto-article.source').val( x + '<nav>Place your content here...</nav>' );
UpdateVisual();
}


function InlineAdd() {
var x = $('.mpisto-article.source').val();
$('.mpisto-article.source').val( x + '<p>Write something here...</p>' );
UpdateVisual();
}

function InlineAdd1() {
var x = $('.mpisto-article.source').val();
$('.mpisto-article.source').val( x + '<span>Place your content here...</span>' );
UpdateVisual();
}

function InlineAdd2() {
var x = $('.mpisto-article.source').val();
$('.mpisto-article.source').val( x + '<mark>Highlighted text</mark>' );
UpdateVisual();
}

function Heading1() {
var x = $('.mpisto-article.source').val();
$('.mpisto-article.source').val( x + '<h1>Heading 1</h1>' );
UpdateVisual();
}

function Heading2() {
var x = $('.mpisto-article.source').val();
$('.mpisto-article.source').val( x + '<h2>Heading 2</h2>' );
UpdateVisual();
}

function Heading3() {
var x = $('.mpisto-article.source').val();
$('.mpisto-article.source').val( x + '<h3>Heading 3</h3>' );
UpdateVisual();
}

function Heading4() {
var x = $('.mpisto-article.source').val();
$('.mpisto-article.source').val( x + '<h4>Heading 4</h4>' );
UpdateVisual();
}

function Heading5() {
var x = $('.mpisto-article.source').val();
$('.mpisto-article.source').val( x + '<h5>Heading 5</h5>' );
UpdateVisual();
}

function Heading6() {
var x = $('.mpisto-article.source').val();
$('.mpisto-article.source').val( x + '<h6>Heading 6</h6>' );
UpdateVisual();
}

function PreCode() {
var x = $('.mpisto-article.source').val();
$('.mpisto-article.source').val( x + '<pre>Preformatted Text</pre>' );
UpdateVisual();
}

function CodeAdd() {
var x = $('.mpisto-article.source').val();
$('.mpisto-article.source').val( x + '<code>Code</code>' );
UpdateVisual();
}

function CategoryAdd() {
	if ( $('.category-module.editor-module .mpisto-input:focus').length ||  $('.category-module.editor-module .cpe-button:focus').length ) {
		$('.category-module.editor-module ul li .items').append(
			'<div class="item">' +
			'<span contenteditable>' + $('.category-module.editor-module .category-add input').val() + '</span>' + 
			'<a onclick="CategoryRemove()" title="Remove category">' +
			'<svg xmlns="http://www.w3.org/2000/svg" class="cpe-icon cpe-icon-tiny">' +
			'<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#cpe-icons-cross" /></svg>' +
			'</a>'
		);
	}
}

function CategoryRemove() {
		$(' .category-module.editor-module ul li .items .item')
				.click(function() {
						var $this = $(this);
						$this.remove();
						$(' .category-module.editor-module ul li .items .item').off( "click" );


			});
}

function RawContent() {
	DownloadData(window.MW18oldcontent, window.MW18oldtitle, 'html');
}