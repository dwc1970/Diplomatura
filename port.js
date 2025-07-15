document.addEventListener("DOMContentLoaded", () => {
  const splashScreen = document.getElementById("splashScreen");

  // Espera 5 segundos antes de iniciar el desvanecimiento
  setTimeout(() => {
    splashScreen.style.transition = "opacity 1s ease"; // Asegura la transición CSS
    splashScreen.style.opacity = "0";

    // Después de 1 segundo (duración de la transición), redirige
    setTimeout(() => {
      // **CAMBIO IMPORTANTE AQUÍ:**
      // Si ingreso.html está en la misma carpeta que index.html, usa:
      // window.location.href = "ingreso.html";

      // Si ingreso.html está dentro de una carpeta llamada 'ingreso',
      // y tu index.html está en la raíz, entonces la ruta correcta es:
      window.location.href = "ingreso/ingreso.html";

      // Si quieres evitar que el usuario regrese con el botón atrás, puedes usar:
      // window.location.replace("ingreso/ingreso.html");
      // Ten en cuenta que window.location.replace() es más adecuado para pantallas de carga
      // o redirecciones permanentes, ya que elimina la página actual del historial.
    }, 1000);
  }, 5000);
});
