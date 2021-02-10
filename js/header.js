window.addEventListener('scroll', handleHeaderScroll);

let lastScrollTop = 0;
const delta = 10;

function handleHeaderScroll() {
    const header = document.querySelector('header');
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
            header.style.position = 'fixed';
            header.style.top = 0;
            header.classList.add('floating');
        }

        if (topOffset <= header.clientHeight) {
            header.classList.remove('floating');
        }
    }

    if (topOffset <= delta) {
        header.style.position = 'absolute';
    }

    lastScrollTop = topOffset;
}