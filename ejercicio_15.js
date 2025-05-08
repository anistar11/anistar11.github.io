let hora = prompt("Ingrese la hora actual:");

if (hora >=0 && hora <=23.59) {
	if (hora >=6.00 && hora <= 12.59) {
		document.write("<h1>😀 Good Morning</h1>");
	}else if (hora >= 13.00 && hora <=18.59){
		document.write("<h1>🫡 Good Afternoon</h1>");
	}else{
		document.write("<h1>😴 Good Night</h1>");
	}
}else{
	document.write("<h1> 😔La hora proporcionada no es correcta </h1>");
}