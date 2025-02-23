/*
Clase 27 - Maps
Vídeo: https://youtu.be/1glVfFxj8a4?t=10755
*/

// Map

// Declaración

let myMap = new Map()

console.log(myMap)

// Inicialiación

myMap = new Map([
    ["name", "Brais"],
    ["email", "braismoure@mouredev.com"],
    ["age", 37]
])

console.log(myMap)

// Métodos y propiedades

// set

myMap.set("alias", "mouredev")//vamos añadiendo claves y valores
myMap.set("name", "Brais Moure")//como la clave 'name' ya estaba definida, la cambiams por la nueva 
//podremos repetir valores, no claves

console.log(myMap)

// get

console.log(myMap.get("name"))//llamamos al valor de la clave 'name'
console.log(myMap.get("surname"))

// has

console.log(myMap.has("surname"))//comprovar si la clave existe
console.log(myMap.has("age"))

// delete

myMap.delete("email")//elimina claves

console.log(myMap)

// keys, values y entries

console.log(myMap.keys())//nos da las claves del mapa
console.log(myMap.values())//nos da los valores del mapa
console.log(myMap.entries())

// size

console.log(myMap.size)//tamalo del mapa==n de claves junto sus valores

// clear

myMap.clear()//deja el apa vacio 

console.log(myMap)



