const sliderPrevious = document.querySelector("#slider-previous");
const sliderNext = document.querySelector("#slider-next");
const slides = [...document.querySelectorAll('[data-id="slide-image"]')];

let counter = 0;

const spreadImages = () => {
  slides.forEach((slide, index) => {
    slide.style.left = `${100 * index}%`;
  });
};

const translateImages = () => {
  slides.forEach(slide => {
    slide.style.transform = `translateX(-${100 * counter}%)`;
  });
};

const heroSlider = () => {
  spreadImages();
  sliderNext.addEventListener("click", () => {
    if (counter >= slides.length - 1) {
      counter = 0;
    }
    translateImages();
    counter++;
  });
  sliderPrevious.addEventListener("click", () => {
    if (counter <= 0) {
      counter = slides.length - 1;
    }
    translateImages();
    counter--;
  });
};

export { heroSlider };
