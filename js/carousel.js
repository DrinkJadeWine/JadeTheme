import Glide from '@glidejs/glide';

initCarousel('.products-glide');
initCarousel('.reviews-glide');

function initCarousel(querySelector) {
    if (!document.querySelector(querySelector)) {
        return;
    }

    new Glide(querySelector, {
        type: 'carousel',
        autoplay: 3000,
    }).mount();
}
