/*
Clase 32 - Ejercicios: Funciones
Vídeo: https://youtu.be/1glVfFxj8a4?t=14146
*/

// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios

// 1. Crea una función que reciba dos números y devuelva su suma

function suma(a, b){
    return a+b
}
console.log(suma(3, 7))

//otro procedimiento

const sumatorio = (a, b) =>{
    return a+b
}
console.log(sumatorio(3, 7))

// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos

let myArray = [1,3,20,6,8,9,3,4,1,7]
let valorActual = 0
function mayorNumero(array){
    for (let i = 0; i < array.length; i++) {
        if (myArray[i]>valorActual){
            valorActual=myArray[i]
        
        }
    } return valorActual    
} 
console.log(mayorNumero(myArray))

// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene

let mistring = 'abecedario ABECEDARIO'//tiene 12 vocales
function numeroVocales(mistring){
    let mistring1= mistring.toLowerCase()
    let contador = 0
        for (let i = 0; i < mistring1.length; i++) {
            if (mistring1[i] == 'a'|| mistring1[i] == 'e'|| mistring1[i] == 'i'|| mistring1[i] == 'o'|| mistring1[i] == 'u' ){
            contador+=1  
            }    
        } return (`El número de vocales de tu string es : ${contador}` )
}
console.log(numeroVocales(mistring))


// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas

let arrayString = ['Hola' , 'Adios', 'Buenos Dias' ]
function arrayMayus(arrayString){
    let enMayus=[]
    for (let i = 0; i < arrayString.length; i++) {
        enMayus.push([arrayString[i].toUpperCase()])
    }return enMayus
}
console.log(arrayMayus(arrayString))

// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario

let numero = 23
function numeroprimo(numero){
    let contador = 0
    for (let i = 0; i <= numero; i++) {
        if(numero%i==0){
            contador +=1
        }              
    }if(contador == 2){ //con esto lo que digo esque el numero solo se puede dividir entre dos numeros : 1 y 23
        return true 
    }else{
        return false 
    }
}
console.log(numeroprimo(numero))

// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos

let Array1 = [1,2,3,4,5,6,7,8,9,45,78,9]
let Array2 = [9,8,7,6,5,4,3,78,95,98,97,76,54,32]
function dosArray(Array1, Array2){
    let arrayComun = []
    let longitudgrande
    if (Array1.length>Array2.length){
        longitudgrande = Array1.length
    }else{
        longitudgrande = Array2.length
    }
    for (let i = 0; i < longitudgrande; i++) {
        if(Array2.includes(Array1[i])){
            arrayComun.push(Array1[i])
        }
        
    }return arrayComun
}
console.log(dosArray(Array1, Array2))

// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares

let arrayNums = [17, 24, 9, 32, 15, 6, 11, 42, 3, 8]
function sumaPares(arrayNums){
    let suma = 0
    for (let i = 0; i < arrayNums.length; i++) {
        if (arrayNums[i]%2==0){
            suma+=arrayNums[i]
        }
    }return suma
}
console.log(sumaPares(arrayNums))

// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado

let arrayNumeros = [17, 24, 9, 32, 15, 6, 11, 42, 3, 8]
function arrayalcuadrado(arrayNumeros){
    let cuadrados = []
    for (let i = 0; i < arrayNumeros.length; i++) {
       cuadrados.push(arrayNumeros[i]*arrayNumeros[i])
        
    }return cuadrados
}
console.log(arrayalcuadrado(arrayNumeros))

// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso

let cadenaTexto = 'hola, buenas tardes'
function ordenInverso(cadenaTexto){
    let invertido = ''
    let palabras = cadenaTexto.split(' ')//separa las alabras del string en cada espacio (' ') y las mete en un nuevo array (palabras)
    for (let i = palabras.length-1; i>=0 ;i--){
        invertido += palabras[i]+ ' '
    }return invertido
}
console.log(ordenInverso(cadenaTexto))

// 10. Crea una función que calcule el factorial de un número dado

let numero10 = 5
function factorial(numero10){
    let factor = 1
    for (let i = numero10; i > 0 ; i--) {
        factor *= i
        
    }return factor
}
console.log(factorial(numero10))