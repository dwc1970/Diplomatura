const questions = [
  {
    question:
      "¿Cuál es una de las principales transformaciones que la IA ha traído a la educación según el documento?",
    options: {
      a: "La estandarización de los métodos de enseñanza.",
      b: "La personalización del aprendizaje.",
      c: "La eliminación de los docentes.",
      d: "El aumento de las clases presenciales.",
    },
    correct: "b",
  },
  {
    question:
      "¿Qué permite la IA en la educación en términos de adaptación curricular?",
    options: {
      a: "Crear currículos únicos para cada país.",
      b: "Adaptar los contenidos y el ritmo a las necesidades individuales de cada estudiante.",
      c: "Eliminar la necesidad de currículos formales.",
      d: "Uniformar el aprendizaje en todas las materias.",
    },
    correct: "b",
  },
  {
    question:
      "¿Qué tipo de herramientas impulsadas por IA se mencionan para el feedback y la evaluación en tiempo real?",
    options: {
      a: "Pizarras interactivas tradicionales.",
      b: "Sistemas inteligentes de tutoría y plataformas de evaluación adaptativa.",
      c: "Libros de texto impresos.",
      d: "Calculadoras básicas.",
    },
    correct: "b",
  },
  {
    question:
      "¿Cuál es un desafío ético importante mencionado con respecto a la IA en la educación?",
    options: {
      a: "El alto costo de la tinta de impresora.",
      b: "La privacidad de los datos de los estudiantes y el riesgo de sesgos algorítmicos.",
      c: "La dificultad para encontrar enchufes.",
      d: "La lentitud de las conexiones a internet.",
    },
    correct: "b",
  },
  {
    question:
      "¿Qué rol se sugiere para el docente en un futuro con IA en el aula?",
    options: {
      a: "Ser un mero observador.",
      b: "Un facilitador, mentor y guía, en lugar de una fuente principal de información.",
      c: "Ser reemplazado por la IA.",
      d: "Dictar conferencias magistrales únicamente.",
    },
    correct: "b",
  },
  {
    question:
      "¿Qué se busca promover en los estudiantes con el uso de la IA en la educación?",
    options: {
      a: "La memorización pasiva.",
      b: "El pensamiento crítico, la resolución de problemas y la creatividad.",
      c: "La dependencia tecnológica total.",
      d: "La reducción de la interacción social.",
    },
    correct: "b",
  },
  {
    question: "¿Cómo define el texto la Inteligencia Artificial?",
    options: {
      a: "Un software avanzado para videojuegos.",
      b: "La ciencia y el arte de crear máquinas que pueden realizar tareas que requieren inteligencia humana.",
      c: "Un nuevo tipo de robot industrial.",
      d: "Una base de datos gigantesca.",
    },
    correct: "b",
  },
  {
    question: "¿Qué ramas principales de la IA se mencionan?",
    options: {
      a: "Medicina y arquitectura.",
      b: "Machine Learning, Deep Learning, Procesamiento del Lenguaje Natural y Visión por Computadora.",
      c: "Contabilidad y finanzas.",
      d: "Botánica y zoología.",
    },
    correct: "b",
  },
  {
    question: "¿Qué implica el Machine Learning (Aprendizaje Automático)?",
    options: {
      a: "La programación manual de cada regla.",
      b: "Enseñar a las máquinas a aprender de los datos sin ser explícitamente programadas.",
      c: "Reparar máquinas de forma automática.",
      d: "Escribir libros sobre máquinas.",
    },
    correct: "b",
  },
  {
    question: "¿Qué aplicación de la IA se menciona en el sector de la salud?",
    options: {
      a: "Diseño de interiores.",
      b: "Diagnóstico de enfermedades, desarrollo de fármacos y medicina personalizada.",
      c: "Gestión de restaurantes.",
      d: "Organización de eventos deportivos.",
    },
    correct: "b",
  },
  {
    question: "¿Cuál es una de las grandes oportunidades que presenta la IA?",
    options: {
      a: "Reducir la producción industrial.",
      b: "Impulsar la innovación, la eficiencia y el crecimiento económico.",
      c: "Aumentar la burocracia.",
      d: "Disminuir la velocidad de procesamiento de datos.",
    },
    correct: "b",
  },
  {
    question:
      "¿Por qué es crucial integrar la IA en la formación inicial del profesorado?",
    options: {
      a: "Para que los futuros docentes puedan programar robots.",
      b: "Para que puedan comprender y utilizar las herramientas de IA en sus futuras aulas.",
      c: "Para que la IA los reemplace en el futuro.",
      d: "Para que se dediquen a la investigación en IA.",
    },
    correct: "b",
  },
  {
    question:
      "¿Qué tipo de herramientas IA pueden ser especialmente útiles para los futuros docentes en su práctica?",
    options: {
      a: "Herramientas de IA que dicten las clases.",
      b: "Asistentes virtuales, plataformas de evaluación adaptativa y sistemas de tutoría inteligente.",
      c: "Juegos de video educativos.",
      d: "Simplemente calculadoras avanzadas.",
    },
    correct: "b",
  },
  {
    question:
      "¿Qué beneficio ofrece la IA en la creación de materiales educativos para los docentes?",
    options: {
      a: "Genera automáticamente materiales sin supervisión.",
      b: "Permite crear contenidos personalizados y adaptados a diferentes estilos de aprendizaje.",
      c: "Reduce la cantidad de material necesario.",
      d: "Solo sirve para traducir materiales antiguos.",
    },
    correct: "b",
  },
  {
    question:
      "¿Qué tipo de enfoque metodológico se suele adoptar al investigar el impacto de la IA en la educación?",
    options: {
      a: "Un enfoque exclusivamente teórico y especulativo.",
      b: "Un enfoque multidisciplinar que combine aspectos técnicos, pedagógicos y éticos.",
      c: "Un enfoque puramente tecnológico sin considerar la pedagogía.",
      d: "Un enfoque histórico-literario.",
    },
    correct: "b",
  },
  {
    question:
      "¿Por qué la investigación sobre la IA en educación a menudo requiere la recopilación de datos cualitativos y cuantitativos?",
    options: {
      a: "Para hacer el estudio más largo.",
      b: "Para obtener una comprensión completa del impacto, tanto medible como perceptual.",
      c: "Para complicar el análisis.",
      d: "Solo se necesita uno de los dos.",
    },
    correct: "b",
  },
  {
    question:
      "¿Cuál es uno de los principales problemas al integrar la IA en los sistemas educativos existentes?",
    options: {
      a: "La falta de bolígrafos y cuadernos.",
      b: "La resistencia al cambio, la brecha digital y la necesidad de capacitación docente.",
      c: "El exceso de libros de texto.",
      d: "Demasiados estudiantes.",
    },
    correct: "b",
  },
  {
    question:
      "¿Qué problema ético relacionado con la IA en la educación puede afectar la equidad?",
    options: {
      a: "La velocidad de internet lenta.",
      b: "El potencial de aumentar la brecha entre estudiantes con acceso a tecnología avanzada y los que no.",
      c: "La dificultad para encender las computadoras.",
      d: "Que los docentes no sepan usar el proyector.",
    },
    correct: "b",
  },
  {
    question:
      "¿Qué tendencia actual de la IA se menciona como relevante para el futuro de la educación?",
    options: {
      a: "La creación de máquinas de escribir más rápidas.",
      b: "El desarrollo de asistentes de voz más sofisticados y plataformas de aprendizaje adaptativo.",
      c: "La invención de nuevos tipos de papel.",
      d: "La mejora de las calculadoras de bolsillo.",
    },
    correct: "b",
  },
  {
    question:
      "¿Hacia dónde se dirige la IA en términos de interacción con el usuario en el ámbito educativo?",
    options: {
      a: "A ser menos interactiva y más pasiva.",
      b: "Hacia interfaces conversacionales y tutorías más personalizadas e intuitivas.",
      c: "A la eliminación total de la interacción humana.",
      d: "A solo mostrar videos.",
    },
    correct: "b",
  },
];

