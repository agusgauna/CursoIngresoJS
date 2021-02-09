function mostrar()
{
	var numeroRandom;

	numeroRandom = Math.floor(Math.random() * 11);
	 
	if(numeroRandom == 9 || numeroRandom == 10)
	{
		alert("EXCELENTE");
	} else {
		if(numeroRandom > 3)
		{
			alert("APROBÓ");
		} else {
			alert("Vamos, la proxima se puede");
		}
	}

}//FIN DE LA FUNCIÓN