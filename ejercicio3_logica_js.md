Ejercicio 3 | Lógica de programación, Js y Git
Entregar el link de github en los buzones: Función Básica I; Fundamentos Básicos I (Los 13 algoritmos básicos); Jugando con objetos

Enunciado
Utilizar el digrama de T y el lenguaje de javascript para resolver los siguientes problemas.

Crear un archivo llamado logica.html en la carpeta de vistas, un archivo /js/ejercicios.js y enlazarlos utilizando la etiqueta <script>

Pasos para resolver el ejercicio
Variables y Tipos de datos

Dado 2 números n y m, sumarlo e imprimirlos por consola

Dado 5 números a, b, c, d y e, multiplicarlos entre sí, guardarlos en una variable z e imprimirlos en consola

Dado las variables x, y, z; imprimir el resultado de la operación

    ((x + z) * y * y)
Dados dos variables de texto como a = "hola " y b = "mundo" mostrar el restulado de a + b

Dado 3 variables a, b y c; imprimir en consola el resultado de la operación. 5 + 3 + 7 = 537

Dado los siguientes objetos javascript (JSON)

usuario1 = { nombre: "juan", apellido: "perez" }
usuario2 = { nombre: "sara", apellido: "aparicio" }
usuario3 = { nombre: "sebastián", apellido: "gonzales" }
usuario4 = { nombre: "catalina", apellido: "rodriguez" }
usuario5 = { nombre: "laura", apellido: "quintanilla" }
usuario6 = { nombre: "camila", apellido: "lopez" }
usuario7 = { nombre: "carlos", apellido: "gutierrez" }
usuario8 = { nombre: "sergio", apellido: "chacon" }
Imprimir un saludo para el usuario según un número n. Por ejemplo, si n = 3 debería imprimirse en consola "Hola, sebastián gonzales"

Estructura If

Entendiendo la restructura If

//1. Dado un número b realizar la siguiente operación
    if (b<10) {
        return 2; // Cuando es verdad
    }
    else {
        return 4; // cuando es falso
    }
    console.log(b);
Dado dos variables numéricas a y b, deterinar cuál de los dos es mayor

Dados dos variables numéricas a y b, determinar cuál es mayor, cuál es menor o si son iguales

Dado un número n, determinar si es un número par

Dado un número n, determinar si es un número impar

Realizar un software para el control del ingreso de pesonas al cine, donde las películas se dividen en las siguientes categorías:

A => Todo público
B => Desde 9 años
C => Desde 18 años
D => Desde 25 años
El usuario debe ingresar su edad y la categoría de la película que desea ver y el software deberá imprimir en consola si puede no ver la película según la clasificación.

Estructura For

Imprimir en consola los números desde el 0 hasta el número n separados por -
Imprimir en consola los números desde el 0 hasta el -n separados por ;
Realizar la suma acumulativa de números desde el 0 hasta n y mostrar en consola la suma total con el mensaje "suma total: suma_total"
Imprimir los números todos los números pares desde el 0 hasta n
Imprimir los números todos los números impares desde el 0 hasta n
Realizar el factorial de un número n e imprimirlo en consola
Estructura While

Utilizando la estructura while y el método prompt(), mostrar los textos ingresados hasta escribir la palabra "salir"
Dado un número n entre 100 y 500, restar 1 si es número impar y dividir entre dos si es par. Realizar esta operación hasta n sea menor o igual a 0. Imprimir en consola todas las operaciones
Dado un número n entre 100 y 500, restar 1 si es número impar y dividir entre dos si es par. Mostrar en consola la cantidad de operaciones realizadas.
Sumar números ingresados con el método prompt() hasta que se ingrese el número -1. Mostrar en consola la suma total
Funciones y fetch (ajax|api)

Utilizando el método fetch, realizar la búsqueda de un pokemon utilizando Pokeapi. Mostrar el resultado de la información en consola como el número del pokemon, el nombre y un ataque.