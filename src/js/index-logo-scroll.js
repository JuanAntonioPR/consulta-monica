/*
  Script exclusivo para index.html
  Gestiona scroll suave al principio al hacer clic en el logo
*/

// Solo ejecutar en index.html
if (document.body.classList.contains('home')) { 
  const logo = document.querySelector('.logo');
  if (logo) {
    logo.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}
