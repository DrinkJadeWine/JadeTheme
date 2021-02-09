const drawerTrigger = document.getElementById('drawer-trigger');
const closeTrigger = document.getElementById('drawer-close');
const drawer = document.getElementById('drawer-menu');

// Drawer open
if (drawerTrigger) {
    drawerTrigger.onclick = function () {
        const scrollY = window.pageYOffset;
        drawer.classList.add('open');

        setTimeout(function () {
            document.body.style.position = 'fixed';
            document.body.style.top = `${scrollY}px`;
        }, 400)
    }
}

// Drawer close
if (closeTrigger) {
    closeTrigger.onclick = function () {
        const scrollY = document.body.style.top;
        drawer.classList.remove('open');
        document.body.style.position = '';
        document.body.style.top = '';
        window.scrollTo(0, parseInt(scrollY || '0'));
    }
}