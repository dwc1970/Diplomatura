document.addEventListener("DOMContentLoaded", () => {
  const regresarBtn = document.getElementById("regresarBtn");
  const completadoBtn = document.getElementById("completadoBtn");

  if (regresarBtn) {
    regresarBtn.addEventListener("click", () => {
      // RUTA CORRECTA AHORA:
      // Sube un nivel de 'contenidos/' (con '../')
      // y luego entra en la carpeta 'estrategias/'
      // para encontrar 'estrategias.html'
      window.location.href = "../estrategias.html";
    });
  }

  if (completadoBtn) {
    // Esta ruta se mantiene igual, asumiendo que 'evaluacion.html'
    // sigue en la misma carpeta 'contenidos/' que 'fundamentos.html'
    completadoBtn.addEventListener("click", () => {
      window.location.href = "evaluacion.html";
    });
  }
});
