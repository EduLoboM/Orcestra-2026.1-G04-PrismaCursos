/**
 * PrismaCursos — Quiz de recomendação de curso
 *
 * Controla a navegação entre as 3 perguntas do quiz
 * e exibe o resultado com uma recomendação de curso
 * baseada na última resposta (área de conhecimento).
 */

"use strict";

document.addEventListener("DOMContentLoaded", () => {
  // ========== Elementos ==========
  const quizSection = document.getElementById("quiz");
  if (!quizSection) return;

  const steps = quizSection.querySelectorAll(".quiz-step");
  const resultText = document.getElementById("quiz-result-text");
  const resultImage = document.getElementById("quiz-result-image");
  const globalProgress = document.getElementById("quiz-global-progress");
  const progressFill = document.getElementById("quiz-progress-fill");

  // Armazena respostas
  const answers = {};
  let currentStep = 1;

  // Mapeamento de resultado: baseado na resposta da pergunta 3 (área)
  const resultMap = {
    design: {
      text: "Para você, recomendaria que você olhasse o nosso curso de Design 3D! Descubra mais sobre ele nas seções abaixo :)",
      image: "assets/quiz/resultado-design3d.png",
    },
    tecnologia: {
      text: "Para você, recomendaria que você olhasse o nosso curso de DevOps! Descubra mais sobre ele nas seções abaixo :)",
      image: "assets/quiz/resultado-devops.png",
    },
    gestao: {
      text: "Para você, recomendaria que você olhasse o nosso curso de Gestão Pessoal! Descubra mais sobre ele nas seções abaixo :)",
      image: "assets/quiz/resultado-gestao.png",
    },
  };

  // ========== Funções ==========

  /**
   * Mostra um step específico, escondendo o atual
   */
  function showStep(stepId) {
    // Atualiza a barra de progresso global
    if (globalProgress && progressFill) {
      if (stepId === "result") {
        globalProgress.style.opacity = "0";
        globalProgress.style.visibility = "hidden";
      } else {
        globalProgress.style.opacity = "1";
        globalProgress.style.visibility = "visible";
        globalProgress.setAttribute("data-step", stepId);
        
        let widthVal = "33.3%";
        if (stepId === 2 || stepId === "2") widthVal = "66.6%";
        if (stepId === 3 || stepId === "3") widthVal = "100%";
        
        progressFill.style.width = widthVal;
      }
    }

    steps.forEach((step) => {
      step.classList.remove("active");
      // Reseta a animação removendo e re-adicionando
      step.style.animation = "none";
    });

    const target = quizSection.querySelector(
      `.quiz-step[data-step="${stepId}"]`
    );
    if (target) {
      // Força reflow para re-trigger da animação
      void target.offsetWidth;
      target.style.animation = "";
      target.classList.add("active");
    }
  }

  /**
   * Exibe o resultado com base nas respostas coletadas
   */
  function showResult() {
    const area = answers["3"] || "tecnologia"; // fallback
    const result = resultMap[area] || resultMap.tecnologia;

    resultText.textContent = result.text;
    resultImage.src = result.image;
    resultImage.alt = `Curso recomendado: ${result.text.split("curso de ")[1]?.split("!")[0] || ""}`;

    showStep("result");
  }

  /**
   * Reseta o quiz para o estado inicial
   */
  function resetQuiz() {
    Object.keys(answers).forEach((key) => delete answers[key]);
    currentStep = 1;

    // Remove seleção visual de todos os botões
    quizSection.querySelectorAll(".quiz-btn.selected").forEach((btn) => {
      btn.classList.remove("selected");
    });

    showStep(1);
  }

  // ========== Event Listeners ==========

  // Delegação de eventos nos botões de resposta (steps 1-3)
  quizSection.addEventListener("click", (e) => {
    const btn = e.target.closest(".quiz-btn");
    if (!btn || btn.id === "quiz-restart-btn") return;

    const step = btn.closest(".quiz-step");
    if (!step) return;

    const stepNum = step.dataset.step;
    const answer = btn.dataset.answer;

    // Armazena resposta
    answers[stepNum] = answer;

    // Feedback visual: seleciona o botão
    step.querySelectorAll(".quiz-btn").forEach((b) =>
      b.classList.remove("selected")
    );
    btn.classList.add("selected");

    // Delay breve para o usuário ver o feedback
    setTimeout(() => {
      if (stepNum === "3") {
        showResult();
      } else {
        currentStep = parseInt(stepNum) + 1;
        showStep(currentStep);
      }
    }, 350);
  });

  // Botão de refazer quiz
  if (restartBtn) {
    restartBtn.addEventListener("click", () => {
      resetQuiz();
    });
  }
});
