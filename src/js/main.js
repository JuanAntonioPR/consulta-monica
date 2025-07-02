// Importamos estilos
import '../sass/style.scss';

// Importamos módulos .js
import './menu.js';

// Importo AOS para animaciones
import AOS from 'aos';
import 'aos/dist/aos.css';

// Inicializa animaciones con AOS (Animate On Scroll)
AOS.init({
  duration: 800, // duración de la animación en ms
  once: true     // solo se ejecuta una vez al hacer scroll
});
