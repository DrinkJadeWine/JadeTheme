const bagTriggers = document.querySelectorAll('.bag-trigger') || [];
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
bagTriggers.forEach(trigger => {
    trigger.onclick = function () {
        console.log('WTF?')
        bag.classList.add('open');
        drawerOverlay.style.display = 'block';
    }
});

// Drawer close
if (bagCloseTrigger) {
    bagCloseTrigger.onclick = function () {
        bag.classList.remove('open');
        drawerOverlay.style.display = 'none';
    }
}