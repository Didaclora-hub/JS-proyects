function ferClick() {
    alert("M’han fet click a la lletra " + this.innerHTML);
    console.log(this.innerHTML)
}

//EXERCICI 1
// const primerboto = document.querySelector("button")
// primerboto.addEventListener("click", ferClick)

//EXERCICI 2
const botons = document.querySelectorAll("button")
botons.forEach(all => {
    all.addEventListener("click", ferClick)
    switch(this.innerHTML){ 
        case "w":
            ferClick()
            let audio = new Audio("./sounds/kick-bass.mp3")
            audio.play()
        break
        case "a":
            ferClick()
            let audio2 = new Audio("./sounds/crash.mp3")
            audio2.play()
        break
        case "s":
            ferClick()
            let audio3 = new Audio("./sounds/snare.mp3")
            audio3.play()
        break
        case "d":
            ferClick()
            let audio4 = new Audio("./sounds/tom-1.mp3")
            audio.play()
        break
        case "j":
            ferClick()
            let audio5 = new Audio("./sounds/tom-2.mp3")
            audio5.play()
        break
        case "k":
            ferClick()
            let audio6 = new Audio("./sounds/tom-3.mp3")
            audio6.play()
        break
        case "l":
            ferClick()
            let audio7 = new Audio("./sounds/tom-4.mp3")
            audio7.play()
        break
    }
});



//EXERCICI 3


document.addEventListener("keydown", function(event) {
    switch (event.key.toLowerCase()) { 
        case "w":
            ferClick()
            let audio = new Audio("./sounds/kick-bass.mp3")
            audio.play()
        break
        case "a":
            ferClick()
            let audio2 = new Audio("./sounds/crash.mp3")
            audio2.play()
        break
        case "s":
            ferClick()
            let audio3 = new Audio("./sounds/snare.mp3")
            audio3.play()
        break
        case "d":
            ferClick()
            let audio4 = new Audio("./sounds/tom-1.mp3")
            audio.play()
        break
        case "j":
            ferClick()
            let audio5 = new Audio("./sounds/tom-2.mp3")
            audio5.play()
        break
        case "k":
            ferClick()
            let audio6 = new Audio("./sounds/tom-3.mp3")
            audio6.play()
        break
        case "l":
            ferClick()
            let audio7 = new Audio("./sounds/tom-4.mp3")
            audio7.play()
        break
    }
});

