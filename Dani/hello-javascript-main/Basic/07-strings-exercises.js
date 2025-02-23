/*
Clase 22 - Ejercicios: Strings
Vídeo: https://youtu.be/1glVfFxj8a4?t=7226
*/

// 1. Concatena dos cadenas de texto

let n = 'hola, 5'
let m = 'adios'
console.log(n+m)


// 2. Muestra la longitud de una cadena de texto

console.log(n.length)

// 3. Muestra el primer y último carácter de un string

console.log(n[0])
console.log(n.charAt(n.length-1)) /*El charar nos ermite descomponer una palabra por letras*/

//Otra manera de hacerlo 

let primerNumero = n.charAt(0)
console.log(primerNumero)

let longitudTotal= n.length
let ultimoNumero = n.charAt(longitudTotal-1)
console.log(ultimoNumero)
let ultimonumero2 = n[longitudTotal-1]
console.log(ultimonumero2)

// 4. Convierte a mayúsculas y minúsculas un string

console.log(n.toUpperCase())
console.log(n.toLowerCase())


// 5. Crea una cadena de texto en varias líneas

let o = `Oscar 
gay`
console.log(o)

// 6. Interpola el valor de una variable en un string

let edad=21
console.log(`Hola mi edad es ${edad} años`)
console.log('Hola mi edad es '+ edad + ' años')

// 7. Reemplaza todos los espacios en blanco de un string por guiones

console.log(n.replace(' ', '-'))

// 8. Comprueba si una cadena de texto contiene una palabra concreta

let d = 'Hola, buenos dias'
console.log(d.includes('buenos'))

// 9. Comprueba si dos strings son iguales

console.log(n==m)

// 10. Comprueba si dos strings tienen la misma longitud

let p = 'El didac es un pony'
let q = 'el renzo es peruano'
console.log(p.length)
console.log(q.length)
console.log(p.length == q.length)