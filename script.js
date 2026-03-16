  const toggle = document.querySelector('.mobile-toggle');
  const navLinks = document.querySelector('.nav-links');

  toggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });






const grid = document.querySelector('.services-grid');
const dots = document.querySelectorAll('.slider-dots span');
const card = document.querySelectorAll('.service-card');

grid.addEventListener('scroll', () => {
  const scrollLeft = grid.scrollLeft;
  const cardWidth = card[0].offsetWidth + 30; // card width + gap
  const index = Math.round(scrollLeft / cardWidth);

  dots.forEach(dot => dot.classList.remove('active'));
  if(dots[index]) dots[index].classList.add('active');
});









const testimonialWrapper = document.querySelector('.testimonial-wrapper');
const navButtons = document.querySelectorAll('.testimonial-nav .nav-btn');
const cards = document.querySelectorAll('.testimonial-card');
const gap = 30;

navButtons[0].addEventListener('click', () => {
  testimonialWrapper.scrollBy({
    left: -(cards[0].offsetWidth + gap),
    behavior: 'smooth'
  });
});

navButtons[1].addEventListener('click', () => {
  testimonialWrapper.scrollBy({
    left: cards[0].offsetWidth + gap,
    behavior: 'smooth'
  });
});