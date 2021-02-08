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