/*
Clase 34 - Ejercicios: Objetos
Vídeo: https://youtu.be/1glVfFxj8a4?t=15675
*/

// 1. Crea un objeto con 3 propiedades

let persona= {
    edad: 21,
    nombre: 'Dani',
    apellido: 'Ramirez'
}

console.log(persona)

// 2. Accede y muestra su valor

console.log(persona.edad)

// 3. Agrega una nueva propiedad

persona.correo = 'daniel23042003@gmail.com'
console.log(persona)

// 4. Elimina una de las 3 primeras propiedades

delete persona.edad
console.log(persona)

// 5. Agrega una función e invócala

let juego = {
    nombre: 'Brawl',
    personaje: function personaje(){
            console.log('El personaje que has escogido es spike')
    },
    modo: 'balon brawl'
}

console.log(juego.personaje)

// 6. Itera las propiedades del objeto

let frase = `El jugador ${persona.nombre} esta jugando a ${juego.modo}`
console.log(frase)

// 7. Crea un objeto anidado

let yo = {
    nombre:'Dani',
    apellido: 'Ramirez',
    vivienda:{
        calle: 'Carrer dels Caus',
        numero: 3,
        alojamiento: 'casa',
        pais: 'España'
    }
}

console.log(yo)

// 8. Accede y muestra el valor de las propiedades anidadas

console.log(yo.vivienda.pais)

// 9. Comprueba si los dos objetos creados son iguales

console.log(persona == yo)

// 10. Comprueba si dos propiedades diferentes son iguales

console.log(yo.nombre == persona.nombre)