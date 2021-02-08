document.addEventListener("DOMContentLoaded", adjustVideoPlayerSize)
window.addEventListener('resize', adjustVideoPlayerSize)


function adjustVideoPlayerSize() {
    const videoWrapper = document.querySelector('#video')
    const video = document.querySelector('#video_html5_api')
    const width = document.body.clientWidth

    if (video) {
        video.style.width = `${width}px`
        video.style.height = `${width / 16 * 9}px`
    }

    if (videoWrapper) {
        videoWrapper.style.width = `${width}px`
        videoWrapper.style.height = `${width / 16 * 9}px`
    }
}