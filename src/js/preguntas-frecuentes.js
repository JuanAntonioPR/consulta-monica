document.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll("#preguntas-frecuentes .tab input");

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