const quizQuestionsDiv = document.getElementById("quiz-questions");
const submitQuizBtn = document.getElementById("submit-quiz-btn");
const resultsDiv = document.getElementById("results");
const correctCountSpan = document.getElementById("correct-count");
const incorrectCountSpan = document.getElementById("incorrect-count");
const feedbackMessageP = document.getElementById("feedback-message");
const restartQuizBtn = document.getElementById("restart-quiz-btn"); // Aunque oculto, se mantiene para consistencia.

let userAnswers = {}; // Para almacenar las respuestas seleccionadas por el usuario.

/**
 * Construye y muestra las preguntas del quiz en el HTML.
 */
function buildQuiz() {
  quizQuestionsDiv.innerHTML = ""; // Limpia preguntas previas si las hubiera.
  questions.forEach((q, index) => {
    const questionBlock = document.createElement("div");
    questionBlock.classList.add("question-block");

    const questionText = document.createElement("div");
    questionText.classList.add("question-text");
    questionText.textContent = `${index + 1}. ${q.question}`;
    questionBlock.appendChild(questionText);

    const optionsDiv = document.createElement("div");
    optionsDiv.classList.add("answer-options");

    const optionLetters = ["a", "b", "c", "d"];
    optionLetters.forEach((letter) => {
      if (q.options[letter]) {
        // Solo crea el botón si la opción existe para esa pregunta.
        const optionButton = document.createElement("button");
        optionButton.classList.add("answer-btn");
        // Almacena el índice de la pregunta y la opción en los atributos de datos del botón.
        optionButton.dataset.questionIndex = index;
        optionButton.dataset.option = letter;
        optionButton.textContent = `${letter.toUpperCase()}. ${
          q.options[letter]
        }`;

        // Añade un event listener para manejar la selección de la respuesta.
        optionButton.addEventListener("click", () =>
          selectAnswer(index, letter, optionButton)
        );
        optionsDiv.appendChild(optionButton);
      }
    });
    questionBlock.appendChild(optionsDiv);
    quizQuestionsDiv.appendChild(questionBlock);
  });
}

