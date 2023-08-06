'use strict';

let edad1;
edad1 = prompt('Ingrese su edad');

let edad2;
edad2 = prompt('Ingrese la otra edad');

// console.log(edad1, edad2);
// console.log(Number(edad1) + Number(edad2));

let edad1Num = Number(edad1);
let edad2Num = Number(edad2);

// Si el valor que recibimos no es un número, isNan NotANumber  
if(isNan(edad1Num)){
    console.log('No es un número');
}

console.log(edad1Num + edad2Num);

if (edad1Num > edad2Num) {
    console.log('La mayor edad es la edad 1');
} else if (edad1Num < edad2Num){
    console.log('La mayor edad es la segunda');
} 
else {
    console.log ('Las edades son iguales');
}