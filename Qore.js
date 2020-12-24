function CalcAvail() {
/*
				@ = With CEU
				Emerald = 144
				Plantilia = 144 @
				Jinnybell 2010 = 60
				Jinnybell 2020 = 80 @
				PCReady 2009 = 32
				Bsibsina Action = 100 @
				Quadro Gaming Centre = 72 @
				Prima GameCube 2 = 50
				Prima Centre = 66
				Intensive Délacour 2019 = 75
				Yorkbook G1/Plus G4-G7 = 90
				Prima Xtreme = 60
				Yorkbook Bronze = 52
				Yorkbook Silver = 64
				Yorkbook Platinum = 144
				Bsibsina Pentium = 72 @
				Bsibsina Enthusiasts = 144 @
				ΣΟΥΒΛ Crystal = 64 (2021 for @)
				Yorkbook Xe = 75
				PCReady 2020 = 40 @
*/
	var chosen = $('select.provider').val();
	var provider = ["Emerald Emulator", "Intensive Plantilia Emulator", "Jinnybell 2010", "Jinnybell 2020", "PC Ready Emulator 2009", "Bsibsina Action Emulator", "Quadro Gaming Centre", "Prima GameCube 2", "Prima Centre", "Intensive Délacour 2019", "Yorkbook G1, Yorkbook Plus G4 & Yorkbook Plus G7", "Prima Xtreme", "Yorkbook Bronze", "Yorkbook Silver", "Yorkbook Platinum", "Bsibsina Pentium", "Bsibsina Enthusiasts", "ΣΟΥΒΛ Crystal Silver", "ΣΟΥΒΛ Crystal Gold", "Yorkbook Xe", "Yorkbook G4, Yorkbook Plus G7 Silver & Yorkbook Plus G7 Gold", "PC Ready Emulator 2020", "ΣΟΥΒΛ Crystal Silver 2021", "ΣΟΥΒΛ Crystal Gold 2021"][chosen];
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
	var ready = [true,true,true,true,false,true,true,false,true,true,true,true,false,true,true,true,true,true,true,true,true,false,true,true][chosen]
	if (ready) {
		$('.sixty .wds-button').removeAttr("disabled");
		$('.prog2 .wds-button').removeAttr("disabled");
	} else {
		$('.sixty .wds-button').attr("disabled",true);
		$('.prog2 .wds-button').attr("disabled",true);
	}
	// 72 FPS
	var ready = [true,true,false,true,false,true,true,false,false,true,true,false,false,false,true,true,true,false,false,true,true,false,false,false][chosen]
	if (ready) {
		$('.seventy .wds-button').removeAttr("disabled");
	} else {
		$('.seventy .wds-button').attr("disabled",true);
	}
	// 90 FPS
	var ready = [true,true,false,false,false,true,false,false,false,false,true,false,false,false,true,false,true,false,false,false,true,false,false,false][chosen]
	if (ready) {
		$('.ninety .wds-button').removeAttr("disabled");
	} else {
		$('.ninety .wds-button').attr("disabled",true);
	}
	// 120 FPS
	var ready = [true,true,false,false,false,false,false,false,false,false,false,false,false,false,true,false,true,false,false,false,false,false,false,false][chosen]
	if (ready) {
		$('.hundred .wds-button').removeAttr("disabled");
	} else {
		$('.hundred .wds-button').attr("disabled",true);
	}
	// Low Profile
	$('.prog3 .wds-button').removeAttr("title");
	var ready = [true,true,true,true,false,true,true,true,true,true,false,true,false,true,true,true,true,true,true,true,false,true,true,true][chosen]
	if (ready) {
		$('.prog3 .wds-button').removeAttr("disabled");
		if (chosen === "19") {
			$('.prog3 .wds-button').attr("title","Medium and High GPU Transmission powers only");
		}
		if ( (chosen === "21") ) {
			$('.prog3 .wds-button').attr("title","Only buildable with Compiled Emulated Unit");
		}
	} else {
		$('.prog3 .wds-button').attr("disabled",true);
	}
	// Med Profile
	$('.prog4 .wds-button').removeAttr("title");
	var ready = [true,true,true,true,false,true,true,false,true,true,false,true,false,false,true,true,true,true,true,true,false,false,true,true][chosen]
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
	var ready = [true,true,false,true,false,true,true,false,true,true,false,true,false,false,true,true,true,false,true,true,false,false,true,true][chosen]
	if (ready) {
		$('.prog5 .wds-button').removeAttr("disabled");
		if ( (chosen === "15") || (chosen === "22") ) {
			$('.prog5 .wds-button').attr("title","Only buildable with Compiled Emulated Unit");
		}
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
					 ["<h4>Via dGPU</h4>20-120<h4>Via CEU</h4>33-120","<h4>Via dGPU</h4>44-72 (Standard)<br>50-110 (Benchmark)<h4>Via CEU</h4>70-144","<h4>Via dGPU</h4>32-70 (Standard)<br>37-82 (Benchmark)<h4>Via CEU</h4>57-100","<h4>Via dGPU</h4>24-64 (Standard)<br>29-70 (Benchmark)<h4>Via CEU</h4>38-80"], //Intensive Plantilia Emulator 
					 ["36-60","31-60","20-54","<b>7-27</b>"], //Jinnybell 2010 
					 ["<h4>Via dGPU</h4>43-72<h4>Via CEU</h4>54-72","<h4>Via dGPU</h4>54-72<h4>Via CEU</h4>74-80","<h4>Via dGPU</h4>44-72<h4>Via CEU</h4>60-80","<h4>Via dGPU</h4>39-68<h4>Via CEU</h4>50-80"], //Jinnybell 2020
					 ["14-30","<b>7-14</b>","???","???"], // PC Ready Emulator 2009 
					 ["<h4>Via dGPU</h4>90<h4>Via CEU</h4>90","<h4>Via dGPU</h4>72<h4>Via CEU</h4>100","<h4>Via dGPU</h4>72<h4>Via CEU</h4>100","<h4>Via dGPU</h4>72<h4>Via CEU</h4>100"], // Bsibsina Action Emulator 
					 ["<h4>Via dGPU</h4>54-72<h4>Via CEU</h4>61-72","<h4>Via dGPU</h4>72<h4>Via CEU</h4>72","<h4>Via dGPU</h4>71-72<h4>Via CEU</h4>72","<h4>Via dGPU</h4>68-72<h4>Via CEU</h4>72"], // Quadro Gaming Centre 
					 ["48-50","40-50","<b>24-29</b>","<b>10-14</b>"], // Prima GameCube 2 
					 ["60","47-66 (2016)<br>66 (2020)", "32-58 (2016)<br>64-66 (2020)", "<b>14-18</b> (2016)<br>48-60 (2020)"], //Prima Centre 
					 ["49-72","72","72","60-72"], // Intensive Délacour 2019 
					 ["48-90 (G1 & Plus G4)<br>56-90 (Plus G7)","???","???","???"], // Yorkbook G1, Yorkbook Plus G4 & Yorkbook Plus G7 
					 ["19-60 (i3)<br>627-60 (i5)<br>635-60 (i7)<br>646-60 (i9)<br>60 (Xe)", "45-60 (i3)<br>59-60 (i5)<br>60 (i7, i9 & Xe)", "21-45 (i3)<br>37-60 (i5)<br>50-60 (i7)<br>60 (i9 & Xe)", "<b>14-18</b> (i3)<br><b>18-23</b> (i5)<br><b>22-28</b> (i7)<br>27-50 (i9)<br>52-60 (Xe)"], // Prima Xtreme 
					 ["9-40","<b>7-15</b>","<b>5-8</b>","<b>1-2</b>"], // Yorkbook Bronze 
					 ["24-60","45-60","<b>17-25</b>", "<b>9-13</b>"], // Yorkbook Silver 
					 ["120", "72", "72", "72"], //Yorkbook Platinum 
					 ["<h4>Via dGPU</h4>25-72<h4>Via CEU</h4>32-72","<h4>Via dGPU</h4>60-72<h4>Via CEU</h4>71-72", "<h4>Via dGPU</h4>36-68<h4>Via CEU</h4>50-68", "<h4>Via dGPU</h4><b>19-23</b><h4>Via CEU</h4>27-40"], // Bsibsina Pentium 
					 ["<h4>Via dGPU</h4>120<h4>Via CEU</h4>120", "<h4>Via dGPU</h4>72<h4>Via CEU</h4>144", "<h4>Via dGPU</h4>72<h4>Via CEU</h4>144", "<h4>Via dGPU</h4>72<h4>Via CEU</h4>144"], // Bsibsina Enthusiasts 
					 ["20-60","30-64","24-43","<b>14-19</b>"], // ΣΟΥΒΛ Crystal Silver
					 ["26-60","64","58-64","30-45"], // ΣΟΥΒΛ Crystal Gold 
					 ["72","<b>25-28</b> (Low GPU Tranmission Power)<br>67-72 (Medium GPU Transmission Power)<br>72 (High GPU Transmission Power)", "<b>12-15</b> (Low GPU Transmission Power)<br></be><b>26-28</b> (Medium GPU Transmission Power)<br>72 (High GPU Transmission Power)", "<b>4</b> (Low GPU Transmission Power)<br><b>12-14</b> (Medium GPU Transmission Power)<br>68-72 (High GPU Transmission Power)"], // Yorkbook Xe
					 ["48-90 (G4)<br>66-90 (Plus G7 Silver)<br>78-90 (Plus G7 Gold)", "???", "???", "???"], // Yorkbook G4, Yorkbook Plus G7 Silver & Yorkbook Plus G7 Gold
					 ["<h4>Via dGPU</h4>18-40<h4>Via CEU</h4>26-40","<h4>Via dGPU</h4><b>20-23</b><h4>Via CEU</h4>35-40","<h4>Via dGPU</h4><b>6-10</b><h4>Via CEU</h4><b>10-18</b>","<h4>Via dGPU</h4>???<h4>Via CEU</h4><b>3-7</b>"], // PC Ready Emulator 2020
					 ["<h4>Via dGPU</h4>23-60<h4>Via CEU</h4>30-60","<h4>Via dGPU</h4>43-64<h4>Via CEU</h4>64","<h4>Via dGPU</h4>29-50<h4>Via CEU</h4>40-60","<h4>Via dGPU</h4><b>18-23</b><h4>Via CEU</h4>29-40"], // ΣΟΥΒΛ Crystal Silver 2021
					 ["<h4>Via dGPU</h4>34-60<h4>Via CEU</h4>45-60","<h4>Via dGPU</h4>64<h4>Via CEU</h4>64","<h4>Via dGPU</h4>64<h4>Via CEU</h4>64","<h4>Via dGPU</h4>35-52<h4>Via CEU</h4>55-64"] // ΣΟΥΒΛ Crystal Gold 2021
					 ][chosen];
	$('table .fps1').html(provider2[0]);
	$('table .fps2').html(provider2[1]);
	$('table .fps3').html(provider2[2]);
	$('table .fps4').html(provider2[3]);
}
