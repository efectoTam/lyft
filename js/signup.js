//Para signup y country

$('.mexico').click(function (){
	$(".tamanoBanderas").attr("src","img/banderas/MX.png");
	$(".prefijoTel").text("+52");
	$(".textareaTel").attr("placeholder", "123 456 7891");
});

$('.peru').click(function (){
	$(".tamanoBanderas").attr("src","img/banderas/PE.png");
	$(".prefijoTel").text("+51");
	$(".textareaTel").attr("placeholder", "123 456 789");
});

$('.estadosUnidos').click(function (){
	$(".tamanoBanderas").attr("src","img/banderas/US.png");
	$(".prefijoTel").text("+1");
	$(".textareaTel").attr("placeholder", "(123) 456 7890");
});

$('.chile').click(function (){
	$(".tamanoBanderas").attr("src","img/banderas/CL.png");
	$(".prefijoTel").text("+56");
	$(".textareaTel").attr("placeholder", "(9) 1234 5678");
});