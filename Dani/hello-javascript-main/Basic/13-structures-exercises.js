/*
Clase 28 - Ejercicios: Estructuras
Vídeo: https://youtu.be/1glVfFxj8a4?t=11451
*/

// 1. Crea un array que almacene cinco animales

let myArray = ['tiburon','perro','gato','tortuga','leon']
console.log(myArray)
console.log(myArray.length)

// 2. Añade dos más. Uno al principio y otro al final

let myArray2 = ['tiburon','perro','gato','tortuga','leon']
myArray2.push('Adios')
myArray2.unshift('Hola')
console.log(myArray2)

// 3. Elimina el que se encuentra en tercera posición

let myArray3 = ['tiburon','perro','gato','tortuga','leon']
console.log(myArray3.splice(3,1))
console.log(myArray3)

// 4. Crea un set que almacene cinco libros

let set1 = new Set([1,2,3,4,5])
console.log(set1)

// 5. Añade dos más. Uno de ellos repetido

let set2 = new Set([1,2,3,4,5])
set2.add(6)
set2.add(6)
console.log(set2)

// 6. Elimina uno concreto a tu elección

let set3 = new Set([1,2,3,4,5])
set3.delete(3)
console.log(set3)

// 7. Crea un mapa que asocie el número del mes a su nombre

let mapa1= new Map([
    [1,'Enero'],
    [2,'Febrero'],
    [3,'Marzo'],
    [4,'Abril'],
    [5,'Mayo']
])
console.log(mapa1)

// 8. Comprueba si el mes número 5 existe en el map e imprime su valor

let mapa2= new Map([
    [1,'Enero'],
    [2,'Febrero'],
    [3,'Marzo'],
    [4,'Abril'],
    [5,'Mayo']
])
console.log(mapa2.get(5))

// 9. Añade al mapa una clave con un array que almacene los meses de verano

let array4 = ['Junio', 'Julio', 'Agosto']
let mapa3= new Map([
    [1,'Enero'],
    [2,'Febrero'],
    [3,'Marzo'],
    [4,'Abril'],
    [5,'Mayo'],
    ['MesesVerano', array4]
])
console.log(mapa3)

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map

let array5=[1,2,3,4,5,6,7,8,9]
let set5=new Set(array5)
let mapa5= new Map([
    ['Almacen',set5]
])
console.log(mapa5)
