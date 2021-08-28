//Ejercicio 1
let n = prompt("Ingrese el número de repeticiones")
let salida = ""

for (let index = 0; index < n; index++) {

    if(index == n){
        salida = salida + index
    }else{
        salida = salida + index + "-"
    }
}
    alert(salida)

//Ejercicio 2
let nn = prompt("Ingrese el número de repeticiones negativas")
let salida1 = ""

for (let index1 = 0; index1 <= nn; index1++) {

    if(index1 == nn){
        salida1 += (index1 * -1) //salida = salida + index1  esta linea resume la anterior
    }else{
        salida1 += (index1 * -1) + ";"
    }
}
    console.log(salida1)

//Ejercicio 3
let x = prompt("Ingrese el número de repeticiones")
let total = 0

for (let valor = 0; valor <= x; valor++) {
        total += valor
}
    console.log(total)