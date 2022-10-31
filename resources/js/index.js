// adding google maps api

function myMap() {
    // map options
    const options = {
        zoom:16,
        center:{lat:40.799353,lng:-73.953213}
    }

    // new map
    const map = new google.maps.Map(document.getElementById('map'), options);

    // add marker
    const marker = new google.maps.Marker({
        position: {lat:42.4668,lng:-70.9495},
        map:map,
        // icon:'[../images/logo/gmap-logo.png]'
    });
}

// making the header carousel
// declaring const
const carousel = document.getElementById('carousel');
const carouselBtnOne = document.getElementById('carousel__btn-one');
const carouselBtnTwo = document.getElementById('carousel__btn-two');
const carouselBtnThree = document.getElementById('carousel__btn-three');
const carouselBtnFour = document.getElementById('carousel__btn-four');
const firstTitle = document.getElementById('title__first-p');
const secondTitle = document.getElementById('title__second-p')

carouselBtnOne.addEventListener('click', () => {
    carousel.style.backgroundImage = 'linear-gradient(0deg, rgb(27, 27, 27) 0%, rgba(0, 0, 0, 0) 100%),url(/resources/images/gallery/slide-1.jpg)';
    carousel.classList.add('switchCarousel')
    firstTitle.classList.add('transitionIn')
    secondTitle.classList.add('transitionInDelay')
});

carouselBtnTwo.addEventListener('click', () => {
    carousel.style.backgroundImage = 'linear-gradient(0deg, rgb(27, 27, 27) 0%, rgba(0, 0, 0, 0) 100%),url(/resources/images/gallery/slide-2.jpg)';
    carousel.classList.add('switchCarousel')
    firstTitle.classList.add('transitionIn')
    secondTitle.classList.add('transitionInDelay')
})

carouselBtnThree.addEventListener('click', () => {
    carousel.style.backgroundImage = 'linear-gradient(0deg, rgb(27, 27, 27) 0%, rgba(0, 0, 0, 0) 100%),url(/resources/images/gallery/slide-3.jpg)';
    carousel.classList.add('switchCarousel')
    firstTitle.classList.add('transitionIn')
    secondTitle.classList.add('transitionInDelay')
})

carouselBtnFour.addEventListener('click', () => {
    carousel.style.backgroundImage = 'linear-gradient(0deg, rgb(27, 27, 27) 0%, rgba(0, 0, 0, 0) 100%),url(/resources/images/gallery/slide-4.jpg)';
    carousel.classList.add('switchCarousel')
    firstTitle.classList.add('transitionIn')
    secondTitle.classList.add('transitionInDelay')
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