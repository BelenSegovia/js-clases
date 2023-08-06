// Switch
/* 2- Escribir un programa que solicite una nota (número) de 0  a 10. Luego mostrar la calificación en un alert según los siguientes rangos de nota:

0-2: Muy deficiente
3-4: Insuficiente
5-6: Suficiente
7: Bien
8-9: Notable
10: Sobresaliente

Si ingreso un número que no esté dentro del rango de 0 a 10 mostrar un mensaje de “número erróneo”. Si el número ingresado no es válido mostrar el mensaje “Introduce un número válido”.

Ejemplo:
Input: 5 --> Output: Suficiente
Input: 50 --> Output: Número erróneo
Input: hola10 --> Output: Introduce un número válido
*/
/*
1- Pedimos un numero
2- Verificar si es un número
3- Verificar que esté entre 0 - 10 
4- Analizar los rangos y el número ingresado 
5- Mostrar la calificación en un alert
*/ 

// PRIMERA VERSION ---------------------------

let numero = prompt('Ingrese un número del 0 al 10');

// Verificando que sea un número con isNan
if(isNaN(numero)){
    alert("No ingresó un número válido");
} else if (!(numero >= 0 && numero <= 10)) {
// verificamos que sea un número valido
    alert('Ingrese un número dentro del rango establecido');
} else {
// Rango 0 a 2
if (numero >= 0 && numero <= 2) {
    alert('Muy deficiente');
} else if (numero <= 4) {
 alert('Deficiente');
} else if (numero <= 6) {
    alert('Suficiente'); 
} else if (numero === 7) {
    alert ('Bien');
} else if (numero <= 9) {
    alert('Notable'); 
} else {
    alert('Sobresaliente');
}
}

// SEGUNDA VERSION ----------------------