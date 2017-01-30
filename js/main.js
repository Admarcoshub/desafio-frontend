


function validar(e) {

	var key= e.keyCode || e.which;

	var teclado = String.fromCharCode(key);

	var entero = "1234567890";

	var especiales = "8-37-38-46";

	var teclado_especial = false;

	for(var i in especiales) {
		if(key == especiales[i]) {
			teclado_especial = true;
		}
	}

	if (entero.indexOf(teclado) == -1  && !teclado_especial) {
		return false;
	}

}

var numeros = [];

function ingresar () {
	var newvalor = document.getElementById('valor').value;
	numeros.push(newvalor);

	var ver = "";
	for (i = 0 ; i < numeros.length ; i++) {
		ver= ver + numeros[i];
	}

	document.getElementById("valores").innerHTML = ver;
 }

 function ordenar() {

 	var newvalor2 = document.getElementById('valor').value;
	
 	newvalor2.sort();
 	document.write(newvalor2);
 	
 }

