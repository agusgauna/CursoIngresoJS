/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var unNumero;
	var otroNumero;
	var suma;

	//Entradas
	unNumero= txtIdNumeroUno.value;
	otroNumero= txtIdNumeroDos.value;

	//Conversiones (Parseo)
	unNumero = parseInt(unNumero);
	otroNumero = parseInt(otroNumero);

	suma = unNumero + otroNumero;

	alert("La suma es " + suma);
}

