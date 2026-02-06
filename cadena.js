function concatenarCadenas(){
  nombre=document.getElementById("cajaNombre").value;
  apellidoPaterno=document.getElementById("cajaApellidoPaterno").value;
  apellidoMaterno=document.getElementById("cajaApellidoMaterno").value;
  nombreCompleto=nombre+ " " +apellidoPaterno+ " " +apellidoMaterno;
  document.getElementById("cajaNombreCompleto").value=nombreCompleto;
}
