/*
  Este JS gestiona las secciones de Preguntas Frecuentes (FAQ) de la página principal.
  Solo se ejecuta si existe el contenedor #preguntas-frecuentes.
  Controla la apertura y cierre de los acordeones para mostrar/ocultar las respuestas
  cuando el usuario hace clic en cada pregunta.
*/

document.addEventListener("DOMContentLoaded", () => {
  const faqContainer = document.getElementById("preguntas-frecuentes");
  if (!faqContainer) return; // nada que hacer si no hay FAQ en la página

  const tabs = faqContainer.querySelectorAll(".tab input");

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      if (tab.checked && tab.dataset.wasChecked === "true") {
        tab.checked = false;
        tab.dataset.wasChecked = "false";
      } else {
        tabs.forEach(other => {
          other.checked = false;
          other.dataset.wasChecked = "false";
        });
        tab.checked = true;
        tab.dataset.wasChecked = "true";
      }
    });
  });
});
