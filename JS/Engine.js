var notesCounter = 0;
var showing = false;
var notas_abiertas = [5];
var max = 5;

$(document).ready(function(){
	"use strict";
	$("#calculadora-container").hide();
    $("#Desktop").hide();
	$("#TaskBar").hide();
	
	//Fijar la entrada de texto automaticamente en el campo de password
	$("#password").focus();
	

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
	
	//Cuando detecte la tecla ENTER
	
	$("#password").on('keyup',function(e){
		e.preventDefault();
		if(e.keyCode == 13){
			access();
		}
	});
	
    $("#login").click(function(e){
		e.preventDefault();
		access();
	});
	// Cierra inicio de sesión
	
	//Abrir el menú de inicio
	$("#home-logo").click(function(e){
		e.preventDefault();
		if(!showing){
			openMenu();
			showing = true;
		}else{
			closeMenu();
			showing = false;
		}
	});
	
	
	//Abrir una nota
	$("#start-notes").click(function(e){
		e.preventDefault();
		closeMenu();
		showing = false;
		createNewNote();
	});
});

function access(){
	"use strict";
	var inputUserPassword = $("#password").val();
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
		}else{
			alert("Contraseña Incorecta");
			$("#password").val("");
		}
}

function createNewNote(){
	"use strict";
	var div_nota = "<div id='notepad" + notesCounter + "' class='note'>" + 
				   "<p id='note-header'> Nota " + notesCounter +
				   "<button id='close-note'>X</button>" + 
				   "</p>" + "<textarea id='note-content'></textarea>" + "</div>";
	var html = document.getElementsByTagName("body");
	notas_abiertas[notesCounter] = div_nota;
	$(div_nota).appendTo(html);
	$(function () {
        //Poder mover cada ventana creada	
		for(var i = 0; i < notas_abiertas.length; i++){
			var aux = "#notepad" + i;
			$(aux).draggable();
		}		
		//Eliminar una ventana
		/*
		$("#close-note").click(function(e){
			e.preventDefault();
			var selectedNote = jQuery(".note").click().attr("id");
			alert(selectedNote);
			var selectedNote_ID = "#"+selectedNote;
			$(selectedNote_ID).remove();
			notesCounter--;
		});
		*/
    });

	notesCounter++;
}

function openMenu(){
	"use strict";
	$("#menu-div").animate({
		'left':'0'
	},500);	
}
function closeMenu(){
	"use strict";
	$("#menu-div").animate({
		'left':'-900'
	},500);
}
/*

<div id="notepad" class="note">
        	<p>Nueva nota
        		<button id="close-note">X</button>
        	</p>
        	<textarea id="note-content"> Soy una nota :v</textarea>
		</div> 

*/
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