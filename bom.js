'use strict'
// setTimeout y setInterval

// ejecutamos el callback, después de 1 segundo
setTimeout(()=>{
    console.log('Holaaa');
},1000)

// genera un intervalo qué cada 2 segundos haga algo
//guardar un intervalo 
const intervalos = setInterval(()=>{
    console.log('chauu');
}, 2000)

// frenar el intervalo
clearInterval(intervalos)

//Si la variable es par color rojo, si es impar, azul
const h1 = document.querySelector('h1');

let i = 0;
const intervalo = setInterval(()=>{
    if (i % 2 === 0) h1.style.color= 'red';
    else h1.style.color= 'blue';
    i += 1;
}, 420)


// creamos un input de tipo range (HTML puro desde JS)
const range = document.createElement('input');
range.type= 'range';
range.min= 0;
range.max= 60;
range.value= 0;
range.style.transition= 'all 0.5s ease';

document.body.appendChild(range);

// barrita avanza cada 1 segundo
// let valor = 0;
setInterval(()=>{
    range.value = Number(range.value) + 1;
}, 1000);