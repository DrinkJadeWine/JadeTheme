const drawerOverlay = document.querySelector('.drawer-overlay')
const bagTriggers = document.querySelectorAll('.bag-trigger') || [];
const bagCloseTrigger = document.getElementById('bag-close');

if (drawerOverlay) {
    drawerOverlay.onclick = closeBagDrawer;
}

// Drawer open
bagTriggers.forEach(trigger => {
    trigger.onclick = openBagDrawer;
});

// Drawer close
if (bagCloseTrigger) {
    bagCloseTrigger.onclick = closeBagDrawer;
}


export function openBagDrawer() {
    const bag = document.getElementById('bag-drawer');

    if (bag) {
        bag.classList.add('open');
        drawerOverlay.style.display = 'block';
    }
}

export function closeBagDrawer() {
    const bag = document.getElementById('bag-drawer');

    if (bag) {
        bag.classList.remove('open');
        drawerOverlay.style.display = 'none';
    }
}