//Comentario de una linea 
/*
Multiples cometarios
*/
/*Realizar el codigo para :
1.- Solicitar por la pagina web un color, e imprimirlo por consola.
2.- Solicitar dos numeros e imprimir la suma de por consola.
*/
/*
Descripcion :Ejemplo Imprimir en consola por consola.log
Desarollador:Mario Eduardo Terraza Parada
Fecha:2024-04-15
Cambios:Ninguno
*/
//console.log(" imprimir en consola")

// Función para mostrar el color ingresado por el usuario
var color = prompt("Ingrese un color:");
console.log("El color ingresado es: " + color);

var num1 = prompt("Ingrese el primer número:");
var num2 = prompt("Ingrese el segundo número:");

// Convertir los valores ingresados de texto a números
num1 = parseFloat(num1);
num2 = parseFloat(num2);


// Verificar si se ingresaron números válidos
if (!isNaN(num1) && !isNaN(num2)) {
    // Realizar la suma y mostrar el resultado
    var suma = num1 + num2;
    console.log("La suma de " + num1 + " + " + num2 + " = " + suma);
} else {
    console.log("Uno o ambos de los valores ingresados no son números válidos.");
}
