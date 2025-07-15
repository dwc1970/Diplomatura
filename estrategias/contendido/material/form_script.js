document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("contactForm");
  const formMessage = document.getElementById("formMessage");

  // Verificar que el formulario existe en el DOM antes de intentar añadir un event listener
  if (contactForm) {
    contactForm.addEventListener("submit", async (event) => {
      event.preventDefault(); // Prevenir el envío por defecto del formulario

      const formData = new FormData(contactForm); // Crea un objeto FormData con todos los campos del formulario

      // Mostrar mensaje de carga al usuario
      formMessage.classList.remove("success", "error");
      formMessage.classList.add("loading");
      formMessage.textContent = "Enviando tu mensaje y PDF...";
      formMessage.style.display = "block"; // Asegúrate de que el mensaje sea visible

      try {
        // Esta es la URL de tu endpoint de backend.
        // ES CRUCIAL que esta URL coincida con la ruta definida en tu servidor Node.js/Express.
        // Si tu backend está corriendo localmente en el puerto 3000, debería ser:
        // "http://localhost:3000/send-email-with-attachment"
        // Si está desplegado, usa la URL de tu dominio (por ejemplo, "https://api.tudominio.com/send-email-with-attachment")
        const response = await fetch(
          "http://localhost:3000/send-email-with-attachment",
          {
            method: "POST", // Siempre POST para enviar datos de formulario y archivos
            body: formData, // FormData se envía directamente; el navegador establece el Content-Type adecuado
          }
        );

        // Verificar si la respuesta del servidor fue exitosa (código de estado 2xx)
        if (response.ok) {
          const result = await response.json(); // Parsea la respuesta JSON del servidor
          formMessage.classList.remove("loading");
          formMessage.classList.add("success");
          formMessage.textContent =
            result.message || "¡Mensaje y PDF enviados con éxito!"; // Muestra el mensaje del servidor o uno por defecto
          contactForm.reset(); // Limpiar el formulario después del envío exitoso
        } else {
          // Si la respuesta no fue exitosa (ej. 400, 500)
          const errorData = await response.json(); // Intenta obtener el mensaje de error del servidor
          formMessage.classList.remove("loading");
          formMessage.classList.add("error");
          formMessage.textContent =
            errorData.message ||
            "Error al enviar el mensaje y/o PDF. Intenta de nuevo."; // Muestra el error del servidor o uno por defecto
        }
      } catch (error) {
        // Captura errores de red (ej. servidor no disponible, problemas de CORS antes de recibir respuesta)
        console.error("Error al enviar el formulario:", error);
        formMessage.classList.remove("loading");
        formMessage.classList.add("error");
        formMessage.textContent =
          "Ocurrió un error de red o del servidor. Por favor, inténtalo más tarde.";
      }
    });
  }
});
