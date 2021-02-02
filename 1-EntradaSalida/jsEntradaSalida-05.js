/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	var nombreDelAlumno;
	var edadDelAlumno;
	var apellidoDelAlumno;

	nombreDelAlumno = txtIdNombre.value;
	edadDelAlumno= txtIdEdad.value;
	apellidoDelAlumno= prompt("Ingrese su apellido");

	alert("Ud se llama " + nombreDelAlumno + " " + apellidoDelAlumno + " y tiene " + edadDelAlumno + " años");
}

