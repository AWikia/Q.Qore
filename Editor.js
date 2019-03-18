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
    if (x.className.indexOf("constructor") == -1) {
        x.className += " constructor";
        x.className += " editor";
	var matches = document.getElementsByClassName('editor-edit');
	while (matches.length > 0) {
	  matches.item(0).setAttribute('contenteditable', 'true');
	  matches.item(0).classList.add('editor-editable');
	  matches[0].classList.remove('editor-edit');
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

function UpdateVisual() {
    var x = document.querySelector(".mpisto-content .mpisto-article section");
    var y = document.querySelector(".mpisto-article.source");
    x.innerHTML = y.innerHTML;
}