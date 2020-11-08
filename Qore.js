function CalcAvail() {
/*
				Emerald = 144
				Plantilia = 144
				Jinnybell 2010 = 60
				Jinnybell 2020 = 80
				PCReady 2009 = 32
				Bsibsina Action = 100
				Quadro Gaming Centre = 72
				Prima GameCube 2 = 50
				Prima Centre = 66
				Intensive Délacour 2019 = 75
				Yorkbook G1/Plus G4-G7 = 90
				Prima Xtreme = 60
				Yorkbook Bronze = 52
				Yorkbook Silver = 64
				Yorkbook Platinum = 144
				Bsibsina Pentium = 72
				Bsibsina Enthusiasts = 144
				ΣΟΥΒΛ Crystal = 64
				Yorkbook Xe = 75
*/
	var chosen = $('select.provider').val();
	var provider = ["Emerald Emulator", "Plantilia Emulator", "Jinnybell 2010", "Jinnybell 2020", "PC Ready Emulator 2009", "Bsibsina Action Emulator", "Quadro Gaming Centre", "Prima GameCube 2", "Prima Centre", "Intensive Délacour 2019", "Yorkbook G1, Yorkbook Plus G4 & Yorkbook Plus G7", "Prima Xtreme", "Yorkbook Bronze", "Yorkbook Silver", "Yorkbook Platinum", "Bsibsina Pentium", "Bsibsina Enthusiasts", "ΣΟΥΒΛ Crystal Silver", "ΣΟΥΒΛ Crystal Gold", "Yorkbook Xe"][chosen];
	$('h2.compat').html("Compatibility of Q.Qore in " + provider);
	$('h2.compat2').html("Compatibility of Pokémon Prograda in " + provider);
	// 30 FPS
	$('.thirty .wds-button').removeAttr("disabled");
	// 40 FPS
	if (chosen === "4") {
		$('.fourty .wds-button').attr("disabled",true);
		$('.prog1 .wds-button').attr("disabled",true);
	} else {
		$('.fourty .wds-button').removeAttr("disabled");
		$('.prog1 .wds-button').removeAttr("disabled");
	}
	// 60 FPS
	var ready = [true,true,true,true,false,true,true,false,true,true,true,true,false,true,true,true,true,true,true,true][chosen]
	if (ready) {
		$('.sixty .wds-button').removeAttr("disabled");
		$('.prog2 .wds-button').removeAttr("disabled");
	} else {
		$('.sixty .wds-button').attr("disabled",true);
		$('.prog2 .wds-button').attr("disabled",true);
	}
	// 72 FPS
	var ready = [true,true,false,true,false,true,true,false,false,true,true,false,false,false,true,true,true,false,false,true][chosen]
	if (ready) {
		$('.seventy .wds-button').removeAttr("disabled");
	} else {
		$('.seventy .wds-button').attr("disabled",true);
	}
	// 90 FPS
	var ready = [true,true,false,false,false,true,false,false,false,false,true,false,false,false,true,false,true,false,false,false][chosen]
	if (ready) {
		$('.ninety .wds-button').removeAttr("disabled");
	} else {
		$('.ninety .wds-button').attr("disabled",true);
	}
	// 120 FPS
	var ready = [true,true,false,false,false,false,false,false,false,false,false,false,false,false,true,false,true,false,false,false][chosen]
	if (ready) {
		$('.hundred .wds-button').removeAttr("disabled");
	} else {
		$('.hundred .wds-button').attr("disabled",true);
	}
	// Low Profile
	var ready = [true,true,true,true,false,true,true,true,true,true,false,true,false,true,true,true,true,true,true,true][chosen]
	if (ready) {
		$('.prog3 .wds-button').removeAttr("disabled");
	} else {
		$('.prog3 .wds-button').attr("disabled",true);
	}
	// Med Profile
	$('.prog4 .wds-button').removeAttr("title");
	var ready = [true,true,true,true,false,true,true,false,true,true,false,true,false,false,true,true,true,true,true,true][chosen]
	if (ready) {
		$('.prog4 .wds-button').removeAttr("disabled");
	if (chosen === "19") {
		$('.prog4 .wds-button').attr("title","High Transmission power only");
	}
	} else {
		$('.prog4 .wds-button').attr("disabled",true);
	}
	// Hig Profile
		$('.prog5 .wds-button').removeAttr("title");
	var ready = [true,true,false,true,false,true,true,false,true,true,false,true,false,false,true,false,true,false,true,true][chosen]
	if (ready) {
		$('.prog5 .wds-button').removeAttr("disabled");
		if (chosen === "11") {
			$('.prog5 .wds-button').attr("title","i9 and Xe modes only");
		}
		if (chosen === "19") {
			$('.prog5 .wds-button').attr("title","High Transmission power only");
		}
	} else { 
		$('.prog5 .wds-button').attr("disabled",true);
	}
}