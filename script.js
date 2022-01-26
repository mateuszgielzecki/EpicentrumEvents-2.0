const slideshowImages = document.querySelectorAll('.slideshow-img');
const galleryImg = [...document.querySelectorAll('.gallery__img')];
const gallery = document.querySelector('.gallery')
const body = document.querySelector('body')

const nextImageDelay = 5000;
let currentImageCounter = 0;

slideshowImages[currentImageCounter].style.opacity = 1;

setInterval(nextImage, nextImageDelay);

function nextImage() {
    slideshowImages[currentImageCounter].style.opacity = 0;
    currentImageCounter = (currentImageCounter + 1) % slideshowImages.length
    slideshowImages[currentImageCounter].style.opacity = 1;
}