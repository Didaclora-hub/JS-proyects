/*
Clase 25 - Arrays
Vídeo: https://youtu.be/1glVfFxj8a4?t=8741
*/

// Array

// Declaración

let myArray = []
let myArray2 = new Array()

console.log(myArray)
console.log(myArray2)

// Inicialización

myArray = [3]
myArray2 = new Array(3)

console.log(myArray)
console.log(myArray2)

myArray = [1, 2, 3, 4]
myArray2 = new Array(1, 2, 3, 4)

console.log(myArray)
console.log(myArray2)

myArray = ["Brais", "Moure", "mouredev", 37, true]
myArray2 = new Array("Brais", "Moure", "mouredev", 37, true)

console.log(myArray)
console.log(myArray2)

myArray2 = new Array(3)
myArray2[2] = "Brais"
// myArray2[0] = "Moure"
myArray2[1] = "mouredev"
myArray2[4] = "mouredev"

console.log(myArray2)

myArray = []
myArray[2] = "Brais"
// myArray[0] = "Moure"
myArray[1] = "mouredev"

console.log(myArray)

// Métodos comunes

myArray = []

// push y pop

myArray.push("Brais") //meter valores
myArray.push("Moure")
myArray.push("mouredev")
myArray.push(37)

console.log(myArray)

console.log(myArray.pop()) // Elimina el último y lo devuelve
myArray.pop()

console.log(myArray)

// shift y unshift

console.log(myArray.shift()) //Elimina el primero y lo devuelve
console.log(myArray)

myArray.unshift("Brais", "mouredev")//Añadir uno a mas elementos al principio
console.log(myArray)

// length

console.log(myArray.length) //nos da el numero de elmentos que hay en el array

// clear

myArray = [] //lo que hacemos es eliminar todos los valores que antes habia en el array 
myArray.length = 0 // alternativa
console.log(myArray)

// slice

myArray = ["Brais", "Moure", "mouredev", 37, true]

let myNewArray = myArray.slice(1, 3)//nos da el elemento que esta entre la posicion uno y la posicion 3 en este caso

console.log(myArray)
console.log(myNewArray)

// splice

let myArray = ["Brais", "Moure", "mouredev", 37, true]
myArray.splice(1, 3)//elimina desde la posicion 1 los proximos 3 valores en este caso
console.log(myArray)

let myArray = ["Brais", "Moure", "mouredev", 37, true]

myArray.splice(1, 2, "Nueva entrada")//elimina desde la posicion 1 los proximos 2 valores en este caso
console.log(myArray)