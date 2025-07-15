document.addEventListener("DOMContentLoaded", () => {
  const closeButton = document.getElementById("closeButton");
  const finalScoreDisplay = document.getElementById("finalScore");
  const feedbackMessage = document.getElementById("feedbackMessage");

  // NOTA: Para mostrar el puntaje real aquí, necesitarías pasarlo
  // desde la página de evaluación. Una forma común es usar localStorage:
  // Ejemplo (esto iría en evaluacion.js antes de redirigir):
  // localStorage.setItem('examScore', '3'); // Guarda el score antes de ir a resultado.html

  // Y aquí en resultado.js:
  // let score = localStorage.getItem('examScore');
  // if (score) {
  //     finalScoreDisplay.textContent = `${score}/5`; // Ejemplo: si el examen tiene 5 preguntas
  //     // Lógica para el mensaje de feedback basado en el score
  //     if (parseInt(score) >= 3) { // Asumiendo que 3 es el mínimo para "aprobado"
  //         feedbackMessage.textContent = '¡Felicitaciones! Has demostrado un gran conocimiento en Fundamentos de la IA.';
  //         feedbackMessage.style.color = 'green';
  //     } else {
  //         feedbackMessage.textContent = 'Necesitas repasar algunos temas. ¡No te rindas y vuelve a intentarlo!';
  //         feedbackMessage.style.color = 'red';
  //     }
  //     localStorage.removeItem('examScore'); // Opcional: limpiar el score después de mostrarlo
  // } else {
  //     finalScoreDisplay.textContent = 'N/A';
  //     feedbackMessage.textContent = 'No se encontró el puntaje del examen. Por favor, realiza el examen primero.';
  // }

  if (closeButton) {
    closeButton.addEventListener("click", () => {
      // Esta es la ruta para volver a estrategias.html
      // Desde 'contenidos/resultado.html'
      //  1. Subimos un nivel con '../' (para salir de 'contenidos/')
      //  2. Entramos en la carpeta 'estrategias/'
      //  3. Apuntamos al archivo 'estrategias.html'
      window.location.href = "../estrategias/estrategias.html";
    });
  }
});
