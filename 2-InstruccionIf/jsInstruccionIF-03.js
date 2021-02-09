function mostrar()
{
	var edad;

	edad = txtIdEdad.value;
	edad = parseInt(edad);

	if(edad > 17) 
	{
		alert("Ud es mayor de edad");
	} else {
		alert("Ud es menor de edad");
	}

}//FIN DE LA FUNCIÓN