function concatenarCadenas(){
  nombre=document.getElementById("cajaNombre").value;
  apellidoPaterno=document.getElementById("cajaApellidoPaterno").value;
  apellidoMaterno=document.getElementById("cajaApellidoMaterno").value;
  nombreCompleto=nombre+ " " +apellidoPaterno+ " " +apellidoMaterno;
  document.getElementById("cajaNombreCompleto").value=nombreCompleto;
}

function longitudTexto(texto){
  return texto.length;
}

function textoAMayusculas(texto){
  return texto.toUpperCase();
}

function textoAMinusculas(texto){
  return texto.toLowerCase();
}
