
function playPause() {    
    var music = document.getElementById('music2');    
    var music_btn = document.getElementById('music_btn');    
    if (music.paused){    
        music.play();    
        music_btn.src = './music_on.png';    
    }    
    else{    
        music.pause();    
        music_btn.src = './music_off.png';     
    }    
}   
