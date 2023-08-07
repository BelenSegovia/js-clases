// document.write('<h1>text</h1>');
// ARRAY ---------------------------

let arreglo= ["🍟","🌭","🍷"];
let numeroDeLaRifa= [652, 147, 2, 3, 695];
let alumnos= ['Bianca', null, 'Enzo', 'Martin', null];
let miPrimerArreglo= [];
let emojis= ['😩', '😠', '🤕'];

// console.log(arreglo);
// console.log(alumnos);
// console.log(arreglo[0]); posición

// COMIDA ----------------------------------------------

//longitud del arreglo
console.log(arreglo.length); 
// agregar elemento al final del arreglo
arreglo.push('🥐')
console.log(arreglo);

//eliminar desde el final del arreglo
arreglo.pop()
console.log(arreglo);

// Modificar elementos del arreglo en una posición específica
arreglo[1]= '🥟';
console.log(arreglo);

// Agregar elementos adelante 
arreglo.unshift('🥤');
console.log(arreglo);

// Eliminar elemento de adelante
arreglo.shift();
console.log(arreglo);


// Encontrar el índice de ese elemento
// Índice de un elemento. En qué posición está el pancho
let indiceNoValido= arreglo.indexOf('🌭');
let indiceValido= arreglo.indexOf('🥟');
// -1 cuando NO encuentra el elemento
// otro valor cuando SÍ encuentra
console.log(indiceNoValido);
console.log(indiceValido);

// Eliminar y/o agregar elementos desde CIERTA posición

// Eliminar 1 elemento desde la posición 1
arreglo.splice(1,1);
console.log(arreglo);

// Agregue 1 elemento desde la posición 1
// Parámetros: 
// Param1: Desde qué posición 
// Param2: Cantidad de elementos a eliminar 
// Param3: Elementos a agregar.
arreglo.splice(1, 0, '🍸'); 
console.log(arreglo);

// Recortar un arreglo

// EMOJIS ----------------------------------------------

console.log(emojis);

// Recortar arreglos 
const nuevosEmojis= emojis.slice(1,3);
console.log(emojis);
console.log(nuevosEmojis);

// Detectar si incluye o no algún elemento

const incluyeFalse = emojis.includes('🍕');
console.log(incluyeFalse);
const incluyeTrue = emojis.includes('😠');
console.log(incluyeTrue);


// Unir elementos del arreglo, con un string
const lista= alumnos.join(' - ');
console.log(lista);

// Unir 2 arreglos
const nuevoArreglo= arreglo.concat(emojis);
console.log(nuevoArreglo);

/* 
let palabraOriginal= prompt('Ingrese algo');
const arregloPalabra= palabraOriginal.split(' - ');
const salida= arregloPalabra.join('-')
console.log(salida);
*/
