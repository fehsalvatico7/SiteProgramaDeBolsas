const carousel = document.querySelector('.carousel');
const slider = carousel.querySelector('ul');
const slides = slider.querySelectorAll('li');

let counter = 0;
const slideWidth = slides[0].clientWidth;

console.log('Slides:', slides);

const prevBtn = document.getElementById('prevBtn');
console.log('Botão Anterior:', prevBtn);
prevBtn.addEventListener('click', () => {
  console.log('Botão Anterior clicado');
  counter--;
  if (counter < 0) counter = slides.length - 1;
  slider.style.transform = `translateX(${-counter * slideWidth}px)`;
});

const nextBtn = document.getElementById('nextBtn');
console.log('Botão Próximo:', nextBtn);
nextBtn.addEventListener('click', () => {
  console.log('Botão Próximo clicado');
  counter++;
  if (counter === slides.length) counter = 0;
  slider.style.transform = `translateX(${-counter * slideWidth}px)`;
});


function redirectApplyToAdopt() {
  window.location.href = "index2.html";
}

function redirectToDonationPage() {
  window.location.href = "indexDoacao.html";
}


var donateButton = document.getElementById("donateButton");


donateButton.addEventListener("click", redirectToDonationPage);

donateButton2.addEventListener("click", redirectToDonationPage);