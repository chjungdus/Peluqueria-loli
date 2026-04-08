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
