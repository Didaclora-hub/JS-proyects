/*
Clase 36 - Ejercicios: Desestructuración y propagación
Vídeo: https://youtu.be/1glVfFxj8a4?t=16802
*/

// 1. Usa desestructuración para extraer los dos primeros elementos de un array 

let array = [22,23,34,25]

let [valor1,valor2, , ] = array
console.log(valor1)
console.log(valor2)

// 2. Usa desestructuración en un array y asigna un valor predeterminado a una variable

let array2 = [1,2,3,4,5,6]

let [primerValor, , , , , ] = array2
console.log(primerValor)

// 3. Usa desestructuración para extraer dos propiedades de un objeto

let objeto = {
    edad : 21,
    nombre: 'dani',
    pais: 'España'

}

let {edad, nombre} = objeto
console.log(edad)
console.log(nombre)

// 4. Usa desestructuración para extraer dos propiedades de un objeto y asígnalas
//    a nuevas variables con nombres diferentes

let objeto2 = {
    edad : 21,
    nombre: 'dani',
    pais: 'España'

}

let {edad : edad3, nombre : nombre3,  } = objeto2
console.log(edad3)
console.log(nombre3)

// 5. Usa desestructuración para extraer dos propiedades de un objeto anidado

let objeto3 = {
    edad : 21,
    nombre: 'dani',
    pais: 'España',
    trabajo :{
        experiencia:1,
        cargo:'jefe'
    }
}

let{trabajo:{experiencia:añosTrabajados}} = objeto3
console.log(añosTrabajados)

// 6. Usa propagación para combinar dos arrays en uno nuevo

let array6 = [1,2,3,4,5]
let array7 = [6,7,8,9,10]

let array8 = [...array6,...array7]
console.log(array8)

// 7. Usa propagación para crear una copia de un array

let array9 = [1,2,3,4,5]
let array10 = [...array9]
console.log(array10)

// 8. Usa propagación para combinar dos objetos en uno nuevo

let objeto10 = {
    edad : 21,
    nombre: 'dani',
    pais: 'España',
    trabajo :{
        experiencia:1,
        cargo:'jefe'
    }
}

let coche = {
    modelo: 'Benz',
    color : 'negro'
}

let objeto12 = {...objeto10,...coche}
console.log(objeto12)

// 9. Usa propagación para crear una copia de un objeto

let objeto13 = {...objeto12}
console.log(objeto13)

// 10. Combina desestructuración y propagación

let coche2 = {
    modelo: 'Benz',
    color : 'negro'
}

let objeto14 = {
    nombre : 'Oscar',
    edad : 22,
    estatura : {
        alto : 1.1,
        ancho : 2.2
    }
}
objeto14.nombre='dani'
console.log(objeto14.nombre)
console.log(objeto14)

let {estatura:{alto:altura}}=objeto14
let NuevoObj = {
    ...coche2,
    estatura: altura
}

console.log(NuevoObj)