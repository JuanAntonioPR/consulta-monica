import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

Swiper.use([Navigation, Pagination, Autoplay, EffectFade]);

export function initSlider(selector, customConfig = {}) {
    const defaultConfig = {
        effect: 'fade',
        fadeEffect: {
            crossFade: true // para que la transición sea de fundido cruzado
        },
        speed: 4000, // duración de la transición en ms (4 segundos)
        // loop: true,  // Cuando lo activo, me da problemas al hacer clic.
        autoplay: {
            delay: 4000,    // tiempo que la imagen está visible
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    };

    return new Swiper(selector, { ...defaultConfig, ...customConfig });
}