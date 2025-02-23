/*
Clase 17 - Tipos de datos
Vídeo: https://youtu.be/1glVfFxj8a4?t=3599
*/

// Tipos de datos primitivos

// Cadenas de texto (string)
let myName = "Brais Moure"
let alias = 'MoureDev'
let email = `braismoure@mouredev.com`

// Números (number)
let age = 37 // Entero
let height = 1.77 // Decimal

// Booleanos (boolean)
let isTeacher = true
let isStudent = false

// Undefined
let undefinedValue
console.log(undefinedValue)
/* 
Podemos crear una variable que de momento
no tiene valor, despues se lo podremos dar
*/


// Null
let nullValue = null
//variable que no tiene valor


// Symbol

let mySymbol = Symbol("mysymbol")

// BigInt

let myBigInt = BigInt(817239871289371986589716389471628379612983761289376129)
let myBigInt2 = 817239871289371986589716389471628379612983761289376129n //ponemos n al final si no queremos poner la funcion BigInt
//lo usaremos para representar numeros muy grandes 


// Mostramos los tipos de datos usando la funcion typeof
console.log(typeof myName)
console.log(typeof alias)
console.log(typeof email)

console.log(typeof age)
console.log(typeof height)

console.log(typeof isTeacher)
console.log(typeof isStudent)

console.log(typeof undefinedValue)

console.log(typeof nullValue)

console.log(typeof mySymbol)

console.log(typeof myBigInt)
console.log(typeof myBigInt2)

//------------------------------

console.log(myName)
console.log(alias)
console.log(email)

console.log(age)
console.log(height)

console.log(isTeacher)
console.log(isStudent)

console.log(undefinedValue)

console.log(nullValue)

console.log(mySymbol)

console.log(myBigInt)
console.log(myBigInt2)