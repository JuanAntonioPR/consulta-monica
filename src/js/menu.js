// ==============================
//  VARIABLES
// ==============================
const hamMenu = document.querySelector('.ham-menu');
const offScreenMenu = document.querySelector('.off-screen-menu');
const logo = document.querySelector('.logo');
const btnCitaHeader = document.querySelector(".btn-cita-header");
const body = document.body;
const navItems = document.querySelectorAll('.nav-list li');
const bloquearScrollAlAbrirMenu = false; // Cambiar a true si quieres bloquear el scroll

// ==============================
//  EVENTO: Toggle menú hamburguesa
// ==============================
hamMenu.addEventListener('click', () => {
  // Alterna clases para abrir/cerrar el menú lateral
  hamMenu.classList.toggle('active');
  offScreenMenu.classList.toggle('active');
  logo.classList.toggle('invisible');
  btnCitaHeader.classList.toggle('invisible');

  // Si el menú se abre
  if (offScreenMenu.classList.contains('active')) {
    if (bloquearScrollAlAbrirMenu) {
      body.style.overflow = 'hidden'; // Bloquea scroll
    }

    // Aplica delays en la transición de los ítems del menú
    navItems.forEach((item, index) => {
      item.style.transitionDelay = `${0.1 * (index + 1)}s`;
    });

  // Si el menú se cierra
  } else {
    if (bloquearScrollAlAbrirMenu) {
      body.style.overflow = ''; // Restaura scroll
    }
  }
});


// ==============================
//  EVENTO: Cerrar menú al hacer clic en un enlace
// ==============================
document.querySelectorAll('.nav-list a').forEach(link => {
  link.addEventListener('click', () => {
    hamMenu.classList.remove('active');
    offScreenMenu.classList.remove('active');
    logo.classList.remove('invisible');
    body.style.overflow = ''; // Restaura scroll
  });
});