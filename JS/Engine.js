$(document).ready(function(){

	"use strict";
	var showing = false;
    $("#Desktop").hide();
	$("#TaskBar").hide();

	// Abre herramienta LocalStorage
	var banderaPrimeraVez= localStorage.getItem("banderaPrimeraVez");
	if(!banderaPrimeraVez || banderaPrimeraVez == null){
		localStorage.setItem("banderaPrimeraVez","true");
		localStorage.setItem("user","admin");
		localStorage.setItem("password","12345");
	}
	// Cierra herramienta de LocalStorage

	// Abre inicio de sesión
    //Mostramos únicamente el div de lockscreen
    $("#login").click(function(e){
		e.preventDefault();
		var inputUserPassword= document.getElementById("password").value;
		var storageUserPassword= localStorage.getItem("password");
		if(inputUserPassword == storageUserPassword){
			$("#login-fx").get(0).play();
			$("#LockScreen").fadeOut(1000,function(){
				$("#LockScreen").hide();
				//Mostrar el escritorio
				$("#Desktop").fadeIn(1000,function(){
					$("#Desktop").show();
					$("#TaskBar").show();
				}).fadeIn(1000);
				
			}).fadeOut(1000);
		}else
			alert("Contraseña Incorecta");
	});
	// Cierra inicio de sesión
	
	//Abrir el menú de inicio
	$("#home-logo").click(function(e){
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
	// Cierra menú de inicio
});

/*
// CÓDIGO DE LA CALCULADORA
// Aún no se ha implementado el uso de "." (punto). Por decir: 2.5, 1.2, 1.0, etc...
// Sólo acepta números enteros por el momento, no decimales.

var num1=0,num2=0; 
var mostrado=""; 
comprobador=0; 
operador=0; 

// Función para borrar 
function nada(){ 
	num1=0; 
	num2=0; 
	mostrado=""; 
	comprobador=0; 
	operador=0; 
	document.formi.ver.value=0;
} 
// Función de los operadores 
function operacion(a){
	switch (a){ 
	case 1:
		operador=1 
		document.formi.ver.value="+"; 
		break; 
	case 2: 
		operador=2 
		document.formi.ver.value="-"; 
		break; 
	case 3: 
		operador=3 
		document.formi.ver.value="*"; 
		break; 
	case 4: 
		operador=4 
		document.formi.ver.value="div"; 
		break; 
	default: ; // No hay nada xD
	}
	mostrado=""; 
	comprobador=1; 
} 

// Función para que los botones se muestren en el input text 
function mostrar(a){

	mostrado=mostrado+a; 
	document.formi.ver.value=mostrado; 

	if(comprobador==0){ 
		num1=parseFloat(mostrado); 
	}else if(comprobador==1){ 
		num2=parseFloat(mostrado); 
	}
}

// Función que hace el resultado 
function resultado(){ 
	switch (operador){ 
	case 1: 
		document.formi.ver.value=num1+num2; 
		break; 
	case 2: 
		document.formi.ver.value=num1-num2; 
		break; 
	case 3: 
		document.formi.ver.value=num1*num2; 
		break; 
	case 4: 
		document.formi.ver.value=num1/num2; 
		break; 
	default: ; // No hay nada xD
	} 
	num1=parseFloat(document.formi.ver.value); 
	mostrado=""; 
}
*/