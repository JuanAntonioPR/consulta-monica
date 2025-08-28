/*
  Este JS gestiona la activación de secciones en páginas secundarias. 
  Según el scroll del usuario, se resalta la sección visible y el número 
  correspondiente, manteniendo siempre un único elemento activo a la vez.
*/

const numbers = document.querySelectorAll('.faq-number');
const sections = document.querySelectorAll('section'); // todas las secciones

// Activar la primera al cargar
numbers[0].classList.add('highlight');
sections[0].classList.add('highlight');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Quitar highlight de todos
      numbers.forEach(num => num.classList.remove('highlight'));
      sections.forEach(sec => sec.classList.remove('highlight'));

      // Activar solo el que está intersectando
      entry.target.classList.add('highlight');

      // Además, activar el background de la sección correspondiente
      const index = Array.from(numbers).indexOf(entry.target);
      if (index >= 0) sections[index].classList.add('highlight');
    }
  });
}, {
  threshold: 0.5,
  rootMargin: '-30% 0px -30% 0px'
});

numbers.forEach(num => observer.observe(num));
