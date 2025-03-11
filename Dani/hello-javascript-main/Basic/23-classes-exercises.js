/*
Clase 39 - Ejercicios: Clases
Vídeo: https://youtu.be/1glVfFxj8a4?t=18630
*/

// 1. Crea una clase que reciba dos propiedades

class medidas{
    constructor(alto, ancho){
        this.alto= alto,
        this.ancho= ancho
    }  
}


// 2. Añade un método a la clase que utilice las propiedades

let mesas = new medidas (100,200)

// 3. Muestra los valores de las propiedades e invoca a la función

class medidas{
    constructor(alto, ancho){
        this.alto= alto,
        this.ancho= ancho
    } 
    CalculoArea(){
        letAreaTotal= this.ancho*this.alto
        return `El Area total es ${AreaTotal}`
    }
}

let mesa = new medidas (100,200)

console.log(mesa.CalculoArea())

// 4. Añade un método estático a la primera clase

class medidas{
    constructor(alto, ancho){
        this.alto= alto,
        this.ancho= ancho
    }  
    static suma(alto,ancho){
        return alto+ancho
    }
}


// 5. Haz uso del método estático

console.log(medidas.suma(10, 20))

// 6. Crea una clase que haga uso de herencia

class animales {
    constructor(nombre,edad){
        this.nombre = nombre,
        this.edad = edad
    }
    hacersonido(){
        return 'Haciendo algun sonido'
    }
}

class perro extends animales{
    constructor(nombre,edad,raza){
        super(nombre,edad)
        this.raza = raza
    }
    hacersonido(){
        return 'Guau Guau'
    }
}

class gato extends animales{
    constructor(nombre,edad,color){
        super(nombre,edad)
        this.color = color
    }
    hacersonido(){
        return 'Miau miau'
    }
}

let perro1 = new perro('Thor', 10, 'labrador')
let gato1 = new gato('Pelon', 3, 'Blanco')

console.log(perro1)
console.log(gato1)

console.log(perro1.hacersonido())
console.log(gato1.hacersonido())


// 7. Crea una clase que haga uso de getters y setters

// 8. Modifica la clase con getters y setters para que use propiedades privadas

// 9. Utiliza los get y set y muestra sus valores

// 10. Sobrescribe un método de una clase que utilice herencia 