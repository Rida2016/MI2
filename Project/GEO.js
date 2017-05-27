"use strict";
/*-- start --*/

var questionindex = 0;
var levelindex = 1;
var questions = ['Wat is de hoofdstad van Italië?',
				' Wat is de hoofdstad van Rusland? ','Wat is de hoofdstad van Marroko?','Wat is de hoofdstad van Egypte?','In welke continent bevindt Colombië zich?','In welke continent bevindt India zich?','In welke continent bevindt Ijsland zich?','Ankara is de hoofdstad van welke land?','Lima is de hoofdstad van welke land?','Welke land is dit?'];
var images = ['IMG/Italie.jpg','IMG/mondeRussie.jpg','IMG/maroc.jpg','IMG/egypte.jpg','','','','','','IMG/madagascar.jpg'];
var response = ['rome','moskou','rabat','cairo','zuid-amerika','azië','europa','turkije','peru','madagascar'];
var backIMG = ['IMG/level1.jpg','IMG/level2.jpg','IMG/level3.jpg','IMG/level4.jpg','IMG/level5.jpg','IMG/level6.jpg','IMG/level7.jpg','IMG/level8.jpg','IMG/level9.jpg','IMG/level10.jpg' ];
var score = 0;


$(function () 
  {
	

	/*-- Intro Pagina --*/
$(document).ready(function () {
		$("#intro").fadeIn(0);
		$("#level1").fadeOut(0);
		$("#win").fadeOut(0);
	});

$("#introButton").click(function () {
		$("#intro").slideUp(0);
		$("#level1").slideDown(600);
		$("#win").fadeOut(0);
});


		/*-- level --*/
$(document).ready(function () {
		setQuestion();
		YouWin();
		$("#check").click(checkAnswer)
		$("#Antw").on('keyup', function (e) {
			if (e.keyCode == 13) {
				checkAnswer();
			}
		
		});
		});
	
/*-- you win --*/
function YouWin(){
		if (levelindex === 11)
		{
		$("#intro").fadeOut(0);
		$("#level1").fadeOut(0);
		$("#win").fadeIn(0);
		}
		$("#score").html('Jouw score:'+ score);
}

	
	
	
	

/*-- functie wanneer correcte antwoord word gegeven--*/
	
function correct(){
	$("#goed").html("Goede antwoord")
			$("#goed").animate({
				fontSize: "50px"
			}, 1000);
			$("#next").css("visibility", "visible")
			$("#Antw").css("visibility", "hidden")
			$("#check").css("visibility", "hidden")
			$("#Antw").val('');
			score = score + 10;
}
	
/*-- functie wanneer foute antwoord word gegeven --*/
function Notcorrect(){
	
	$("#fout").html("Foute antwoord")
			$("#fout").animate({
				fontSize: "50px"
			}, 1000);
			$(".terug").css("visibility", "visible")
			$("#Antw").css("visibility", "hidden")
			$("#check").css("visibility", "hidden")
			score = score - 5;
}	
	
	
	/*--functie om design te veranderen --*/
	
function setQuestion()
{
	$("#question").text(questions[questionindex])
	$("#image").attr('src', images[questionindex])
	$("#level1").css('background-image', 'url(' + backIMG[questionindex] + ')')
	$(".level").html(levelindex)
}
/*-- functie om antwoord te checken--*/
	
function checkAnswer(){
	if($("#Antw").val().toLowerCase() === "zuid-amerika".toLowerCase())
	{
		$("#image").attr('src','IMG/colombie.jpg')
		
	}
	if($("#Antw").val().toLowerCase() === "azië".toLowerCase())
	{
		$("#image").attr('src','IMG/india.jpg')
		
	}
	if($("#Antw").val().toLowerCase() === "europa".toLowerCase())
	{
		$("#image").attr('src','IMG/ijsland.jpg')
		
	}
	if($("#Antw").val().toLowerCase() === "turkije".toLowerCase())
	{
		$("#image").attr('src','IMG/turkije.jpg')
		
	}
	if($("#Antw").val().toLowerCase() === "peru".toLowerCase())
	{
		$("#image").attr('src','IMG/peru.png')
		
	}
	if($("#Antw").val().toLowerCase()  ===  response[questionindex].toLowerCase())
	{
		correct();
		
	}
	 
	else
	{
		
		Notcorrect();
	}
}
	/*-- next level--*/
$("#next").click(function () {
			++levelindex;
			++questionindex;
				setQuestion();
				YouWin();
		$("#goed").html("")
		$("#next").css("visibility", "hidden")
		$("#Antw").css("visibility", "visible")
		$("#check").css("visibility", "visible")
	});
	
	/*-- try again --*/
$(".terug").click(function () {
		$("#fout").html("")
		$(".terug").css("visibility", "hidden")
		$("#Antw").css("visibility", "visible")
		$("#check").css("visibility", "visible")
		});

		/*-- exit button --*/
	$("#exit").click(function(){
		$("#intro").fadeIn(0);
		$("#level").fadeOut(0);
		$("#win").fadeOut(0);		
		questionindex=0;
		levelindex=1;	
		history.go(0);
					
	});
	
	
	
});