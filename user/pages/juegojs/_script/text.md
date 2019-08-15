---
title: script
image_align: left
---

<html>


	<br>
	<form action = "">
		
		<b>Ingrese un numero:</b> <input type="text" id="n2" time="2s"  onkeyup="grafico()">
		
	</form >
	<br>
	
		
		
			<script type="text/javascript">
				function grafico(){
				
						var a= document.getElementById("n2").value;
						//Imprimir figuras de triangulos formados por asteriscos con ciclo for
						var d,c;
						//triangulo rectangulo recto a derechas

						for (d=1;d<=a;d++)
						{
							for(c=1;c<=d;c++)
							document.write("*");
							document.write("<br>");
						}
						//document.write("<br>");

						//triangulo rectangulo invertido a izquierdas
						for (d=a;d>=1;d--)
						{
							for(c=1;c<=a-d;c++)
								document.write("&nbsp&nbsp");
							for(c=1;c<=d;c++)
								document.write("*");
							document.write("<br>");
						}
						document.write("<br>");

						}
	
		
		
	</script>
</html>