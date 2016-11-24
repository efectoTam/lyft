$(document).ready(function (){
	$(".retroceder").click(function(){
		window.location.href = "index.html";
	});

	var caracteresNombre = 30;
	$("#name").keyup(function(){
    	if($(this).val().length > caracteresNombre){
       		$(this).val($(this).val().substr(0, caracteresNombre));
		}
	});

	var caracteresEmail = 50;
	$("#email").keyup(function(){
    	if($(this).val().length > caracteresEmail){
       		$(this).val($(this).val().substr(0, caracteresEmail));
		}
	});



});