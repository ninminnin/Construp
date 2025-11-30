function validarLogin(event) {
  event.preventDefault();

  const USUARIO_CORRECTO = "A&C Constructora";
  const usuarioIngresado = document.getElementById("usuario").value;

  const CLAVE_CORRECTA = "construp";
  const passwordInput = document.getElementById("password").value;

  if (
    usuarioIngresado === USUARIO_CORRECTO &&
    passwordInput === CLAVE_CORRECTA
  ) {
    alert("Bienvenido a Construp");
    window.location.href = "inicio.html";
  } else {
    alert("Usuario o contraseña incorrectos. Inténtalo de nuevo.");
    document.getElementById("usuario").value = "";
    document.getElementById("password").value = "";
    document.getElementById("usuario").focus();
  }
  return false;
}
