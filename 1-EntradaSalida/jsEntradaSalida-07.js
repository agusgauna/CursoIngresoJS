/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
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

function restar()
{
	var unNumero;
	var otroNumero;
	var resta;

	//Entradas
	unNumero= txtIdNumeroUno.value;
	otroNumero= txtIdNumeroDos.value;

	//Conversiones (Parseo)
	unNumero = parseInt(unNumero);
	otroNumero = parseInt(otroNumero);

	resta = unNumero - otroNumero;

	alert("La resta es " + resta);	
	
}

function multiplicar()
{ 
	var unNumero;
	var otroNumero;
	var multiplicacion;

	//Entradas
	unNumero= txtIdNumeroUno.value;
	otroNumero= txtIdNumeroDos.value;

	//Conversiones (Parseo)
	unNumero = parseInt(unNumero);
	otroNumero = parseInt(otroNumero);

	multiplicacion = unNumero * otroNumero;

	alert("La multiplicacion es " + multiplicacion);	
	
}

function dividir()
{
	var unNumero;
	var otroNumero;
	var division;

	//Entradas
	unNumero= txtIdNumeroUno.value;
	otroNumero= txtIdNumeroDos.value;

	//Conversiones (Parseo)
	unNumero = parseFloat(unNumero);
	otroNumero = parseFloat(otroNumero);

	division = unNumero / otroNumero;

	alert("La division es " + division);	
	
}

