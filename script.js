const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
toggle?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', open);
});
document.querySelectorAll('.nav a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));
document.getElementById('year').textContent = new Date().getFullYear();

document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const data = new FormData(this);
  const msg = `Hello CMS, I would like to discuss a project.%0A%0AName: ${encodeURIComponent(data.get('name'))}%0APhone: ${encodeURIComponent(data.get('phone'))}%0AService: ${encodeURIComponent(data.get('service'))}%0AMessage: ${encodeURIComponent(data.get('message') || '')}`;
  window.open(`https://wa.me/919873609862?text=${msg}`, '_blank');
});