var video = document.getElementById('longboard_video');
var btn = document.getElementById('pause_video');

function pauseVideo() {
    if (video.paused) {
        video.play();
        btn.innerHTML = 'Pause';
    }
    else {
        video.pause();
        btn.innerHTML = 'Play';
    }
}

function openForm() {
    document.getElementById("popup_form").style.display = 'block';
}

function closeForm(){
    document.getElementById('popup_form').style.display = 'none';
}

