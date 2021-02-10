function mostrar()
{
	var numeroRandom;

	numeroRandom = Math.floor(Math.random() * 11 - 1) + 1;
	 
	if(numeroRandom >8 )
	{
		alert("EXCELENTE. Tu nota es: " + numeroRandom);
	} else {
		if(numeroRandom > 3)
		{
			alert("APROBÓ. Tu nota es: " + numeroRandom);
		} else {
			alert("Vamos, la proxima se puede. Tu nota es: " + numeroRandom);
		}
	}
}//FIN DE LA FUNCIÓN