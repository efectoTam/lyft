$(document).ready(function (){
	//Cuando se hace click en cada bandera
	$('.mexico').click(function (){
		$(".textareaTel").val("");
		$(".tamanoBanderas").attr("src","img/MX.png");
		$(".prefijoTel").text("+52");
		$(".textareaTel").attr("placeholder", "01 222 123 456");
		$(".textareaTel").attr("maxlength", "11");
	});

	$('.peru').click(function (){
		$(".textareaTel").val("");
		$(".tamanoBanderas").attr("src","img/PE.png");
		$(".prefijoTel").text("+51");
		$(".textareaTel").attr("placeholder", "(01) 1234567");
		$(".textareaTel").attr("maxlength", "9");
	});

	$('.estadosUnidos').click(function (){
		$(".textareaTel").val("");
		$(".tamanoBanderas").attr("src","img/US.png");
		$(".prefijoTel").text("+1");
		$(".textareaTel").attr("placeholder", "(201) 555-5555");
		$(".textareaTel").attr("maxlength", "11");
	});

	$('.chile').click(function (){
		$(".textareaTel").val("");
		$(".tamanoBanderas").attr("src","img/CL.png");
		$(".prefijoTel").text("+56");
		$(".textareaTel").attr("placeholder", "(2) 2123 4567");
		$(".textareaTel").attr("maxlength", "9");
	});

	//El botón para retroceder conecta con Home
	$(".retroceder").click(function(){
		window.location.href = "index.html";
	});

	//El textarea solo acepta números, no letras
    $('.textareaTel').keyup(function (){
        this.value = (this.value + '').replace(/[^0-9]/g, '');
    });

  	$(".verificarCode").hide();
  	//Solo aparece el código
  	$(".nextNumerico").click(function(){
  		var telefono = $('.textareaTel').val();
		if(telefono==null || telefono.length==0 || /^\s+$/.test(telefono)){
			alert("Ingrese su teléfono");
			return false;
		} else{
			var numeroUsuario= $(".textareaTel").val();
			var prefijo = $(".prefijoTel").text();
			$(".telUsuario:eq(0)").append("Enter the code sent to"+ " " + prefijo+" "+numeroUsuario);
			function numeroAleatorio(min, max) {
	  			var numAlea= ("LAB-"+Math.round(Math.random() * (max - min) + min));
	  			alert(numAlea);
	  			localStorage.setItem("codigoDado", numAlea);
			}
			numeroAleatorio(100, 999);
    		$(".ocultarPorCodigo").hide();
    		$(".verificarCode").show();
    	}
  	});
  	$(".retrocederTelefono").click(function(){
  		$(".verificarCode").hide();
		$(".ocultarPorCodigo").show();	
	});

  	$(".nextVerificacion").click(function(){
  		var numeroPorUsuario = $(".ingresoCodigo").val();
  		var numeroGuardado = localStorage.getItem("codigoDado");
  		if (numeroPorUsuario===numeroGuardado){
			window.location.href = "createuser.html";
  		}else{
  			alert("Error en el código.");
  			return false;
  		}

  	});



});