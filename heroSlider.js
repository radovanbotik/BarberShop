const sliderPrevious = document.querySelector("#slider-previous");
const sliderNext = document.querySelector("#slider-next");
const slides = [...document.querySelectorAll('#hero-slider [data-id="slide"]')];

let counter = 0;

const spreadImages = () => {
  slides.forEach((slide, index) => {
    slide.style.left = `${100 * index}%`;
  });
};

const translateImages = () => {
  spreadImages();
  if (counter > slides.length - 1) {
    counter = 0;
  }
  if (counter < 0) {
    counter = slides.length - 1;
  }
  slides.forEach(slide => {
    slide.style.transform = `translateX(-${100 * counter}%)`;
  });
};

const heroSlider = () => {
  sliderNext.addEventListener("click", () => {
    counter++;
    translateImages();
  });
  sliderPrevious.addEventListener("click", () => {
    counter--;
    translateImages();
  });
};
export { heroSlider };
