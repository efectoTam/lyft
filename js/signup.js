$(document).ready(function (){

	//Como inicia automáticamente en Chile, se limitan los números para el teléfono a penas se abre la página.
	var caracteres = 10;
	$("#exampleInputAmount").keyup(function(){
    	if($(this).val().length > caracteres){
       		$(this).val($(this).val().substr(0, caracteres));
		}
	});
	//Cuando se hace click en cada bandera
	$('.mexico').click(function (){
		$(".textareaTel").val("");
		$(".tamanoBanderas").attr("src","img/banderas/MX.png");
		$(".prefijoTel").text("+52");
		$(".textareaTel").attr("placeholder", "123 456 7891");

		var caracteres = 10;
		$("#exampleInputAmount").keyup(function(){
    		if($(this).val().length > caracteres){
        		$(this).val($(this).val().substr(0, caracteres));
			}
		});
	});

	$('.peru').click(function (){
		$(".textareaTel").val("");
		$(".tamanoBanderas").attr("src","img/banderas/PE.png");
		$(".prefijoTel").text("+51");
		$(".textareaTel").attr("placeholder", "123 456 789");

		var caracteres = 9;
		$("#exampleInputAmount").keyup(function(){
    		if($(this).val().length > caracteres){
        		$(this).val($(this).val().substr(0, caracteres));
			}
		});
	});

	$('.estadosUnidos').click(function (){
		$(".textareaTel").val("");
		$(".tamanoBanderas").attr("src","img/banderas/US.png");
		$(".prefijoTel").text("+1");
		$(".textareaTel").attr("placeholder", "(123) 456 7890");

		var caracteres = 10;
		$("#exampleInputAmount").keyup(function(){
    		if($(this).val().length > caracteres){
        		$(this).val($(this).val().substr(0, caracteres));
			}
		});
	});

	$('.chile').click(function (){
		$(".textareaTel").val("");
		$(".tamanoBanderas").attr("src","img/banderas/CL.png");
		$(".prefijoTel").text("+56");
		$(".textareaTel").attr("placeholder", "(9) 1234 5678");

		var caracteres = 10;
		$("#exampleInputAmount").keyup(function(){
    		if($(this).val().length > caracteres){
        		$(this).val($(this).val().substr(0, caracteres));
			}
		});
	});

	//El botón para retroceder conecta con Home
	$(".retroceder").click(function(){
		window.location.href = "index.html";
	});

	//El textarea solo acepta números, no letras
    $('.textareaTel').keyup(function (){
        this.value = (this.value + '').replace(/[^0-9]/g, '');
    });

    //Se genera un código aleatorio cuando se hace click en next
	$(".nextNumerico").click(function(){
		function numeroAleatorio(min, max) {
  			alert("LAB-"+Math.round(Math.random() * (max - min) + min));
		}
		numeroAleatorio(100, 999);
	});
});