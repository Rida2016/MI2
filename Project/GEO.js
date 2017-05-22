"use strict";
/*-- start --*/
$(function () {
	var antwoord, antwoord2, antwoord3, antwoord4, antwoord5, antwoord6,antwoord7, antwoord8, antwoord9, antwoord10;
	
	$(document).ready(function () {
		$("#intro").fadeIn(0);
		$("#level1").fadeOut(0);
		$("#level2").fadeOut(0);
		$("#level3").fadeOut(0);
		$("#level4").fadeOut(0);
		$("#level5").fadeOut(0);
		$("#level6").fadeOut(0);
		$("#level7").fadeOut(0);
		$("#level8").fadeOut(0);
		$("#level9").fadeOut(0);
		$("#level10").fadeOut(0);
		
	});
	/*-- level1 --*/

	$("#introButton").click(function () {
		$("#intro").slideUp(0);
		$("#level1").slideDown(600);
		$("#level2").fadeOut(0);
		$("#level3").fadeOut(0);
		$("#level4").fadeOut(0);
		$("#level5").fadeOut(0);
		$("#level6").fadeOut(0);
		$("#level7").fadeOut(0);
		$("#level8").fadeOut(0);
		$("#level9").fadeOut(0);
		$("#level10").fadeOut(0);
	});
		$(".terug").click(function () {
		$("#fout").html("")
		$(".terug").css("visibility", "hidden")
		})
		
	$("#check").click(function () {
	
		antwoord = document.getElementById("Antw").value;
		if (antwoord.toUpperCase() === "ROME") {
			$("#goed").html("Goede antwoord")
			$("#goed").animate({
				fontSize: "50px"
			}, 1000);
			$("#next").css("visibility", "visible")
			$("#Antw").css("visibility", "hidden")
			$("#check").css("visibility", "hidden")
		}
		else {
			$("#fout").html("Foute antwoord")
			$("#fout").animate({
				fontSize: "50px"
			}, 1000);
			$(".terug").css("visibility", "visible")
				
		}
		
	});
		
	/*-- level2 --*/
	$("#next").click(function () {
		$("#intro").slideUp(0);
		$("#level1").slideUp(0);
		$("#level2").slideDown(600);
		$("#level3").fadeOut(0);
		$("#level4").fadeOut(0);
		$("#level5").fadeOut(0);
		$("#level6").fadeOut(0);
		$("#level7").fadeOut(0);
		$("#level8").fadeOut(0);
		$("#level9").fadeOut(0);
		$("#level10").fadeOut(0);
	});
	$(".terug2").click(function () {
		$("#fout2").html("")
		$(".terug2").css("visibility", "hidden")
		})
	$("#check2").click(function () {
		antwoord2 = document.getElementById("Antw2").value;
		if (antwoord2.toUpperCase() === "MOSKOU") {
			$("#goed2").html("Goede antwoord")
			$("#goed2").animate({
				fontSize: "50px"
			}, 1000);
			$("#next2").css("visibility", "visible")
			$("#Antw2").css("visibility", "hidden")
			$("#check2").css("visibility", "hidden")
		}
		else {
			$("#fout2").html("Foute antwoord")
			$("#fout2").animate({
				fontSize: "50px"
			}, 1000);
			$(".terug2").css("visibility", "visible")
		}
	});
	
	/*-- level3--*/
	
	$("#next2").click(function () {
		$("#intro").slideUp(0);
		$("#level1").slideUp(0);
		$("#level2").slideUp(0);
		$("#level3").slideDown(600);
		$("#level4").fadeOut(0);
		$("#level5").fadeOut(0);
		$("#level6").fadeOut(0);
		$("#level7").fadeOut(0);
		$("#level8").fadeOut(0);
		$("#level9").fadeOut(0);
		$("#level10").fadeOut(0);
	});
	$(".terug3").click(function () {
		$("#fout3").html("")
		$(".terug3").css("visibility", "hidden")
		})
	$("#check3").click(function () {
		antwoord3 = document.getElementById("Antw3").value;
		if (antwoord3.toUpperCase() === "RABAT") {
			$("#goed3").html("Goede antwoord")
			$("#goed3").animate({
				fontSize: "50px"
			}, 1000);
			$("#next3").css("visibility", "visible")
			$("#Antw3").css("visibility", "hidden")
			$("#check3").css("visibility", "hidden")
		}
		else {
		
			$("#fout3").html("Foute antwoord")
			$("#fout3").animate({
				fontSize: "50px"
			}, 1000);
			$(".terug3").css("visibility", "visible")
		}
	});
	
	/*-- level4--*/
	$("#next3").click(function () {
		$("#intro").slideUp(0);
		$("#level1").slideUp(0);
		$("#level2").slideUp(0);
		$("#level3").slideUp(0);
		$("#level4").slideDown(600);
		$("#level5").fadeOut(0);
		$("#level6").fadeOut(0);
		$("#level7").fadeOut(0);
		$("#level8").fadeOut(0);
		$("#level9").fadeOut(0);
		$("#level10").fadeOut(0);
	});
	$(".terug4").click(function () {
		$("#fout4").html("")
		$(".terug4").css("visibility", "hidden")
		})
	$("#check4").click(function () {
		antwoord4 = document.getElementById("Antw4").value;
		if (antwoord4.toUpperCase() === "CAIRO") {
			$("#goed4").html("Goede antwoord")
			$("#goed4").animate({
				fontSize: "50px"
			}, 1000);
			$("#next4").css("visibility", "visible")
			$("#Antw4").css("visibility", "hidden")
			$("#check4").css("visibility", "hidden")
		}
		else {
		
			$("#fout4").html("Foute antwoord")
			$("#fout4").animate({
				fontSize: "50px"
			}, 1000);
			$(".terug4").css("visibility", "visible")
		}
	});
	/*-- level5 --*/
	$("#next4").click(function () {
		$("#intro").slideUp(0);
		$("#level1").slideUp(0);
		$("#level2").slideUp(0);
		$("#level3").slideUp(0);
		$("#level4").slideUp(0);
		$("#level5").slideDown(600);
		$("#level6").fadeOut(0);
		$("#level7").fadeOut(0);
		$("#level8").fadeOut(0);
		$("#level9").fadeOut(0);
		$("#level10").fadeOut(0);
	});
	$(".terug5").click(function () {
		$("#fout5").html("")
		$(".terug5").css("visibility", "hidden")
		})
	$("#check5").click(function () {
		antwoord5 = document.getElementById("Antw5").value;
		if (antwoord5.toUpperCase() === "ZUID-AMERIKA") {
			$("#goed5").html("Goede antwoord")
			$("#goed5").animate({
				fontSize: "50px"
			}, 1000);
			$("#next5").css("visibility", "visible")
			$("#colombie").css("visibility", "visible")
			$("#Antw5").css("visibility", "hidden")
			$("#check5").css("visibility", "hidden")
		}
		else {
		
			$("#fout5").html("Foute antwoord")
			$("#fout5").animate({
				fontSize: "50px"
			}, 1000);
			$(".terug5").css("visibility", "visible")
		}
	});
	/*-- level6 --*/
	$("#next5").click(function () {
		$("#intro").slideUp(0);
		$("#level1").slideUp(0);
		$("#level2").slideUp(0);
		$("#level3").slideUp(0);
		$("#level4").slideUp(0);
		$("#level5").slideUp(0);
		$("#level6").slideDown(600);
		$("#level7").fadeOut(0);
		$("#level8").fadeOut(0);
		$("#level9").fadeOut(0);
		$("#level10").fadeOut(0);
	});
	$(".terug6").click(function () {
		$("#fout6").html("")
		$(".terug6").css("visibility", "hidden")
		})
	$("#check6").click(function () {
		antwoord6 = document.getElementById("Antw6").value;
		if (antwoord6.toUpperCase() === "AZIË") {
			$("#goed6").html("Goede antwoord")
			$("#goed6").animate({
				fontSize: "50px"
			}, 1000);
			$("#next6").css("visibility", "visible")
			$("#india").css("visibility", "visible")
			$("#Antw6").css("visibility", "hidden")
			$("#check6").css("visibility", "hidden")
		}
		else {
	
			$("#fout6").html("Foute antwoord")
			$("#fout6").animate({
				fontSize: "50px"
			}, 1000);
			$(".terug6").css("visibility", "visible")
		}
	});
	/*-- level7 --*/
	$("#next6").click(function () {
		$("#intro").slideUp(0);
		$("#level1").slideUp(0);
		$("#level2").slideUp(0);
		$("#level3").slideUp(0);
		$("#level4").slideUp(0);
		$("#level5").slideUp(0);
		$("#level6").slideUp(0);
		$("#level7").slideDown(600);
		$("#level8").fadeOut(0);
		$("#level9").fadeOut(0);
		$("#level10").fadeOut(0);
	});
	$(".terug7").click(function () {
		$("#fout7").html("")
		$(".terug7").css("visibility", "hidden")
		})
	$("#check7").click(function () {
		antwoord7 = document.getElementById("Antw7").value;
		if (antwoord7.toUpperCase() === "EUROPA") {
			$("#goed7").html("Goede antwoord")
			$("#goed7").animate({
				fontSize: "50px"
			}, 1000);
			$("#next7").css("visibility", "visible")
			$("#ijsland").css("visibility", "visible")
			$("#Antw7").css("visibility", "hidden")
			$("#check7").css("visibility", "hidden")
		}
		else {
	
			$("#fout7").html("Foute antwoord")
			$("#fout7").animate({
				fontSize: "50px"
			}, 1000);
			$(".terug7").css("visibility", "visible")
		}
	});
	
/*-- level8 --*/
	$("#next7").click(function () {
		$("#intro").slideUp(0);
		$("#level1").slideUp(0);
		$("#level2").slideUp(0);
		$("#level3").slideUp(0);
		$("#level4").slideUp(0);
		$("#level5").slideUp(0);
		$("#level6").slideUp(0);
		$("#level7").slideUp(0);
		$("#level8").slideDown(600);
		$("#level9").fadeOut(0);
		$("#level10").fadeOut(0);
	});
	$(".terug8").click(function () {
		$("#fout8").html("")
		$(".terug8").css("visibility", "hidden")
		})
	$("#check8").click(function () {
		antwoord8 = document.getElementById("Antw8").value;
		if (antwoord8.toUpperCase() === "TURKIJE") {
			$("#goed8").html("Goede antwoord")
			$("#goed8").animate({
				fontSize: "50px"
			}, 1000);
			$("#next8").css("visibility", "visible")
			$("#turkije").css("visibility", "visible")
			$("#Antw8").css("visibility", "hidden")
			$("#check8").css("visibility", "hidden")
		}
		else {
	
			$("#fout8").html("Foute antwoord")
			$("#fout8").animate({
				fontSize: "50px"
			}, 1000);
			$(".terug8").css("visibility", "visible")
		}
	});
	/*-- level9 --*/
	$("#next8").click(function () {
		$("#intro").slideUp(0);
		$("#level1").slideUp(0);
		$("#level2").slideUp(0);
		$("#level3").slideUp(0);
		$("#level4").slideUp(0);
		$("#level5").slideUp(0);
		$("#level6").slideUp(0);
		$("#level7").slideUp(0);
		$("#level8").slideUp(0);
		$("#level9").slideDown(600);
		$("#level10").fadeOut(0);
	});
	$(".terug9").click(function () {
		$("#fout9").html("")
		$(".terug9").css("visibility", "hidden")
		})
	$("#check9").click(function () {
		antwoord9 = document.getElementById("Antw9").value;
		if (antwoord9.toUpperCase() === "PERU") {
			$("#goed9").html("Goede antwoord")
			$("#goed9").animate({
				fontSize: "50px"
			}, 1000);
			$("#next9").css("visibility", "visible")
			$("#peru").css("visibility", "visible")
			$("#Antw9").css("visibility", "hidden")
			$("#check9").css("visibility", "hidden")
		}
		else {
	
			$("#fout9").html("Foute antwoord")
			$("#fout9").animate({
				fontSize: "50px"
			}, 1000);
			$(".terug9").css("visibility", "visible")
		}
	});
	
	/*-- level10 --*/
	
	$("#next9").click(function () {
		$("#intro").slideUp(0);
		$("#level1").slideUp(0);
		$("#level2").slideUp(0);
		$("#level3").slideUp(0);
		$("#level4").slideUp(0);
		$("#level5").slideUp(0);
		$("#level6").slideUp(0);
		$("#level7").slideUp(0);
		$("#level8").slideUp(0);
		$("#level9").slideUp(0);
		$("#level10").slideDown(600);
	});
	$(".terug10").click(function () {
		$("#fout10").html("")
		$(".terug10").css("visibility", "hidden")
		})
	$("#check10").click(function () {
		antwoord10 = document.getElementById("Antw10").value;
		if (antwoord10.toUpperCase() === "MADAGASCAR") {
			$("#goed10").html("Goede antwoord")
			$("#goed10").animate({
				fontSize: "50px"
			}, 1000);
			$("#next10").css("visibility", "visible")
			$("#Antw10").css("visibility", "hidden")
			$("#check10").css("visibility", "hidden")
		}
		else {
	
			$("#fout10").html("Foute antwoord")
			$("#fout10").animate({
				fontSize: "50px"
			}, 1000);
			$(".terug10").css("visibility", "visible")
		}
	});
	
	
	
	
});