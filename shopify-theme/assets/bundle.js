"use strict";

var drawerTrigger = document.getElementById('drawer-trigger');
var closeTrigger = document.getElementById('drawer-close');
var drawer = document.getElementById('drawer-menu'); // Drawer open

if (drawerTrigger) {
  drawerTrigger.onclick = function () {
    var scrollY = window.pageYOffset;
    drawer.classList.add('open');
    setTimeout(function () {
      document.body.style.position = 'fixed';
      document.body.style.top = "".concat(scrollY, "px");
    }, 400);
  };
} // Drawer close


if (closeTrigger) {
  closeTrigger.onclick = function () {
    var scrollY = document.body.style.top;
    drawer.classList.remove('open');
    document.body.style.position = '';
    document.body.style.top = '';
    window.scrollTo(0, parseInt(scrollY || '0'));
  };
}
"use strict";

window.addEventListener('scroll', handleHeaderScroll);
var lastScrollTop = 0;
var delta = 5;

function handleHeaderScroll() {
  var header = document.getElementById('header');
  var topOffset = window.pageYOffset;

  if (Math.abs(lastScrollTop - topOffset) <= delta) {
    return;
  }

  if (topOffset > lastScrollTop && topOffset > header.clientHeight) {
    // Scroll down
    header.style.top = "".concat(-header.clientHeight, "px");
  } else {
    if (topOffset < lastScrollTop) {
      // Scroll up
      header.style.position = 'fixed';
      header.style.top = 0;
    }
  }

  if (topOffset <= delta) {
    header.style.position = 'absolute';
  }

  lastScrollTop = topOffset;
}
"use strict";

document.addEventListener("DOMContentLoaded", adjustVideoPlayerSize);
window.addEventListener('resize', adjustVideoPlayerSize);

function adjustVideoPlayerSize() {
  var videoWrapper = document.querySelector('#video');
  var video = document.querySelector('#video_html5_api');
  var width = document.body.clientWidth;

  if (video) {
    video.style.width = "".concat(width, "px");
    video.style.height = "".concat(width / 16 * 9, "px");
  }

  if (videoWrapper) {
    videoWrapper.style.width = "".concat(width, "px");
    videoWrapper.style.height = "".concat(width / 16 * 9, "px");
  }
}