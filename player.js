let video, duration, startDuration, volume

window.onload = function () {
    video = document.getElementById('v')
    duration = document.getElementById('radio')
    volume = document.getElementById('volume')
    duration.value = 0
    duration.min = 0
    duration.max = video.duration
}

function playStop() {
    if (video.paused) {
        video.play()
        startDuration = setInterval(initDuration,1000/66)
    } else {
        video.pause()
        clearInterval(startDuration)
    }
}

function changeVolume() {
video.volume = volume.value/100
}

function movedRange() {
    video.currentTime = duration.value
    playStop()

}

function fullScreen() {
    video.webkitEnterFullscreen() //режим полноэкранный
}

function initDuration() {
duration.value = video.currentTime
}

function clearRange() {
    clearInterval(startDuration)
    if(!video.paused){
        playStop()
    }
}