/*
  Script exclusivo para index.html
  Gestiona scroll suave al principio al hacer clic en el logo
*/

document.addEventListener('DOMContentLoaded', () => {
  const logo = document.querySelector('.logo');
  if (!logo) return;

  logo.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});
