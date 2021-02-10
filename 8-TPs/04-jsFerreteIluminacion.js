/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
	var precioLampara;
	var precioFinal;
	var precioDescuento;
	var cantLamparas;
	var marcaLampara;

	precioLampara = 35;
	cantLamparas = txtIdCantidad.value;
	cantLamparas = parseInt(cantLamparas);
	marcaLampara = Marca.value;
	precioFinal = precioLampara * cantLamparas;

	if (cantLamparas > 5) {
		precioDescuento = precioFinal * 0.5;
	} 
	else
	{
		if (cantLamparas == 5) 
		{
			if(marcaLampara == "ArgentinaLuz"){
				precioDescuento = precioFinal * 0.6;
			}
			else
			{
				precioDescuento = precioFinal * 0.7;
			}
		}
		else
		{
			if (cantLamparas == 4) {
				if (marcaLampara == "ArgentinaLuz" || marcaLampara == "FelipeLamparas") {
					precioDescuento = precioFinal * 0.75;
				}
				else 
				{
					precioDescuento = precioFinal * 0.8;
				}
			}
			else
			{
				if (cantLamparas == 3) {
					if (marcaLampara == "ArgentinaLuz") {
						precioDescuento = precioFinal * 0.85;
					}
					else
					{
						if (marcaLampara == "FelipeLamparas") {
							precioDescuento = precioFinal * 0.90;
						}
						else
						{
							precioDescuento = precioFinal * 0.95;
						}
					}
				}
			}
		} 
	}

	var ingresosBrutos;

	if (precioDescuento > 120) {
		ingresosBrutos = precioDescuento * 0.1;
		precioDescuento = precioDescuento + ingresosBrutos;

		alert("IIBB Usted pago: " + precioDescuento + ", siendo " + ingresosBrutos + " el impuesto que se pagó.");
	}
	txtIdprecioDescuento.value = precioDescuento;
 	
}