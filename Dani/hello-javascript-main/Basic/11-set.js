/*
Clase 26 - Sets 
Vídeo: https://youtu.be/1glVfFxj8a4?t=9952
*/

// Set

// Declaración

let mySet = new Set()

console.log(mySet)

// Inicialización

mySet = new Set(["Brais", "Moure", "mouredev", 37, true, "braismoure@mouredev.com"])

console.log(mySet)

// Métodos comunes

// add y delete

mySet.add("https://moure.dev")//añadimos elementos al final del set

console.log(mySet)

mySet.delete("https://moure.dev")
/*
te elimina el elemento que quieras 
(no puedes pedir que te elimine una posicion concreta),
tienes que poner el nombre/valor que quieres borrar
-->A parte nos retorna un true en caso de que el elemento que estamos borrando existe
-->Nos retorna un false si el elemento no existe en el set
*/

console.log(mySet)

console.log(mySet.delete("Brais"))
console.log(mySet.delete(4))

console.log(mySet)

// has

console.log(mySet.has("Moure"))//nos dice si el valor 'moure' esta o no en el set
console.log(mySet.has("Brais"))

// size

console.log(mySet.size)//nos da el numero de elementos que hay en el set

// Convertir un set a array
let myArray = Array.from(mySet)
console.log(myArray)

// Convertir un array a set

mySet = new Set(myArray)
console.log(mySet)

// No admite duplicados

mySet.add("braismoure@mouredev.com")
mySet.add("braismoure@mouredev.com")
mySet.add("braismoure@mouredev.com")
mySet.add("BraisMoure@mouredev.com")//Este no cuenta como duplicado pq ya hemos cambiado, B y M mayusculas
console.log(mySet)