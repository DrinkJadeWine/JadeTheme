const bagTrigger = document.getElementById('bag-trigger');
const bagCloseTrigger = document.getElementById('bag-close');
const bag = document.getElementById('bag-drawer');
const drawerOverlay = document.querySelector('.drawer-overlay')

if (drawerOverlay) {
    drawerOverlay.onclick = function () {
        bag.classList.remove('open');
        drawerOverlay.style.display = 'none';
    }
}

// Drawer open
if (bagTrigger) {
    bagTrigger.onclick = function () {
        bag.classList.add('open');
        drawerOverlay.style.display = 'block';
    }
}

// Drawer close
if (bagCloseTrigger) {
    bagCloseTrigger.onclick = function () {
        bag.classList.remove('open');
        drawerOverlay.style.display = 'none';
    }
}