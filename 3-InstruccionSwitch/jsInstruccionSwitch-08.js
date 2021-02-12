function mostrar()
{
	var destinoIngresado;

	destinoIngresado = txtIdDestino.value;

	switch(destinoIngresado) {
		case "Bariloche":
		case "Ushuaia":
			alert("En el destino hace FRIO.");
			break;
		default:
			alert("En el destino hace CALOR.");
			break;
	}

}//FIN DE LA FUNCIÓN