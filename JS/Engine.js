$(document).ready(function(){
	"use strict";
	var showing = false;
    $("#Desktop").hide();
	$("#TaskBar").hide();
    //Mostramos únicamente el div de lockscreen
    $("#login").click(function(e){
		e.preventDefault();
		$("#login-fx").get(0).play();
        $("#LockScreen").fadeOut(1000,function(){
            $("#LockScreen").hide();
            //Mostrar el escritorio
            $("#Desktop").fadeIn(1000,function(){
                $("#Desktop").show();
				$("#TaskBar").show();
            }).fadeIn(1000);
            
        }).fadeOut(1000);
    });
	
	//Abrir el menú de inicio
	$("#home-btn").click(function(e){
		e.preventDefault();
		if(!showing){
			$("#menu-div").animate({
				'left':'0'
			},500);	
			showing = true;
		}else{
			$("#menu-div").animate({
				'left':'-900'
			},500);
			showing = false;
		}
	});
});