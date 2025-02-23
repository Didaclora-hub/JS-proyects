/*
Clase 30 - Ejercicios: Bucles
Vídeo: https://youtu.be/1glVfFxj8a4?t=12732
*/

// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

// 1. Crea un bucle que imprima los números del 1 al 20

for(let i=1;i<=20;i++){
    console.log(i)
}

// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado

let suma =0
for(let i=0;i<=100;i++){
    suma=suma+i//suma+=i
}
console.log(suma)


// 3. Crea un bucle que imprima todos los números pares entre 1 y 50

for(let i=1;i<=50;i++){
    if (i%2==0){
        console.log(i)
    }
}

// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola

let myArray = ["Brais", "Moure", "mouredev", 37, true]
for(let i=0; i<=myArray.length-1; i++){
    console.log(myArray[i])
}

// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto

let texto = 'awszdrdfc vgyuhvb jiojbnjihugyfdgfhghjkhjvgc'

let contador=0
for(let i=0; i<=texto.length; i++){
    if (texto[i]=='a'||texto[i]=='e' ||texto[i]=='i' || texto[i]=='o'||texto[i]=='u'){
        contador= contador+1
    }
}
console.log(contador)

// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto

let array = [1,2,3,4,5,6,7,8,9]
let multiplicacion=1
for (let i= 0; i<=array.length-1; i++) {
    multiplicacion = multiplicacion*array[i] 
}
console.log(multiplicacion)
    

// 7. Escribe un bucle que imprima la tabla de multiplicar del 5

let tabla5 = 0
for (let i = 0; i <= 10; i++) {
   tabla5=i*5
   console.log(`5 x ${i} = ${tabla5}`)
}

// 8. Usa un bucle para invertir una cadena de texto

let cadena = 'esfcgghhjknbhvgdsefgfgh'
let long= cadena.length-1
let invertida = ''
for (let i =cadena.length-1; i >=0 ; i--){
    invertida = invertida+cadena[i]
}
console.log(invertida)

// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci

let n = 10
let a = 0
let b = 1
console.log(a)
console.log(b)
for (let i = 2; i<=n; i++){
    let resultado = a + b
    console.log(resultado)
    a = b
    b = resultado  
}

// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10

let arraynumeros = [37, 2, 82, 9, 56, 44, 73, 18, 65, 4, 91, 27]
let nuevoarray=[]
for (let i = 0; i < arraynumeros.length; i++) {
    if (arraynumeros[i]>10){
        nuevoarray.push(arraynumeros[i])
    }
}
console.log(nuevoarray)

/*

let arraynumeros = [37, 2, 82, 9, 56, 44, 73, 18, 65, 4, 91, 27]
let nuevoarray=[]
let i = 0
while (i < arraynumeros.length) {
    if (arraynumeros[i]>10){
        nuevoarray.push(arraynumeros[i])
    }
    i++
}
console.log(nuevoarray)

*/