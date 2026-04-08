// Mobile nav
const toggle = document.getElementById('navToggle');
const nav    = document.getElementById('nav');

toggle?.addEventListener('click', () => {
  const open = nav.classList.toggle('is-open');
  toggle.classList.toggle('is-open', open);
  document.body.style.overflow = open ? 'hidden' : '';
});

nav?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('is-open');
    toggle?.classList.remove('is-open');
    document.body.style.overflow = '';
  });
});

// Active nav link
const sections = document.querySelectorAll('section[id]');
const navLinks  = document.querySelectorAll('.nav__link');
window.addEventListener('scroll', () => {
  let cur = '';
  sections.forEach(s => { if (window.scrollY >= s.offsetTop - 120) cur = s.id; });
  navLinks.forEach(l => l.classList.toggle('active', l.getAttribute('href') === `#${cur}`));
}, { passive: true });
