document.addEventListener("DOMContentLoaded", function () {
  const splashScreen = document.getElementById("splashScreen");

  // Bloque 1: Oculta la splash screen después de 5 segundos y redirige automáticamente
  setTimeout(function () {
    if (splashScreen) {
      // Asegurarse de que la splashScreen exista
      splashScreen.style.opacity = "0"; // Inicia la transición de opacidad

      // Espera a que la transición termine (0.5 segundos) antes de redirigir
      setTimeout(function () {
        // RUTA CORREGIDA: Asume que 'IngresoAula' está en la misma carpeta que el HTML principal.
        window.location.href = "IngresoAula/ingreso.html";
      }, 500); // Pequeño retraso adicional para asegurar que la opacidad llegue a 0
    } else {
      // Si no hay splash screen, redirige directamente después de los 5 segundos originales
      // RUTA CORREGIDA: Asume que 'IngresoAula' está en la misma carpeta que el HTML principal.
      window.location.href = "IngresoAula/ingreso.html";
    }
  }, 5000); // 5000 milisegundos = 5 segundos

  // Bloque 2: Redirección al hacer clic en el botón "btn-ver-ia"
  const btnVerIa = document.getElementById("btn-ver-ia");
  if (btnVerIa) {
    // Asegurarse de que el botón exista antes de intentar añadir el evento
    btnVerIa.addEventListener("click", function () {
      // RUTA CORREGIDA: Asume que 'IngresoAula' está en la misma carpeta que el HTML principal.
      window.location.href = "IngresoAula/ingreso.html";
    });
  }
});
