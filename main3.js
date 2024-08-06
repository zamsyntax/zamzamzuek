function openLink(url) {
    window.open(url, '_blank');
}

function toggleMusic() {
    const audio = document.getElementById('background-music');
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}
