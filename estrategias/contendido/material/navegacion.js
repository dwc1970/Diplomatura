// js/navegacion.js (VERSIÓN CORREGIDA PARA SECUENCIA LINEAL)
document.addEventListener("DOMContentLoaded", () => {
  const siguienteBtn = document.getElementById("siguienteBtn");
  const anteriorBtn = document.getElementById("anteriorBtn");

  // Lógica para el botón Siguiente
  if (siguienteBtn) {
    siguienteBtn.addEventListener("click", () => {
      const currentPage = window.location.pathname.split("/").pop(); // Obtiene el nombre del archivo actual

      if (currentPage === "archivo1.html") {
        window.location.replace("archivo2.html");
      } else if (currentPage === "archivo2.html") {
        window.location.replace("archivo3.html");
      } else if (currentPage === "archivo3.html") {
        window.location.replace("archivo4.html");
      } else if (currentPage === "archivo4.html") {
        window.location.replace("archivo5.html");
      } else if (currentPage === "archivo5.html") {
        window.location.replace("intro.html"); // ¡Aquí archivo5.html va a intro.html!
      }
      // Si hay más páginas después de intro.html en el futuro, las añadirías aquí.
      // Por ejemplo, si intro.html no es el final:
      // else if (currentPage === "intro.html") {
      //   window.location.replace("alguna_otra_pagina.html");
      // }
    });
  }

  // Lógica para el botón Anterior
  if (anteriorBtn) {
    anteriorBtn.addEventListener("click", () => {
      const currentPage = window.location.pathname.split("/").pop();

      if (currentPage === "intro.html") {
        window.location.replace("archivo5.html"); // ¡Desde intro.html, anterior vuelve a archivo5.html!
      } else if (currentPage === "archivo5.html") {
        window.location.replace("archivo4.html");
      } else if (currentPage === "archivo4.html") {
        window.location.replace("archivo3.html");
      } else if (currentPage === "archivo3.html") {
        window.location.replace("archivo2.html");
      } else if (currentPage === "archivo2.html") {
        window.location.replace("archivo1.html");
      }
      // Si estás en archivo1.html y presionas "Anterior", puedes decidir qué hacer:
      // 1. No hacer nada (quedarse en archivo1.html)
      // 2. Volver al historial del navegador: window.history.back();
      // 3. Ir a una página inicial específica: window.location.replace("pagina_inicial.html");
      // En este ejemplo, no hace nada si estás en archivo1.html
    });
  }
});