/**
 * Maneja la selección de una respuesta por parte del usuario.
 * @param {number} questionIndex - El índice de la pregunta.
 * @param {string} selectedOption - La letra de la opción seleccionada (ej. 'a', 'b').
 * @param {HTMLElement} clickedButton - El botón que fue clickeado.
 */
function selectAnswer(questionIndex, selectedOption, clickedButton) {
  // Deselecciona cualquier opción previamente seleccionada para esta pregunta.
  const questionButtons = quizQuestionsDiv.querySelectorAll(
    `[data-question-index="${questionIndex}"]`
  );
  questionButtons.forEach((button) => {
    button.classList.remove("selected");
  });

  // Selecciona la opción actual.
  clickedButton.classList.add("selected");
  userAnswers[questionIndex] = selectedOption; // Almacena la respuesta seleccionada por el usuario.
}

/**
 * Procesa el quiz cuando el usuario hace clic en "Finalizar".
 * Calcula aciertos y errores y muestra los resultados y el feedback.
 */
function submitQuiz() {
  let correctCount = 0;
  let incorrectCount = 0;

  // Itera sobre todas las preguntas para verificar las respuestas y deshabilitar los botones.
  questions.forEach((q, index) => {
    const selectedAnswer = userAnswers[index];
    const questionButtons = quizQuestionsDiv.querySelectorAll(
      `[data-question-index="${index}"]`
    );

    questionButtons.forEach((button) => {
      button.classList.add("disabled"); // Deshabilita todos los botones para un solo intento.
      // Elimina el event listener para evitar cambios después de la finalización.
      button.removeEventListener("click", () =>
        selectAnswer(index, button.dataset.option, button)
      );

      // Marca la respuesta correcta y la respuesta del usuario (si es incorrecta).
      if (button.dataset.option === q.correct) {
        button.classList.add("correct"); // Marca la opción correcta.
      } else if (button.dataset.option === selectedAnswer) {
        button.classList.add("incorrect"); // Marca la elección incorrecta del usuario.
      }
    });

    // Comprueba si la respuesta seleccionada por el usuario es correcta.
    if (selectedAnswer && selectedAnswer === q.correct) {
      correctCount++;
    } else {
      // Asegúrate de que las preguntas no respondidas también cuenten como errores.
      incorrectCount++;
    }
  });

  // Muestra los resultados.
  correctCountSpan.textContent = correctCount;
  incorrectCountSpan.textContent = incorrectCount;
  feedbackMessageP.textContent = getFeedbackMessage(correctCount);

  // Oculta las preguntas y el botón de finalizar, muestra el área de resultados.
  quizQuestionsDiv.classList.add("hidden");
  submitQuizBtn.classList.add("hidden");
  resultsDiv.classList.remove("hidden");
  // restartQuizBtn.classList.remove('hidden'); // Oculto para simular un solo intento, no se muestra.
}

/**
 * Devuelve un mensaje de feedback personalizado basado en la puntuación.
 * @param {number} score - El número de respuestas correctas.
 * @returns {string} El mensaje de feedback.
 */
function getFeedbackMessage(score) {
  if (score === 20) {
    return "¡Excelente! 🎉 El tiempo invertido en estudiar da sus frutos, ¡sigue adelante con ese ritmo! 🚀";
  } else if (score >= 16) {
    // De 16 a 19 aciertos.
    return "¡Muy bien! 👍 Se nota tu esmero y comprensión del material. ¡Felicitaciones! ✨";
  } else if (score >= 10) {
    // De 10 a 15 aciertos.
    return "¡Vas muy bien encaminado! 💪 Has comprendido los puntos clave. Un pequeño repaso consolidará tu conocimiento. 📚";
  } else if (score >= 6) {
    // De 6 a 9 aciertos.
    return "Te recomiendo dar un repaso al material de estudio. Estás en el camino correcto, ¡un poco más de práctica te ayudará! 💡";
  } else {
    // 5 o menos aciertos.
    return "Te recomiendo repasar nuevamente el material de estudio. ¡No te desanimes, cada repaso es una nueva oportunidad para aprender! 📖";
  }
}

// --- Inicio del Quiz ---
// Carga las preguntas al cargar la página.
buildQuiz();

// Asigna el event listener al botón de finalizar.
submitQuizBtn.addEventListener("click", submitQuiz);

// El botón de reiniciar está presente en el HTML pero oculto y no se activa para un "solo intento".
// Si quisieras que el usuario pueda reiniciar, removerías la línea `restartQuizBtn.style.display = 'none';` en submitQuiz
// y podrías habilitarlo aquí: `restartQuizBtn.addEventListener('click', restartQuiz);`
