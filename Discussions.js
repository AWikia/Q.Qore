/**/
function SwitchEditorA() {
    var x = document.querySelector("body#Handler");
    var y = document.querySelector("div.description");
    if (x.className.indexOf("editor1") == -1) {
        x.className += " editor1";
	    y.setAttribute('contenteditable', 'true');
    } else {
        x.className = x.className.replace(" editor1", "");
        y.removeAttribute('contenteditable');
    }
}


function SwitchEditorB() {
    var x = document.querySelector("body#Handler");
    if (x.className.indexOf("editor2") == -1) {
        x.className += " editor2";
//        $(".guidelines li span").attr("contenteditable", "true");
    } else {
		if ($(".guidelines li span").length < 3) { // 2 or fewer rules
			alert("You can't have less than 3 guidelines. Please place some in order to save");
			return
		}
        x.className = x.className.replace(" editor2", "");
//        $(".guidelines li span").removeAttr("contenteditable");
    }
    UpdateOnClicks();
}


function NewRule () {
	if ($(".guidelines li span").length > 13) { // 14 Rules
		alert("You can't have more than 14 guidelines. Please remove some in order to place new ones");
	} else { // Less than 14
		var answer = prompt("You're now making guideline " + ($(".guidelines li span").length + 1) + ". What will it be about?")
		$(".guidelines").append(
		'<li>' +
		'<span>' +
		answer + 
		'</span>' +
		'<a class="editor2on delete">' +
		'<svg xmlns="http://www.w3.org/2000/svg" class="cpe-icon cpe-icon-tiny">' +
		'<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#cpe-icons-trash" />' +
		'</svg>' +
		'</a>' +
		'</li>'
		);
		UpdateOnClicks();
	}

}


function ChangeRule1() {
		$(".guidelines li:nth-child(1) span").html( prompt("Editing Guideline 1. What you want to change?", $(".guidelines li:nth-child(1) span").html()) );
		UpdateOnClicks();
}

function ChangeRule2() {
		$(".guidelines li:nth-child(2) span").html( prompt("Editing Guideline 2. What you want to change?", $(".guidelines li:nth-child(2) span").html()) );
		UpdateOnClicks();
}

function ChangeRule3() {
		$(".guidelines li:nth-child(3) span").html( prompt("Editing Guideline 3. What you want to change?", $(".guidelines li:nth-child(3) span").html()) );
		UpdateOnClicks();
}

function ChangeRule4() {
		$(".guidelines li:nth-child(4) span").html( prompt("Editing Guideline 4. What you want to change?", $(".guidelines li:nth-child(4) span").html()) );
		UpdateOnClicks();
}

function ChangeRule5() {
		$(".guidelines li:nth-child(5) span").html( prompt("Editing Guideline 5. What you want to change?", $(".guidelines li:nth-child(5) span").html()) );
		UpdateOnClicks();
}

function ChangeRule6() {
		$(".guidelines li:nth-child(6) span").html( prompt("Editing Guideline 6. What you want to change?", $(".guidelines li:nth-child(6) span").html()) );
		UpdateOnClicks();
}

function ChangeRule7() {
		$(".guidelines li:nth-child(7) span").html( prompt("Editing Guideline 7. What you want to change?", $(".guidelines li:nth-child(7) span").html()) );
		UpdateOnClicks();
}

function ChangeRule8() {
		$(".guidelines li:nth-child(8) span").html( prompt("Editing Guideline 8. What you want to change?", $(".guidelines li:nth-child(8) span").html()) );
		UpdateOnClicks();
}

function ChangeRule9() {
		$(".guidelines li:nth-child(9) span").html( prompt("Editing Guideline 9. What you want to change?", $(".guidelines li:nth-child(9) span").html()) );
		UpdateOnClicks();
}

function ChangeRule10() {
		$(".guidelines li:nth-child(10) span").html( prompt("Editing Guideline 10. What you want to change?", $(".guidelines li:nth-child(10) span").html()) );
		UpdateOnClicks();
}

function ChangeRule11() {
		$(".guidelines li:nth-child(11) span").html( prompt("Editing Guideline 11. What you want to change?", $(".guidelines li:nth-child(11) span").html()) );
		UpdateOnClicks();
}

function ChangeRule12() {
		$(".guidelines li:nth-child(12) span").html( prompt("Editing Guideline 12. What you want to change?", $(".guidelines li:nth-child(12) span").html()) );
		UpdateOnClicks();
}

function ChangeRule13() {
		$(".guidelines li:nth-child(13) span").html( prompt("Editing Guideline 13. What you want to change?", $(".guidelines li:nth-child(13) span").html()) );
		UpdateOnClicks();
}

function ChangeRule14() {
		$(".guidelines li:nth-child(14) span").html( prompt("Editing Guideline 14. What you want to change?", $(".guidelines li:nth-child(14) span").html()) );
		UpdateOnClicks();
}

function RemoveRule1() {
	if (confirm("Are you sure you want to remove this rule? This action cannot be undone.") === true) {
		$(".guidelines li:nth-child(1)").remove();
		UpdateOnClicks();
	}
}

function RemoveRule2() {
	if (confirm("Are you sure you want to remove this rule? This action cannot be undone.") === true) {
		$(".guidelines li:nth-child(2)").remove();
		UpdateOnClicks();
	}
}

