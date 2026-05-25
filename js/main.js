/**
 * PrismaCursos — Script principal
 *
 * Adicione aqui toda a lógica JavaScript do projeto.
 * Mantenha funções pequenas e bem nomeadas.
 */

"use strict";

// ========== Inicialização ==========
document.addEventListener("DOMContentLoaded", () => {
  console.log("PrismaCursos carregado com sucesso!");

  // ========== Hamburger Menu Toggle ==========
  const hamburger = document.getElementById("hamburger-btn");
  const overlay = document.getElementById("menu-overlay");

  if (hamburger && overlay) {
    hamburger.addEventListener("click", () => {
      const isOpen = overlay.classList.toggle("open");
      hamburger.classList.toggle("active");
      hamburger.setAttribute("aria-expanded", isOpen);
    });

    // Fecha o menu ao clicar em um link
    const menuLinks = overlay.querySelectorAll(".menu-link");
    menuLinks.forEach((link) => {
      link.addEventListener("click", () => {
        overlay.classList.remove("open");
        hamburger.classList.remove("active");
        hamburger.setAttribute("aria-expanded", "false");
      });
    });

    // Fecha o menu ao clicar fora dele
    document.addEventListener("click", (e) => {
      if (
        !overlay.contains(e.target) &&
        !hamburger.contains(e.target) &&
        overlay.classList.contains("open")
      ) {
        overlay.classList.remove("open");
        hamburger.classList.remove("active");
        hamburger.setAttribute("aria-expanded", "false");
      }
    });

    // Fecha o menu com a tecla Escape
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && overlay.classList.contains("open")) {
        overlay.classList.remove("open");
        hamburger.classList.remove("active");
        hamburger.setAttribute("aria-expanded", "false");
      }
    });
  }
});
