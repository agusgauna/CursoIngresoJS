function mostrar()
{
	var mesDelAño;

	mesDelAño = txtIdMes.value;
	
	switch(mesDelAño) {
		case "Enero":
		case "Marzo":
		case "Mayo":
		case "Julio":
		case "Agosto":
		case "Octubre":
		case "Septiembre":
			alert("El mes tiene 31 días.");
			break;
		case "Febrero":
			alert("El mes tiene 28 días.");
			break;
		default:
			alert("El mes tiene 30 días.");
			break;
	}
	
}//FIN DE LA FUNCIÓN