/*
Clase 24 - Ejercicios: Condicionales
Vídeo: https://youtu.be/1glVfFxj8a4?t=8652
*/

// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor

let n = 7
let miNombre= 'dani'
if(n==7){
    console.log(miNombre)
}

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos

let usuario= 'dani'
let contraseña= '12345'
if (usuario=='dani' && contraseña=='12345'){
    console.log('Usuario y contraseña correctos')
} else{
    console.log('Usuario y contraseña incorrectos')
}
// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje

let numero= -5
if (numero==0){
    console.log('El numero es zero')
}else if (numero<0){
    console.log('El numero es negativo')
}else {
    console.log('El numero es positivo')
}
// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan

let edad =10
let añosRestantes=18-edad
if(edad >= 18){
    console.log('Puedes votar')
}else {
    console.log(`No puedes votar, te faltan ${añosRestantes} años`)
}

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad 

let años = 24
let resultado
switch(true){
    case (años<18):
        resultado ='Menor'
        break
    default:
        resultado='Adulto'
}
console.log(resultado)

/*En este caso, usamos switch (true) para que el switch evalúe las condiciones 
de los case que dependen de la edad. Si la condición en el case es verdadera, 
se ejecuta el bloque correspondiente y se asigna el valor de "adulto" o "menor" a la variable resultado.
Aunque el switch se usa más comúnmente con valores específicos, este enfoque también es válido para este tipo de comparaciones.
*/

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"

let mes1 ='Septiembre'
let estacion1
if (mes1=='Abril'||mes1=='Marzo'||mes1=='Mayo'){
    estacion1 = 'Primavera'
}else if (mes1=='Junio'||mes1=='Julio'||mes1=='Agosto'){
    estacion1 = 'Verano'
}else if(mes1=='Septiembre'||mes1=='Octubre'||mes1=='Noviembre'){
    estacion1='Otoño'
}else{
    estacion1='Invierno'
}

console.log(estacion1)

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior

//-->Esta en el ej 10 hecho con el switch

// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma

let idioma = 'Japones'
let saludo
switch(true){
    case (idioma=='Español'):
        saludo='Hola'
        break
    case (idioma=='Ingles'):
        saludo = 'Hello'
        break
    default:
        saludo=`El saludo no esta en ${idioma}`
}
console.log(saludo)

// 9. Usa un switch para hacer de nuevo el ejercicio 6

let mes ='Febrero'
let estacion
switch(true){
    case (mes=='Abril'||mes=='Marzo'||mes=='Mayo'):
        estacion = 'Primavera'
        break 
    case (mes=='Junio'||mes=='Julio'||mes=='Agosto'):
        estacion = 'Verano'
        break
    case (mes=='Septiembre'||mes=='Octubre'||mes=='Noviembre'):
        estacion='Otoño'
        break
    default:
        estacion='invierno'
}
console.log(estacion)

// 10. Usa un switch para hacer de nuevo el ejercicio 7

let meses = 'Enero'
let numeroDias
switch(true){
    case (meses=='Enero'||meses=='Marzo'||meses=='Mayo'||meses=='Octubre'||meses=='Julio'||meses=='Agosto'||meses=='Diciembre'):
        numeroDias=31
        break
    case (meses=='Septiembre'):
        numeroDias=29
        break
    default:
        numeroDias=30
}
console.log(numeroDias)