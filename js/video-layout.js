document.addEventListener("DOMContentLoaded", adjustVideoPlayerSize)
window.addEventListener('resize', adjustVideoPlayerSize)


function adjustVideoPlayerSize() {
    const videoWrapper = document.querySelector('#video')
    const video = document.querySelector('#video_html5_api')

    if (video) {
        video.style.width = `${window.screen.width}px`
        video.style.height = `${window.screen.width / 16 * 9}px`
    }

    if (videoWrapper) {
        videoWrapper.style.width = `${window.screen.width}px`
        videoWrapper.style.height = `${window.screen.width / 16 * 9}px`
    }
}