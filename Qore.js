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
	var provider = ["Emerald Emulator", "Intensive Plantilia Emulator", "Jinnybell 2010", "Jinnybell 2020", "PC Ready Emulator 2009", "Bsibsina Action Emulator", "Quadro Gaming Centre", "Prima GameCube 2", "Prima Centre", "Intensive Délacour 2019", "Yorkbook G1, Yorkbook Plus G4 & Yorkbook Plus G7", "Prima Xtreme", "Yorkbook Bronze", "Yorkbook Silver", "Yorkbook Platinum", "Bsibsina Pentium", "Bsibsina Enthusiasts", "ΣΟΥΒΛ Crystal Silver", "ΣΟΥΒΛ Crystal Gold", "Yorkbook Xe", "Yorkbook G4, Yorkbook Plus G7 Silver & Yorkbook Plus G7 Gold"][chosen];
	$('h2.compat').html("Compatibility of Q.Qore in " + provider);
	$('h2.compat2').html("Compatibility of Pokémon Prograda in " + provider);
	$('h2.compat3').html("Average FPS for Qora Qore and Pokémon Prograda in " + provider);
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
	var ready = [true,true,true,true,false,true,true,false,true,true,true,true,false,true,true,true,true,true,true,true,true][chosen]
	if (ready) {
		$('.sixty .wds-button').removeAttr("disabled");
		$('.prog2 .wds-button').removeAttr("disabled");
	} else {
		$('.sixty .wds-button').attr("disabled",true);
		$('.prog2 .wds-button').attr("disabled",true);
	}
	// 72 FPS
	var ready = [true,true,false,true,false,true,true,false,false,true,true,false,false,false,true,true,true,false,false,true,true][chosen]
	if (ready) {
		$('.seventy .wds-button').removeAttr("disabled");
	} else {
		$('.seventy .wds-button').attr("disabled",true);
	}
	// 90 FPS
	var ready = [true,true,false,false,false,true,false,false,false,false,true,false,false,false,true,false,true,false,false,false,true][chosen]
	if (ready) {
		$('.ninety .wds-button').removeAttr("disabled");
	} else {
		$('.ninety .wds-button').attr("disabled",true);
	}
	// 120 FPS
	var ready = [true,true,false,false,false,false,false,false,false,false,false,false,false,false,true,false,true,false,false,false,false][chosen]
	if (ready) {
		$('.hundred .wds-button').removeAttr("disabled");
	} else {
		$('.hundred .wds-button').attr("disabled",true);
	}
	// Low Profile
	$('.prog3 .wds-button').removeAttr("title");
	var ready = [true,true,true,true,false,true,true,true,true,true,false,true,false,true,true,true,true,true,true,true,false][chosen]
	if (ready) {
		$('.prog3 .wds-button').removeAttr("disabled");
		if (chosen === "19") {
			$('.prog3 .wds-button').attr("title","Medium and High GPU Transmission powers only");
		}
	} else {
		$('.prog3 .wds-button').attr("disabled",true);
	}
	// Med Profile
	$('.prog4 .wds-button').removeAttr("title");
	var ready = [true,true,true,true,false,true,true,false,true,true,false,true,false,false,true,true,true,true,true,true,false][chosen]
	if (ready) {
		$('.prog4 .wds-button').removeAttr("disabled");
		if (chosen === "19") {
			$('.prog4 .wds-button').attr("title","High GPU Transmission power only");

		}
	} else {
		$('.prog4 .wds-button').attr("disabled",true);
	}
	// Hig Profile
		$('.prog5 .wds-button').removeAttr("title");
	var ready = [true,true,false,true,false,true,true,false,true,true,false,true,false,false,true,false,true,false,true,true,false][chosen]
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
	// FPS
	var provider2 = [ 
					 ["120","72", "72", "72"], // Emerald
					 ["20-120","44-72","32-70","24-64"], //Intensive Plantilia Emulator 
					 ["36-60","31-60","20-54","<b>7-27</b>"], //Jinnybell 2010 
					 ["43-72","54-72","44-72","39-68"], //Jinnybell 2020
					 ["14-30","<b>7-14</b>","???","???"], // PC Ready Emulator 2009 
					 ["90","72","72","72"], // Bsibsina Action Emulator 
					 ["54-72","72","71-72","68-72"], // Quadro Gaming Centre 
					 ["48-50","40-50","<b>24-29</b>","<b>10-14</b>"], // Prima GameCube 2 
					 ["66","47-66 (2016), 66 (2020)", "32-58 (2016), 64-66 (2020)", "<b>14-18</b> (2016), 48-60 (2020)"], //Prima Centre 
					 ["49-72","72","72","60-72"], // Intensive Délacour 2019 
					 ["48-90 (G1 & Plus G4), 56-90 (Plus G7)","???","???","???"], // Yorkbook G1, Yorkbook Plus G4 & Yorkbook Plus G7 
					 ["19-60 (i3), 27-60 (i5), 35-60 (i7), 46-60 (i9), 60 (Xe)", "45-60 (i3), 59-60 (i5), 60 (i7, i9 & Xe)", "21-45 (i3), 37-60 (i5), 50-60 (i7), 60 (i9 & Xe)", "<b>14-18</b> (i3), <b>18-23</b> (i5), <b>22-28</b> (i7), 27-50 (i9), 52-60 (Xe)"], // Prima Xtreme 
					 ["9-40","<b>7-15</b>","<b>5-8</b>","<b>1-2</b>"], // Yorkbook Bronze 
					 ["24-60","45-60","<b>17-25</b>", "<b>9-13</b>"], // Yorkbook Silver 
					 ["120", "72", "72", "72"], //Yorkbook Platinum 
					 ["25-72","60-72", "36-68", "<b>19-23</b>"], // Bsibsina Pentium 
					 ["120", "72", "72", "72"], // Bsibsina Enthusiasts 
					 ["20-60","30-64","24-43","<b>14-19</b>"], // ΣΟΥΒΛ Crystal Silver
					 ["26-60","64","58-64","30-45"], // ΣΟΥΒΛ Crystal Gold 
					 ["72","<b>25-28</b> (Low GPU Tranmission Power), 67-72 (Medium GPU Transmission Power), 72 (High GPU Transmission Power)", "<b>12-15</b> (Low GPU Transmission Power), <b>26-28</b> (Medium GPU Transmission Power), 72 (High GPU Transmission Power)", "4 (Low GPU Transmission Power), 12-14 (Medium GPU Transmission Power), 68-72 (High GPU Transmission Power)"], // Yorkbook Xe
					 ["48-90 (G4), 66-90 (Plus G7 Silver), 78-90 (Plus G7 Gold)", "???", "???", "???"] // Yorkbook G4, Yorkbook Plus G7 Silver & Yorkbook Plus G7 Gold
					 ][chosen];
	$('ul li .fps1').html(provider2[0]);
	$('ul li .fps2').html(provider2[1]);
	$('ul li .fps3').html(provider2[2]);
	$('ul li .fps4').html(provider2[3]);
}
