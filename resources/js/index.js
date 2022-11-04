// making the header carousel
// declaring const
const carousel = document.getElementById('carousel');
const carouselBtnOne = document.getElementById('carousel__btn-one');
const carouselBtnTwo = document.getElementById('carousel__btn-two');
const carouselBtnThree = document.getElementById('carousel__btn-three');
const carouselBtnFour = document.getElementById('carousel__btn-four');
const firstTitle = document.getElementById('title__first-p');
const secondTitle = document.getElementById('title__second-p');

let i = 1;
let images = [];
const interval = setInterval(function() {
    startCarousel();
}, 10000);

startCarousel = () => {
    carousel.style.backgroundImage = `linear-gradient(0deg, rgb(27, 27, 27) 0%, rgba(0, 0, 0, 0) 100%),url(${images[i++]})`;
    carousel.classList.add("switchCarousel");
    // firstTitle.classList.add('transitionIn')
    // secondTitle.classList.add('transitionInDelay')
    if (i > images.length - 1) {
        i = 0
    }
}

images[0] = 'resources/images/gallery/slide-1.jpg'
images[1] = 'resources/images/gallery/slide-2.jpg'
images[2] = 'resources/images/gallery/slide-3.jpg'
images[3] = 'resources/images/gallery/slide-4.jpg'


carouselBtnOne.addEventListener('click', () => {
    carousel.style.backgroundImage = 'linear-gradient(0deg, rgb(27, 27, 27) 0%, rgba(0, 0, 0, 0) 100%),url(/resources/images/gallery/slide-1.jpg)';
    carousel.classList.add('switchCarousel')
    firstTitle.classList.add('transitionIn')
    secondTitle.classList.add('transitionInDelay')
    firstTitle.innerHTML = "You Are"
    secondTitle.innerHTML = "Locked In!"
});

carouselBtnTwo.addEventListener('click', () => {
    carousel.style.backgroundImage = 'linear-gradient(0deg, rgb(27, 27, 27) 0%, rgba(0, 0, 0, 0) 100%),url(/resources/images/gallery/slide-2.jpg)';
    carousel.classList.add('switchCarousel')
    firstTitle.classList.add('transitionIn')
    secondTitle.classList.add('transitionInDelay')
    firstTitle.innerHTML = 'The Clock'
    secondTitle.innerHTML = 'Is Ticking...'
})

carouselBtnThree.addEventListener('click', () => {
    carousel.style.backgroundImage = 'linear-gradient(0deg, rgb(27, 27, 27) 0%, rgba(0, 0, 0, 0) 100%),url(/resources/images/gallery/slide-3.jpg)';
    carousel.classList.add('switchCarousel')
    firstTitle.classList.add('transitionIn')
    secondTitle.classList.add('transitionInDelay')
    firstTitle.innerHTML = 'Escape'
    secondTitle.innerHTML = 'in 60 mins?'
})

carouselBtnFour.addEventListener('click', () => {
    carousel.style.backgroundImage = 'linear-gradient(0deg, rgb(27, 27, 27) 0%, rgba(0, 0, 0, 0) 100%),url(/resources/images/gallery/slide-4.jpg)';
    carousel.classList.add('switchCarousel')
    firstTitle.classList.add('transitionIn')
    secondTitle.classList.add('transitionInDelay')
    firstTitle.innerHTML = 'What is'
    secondTitle.innerHTML = 'Escapium?'
})

carousel.addEventListener('animationend', () => {
    carousel.classList.remove('switchCarousel')     // add the end of the animation, remove the animation
})

firstTitle.addEventListener('animationend', () => {
    firstTitle.classList.remove('transitionIn')
})

secondTitle.addEventListener('animationend', () => {
    secondTitle.classList.remove('transitionInDelay')
})