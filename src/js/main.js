/* 
  Este archivo importa los estilos y los módulos JS necesarios para la web.
  Nota: slider.js ya inicializa automáticamente el Swiper y gestiona el autoplay
  según la visibilidad en pantalla, por lo que no hace falta llamarlo desde aquí. 
*/

// Importamos estilos
import '../sass/style.scss';

// Importamos módulos .js
import './menu-hamburguesa.js';
import './slider.js';
import './preguntas-frecuentes.js';
import './secondary-page-sections-highlight.js';
import './modal-cita.js';
import './index-logo-scroll.js';
import './sobre-mi-areas.js';

// Importo AOS para animaciones
import AOS from 'aos';
import 'aos/dist/aos.css';

// Inicializa animaciones con AOS (Animate On Scroll)
AOS.init({
  duration: 800, // duración de la animación en ms
  once: true     // solo se ejecuta una vez al hacer scroll
});
