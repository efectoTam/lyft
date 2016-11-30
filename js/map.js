$(document).ready(main);
 
var contador = 1;
 
function main(){
	$('.miniPerfil').click(function(){
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

	$(".nombreUsuario:eq(0)").append(localStorage.getItem("nombreParaUsuario"));


});