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
    $('#nuevaImagenUno').attr("src",result);
    $('#nuevaImagenDos').attr("src",result);
  }
});

$(document).ready(function(){
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