function RemoveRule3() {
	if (confirm("Are you sure you want to remove this rule? This action cannot be undone.") === true) {
		$(".guidelines li:nth-child(3)").remove();
		UpdateOnClicks();
	}
}

function RemoveRule4() {
	if (confirm("Are you sure you want to remove this rule? This action cannot be undone.") === true) {
		$(".guidelines li:nth-child(4)").remove();
		UpdateOnClicks();
	}
}

function RemoveRule5() {
	if (confirm("Are you sure you want to remove this rule? This action cannot be undone.") === true) {
		$(".guidelines li:nth-child(5)").remove();
		UpdateOnClicks();
	}
}

function RemoveRule6() {
	if (confirm("Are you sure you want to remove this rule? This action cannot be undone.") === true) {
		$(".guidelines li:nth-child(6)").remove();
		UpdateOnClicks();
	}
}

function RemoveRule7() {
	if (confirm("Are you sure you want to remove this rule? This action cannot be undone.") === true) {
		$(".guidelines li:nth-child(7)").remove();
		UpdateOnClicks();
	}
}

function RemoveRule8() {
	if (confirm("Are you sure you want to remove this rule? This action cannot be undone.") === true) {
		$(".guidelines li:nth-child(8)").remove();
		UpdateOnClicks();
	}
}

function RemoveRule9() {
	if (confirm("Are you sure you want to remove this rule? This action cannot be undone.") === true) {
		$(".guidelines li:nth-child(9)").remove();
		UpdateOnClicks();
	}
}

function RemoveRule10() {
	if (confirm("Are you sure you want to remove this rule? This action cannot be undone.") === true) {
		$(".guidelines li:nth-child(10)").remove();
		UpdateOnClicks();
	}
}

function RemoveRule11() {
	if (confirm("Are you sure you want to remove this rule? This action cannot be undone.") === true) {
		$(".guidelines li:nth-child(11)").remove();
		UpdateOnClicks();
	}
}

function RemoveRule12() {
	if (confirm("Are you sure you want to remove this rule? This action cannot be undone.") === true) {
		$(".guidelines li:nth-child(12)").remove();
		UpdateOnClicks();
	}
}

function RemoveRule13() {
	if (confirm("Are you sure you want to remove this rule? This action cannot be undone.") === true) {
		$(".guidelines li:nth-child(13)").remove();
		UpdateOnClicks();
	}
}

function RemoveRule14() {
	if (confirm("Are you sure you want to remove this rule? This action cannot be undone.") === true) {
		$(".guidelines li:nth-child(14)").remove();
		UpdateOnClicks();
	}
}


function UpdateOnClicks () {
$(".guidelines li:nth-child(1) .delete").attr("onclick", "RemoveRule1()")
$(".guidelines li:nth-child(2) .delete").attr("onclick", "RemoveRule2()")
$(".guidelines li:nth-child(3) .delete").attr("onclick", "RemoveRule3()")
$(".guidelines li:nth-child(4) .delete").attr("onclick", "RemoveRule4()")
$(".guidelines li:nth-child(5) .delete").attr("onclick", "RemoveRule5()")
$(".guidelines li:nth-child(6) .delete").attr("onclick", "RemoveRule6()")
$(".guidelines li:nth-child(7) .delete").attr("onclick", "RemoveRule7()")
$(".guidelines li:nth-child(8) .delete").attr("onclick", "RemoveRule8()")
$(".guidelines li:nth-child(9) .delete").attr("onclick", "RemoveRule9()")
$(".guidelines li:nth-child(10) .delete").attr("onclick", "RemoveRule10()")
$(".guidelines li:nth-child(11) .delete").attr("onclick", "RemoveRule11()")
$(".guidelines li:nth-child(12) .delete").attr("onclick", "RemoveRule12()")
$(".guidelines li:nth-child(13) .delete").attr("onclick", "RemoveRule13()")
$(".guidelines li:nth-child(14) .delete").attr("onclick", "RemoveRule14()")

$(".guidelines li:nth-child(1) span").attr("onclick", "ChangeRule1()")
$(".guidelines li:nth-child(2) span").attr("onclick", "ChangeRule2()")
$(".guidelines li:nth-child(3) span").attr("onclick", "ChangeRule3()")
$(".guidelines li:nth-child(4) span").attr("onclick", "ChangeRule4()")
$(".guidelines li:nth-child(5) span").attr("onclick", "ChangeRule5()")
$(".guidelines li:nth-child(6) span").attr("onclick", "ChangeRule6()")
$(".guidelines li:nth-child(7) span").attr("onclick", "ChangeRule7()")
$(".guidelines li:nth-child(8) span").attr("onclick", "ChangeRule8()")
$(".guidelines li:nth-child(9) span").attr("onclick", "ChangeRule9()")
$(".guidelines li:nth-child(10) span").attr("onclick", "ChangeRule10()")
$(".guidelines li:nth-child(11) span").attr("onclick", "ChangeRule11()")
$(".guidelines li:nth-child(12) span").attr("onclick", "ChangeRule12()")
$(".guidelines li:nth-child(13) span").attr("onclick", "ChangeRule13()")
$(".guidelines li:nth-child(14) span").attr("onclick", "ChangeRule14()")

}
