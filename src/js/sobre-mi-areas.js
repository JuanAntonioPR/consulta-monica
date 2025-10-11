/*
 sobre-mi-areas.js
 -----------------
 Módulo responsable de manejar la interacción dinámica de la sección
 "Áreas de especial interés" en la página Sobre mí.
 
 Funcionalidad:
 - Permite expandir y contraer cada tarjeta al hacer clic en su encabezado.
 - Asegura que solo una tarjeta permanezca abierta a la vez.
 - Mejora la accesibilidad usando el atributo aria-expanded.

  Dependencias: Ninguna (funciona con JavaScript nativo)
 */

document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".area-card");

  if (!cards.length) return; // seguridad: si no hay tarjetas, no hacer nada

  cards.forEach((card) => {
    const header = card.querySelector(".area-header");
    const content = card.querySelector(".area-content");

    header.addEventListener("click", () => {
      const isExpanded = header.getAttribute("aria-expanded") === "true";

      // Cierra todas las tarjetas antes de abrir otra
      cards.forEach((c) => {
        const cHeader = c.querySelector(".area-header");
        const cContent = c.querySelector(".area-content");

        cHeader.setAttribute("aria-expanded", "false");
        cContent.hidden = true;
        cContent.style.maxHeight = null;
        c.classList.remove("active");
      });

      // Si la tarjeta no estaba abierta, la abre
      if (!isExpanded) {
        header.setAttribute("aria-expanded", "true");
        content.hidden = false;
        content.style.maxHeight = `${content.scrollHeight}px`;
        card.classList.add("active");
      }
    });
  });
});
