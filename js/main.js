// Mobile nav
const burger    = document.getElementById('burger');
const navLinks  = document.getElementById('navLinks');

burger?.addEventListener('click', () => {
  const open = navLinks.classList.toggle('is-open');
  burger.classList.toggle('is-open', open);
  document.body.style.overflow = open ? 'hidden' : '';
});

navLinks?.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    navLinks.classList.remove('is-open');
    burger?.classList.remove('is-open');
    document.body.style.overflow = '';
  });
});

// Portfolio toggle (mobile)
const trabToggle = document.getElementById('trabToggle');
const trabGrid   = document.querySelector('.trabajos__grid');

trabToggle?.addEventListener('click', () => {
  const open = trabGrid.classList.toggle('is-open');
  trabToggle.classList.toggle('is-open', open);
  trabToggle.setAttribute('aria-expanded', open);
  trabToggle.querySelector('span:first-child').textContent =
    open ? 'Ver menos' : 'Ver todos los trabajos';
});
