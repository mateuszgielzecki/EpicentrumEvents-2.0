const slideshowImages = document.querySelectorAll('.slideshow-img');
const navButtonsLinks = [...document.querySelectorAll('.navigation__link')];
const about = document.querySelector('.section--about');
const header = document.querySelector('.header')
const nav = document.querySelector('.navigation');
const galleryImg = [...document.querySelectorAll('.gallery__img')];
const gallery = document.querySelector('.gallery')
// const body = document.querySelector('body')

//////////////////////////////////////////////////////////////////////////
// Slider

const nextImageDelay = 5000;
let currentImageCounter = 0;

slideshowImages[currentImageCounter].style.opacity = 1;

setInterval(nextImage, nextImageDelay);

function nextImage() {
    slideshowImages[currentImageCounter].style.opacity = 0;
    currentImageCounter = (currentImageCounter + 1) % slideshowImages.length;
    slideshowImages[currentImageCounter].style.opacity = 1;
}
//////////////////////////////////////////////////////////////////////////
// Transprent menu
const transparentNav = function (entries) {
    const [entry] = entries;

    if (!entry.isIntersecting) nav.classList.add('navigation--transparent');
    else nav.classList.remove('navigation--transparent');
}

const headerObserver = new IntersectionObserver(transparentNav, {
    root: null,
    threshold: 0,
});

headerObserver.observe(header);

//////////////////////////////////////////////////////////////////////////
// Img increase

const increaseImg = function (e) {

    const img = e.target?.dataset?.src




    console.log(img);
}

gallery.addEventListener('click', increaseImg);