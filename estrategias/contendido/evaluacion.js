document.addEventListener("DOMContentLoaded", () => {
  const startButton = document.getElementById("startButton");
  const endButton = document.getElementById("endButton");
  const examSection = document.getElementById("exam-section");
  const introSection = document.getElementById("introSection");

  // ... (el código de inicialización que ya tienes) ...
  examSection.style.display = "none";
  endButton.style.display = "none";

  if (startButton) {
    startButton.addEventListener("click", () => {
      introSection.style.display = "none";
      startButton.style.display = "none";
      examSection.style.display = "block";
      endButton.style.display = "inline-block";
      // Aquí podrías iniciar un temporizador si quisieras
    });
  }

  if (endButton) {
    endButton.addEventListener("click", (event) => {
      // Añadimos 'event' como parámetro
      let answeredQuestionsCount = 0;
      const totalQuestions =
        document.querySelectorAll(".question-block").length; // Cuenta el total de preguntas dinámicamente

      // Recorrer cada bloque de pregunta
      const questionBlocks = document.querySelectorAll(".question-block");
      questionBlocks.forEach((block) => {
        // Dentro de cada bloque, verificar si algún radio button está seleccionado
        const radiosInBlock = block.querySelectorAll('input[type="radio"]');
        let isAnswered = false;
        radiosInBlock.forEach((radio) => {
          if (radio.checked) {
            isAnswered = true;
          }
        });
        if (isAnswered) {
          answeredQuestionsCount++;
        }
      });

      // Verificar si se han respondido al menos 4 preguntas
      if (answeredQuestionsCount < 4) {
        alert(
          `Debes responder al menos 4 de las ${totalQuestions} preguntas para terminar el examen. Has respondido ${answeredQuestionsCount}.`
        );
        event.preventDefault(); // Evita que la página se redirija
      } else {
        // Si la condición se cumple, puedes proceder con la lógica del examen
        // Lógica para recoger las respuestas y calcular el puntaje,
        // antes de redirigir a la página de resultados.
        // Por ejemplo, aquí podrías guardar el puntaje en localStorage:
        // localStorage.setItem('examScore', 'tu_puntaje_calculado_aqui');

        // Redireccionar a la página de resultados
        window.location.href = "resultado.html";
      }
    });
  }
});
