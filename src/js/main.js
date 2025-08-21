// Importamos estilos
import '../sass/style.scss';

// Importamos módulos .js
import './menu.js';
import './preguntas-frecuentes.js';

// Importo AOS para animaciones
import AOS from 'aos';
import 'aos/dist/aos.css';

// Importo initSlider
import { initSlider } from './slider.js';

// Inicializa animaciones con AOS (Animate On Scroll)
AOS.init({
  duration: 800, // duración de la animación en ms
  once: true     // solo se ejecuta una vez al hacer scroll
});

// Inicializa la función que ejecuta el swiper (que está en slider.js)
if (document.querySelector('.swiper')) {
  initSlider('.swiper');
}
