window.addEventListener('scroll', handleHeaderScroll);

let lastScrollTop = 0;
const delta = 5;

function handleHeaderScroll() {
    const header = document.querySelector('header .floating');
    const topOffset = window.pageYOffset;

    if (Math.abs(lastScrollTop - topOffset) <= delta) {
        return;
    }

    if (topOffset > lastScrollTop && topOffset > header.clientHeight) {
        // Scroll down
        header.style.top = `${-header.clientHeight}px`;
    } else {
        if (topOffset < lastScrollTop) {
            // Scroll up
            header.style.opacity = 1;
            header.style.position = 'fixed';
            header.style.top = 0;
        }

        if (topOffset <= header.clientHeight) {
            header.style.opacity = 0;
        }
    }

    if (topOffset <= delta) {
        header.style.position = 'absolute';
    }

    lastScrollTop = topOffset;
}