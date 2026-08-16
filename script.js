const menu = document.querySelector('.menu');
const nav = document.querySelector('nav');

menu?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menu.setAttribute('aria-expanded', open);
});

nav?.addEventListener('click', () => {
  nav.classList.remove('open');
  menu?.setAttribute('aria-expanded', 'false');
});

document.querySelectorAll('.choose').forEach(button => button.addEventListener('click', () => {
  const select = document.querySelector('select[name="model"]');
  if (select && button.dataset.model) select.value = button.dataset.model;
}));

const form = document.querySelector('#enquiry-form');
form?.addEventListener('submit', event => {
  event.preventDefault();
  const name = new FormData(form).get('name');
  document.querySelector('.form-status').textContent = `Thanks${name ? ' ' + name : ''}. This preview form is ready to connect to your chosen email or CRM.`;
});

const colourPreview = document.querySelector('#colour-preview');
const colourName = document.querySelector('#colour-name');
document.querySelectorAll('.swatch').forEach(swatch => swatch.addEventListener('click', () => {
  document.querySelectorAll('.swatch').forEach(item => item.classList.remove('active'));
  swatch.classList.add('active');
  colourPreview.style.opacity = '.25';
  const replacement = new Image();
  replacement.onload = () => {
    colourPreview.src = replacement.src;
    colourPreview.alt = `LD-R200 rounded single-axle catering trailer in ${swatch.dataset.colour}`;
    colourPreview.style.opacity = '1';
  };
  replacement.src = swatch.dataset.image;
  colourName.textContent = swatch.dataset.colour;
}));
