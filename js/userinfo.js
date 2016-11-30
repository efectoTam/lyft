$(function() {
 	$('#file-input').change(function(e) {
      	addImage(e); 
  	});
 	function addImage(e){
    	var file = e.target.files[0],
    	imageType = /image.*/;
    	if (!file.type.match(imageType))
	      return;
	      var reader = new FileReader();
	      reader.onload = fileOnload;
	      reader.readAsDataURL(file);
  		}
 	 function fileOnload(e) {
	    var result=e.target.result;
	    localStorage.setItem("imgUser", result);
	    //Si la imagen se obtiene aquí queda por defecto aunque empiece desde 0
	    $('#nuevaImagenUno').attr("src", localStorage.getItem("imgUser"));
	    $('#nuevaImagenDos').attr("src", localStorage.getItem("imgUser"));
	    $('.perfilEnMenu').attr("src", localStorage.getItem("imgUser"));
  	}
});

$(document).ready(function(){
	// preguntas si existe una imagen guardadad anteriormente
	// si efectivamente existe, reemplazas el src de la imagen perfilEnMenu

  	$("#pUsuarioEstadoUno").append(localStorage.getItem("nombreParaUsuario"));
	$("#pUsuarioEstadoDos").append(localStorage.getItem("nombreParaUsuario"));
	$(".h1NombreUno:eq(0)").append(localStorage.getItem("nombreParaUsuario"));
	$(".h1NombreDos:eq(0)").append(localStorage.getItem("nombreParaUsuario"));
  	//Si la imagen se obtiene aquí hay que refrescar la página
  	//$('#nuevaImagenUno').attr("src", localStorage.getItem("imgUser"));
  	//$('#nuevaImagenDos').attr("src", localStorage.getItem("imgUser"));
  	//$('.perfilEnMenu').attr("src", localStorage.getItem("imgUser"));

  	$(".paraEditar").hide();
  	$(".editarProfile").click(function(){
    	$(".perfilEditado").hide();
    	$(".paraEditar").show();
  	});

  	$(".botonGuardar").click(function(){
	    var textoCasa= $(".textareaCasita").val();
	    $(".pCasita").text(textoCasa);
	    var textoNota= $(".textareaNotaMusical").val();
	    $(".pNotaMusical").text(textoNota);
	    var textoUsuario= $(".textareaDeUsuario").val();
	    $(".pDeUsuario").text(textoUsuario);
	    $(".perfilEditado").show();
	    $(".paraEditar").hide();
  	});
});

/*Para menú*/
$(document).ready(main);
 
var contador = 1;
 
function main(){
  	$('.paraMenuPerfil').click(function(){
    // $('nav').toggle(); 
	    if(contador == 1){
	      $('nav').animate({
	        left: '0'
	      });
	      contador = 0;
	    } else {
	      contador = 1;
	      $('nav').animate({
	        left: '-100%'
	      });
	    }
  	}); 
};

$(document).ready(function (){
  	$(".verPerfil").click(function(){
    	window.location.href = "userinfo.html";
  	});
  	$(".home").click(function(){
    	window.location.href = "index.html";
  	});
});