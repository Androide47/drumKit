window.addEventListener('keydown', function(e){
    const audio = document.querySelector(`audio[data-key = "${e.keyCode}"]`);
    if(!audio) return; // This prevent te function to run al together
    audio.currentTime = 0;
    audio.play();
}); 