function ferClick() {
    alert("M’han fet click");
}
function sonido(){
    let audio = new Audio("./sounds/kick-bass.mp3")
    audio.play()
}
const botons = document.getElementsByTagName("button");
const audios = document.getElementsByTagName("button")
for (let i = 0; i < 7; i++) {
    botons[i].addEventListener("click", ferClick)
    audios[i].addEventListener("click",sonido);
}


