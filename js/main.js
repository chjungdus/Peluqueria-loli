// ── Mobile nav toggle
const toggle = document.getElementById('navToggle');
const nav    = document.getElementById('nav');

toggle?.addEventListener('click', () => {
  const open = nav.classList.toggle('is-open');
  toggle.classList.toggle('is-open', open);
  document.body.style.overflow = open ? 'hidden' : '';
});

// Close nav on link click
nav?.querySelectorAll('.nav__link').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('is-open');
    toggle?.classList.remove('is-open');
    document.body.style.overflow = '';
  });
});

// ── Header shadow on scroll
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  header?.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

// ── Intersection Observer — fade-in on scroll
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(
  '.service-card, .review-card, .gallery__item, .strip__item, .about__image-wrap, .about__content'
).forEach((el, i) => {
  el.style.transitionDelay = `${(i % 4) * 80}ms`;
  el.classList.add('fade-up');
  observer.observe(el);
});

// ── Active nav link on scroll
const sections = document.querySelectorAll('section[id], div[id]');
const navLinks  = document.querySelectorAll('.nav__link');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 140) current = sec.id;
  });
  navLinks.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
  });
}, { passive: true });
