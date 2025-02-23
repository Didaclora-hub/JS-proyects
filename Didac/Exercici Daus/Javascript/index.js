let randomnum1 = Math.floor(Math.random() * (6 + 1 - 1) +1)
let randomnum2 = Math.floor(Math.random() * (6 + 1 - 1) +1)
let num = 2
console.log(randomnum1)

let dau1 = document.getElementsByClassName("img1")[0]
let dau2 = document.getElementsByClassName("img2")[0]
dau1.attributes[1].nodeValue = `images/dau${randomnum1}.png`
dau2.attributes[1].nodeValue = `images/dau${randomnum2}.png`

let h1 = document.getElementsByTagName("h1")[0];

if (randomnum1 > randomnum2) {
    document.getElementsByTagName("h1")[0].innerHTML = "!!Guanya l'1"
} else if (randomnum1 < randomnum2) {
    document.getElementsByTagName("h1")[0].innerHTML = "Guanya el 2!!"
} else {
    document.getElementsByTagName("h1")[0].innerHTML = "Empat...!"
}
