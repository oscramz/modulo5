let nombre="Oscar"
let saludo="Bienvenido "

alert( saludo+nombre )

console.log(saludo + nombre)

//Ejercicio 1
let n = 90
let m = 50
let r1 = n + m

console.log(r1)

//Ejercicio 2
let a = 25
let b = 44
let c = 125
let d = 80
let e = 37
let r2 = a * b * c * d * e

console.log(r2)

//Ejercicio 3
let x = 8
let y = 12
let z = 3
let r3 = ((x + z) * y * y)

alert(r3)

//Ejercicio 4
let hola = "hola "
let mundo = "mundo"

console.log(hola + mundo)

//Ejercicio 5
let aa = "5"
let bb = "3"
let cc = "7"
let total = "5 + 3 + 7 = "

console.log(total + aa + bb + cc)

/*//Ejercicio 6
let usuario1 = {nombre: "juan", apellido: "perez"}
let usuario2 = {nombre: "sara", apellido: "aparicio"}
let usuario3 = {nombre: "sebastián", apellido: "gonzales"}
let usuario4 = {nombre: "catalina", apellido: "rodriguez"}
let usuario5 = {nombre: "laura", apellido: "quintanilla"}
let usuario6 = {nombre: "camila", apellido: "lopez"}
let usuario7 = {nombre: "carlos", apellido: "gutierrez"}
let usuario8 = {nombre: "sergio", apellido: "chacon"}
w = 5

if (w == 1) {
    console.log("Hola, " + usuario1.nombre +" "+ usuario1.apellido)
}else if(w == 2){
    console.log("Hola, " + usuario2.nombre +" "+ usuario2.apellido)
}else if(w == 3){
    console.log("Hola, " + usuario3.nombre +" "+ usuario3.apellido)
}else if(w == 4){
    console.log("Hola, " + usuario4.nombre +" "+ usuario4.apellido)
}else if(w == 5){
    console.log("Hola, " + usuario5.nombre +" "+ usuario5.apellido)
}else if(w == 6){
    console.log("Hola, " + usuario6.nombre +" "+ usuario6.apellido)
}else if(w == 7){
    console.log("Hola, " + usuario7.nombre +" "+ usuario7.apellido)
}else if(w == 8){
    console.log("Hola, " + usuario8.nombre +" "+ usuario8.apellido)
}else{
    console.log("El usuario no existe")
}

let usuarios = [usuario1, usuario2, usuario3, usuario4, usuario5, usuario6, usuario7, usuario8]

if(w <= usuarios.length){​​​
    console.log("Hola con arreglo, " + usuarios[w-1].nombre +" "+ usuarios[w-1].apellido)
}​​​else{​​​
console.log("Usuario no registrado")
}​​*/

/*//Ejercicio 7
let j = 8
let k = 8

if (j > k){
    console.log(j + " Es mayor que " + k)
}else if (j < k){
    console.log(k + " Es mayor que " + j)
}else{
    console.log("Los números son iguales")
}*/

//Ejercicio 8
let q = prompt("Ingrese el número a comprobar")

if (q % 2 == 0){
    console.log(q + " Es un número par")
}else{
    console.log(q + " Es un número impar")
}

//Ejercicio 9
let age = prompt("Ingrese su edad")
let cat = prompt("Ingrese una categoria: A, B, C o D") .toUpperCase();

if (age >= 0 && cat == "A" || cat == "B" || cat == "C" || cat == "D"){
    if (cat == "A"){
        alert("Bienvenid(a) puede ver la categoría seleccionada A")
    }else if (cat == "B" && age >= 9){
        alert("Bienvenid(a) puede ver la categoría seleccionada B")
    }else if (cat == "C" && age >= 18){
        alert("Bienvenid(a) puede ver la categoría seleccionada C")
    }else if (cat == "D" && age >= 25){
        alert("Bienvenid(a) puede ver la categoría seleccionada D")
    }else{
        alert("No puede ver la categoría seleccionada")
    }
}else{
    alert("Edad o categoría invalidas")
}

/*A => Todo público
B => Desde 9 años
C => Desde 18 años
D => Desde 25 años
El usuario debe ingresar su edad y la categoría de la película que desea ver y el software deberá imprimir en consola si puede no ver la película según la clasificación.*/