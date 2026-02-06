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

function formatearFechaDDMMAA(dia, mes, anio){
  const diaFormateado = String(dia).padStart(2, "0");
  const mesFormateado = String(mes).padStart(2, "0");
  const anioFormateado = String(anio).slice(-2);
  return `${diaFormateado}/${mesFormateado}/${anioFormateado}`;
}
