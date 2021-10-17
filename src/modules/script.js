import ScrollReveal from 'scrollreveal';

const to_top = document.querySelector('.smooth-to-top');

window.addEventListener('scroll', () => {
    to_top.style.animation = "fadeVisibility 2s";
    to_top.style.opacity = 1;
})

to_top.addEventListener('click', () => {
    window.scroll({
        top: 0,
        behavior: 'smooth'
    });
});

ScrollReveal().reveal('video', { 
    delay: 300 
});

ScrollReveal().reveal('.paragraph', { 
    delay: 80, 
    reset: true,
    origin: 'bottom',
    distance: '50px',
});

ScrollReveal().reveal('.animation', { 
    reset: true, 
    distance: '70%', 
    origin: 'left', 
    duration: 1500, 
    easing: 'ease-in-out',
    delay: 80
});

ScrollReveal().reveal('.span-animated', {
    reset: true,
    distance: '150px',
    origin: 'bottom',
    duration: 1000,
    easing: 'cubic-bezier(0.73, 0.12, 0.35, 0.96)',
    delay: 30
});

ScrollReveal().reveal('.span-animated-school', {
    reset: true,
    distance: '150px',
    origin: 'bottom',
    duration: 1400,
    easing: 'cubic-bezier(0.73, 0.12, 0.35, 0.96)',
    delay: 30
});

ScrollReveal().reveal('.accept-cookies', {
    delay: 2000,
    distance: '150px',
    origin: 'bottom'
});

ScrollReveal().reveal('.smooth-animation', {
    reset: true,
    distance: '170px',
    origin: 'bottom',
    duration: 1500,
    easing: 'cubic-bezier(0.73, 0.12, 0.35, 0.96)',
    delay: 30
});


class Carousel {
    constructor(dataOfslides, classNextButton, classPreviousButton, classAddedAndRemoved) {
      this.slides = document.querySelectorAll(dataOfslides);
      this.lastSlideIndex = this.slides.length - 1;
      this.currentSlideIndex = 0;
      this.classAdd_Remove = classAddedAndRemoved;
  
      this.nextButton = document.querySelector(classNextButton);
      this.previousButton = document.querySelector(classPreviousButton);
  
      this.events();
    }
  
    events() {
      this.nextButtonEvent();
      this.previousButtonEvent();
    }
  
  
    nextButtonEvent() {
      this.nextButton.addEventListener('click', () => {
        const correctSlideIndex = this.currentSlideIndex === this.lastSlideIndex ? this.currentSlideIndex = 0 : ++this.currentSlideIndex;
        this.switchingClassOfSlides(correctSlideIndex);

        const addAnimation = document.querySelector(`.${this.classAdd_Remove}`);
        addAnimation.style.animation = 'fadeVisibilityRight 0.5s';
      });
    }
  
    previousButtonEvent() {
      this.previousButton.addEventListener('click', () => {
        const correctSlideIndex = this.currentSlideIndex === 0 ? this.currentSlideIndex = this.lastSlideIndex : --this.currentSlideIndex;
        this.switchingClassOfSlides(correctSlideIndex);
        

        const addAnimation = document.querySelector(`.${this.classAdd_Remove}`);
        addAnimation.style.animation = 'fadeVisibilityLeft 0.5s';
      });
    }
  
    switchingClassOfSlides(correctSlideIndex) {
      this.slides.forEach(e => e.classList.remove(this.classAdd_Remove));
      this.slides[correctSlideIndex].classList.add(this.classAdd_Remove);
    }
  
}
//Se criar um novo carousel apenas adicionar um numero a mais, no html, js e css.
const slide_1 = new Carousel('[data-js="carousel__item"]', '[data-js="carousel__button--next"]', '[data-js="carousel__button--prev"]', 'carousel__item--visible');
const slide_2 = new Carousel('[data-js="carousel__item2"]', '[data-js="carousel__button--next2"]', '[data-js="carousel__button--prev2"]', 'carousel__item--visible2');
