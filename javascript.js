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

function focusTrap(e) {
    if (!(e.key ==='Tab' || e.keyCode === 9))
    return;
    var focusableElements = 'button, input, select, textarea, [tabindex]:not([tabindex="-1"])';
    var modal = document.querySelector('#modal');
    var firstFocusableElement = modal.querySelectorAll(focusableElements)[0];
    var focusableContent = modal.querySelectorAll(focusableElements);
    var lastFocusableElement = focusableContent[focusableContent.length - 1];

    if (e.shiftKey) {
        if (document.activeElement === firstFocusableElement) {
            lastFocusableElement.focus();
            e.preventDefault();
        }
        else {
            if (document.activeElement === lastFocusableElement) {
                firstFocusableElement.focus();
                e.preventDefault();
            }
        };
    }
}