document.addEventListener("DOMContentLoaded", () => {
  // Select all h3 elements within the topic list
  const topicTitles = document.querySelectorAll("#topicList li h3");

  topicTitles.forEach((h3) => {
    h3.addEventListener("click", (event) => {
      // Prevent any parent click events from firing (though not strictly necessary here)
      event.stopPropagation();

      const listItem = h3.closest("li"); // Get the parent <li> element
      // We're using the data-topic attribute from the <li> for more robust mapping
      const topicSlug = listItem.getAttribute("data-topic");

      let targetPage = "";

      // Map the data-topic slugs to your HTML file paths
      switch (topicSlug) {
        case "dilemas-ia":
          targetPage = "contenido/dilemas.html";
          break;
        case "fundamentos-ia":
          targetPage = "contenido/fundamentos.html";
          break;
        case "diseno-arquitectura":
          targetPage = "contenido/diseno_arquitectura.html";
          break;
        case "desarrollo-implementacion":
          targetPage = "contenido/desarrollo.html"; // Example path
          break;
        case "pruebas-calidad":
          targetPage = "contenido/pruebas.html"; // Example path
          break;
        case "lanzamiento-post":
          targetPage = "contenido/lanzamiento.html"; // Example path
          break;
        default:
          console.warn(
            `No se encontró una página para el tema: "${topicSlug}"`
          );
          alert(`No hay una página definida para este tema.`);
          return; // Exit if no page is defined
      }

      // Redirect the current window to the target page
      if (targetPage) {
        window.location.href = targetPage;
      }
    });
  });
});
