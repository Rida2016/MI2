"use strict";
/*-- start --*/
$(function () {
	var antwoord, antwoord2, antwoord3;
	
	$(document).ready(function () {
		$("#intro").fadeIn(0);
		$("#level1").fadeOut(0);
		$("#level2").fadeOut(0);
		$("#level3").fadeOut(0);
		
	});
	/*-- level1 --*/

	$("#introButton").click(function () {
		$("#intro").slideUp(0);
		$("#level1").slideDown(600);
		$("#level2").fadeOut(0);
		$("#level3").fadeOut(0);
		
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
		}
		else {
			$("#fout2").addClass("fout2")
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
		}
		else {
			$("#fout3").addClass("fout3")
			$("#fout3").html("Foute antwoord")
			$("#fout3").animate({
				fontSize: "50px"
			}, 1000);
			$(".terug3").css("visibility", "visible")
		}
	});
	
	
	
	
	
});