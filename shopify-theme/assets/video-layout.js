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