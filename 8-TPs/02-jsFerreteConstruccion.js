/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	var largo;
	var ancho;
	var perimetro;
	var totalAlambre;

	largo = txtIdLargo.value;
	ancho = txtIdAncho.value;

	largo = parseFloat(largo);
	ancho = parseFloat(ancho);
	perimetro = largo*2 + ancho*2
	totalAlambre = perimetro * 3;

	alert("El rectangulo requiere: " +totalAlambre + " de alambre");

}
function Circulo () 
{
	var radio;
	var pi;
	var area;
	var totalAlambre;

	radio = txtIdRadio.value;
	pi = Math.PI;

	radio = parseFloat(radio);
	pi = parseFloat(pi);
	area = pi * radio * radio
	totalAlambre = area *3;

	alert("El circulo requiere: " +totalAlambre + " de alambre");
	
}
function Materiales () 
{
	var largo;
	var ancho;
	var area;
	var cemento;
	var cal;

	largo = txtIdLargo.value;
	ancho = txtIdAncho.value;

	largo = parseFloat(largo);
	ancho = parseFloat(ancho);
	area = largo * ancho;
	cemento = area * 2;
	cal = area * 3;

	alert("Se necesitan " + cemento + " bolsas de cemento y " + cal + " de cal" );

}