'use strict'
// accion del usuario con la pagina 

// querySelector busca 1 solo boton
//querySelectorAll busca todos los botones 
const button = document.querySelector('button');

console.log(button);
console.log(button.innerHTML);


function click () {
    console.log('Hiciste click capo');
}

button.addEventListener('click', click)