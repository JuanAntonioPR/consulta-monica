import './sass/style.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
  duration: 800, // duración de la animación en ms
  once: true     // solo se ejecuta una vez al hacer scroll
});

const hamMenu = document.querySelector('.ham-menu');
const offScreenMenu = document.querySelector('.off-screen-menu');
const logo = document.querySelector('.logo');
const body = document.body;
const navItems = document.querySelectorAll('.nav-list li');

// Abre el menú cuando se hace clic en el icono de la hamburguesa
hamMenu.addEventListener('click', () => {
  hamMenu.classList.toggle('active');
  offScreenMenu.classList.toggle('active'); // <- esto ahora controla el panel lateral
  logo.classList.toggle('invisible');

  if (offScreenMenu.classList.contains('active')) {
    body.style.overflow = 'hidden';
    navItems.forEach((item, index) => {
      item.style.transitionDelay = `${0.1 * (index + 1)}s`;
    });  // Bloquea scroll vertical y horizontal
  } else {
    body.style.overflow = '';        // Restaura el overflow original
  }
});

// Cierra el menú cuando se hace clic en un enlace del menú
document.querySelectorAll('.nav-list a').forEach(link => {
  link.addEventListener('click', () => {
    hamMenu.classList.remove('active');
    offScreenMenu.classList.remove('active');
    logo.classList.remove('invisible');
    body.style.overflow = '';  // Restaurar scroll
  });
});
