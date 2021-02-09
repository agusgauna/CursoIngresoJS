function mostrar()
{
	var edad;

	edad = txtIdEdad.value;
	edad = parseInt(edad);

	if(edad > 17) {
		alert("Ud es mayor de edad");
	} else {
		if (edad > 12 && edad < 18)
		{
			alert("Ud es un adolescente");
		} else {
			alert("Ud es menor de 13 años");
		}
	}
	
}//FIN DE LA FUNCIÓN