$(document).ready(function (){
	$(".aSignup").click(function(){
		window.location.href = "map.html";
	});

	$(".nextUsuario").click(function(){
	//Validaciones de datos al hacer click en el boton next
		var nombre = $('.nombre').val();
		if(nombre==null || nombre.length==0 || /^\s+$/.test(nombre)){
			alert("El campo first name no debe ir vacío.");
			return false;
		}

		var apellido = $('.apellido').val();
		if(apellido==null || apellido.length==0 || /^\s+$/.test(apellido)){
			alert("El campo last name no debe ir vacío.");
			return false;
		}

		var mail = $('.email').val();
		if(mail==null || mail.length==0 || /^\s+$/.test(mail)){
			alert("El campo email no debe ir vacío.");
			return false;
		}

		var patronNombre = /^[a-zA-Z]*$/;
  		if(nombre.search(patronNombre)){
  			alert("Solo se permiten caracteres de la a-z en first name y last name");
  			return false;
  		}

  		var patronApellido = /^[a-zA-Z]*$/;
  		if(apellido.search(patronApellido)){
  			alert("Solo se permiten caracteres de la a-z en first name y last name");
  		    return false;
  		}

  		var ticket = $(".elCheckbox").is(":checked");
        if (!ticket) {
        	alert("Debe aceptar las condiciones");
        	return false;
        }

  		else{
  			//Para los campos nombre y apellido la primera letra debe ser mayúscula.
	  		//PARA NOMBRE
			//Hacer que todas las letras queden en minúscula por si el usuario puso algo en mayúscula
			var nombreMinuscula= document.getElementById('name').value.toLowerCase();
			document.getElementById('name').value=nombreMinuscula;
			//Hacer que la primera letra sea mayúscula, reservar dato
			var primeraMayusculaN= nombre.substr(0,1).toUpperCase();
			//Hacer que las letras de la palabra sean un arreglo
			var nombreChico= document.getElementById('name').value;
			var arregloNombre=nombreChico.split("");
			//Quitar el primer elemento del arreglo
			var sinPrimeraLetraN= arregloNombre.shift();
			//Agregar la primera letra pero en mayúscula
			var conPrimeraLetraN= arregloNombre.unshift(primeraMayusculaN);
			//Unir los elementos del array en una palabra
			var nombreListo= arregloNombre.join("");
			document.getElementById('name').value=nombreListo;

			//PARA APELLIDO
			//Hacer que todas las letras queden en minúscula por si el usuario puso algo en mayúscula
			var apellidoMinuscula= document.getElementById('lastname').value.toLowerCase();
			document.getElementById('lastname').value=apellidoMinuscula;
			//Hacer que la primera letra sea mayúscula, reservar dato
			var primeraMayusculaA=apellido.substr(0,1).toUpperCase();
			//Hacer que las letras de la palabra sean un arreglo
			var apellidoChico= document.getElementById('lastname').value;
			var arregloApellido=apellidoChico.split("");
			//Quitar el primer elemento del arreglo
			var sinPrimeraLetraA= arregloApellido.shift();
			//Agregar la primera letra pero en mayúscula
			var conPrimeraLetraA=arregloApellido.unshift(primeraMayusculaA);
			//Unir los elementos del array en una palabra
			var apellidoListo=arregloApellido.join("");
			document.getElementById('lastname').value=apellidoListo;

			var nombre = $('.nombre').val();
			localStorage.setItem("nombreParaUsuario", nombre);
			
			window.location.href = "map.html";
			return false;
  		};
	});



});