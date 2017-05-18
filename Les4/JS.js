"use strict";

$(document).ready(function () 
{
    var plaats = $("li").last().detach();
    var aantal = $("li").length;
    var lijn   = $("li:nth-child(3n)").text();
    
    $($("li").first()).before("Aantal plaatsen: " + aantal + "<br>");
    $($("li").first()).before(plaats);
    $($("li").last()).after("<br>"+ "Weer 3: " + lijn );
    
});