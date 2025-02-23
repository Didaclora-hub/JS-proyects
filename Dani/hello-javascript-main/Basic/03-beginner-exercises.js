/*
Clase 18 - Ejercicios: primeros pasos
Vídeo: https://youtu.be/1glVfFxj8a4?t=4733
*/

// 1. Escribe un comentario en una línea

//hola

// 2. Escribe un comentario en varias líneas

/*
hola
que tal
*/

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos

let edad = 21
let altura = 1.79
let nombre = 'Dani' 
let soyHombre = true
let soyMujer = false
let numeroGrande = BigInt(1234567898765432345678987654323456789876543234567898765433456)
let valorNulo = null
let queComereMañana //undefined value 
let miSimbol= Symbol('mi simbolo')

// 4. Imprime por consola el valor de todas las variables

console.log(edad)
console.log(altura)
console.log(nombre)
console.log(soyHombre)
console.log(soyMujer)
console.log(numeroGrande)
console.log(valorNulo)
console.log(queComereMañana)
console.log(miSimbol)

// 5. Imprime por consola el tipo de todas las variables

console.log(typeof edad)
console.log(typeof altura)
console.log(typeof nombre)
console.log(typeof soyHombre)
console.log(typeof soyMujer)
console.log(typeof numeroGrande)
console.log(typeof valorNulo)
console.log(typeof queComereMañana)
console.log(typeof miSimbol)

// 6. A continuación, modifica los valores de las variables por otros del mismo tipo

/*
let edad = 22
let altura = 1.89
let nombre = 'Daniel' 
let soyHombre = false
let soyMujer = true
let numeroGrande = BigInt(09876543234567890987667890987656789876567898766789876)
let valorNulo = 33
let queComereMañana = 'macarrones' 
let miSimbol= Symbol('mi simbolo 2')
*/


// 7. A continuación, modifica los valores de las variables por otros de distinto tipo

/*
let edad = '22'
let altura = 'buenas noches'
let nombre = 66 
let soyHombre = false
let soyMujer = true
let numeroGrande = BigInt('buenos dias')
let valorNulo = 33
let queComereMañana = 24 
let miSimbol= Symbol(5)

console.log(typeof edad)
console.log(typeof altura)
console.log(typeof nombre)
console.log(typeof soyHombre)
console.log(typeof soyMujer)
console.log(typeof numeroGrande)
console.log(typeof valorNulo)
console.log(typeof queComereMañana)
console.log(typeof miSimbol)
*/

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos

// 9. A continuación, modifica los valores de las constantes

// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse

/*
let edad = 21
let altura = 1.79
let nombre = 'Dani' 
let soyHombre = true
let soyMujer = false
let numeroGrande = BigInt(1234567898765432345678987654323456789876543234567898765433456)
let valorNulo = null
let queComereMañana //undefined value 
let miSimbol= Symbol('mi simbolo')


let edad = '22'
let altura = 'buenas noches'
let nombre = 66 
let soyHombre = false
let soyMujer = true
let numeroGrande = BigInt('buenos dias')
let valorNulo = 33
let queComereMañana = 24 
let miSimbol= Symbol(5)

/* 
Aparecen los siguientes errores 
-->Identifier 'edad' has already been declared
-->Cannot convert buenos dias to a BigIntat BigInt 
*/
