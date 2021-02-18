import Glide from '@glidejs/glide';

let glide = null;

window.addEventListener('resize', () => initCarousel('.products-glide'));
window.addEventListener('resize', () => initCarousel('.reviews-glide'));
initCarousel('.products-glide');
initCarousel('.reviews-glide');

function initCarousel(querySelector) {
    const bodyWidth = document.body.clientWidth;
    const slides = document.querySelectorAll('.glide__slide');

    // Mount carousel on small and medium devices
    if (bodyWidth <= 992) {
        glide = new Glide(querySelector, { type: 'carousel', autoplay: 3000 }).mount();
    } else {
        if (glide) {
            glide.destroy();

            slides.forEach(slide => {
                slide.style.width = 'auto';
                slide.style.marginRight = 0;
            })
        }
    }
}