"use strict";

document.addEventListener("DOMContentLoaded", adjustVideoPlayerSize);
window.addEventListener('resize', adjustVideoPlayerSize);

function adjustVideoPlayerSize() {
  var videoWrapper = document.querySelector('#video');
  var video = document.querySelector('#video_html5_api');

  if (video) {
    video.style.width = "".concat(window.screen.width, "px");
    video.style.height = "".concat(window.screen.width / 16 * 9, "px");
  }

  if (videoWrapper) {
    videoWrapper.style.width = "".concat(window.screen.width, "px");
    videoWrapper.style.height = "".concat(window.screen.width / 16 * 9, "px");
  }
}