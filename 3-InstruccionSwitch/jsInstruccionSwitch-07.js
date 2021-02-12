function mostrar()
{
	var destinoIngresado;

	destinoIngresado = txtIdDestino.value;

	switch(destinoIngresado) {
		case "Bariloche":
			alert("La ciudad se encuentra al Oeste");
			break;
		case "Cataratas":
			alert("La ciudad se encuentra al Norte");
			break;
		case "Mar del plata":
			alert("La ciudad se encuentra al Este");
			break;
		case "Ushuaia":
			alert("La ciudad se encuentra al Sur");
			break;
	}

}//FIN DE LA FUNCIÓN