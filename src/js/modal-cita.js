/*
    Este archivo gestiona la apertura y cierre del modal
    que permite al usuario elegir entre videoconsulta o
    consulta presencial. Contiene la lógica de botones,
    superposición (overlay) y cierre mediante botón o tecla Esc.
*/

document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('modal-cita');
  if (!modal) return; // nada que hacer si no existe el modal en la página

  const overlay = modal.querySelector('.modal-overlay');
  const closeBtn = modal.querySelector('.modal-close');

  // 1) Triggers explícitos por atributo data-modal-target="#modal-cita"
  const triggersByData = Array.from(document.querySelectorAll('[data-modal-target]'))
    .filter(el => el.dataset.modalTarget === '#modal-cita');

  // 2) Triggers por clase (fallback): header button u otros botones que quieras
  const triggersByClass = Array.from(document.querySelectorAll('.btn-cita-header, .btn-cita-abrir'));

  // Unificamos y quitamos duplicados
  const openButtons = Array.from(new Set([...triggersByData, ...triggersByClass]));

  let lastFocusedEl = null;

  function lockScroll() {
    // técnica simple; suficiente en la mayoría de casos
    document.body.style.overflow = 'hidden';
  }

  function unlockScroll() {
    document.body.style.overflow = '';
  }

  function openModal() {
    lastFocusedEl = document.activeElement;
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    lockScroll();

    // poner foco en el botón de cerrar (mejor accesibilidad)
    if (closeBtn) closeBtn.focus();

    // escuchador ESC activo solo mientras está abierto
    document.addEventListener('keydown', onKeyDown);
  }

  function closeModal() {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    unlockScroll();

    // quitar listener ESC
    document.removeEventListener('keydown', onKeyDown);

    // devolver foco al elemento que abrió el modal
    if (lastFocusedEl && typeof lastFocusedEl.focus === 'function') {
      lastFocusedEl.focus();
    }
  }

  function onKeyDown(e) {
    if (e.key === 'Escape') {
      closeModal();
    }
  }

  // Conectar los botones que abren (evitamos que los que están dentro del modal hagan abrir)
  openButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      // Si el botón está dentro del modal, no lo tratamos como trigger global
      if (modal.contains(btn)) return;

      e.preventDefault();
      openModal();
    });
  });

  // Cerrar con la X
  if (closeBtn) {
    closeBtn.addEventListener('click', (e) => {
      e.preventDefault();
      closeModal();
    });
  }

  // Cerrar cuando dentro del modal se haga click en elementos con data-close (flexible)
  modal.addEventListener('click', (e) => {
    const maybeClose = e.target.closest('[data-close]');
    if (maybeClose) {
      e.preventDefault();
      closeModal();
    }
  });
});
