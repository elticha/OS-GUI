var notesCounter = 0;
var showing = false;
var notas_abiertas = [5];

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
		localStorage.setItem("user","Administrador");
		localStorage.setItem("password","12345");
	}
	
	$("#userName").text(localStorage.getItem("user"));
	
	//Evitar que el formulario refresque la página
	$("#form_calc").submit(function(e){
		e.preventDefault();
		$("#calculadora-container").hide();
	});
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
	
	//Abrir la calculadora
	$("#start-calc").click(function(e){
		e.preventDefault();
		closeMenu();
		showing = false;
		createNewCalc();
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
	//var dataNote;
	var div_nota = "<div id='notepad" + notesCounter + "' class='note'>" + "<button class= 'addNote'>+</button>" + 
				   "<p id='note-header'> Nota " + (notesCounter+1) + "<button id='close-note"+ notesCounter + "'>X</button>" + 
				   "</p>" + "<textarea id='note-content'></textarea>" + "</div>";
	var html = document.getElementsByTagName("body");
	
	/*
	
	COPIADO DEL PROFESOR
	
	var body = document.getElementsByTagName("body");
	var nota = document.createElement("div");
	nota.setAttribute("class","nota");
	body[0].appendChild(nota);
	
	var create = document.createElement("div");
	create.setAttribute("class","create");
	nota.appendChild(create);
	$(".nota").draggable();
	*/
	
	notas_abiertas[notesCounter] = div_nota;
	/*for(key=0; key<localStorage.length; key++){
		if(key == key)
		dataNote= localStorage.getItem(key);
	}*/
	$(div_nota).appendTo(html);
	$(function () {
        //Poder mover cada ventana creada	
		for(var i = 0; i < notas_abiertas.length; i++){
			var aux = "#notepad" + i;
			var aux_btn = "#close-note" + i;
			
			$(aux).draggable();
			// Función de cerrar ventana
			$(aux_btn).click(function(e){
				e.preventDefault();
				// Guardado (si aplica), de datos en LocalStorage
				/*dataNote= $("#note-content").value();
				if(dataNote != null){
					localStorage.setItem(i,dataNote);
				}*/
				$(this).parent().parent().remove();
				if(notesCounter > 1){
					notesCounter--;
				}else{
					notesCounter = 0;
				}
			});
		}
    });
	notesCounter++;
	
	$(".addNote").click(function(e){
		e.preventDefault();
		createNewNote();
	});
}

function createNewCalc(){
	"use strict";
	var calc_div = $("#calculadora-container");
	calc_div.draggable();
	$("#calculadora-container").show();
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

// CÓDIGO DE LA CALCULADORA
// Aún no se ha implementado el uso de "." (punto). Por decir: 2.5, 1.2, 1.0, etc...
// Sólo acepta números enteros por el momento, no decimales.

var num1=0, num2=0; 
var mostrado=""; 
var comprobador=0; 
var operador=0; 

// Función para borrar 
function nada(){ 
	num1=0; 
	num2=0; 
	mostrado=""; 
	comprobador=0; 
	operador=0; 
	document.formi.ver.value=0;
	return false;
} 
// Función de los operadores 
function operacion(a){
	switch (a){ 
	case 1:
		operador=1; 
		document.formi.ver.value="+"; 
		break; 
	case 2: 
		operador=2; 
		document.formi.ver.value="-"; 
		break; 
	case 3: 
		operador=3 ;
		document.formi.ver.value="*"; 
		break; 
	case 4: 
		operador=4; 
		document.formi.ver.value="/"; 
		break; 
	default: ; // No hay nada xD
	}
	mostrado=""; 
	comprobador=1;
	return false;
} 

// Función para que los botones se muestren en el input text 
function mostrar(a){
	"use strict";
	mostrado=mostrado+a; 
	document.formi.ver.value=mostrado; 

	if(comprobador==0){ 
		num1=parseFloat(mostrado); 
	}else if(comprobador==1){ 
		num2=parseFloat(mostrado); 
	}
	return false;
}

// Función que hace el resultado 
function resultado(){
	"use strict";
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
	return false;
}

////////////////////////////////////////////////////

//Apuntes 22/01/18




