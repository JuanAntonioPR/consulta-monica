/* 
    Este módulo configura e inicializa el slider Swiper en la página principal.
    - Usa efecto 'fade' con fundido cruzado.
    - Controla autoplay: las imágenes avanzan cada 4s.
    - Pausa y reanuda el autoplay según la visibilidad del slider en pantalla (Intersection Observer).
    - Incluye navegación (flechas) y paginación (puntos) configurables.
    - Se inicializa automáticamente al cargar el DOM.
*/

import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

Swiper.use([Navigation, Pagination, Autoplay, EffectFade]);

document.addEventListener('DOMContentLoaded', () => {
  const swiperEl = document.querySelector('.swiper');

  // Solo inicializamos si el slider existe en la página
  if (!swiperEl) return;

  const swiper = new Swiper(swiperEl, {
    effect: 'fade',
    fadeEffect: { crossFade: true },
    speed: 4000,
    autoplay: { delay: 4000, disableOnInteraction: false },
    navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
    pagination: { el: '.swiper-pagination', clickable: true },
  });

  // Pausar/reanudar autoplay según visibilidad
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) swiper.autoplay.start();
      else swiper.autoplay.stop();
    },
    { threshold: 0.1 }
  );

  observer.observe(swiperEl);
});
