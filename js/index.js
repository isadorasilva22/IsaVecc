document.addEventListener("DOMContentLoaded", function () {
    const playBtn = document.getElementById("playPauseBtn");
    const audio = document.getElementById("audioPlayer");

    let isPlaying = false;

    playBtn.addEventListener("click", function () {
        if (isPlaying) {
            audio.pause();
            playBtn.textContent = "▶️";
        } else {
            audio.play();
            playBtn.textContent = "⏸️";
        }
        isPlaying = !isPlaying;
    });
});
