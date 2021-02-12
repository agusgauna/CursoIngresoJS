function mostrar()
{
	var estacionIngresada;
	var destinoIngresado;
	var tarifaBase;
	var tarifaFinal;
	var descuento;

	estacionIngresada = txtIdEstacion.value;
	destinoIngresado = txtIdDestino.value;
	tarifaBase = 15000;

	switch(estacionIngresada) {
		case "Invierno":
			switch(destinoIngresado) {
				case "Bariloche":
					descuento = 1.2;
					break;
				case "Cataratas":
				case "Cordoba":
					descuento = 0.9;
					break;
				default:
					descuento = 0.8;
					break;
			}
			break;

		case "Verano":
			switch(destinoIngresado) {
				case "Bariloche":
					descuento = 0.8;
					break;
				case "Cataratas":
				case "Cordoba":
					descuento = 1.1;
					break;
				default:
					descuento = 1.2;
					break;
			}
			break;

		default:
			switch(destinoIngresado) {
				case "Cordoba":
					descuento = 1;
					break;
				default:
					descuento = 1.1;
					break;
			}
			break;	
	}

	tarifaFinal = tarifaBase * descuento;

	alert("La tarifa final de su estadia es: " + tarifaFinal);

}//FIN DE LA FUNCIÓN