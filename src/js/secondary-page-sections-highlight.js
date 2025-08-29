/*
  Este JS gestiona la activación de secciones en páginas secundarias. 
  Solo se ejecuta si estamos en una página secundaria (main.secondary-page).
*/

const main = document.querySelector('main.secondary-page');

if (main) {
  // Seleccionamos los números y las secciones dentro de main
  const numbers = main.querySelectorAll('.faq-number');
  const sections = main.querySelectorAll('section');

  if (numbers.length && sections.length) {
    // Activar la primera sección al cargar
    numbers[0].classList.add('highlight');
    sections[0].classList.add('highlight');

    // Creamos el IntersectionObserver
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Quitar highlight de todos
          numbers.forEach(num => num.classList.remove('highlight'));
          sections.forEach(sec => sec.classList.remove('highlight'));

          // Activar solo el que está intersectando
          entry.target.classList.add('highlight');

          // Activar también el background de la sección correspondiente
          const index = Array.from(numbers).indexOf(entry.target);
          if (index >= 0 && sections[index]) {
            sections[index].classList.add('highlight');
          }
        }
      });
    }, {
      threshold: 0.5,
      rootMargin: '-30% 0px -30% 0px'
    });

    // Observamos cada número
    numbers.forEach(num => observer.observe(num));
  }
}
